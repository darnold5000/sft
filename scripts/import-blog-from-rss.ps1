$ErrorActionPreference = "Stop"
$rssPath = Join-Path $PSScriptRoot "..\content\blog\source.rss.xml"
if (-not (Test-Path $rssPath)) {
  Copy-Item "C:\Users\Alexandra.Arnold\.cursor\projects\c-Web-projects\agent-tools\99ebfd64-eae8-41ea-a8dd-641e33ed92fe.txt" $rssPath
}
[xml]$xml = Get-Content -Raw -Encoding UTF8 $rssPath
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace("dc", "http://purl.org/dc/elements/1.1/")
$ns.AddNamespace("media", "http://www.rssboard.org/media-rss")
$ns.AddNamespace("content", "http://purl.org/rss/1.0/modules/content/")

$outDir = Join-Path $PSScriptRoot "..\content\blog\posts"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$index = @()
foreach ($item in $xml.SelectNodes("//item")) {
  $link = $item.SelectSingleNode("link").InnerText.Trim()
  $slug = ($link -replace "https://sft-training.com/blog/", "").TrimEnd("/")
  $title = $item.SelectSingleNode("title").InnerText
  $authorNode = $item.SelectSingleNode("dc:creator", $ns)
  $author = if ($authorNode) { $authorNode.InnerText } else { "Sam Vree" }
  $pubDate = $item.SelectSingleNode("pubDate").InnerText
  $bodyNode = $item.SelectSingleNode("description")
  $bodyHtml = if ($bodyNode) { $bodyNode.InnerText } else { "" }
  $imgNode = $item.SelectSingleNode("media:content", $ns)
  $image = if ($imgNode) { $imgNode.GetAttribute("url") } else { $null }

  $frontmatter = @"
---
title: "$($title.Replace('"', '\"'))"
author: "$($author.Replace('"', '\"'))"
pubDate: "$pubDate"
image: "$image"
---

"@
  $mdPath = Join-Path $outDir "$slug.mdx"
  Set-Content -Path $mdPath -Encoding UTF8 -Value ($frontmatter + $bodyHtml)
  $index += [ordered]@{ slug = $slug; title = $title; author = $author; pubDate = $pubDate; image = $image }
}

$indexPath = Join-Path $PSScriptRoot "..\content\blog\index.json"
$index | ConvertTo-Json -Depth 4 | Set-Content -Encoding UTF8 $indexPath
Write-Host "Wrote $($index.Count) posts to $outDir"
