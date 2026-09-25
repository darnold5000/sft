$ErrorActionPreference = "Stop"
$srcPath = Join-Path $PSScriptRoot "..\content\testimonials\source.txt"
$outPath = Join-Path $PSScriptRoot "..\content\testimonials\data.json"

$raw = Get-Content -Raw -Encoding UTF8 $srcPath
$body = (($raw -split "#### Hours")[0]).Trim()
$body = $body -replace '^Strength For Today Training\s*', ''

$re = [regex]'(?m)^\s*-\s*([^,\r\n]+?)\s*,\s*(SFT [^\r\n]+)'
$matches = @($re.Matches($body) | Sort-Object { $_.Index })

function Test-ContextLine([string]$line) {
  $t = $line.Trim()
  if (-not $t) { return $false }
  if ($t -notmatch ' - ') { return $false }
  if ($t.Length -gt 95) { return $false }
  return $true
}

function Advance-AfterAttribution([string]$body, [int]$afterStart) {
  $pos = $afterStart
  $context = $null
  while ($true) {
    $tail = $body.Substring($pos)
    if ($tail -notmatch '^(?:\r?\n)+([^\r\n]+)') { break }
    $line = $Matches[1].Trim()
    $len = $Matches[0].Length
    if (Test-ContextLine $line) {
      $context = $line
      $pos += $len
      break
    }
    if ($line -notmatch ' - ' -and $line.Length -le 45) {
      $pos += $len
      continue
    }
    break
  }
  return @{ Context = $context; NextPos = $pos }
}

$items = @()
$prevPos = 0

foreach ($m in $matches) {
  if ($m.Index -lt $prevPos) { continue }
  $quote = $body.Substring($prevPos, $m.Index - $prevPos).Trim()

  $lines = @($quote -split '\r?\n' | ForEach-Object { $_.Trim() } | Where-Object { $_ })
  $clean = @()
  foreach ($line in $lines) {
    if ($line -eq $m.Groups[1].Value.Trim()) { continue }
    $clean += $line
  }
  $quote = ($clean -join ' ').Trim()

  $name = $m.Groups[1].Value.Trim()
  $role = $m.Groups[2].Value.Trim()
  $id = ($name.ToLower() -replace '[^a-z0-9]+', '-').Trim('-')

  $after = Advance-AfterAttribution $body ($m.Index + $m.Length)

  if ($quote) {
    $items += [ordered]@{
      id = $id
      quote = $quote
      name = $name
      role = $role
      context = $after.Context
    }
  }

  $prevPos = $after.NextPos
}

$ids = @{}
foreach ($item in $items) { $ids[$item.id] = $true }

$kevin = [regex]::Match($body, '(?s)(I.+?postpone\.)\s*-\s*Kevin Botma,\s*SFT Client')
if ($kevin.Success -and -not $ids["kevin-botma"]) {
  $kevinItem = [ordered]@{
    id = "kevin-botma"
    quote = $kevin.Groups[1].Value.Trim()
    name = "Kevin Botma"
    role = "SFT Client"
    context = $null
  }
  $idx = 0
  for ($i = 0; $i -lt $items.Count; $i++) {
    if ($items[$i].name -eq "Nicole Wondaal") { $idx = $i; break }
  }
  if ($idx -eq 0) { $idx = $items.Count }
  $items = @($items[0..($idx - 1)] + $kevinItem + $items[$idx..($items.Count - 1)])
}

$items | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 $outPath
Write-Host "Wrote $($items.Count) testimonials to $outPath"
