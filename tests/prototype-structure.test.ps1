$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
function Read-ProjectFile($relativePath) {
    $path = Join-Path $root $relativePath
    if (-not (Test-Path $path)) { throw "Missing required file: $relativePath" }
    Get-Content $path -Raw
}
function Assert-Contains($content, $needle, $message) {
    if (-not $content.Contains($needle)) { throw $message }
}
$html = Read-ProjectFile "index.html"
$css = Read-ProjectFile "styles.css"
$js = Read-ProjectFile "app.js"
Assert-Contains $html 'id="module-board"' "index.html should expose the manual module board"
Assert-Contains $html 'id="manual-panel"' "index.html should expose the manual annotation panel"
Assert-Contains $html 'id="relation-layer"' "index.html should expose manually annotated relation layer"
Assert-Contains $html 'id="relation-view"' "index.html should expose saved relation view"
Assert-Contains $js 'const modules' "app.js should define behaviour modules"
Assert-Contains $js 'createRelation' "app.js should create manual relations"
Assert-Contains $js 'targetModuleId' "app.js should store manually selected downstream target"
Assert-Contains $js 'localStorage' "app.js should persist manual annotations"
Assert-Contains $js 'renderManualRelations' "app.js should render only manually annotated relations"
Assert-Contains $js 'sourceFirstLevel' "app.js should store first-level source label"
Assert-Contains $js 'sourceFirstLevelsForModule' "app.js should display source first-level labels on module cards"
Assert-Contains $js 'mistakeCaseNamesForModule' "app.js should display mistake case names on module cards"
Assert-Contains $js 'activeMistakeKey' "app.js should track the selected saved mistake"
Assert-Contains $js 'editMistakeCase' "app.js should support editing saved mistake cases"
Assert-Contains $js 'activeDownstreamLabelsForModule' "app.js should show active mistake downstream labels on module cards"
Assert-Contains $js 'targetSecondLevel' "app.js should store second-level target label"
Assert-Contains $js 'sourceScope' "app.js should store source scope label"
Assert-Contains $js 'targetScope' "app.js should store target scope label"
Assert-Contains $js 'scopeOptionsByDimension' "app.js should define scope options for each dimension"
Assert-Contains $js 'updateScopeOptions' "app.js should update scope options after dimension changes"
Assert-Contains $js 'coordinatorSecondLevelOptions' "app.js should define coordinator-specific second-level options"
Assert-Contains $js 'expertSecondLevelOptions' "app.js should define expert-specific second-level options"
Assert-Contains $js 'addAffectedTargetRow' "app.js should allow adding multiple affected downstream blocks"
Assert-Contains $js 'affectedTargets' "app.js should collect multiple affected downstream blocks before saving"
Assert-Contains $js 'return String.raw`<!doctype html>' "app.js should preserve escaped strings inside exported H5"
Assert-Contains $js 'class=\"badge ' "exported H5 script should keep escaped HTML attributes"
Assert-Contains $js 'collectCurrentCss' "exported H5 should embed current Execution Blocks styling"
Assert-Contains $js 'fallbackExportCss' "exported H5 should include fallback CSS when stylesheet rules are inaccessible"
Assert-Contains $js 'sheetCss || fallbackExportCss' "exported H5 should not export unstyled markup if stylesheet collection fails"
if ($js.Contains('defaultSeverity')) { throw "nodes should not be pre-labelled with default severity" }
if ($js.Contains(',`n')) { throw "app.js contains malformed coordinate newline escape" }
Assert-Contains $css ".stage-column" "styles.css should style stage columns"
Assert-Contains $css ".module-card" "styles.css should style small modules"
Assert-Contains $css ".source-label-strip" "styles.css should style source first-level labels at block layer"
Assert-Contains $css ".case-name-list" "styles.css should style mistake case names at block layer"
Assert-Contains $css ".downstream-label-strip" "styles.css should style downstream labels on block cards"
Assert-Contains $css ".manual-relation" "styles.css should style manual relation lines"
Assert-Contains $css ".relation-card" "styles.css should style saved relation cards"
Assert-Contains $css ".affected-target-row" "styles.css should style multiple affected target rows"
Write-Output "manual-first annotation canvas checks passed"



