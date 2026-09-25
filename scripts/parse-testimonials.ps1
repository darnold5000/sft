$ErrorActionPreference = "Stop"
$src = Join-Path $PSScriptRoot "..\content\testimonials\source.txt"
$out = Join-Path $PSScriptRoot "..\content\testimonials\data.json"

$text = Get-Content -Raw -Encoding UTF8 $src
$text = $text -replace "`r`n", "`n"
$cut = ($text -split "#### Hours")[0]
$lines = $cut -split "`n"

$items = @()
$buffer = @()
$pendingName = $null

function Flush-Attribution($name, $role, $quote, $context) {
  if (-not $quote.Trim()) { return }
  $id = ($name.ToLower() -replace '[^a-z0-9]+', '-').Trim('-')
  if (-not $id) { $id = "t-$($items.Count)" }
  $items += [ordered]@{
    id = $id
    quote = $quote.Trim()
    name = $name.Trim()
    role = $role.Trim()
    context = if ($context) { $context.Trim() } else { $null }
  }
}

foreach ($line in $lines) {
  $t = $line.TrimEnd()
  if ($t -eq "" -or $t -eq "Strength For Today Training") { continue }

  if ($t -match '^[-\s]*([^,]+),\s*(SFT .+)$') {
    $name = $Matches[1].Trim()
    $role = $Matches[2].Trim()
    $quote = ($buffer | Where-Object { $_.Trim() }) -join " "
    $buffer = @()
    $context = $null
    Flush-Attribution $name $role $quote $context
    continue
  }

  if ($t -match '^(.+),\s*(SFT .+)$' -and $buffer.Count -gt 0 -and ($buffer[-1] -match 'postpone\.|else\.\s*$|Client\s*$')) {
    $name = $Matches[1].Trim()
    $role = $Matches[2].Trim()
    $last = $buffer[-1]
    if ($last -match '(.+?)\s*-\s*([^,]+),\s*(SFT .+)$') {
      $buffer[-1] = $Matches[1].Trim()
      $name = $Matches[2].Trim()
      $role = $Matches[3].Trim()
    }
    $quote = ($buffer | Where-Object { $_.Trim() }) -join " "
    $buffer = @()
    Flush-Attribution $name $role $quote $null
    continue
  }

  if ($pendingName -and $buffer.Count -eq 0 -and $t -notmatch '^-') {
    $buffer += $t
    continue
  }

  if ($t -match '^[A-Z][^\-].*$' -and $t -notmatch '^(SFT|My |We |I |The |Working|After |Fast-forward|Also |He\'s|Bet on|Several|Mason )' -and $buffer.Count -eq 0 -and $t.Length -lt 80) {
    $pendingName = $t
    continue
  }

  $buffer += $t
}

# Post-process: attach context lines after each item by re-walking (simplified export)
$json = $items | ConvertTo-Json -Depth 5
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($out, $json, $utf8NoBom)
Write-Host "Parsed $($items.Count) testimonials -> $out"
