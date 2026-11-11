$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$localNode = Join-Path $PSScriptRoot '.tools\node.exe'
$localNpm = Join-Path $PSScriptRoot '.tools\package\bin\npm-cli.js'
if ((Test-Path -LiteralPath $localNode) -and (Test-Path -LiteralPath $localNpm)) {
    $env:PATH = "$(Join-Path $PSScriptRoot '.tools');$env:PATH"
    & $localNode $localNpm run dev
} elseif (Get-Command npm -ErrorAction SilentlyContinue) {
    npm run dev
} else {
    Write-Error 'Install Node.js LTS, then run npm install and npm run dev in this folder.'
}
