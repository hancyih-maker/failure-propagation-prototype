const fallbackExportCss = ":root {\n  --bg: #f4f6f8;\n  --panel: #ffffff;\n  --ink: #17202c;\n  --muted: #637083;\n  --line: #d7dde6;\n  --soft-line: #e8edf3;\n  --focus: #2454a6;\n  --critical: #b42318;\n  --critical-bg: #fff0ed;\n  --error: #bc5a13;\n  --error-bg: #fff4e6;\n  --warning: #876b08;\n  --warning-bg: #fbf5d5;\n  --info: #176b52;\n  --info-bg: #e8f6f0;\n  font-family: Inter, \"Segoe UI\", Arial, sans-serif;\n}\n* { box-sizing: border-box; }\nbody { margin: 0; background: var(--bg); color: var(--ink); }\nbutton, input, select, textarea { font: inherit; }\nh1, h2, h3, p { margin-top: 0; }\n.app-header { min-height: 156px; padding: 28px clamp(18px, 4vw, 52px); display: flex; align-items: center; justify-content: space-between; gap: 24px; background: #fff; border-bottom: 1px solid var(--line); }\n.eyebrow { margin: 0 0 8px; color: var(--focus); font-size: 13px; font-weight: 750; text-transform: uppercase; letter-spacing: 0; }\nh1 { max-width: 900px; margin-bottom: 10px; font-size: clamp(32px, 4vw, 54px); line-height: 1.03; letter-spacing: 0; }\nh2 { margin-bottom: 6px; font-size: 18px; }\n.summary { max-width: 900px; margin-bottom: 0; color: var(--muted); font-size: 16px; line-height: 1.5; }\n.mode-card { width: 210px; min-width: 210px; padding: 16px; background: #f8fafc; border: 1px solid var(--line); }\n.mode-card span, .field-label { display: block; color: var(--muted); font-size: 12px; font-weight: 750; }\n.mode-card strong { display: block; margin-top: 6px; line-height: 1.3; }\n.app-layout { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(370px, 0.82fr); gap: 18px; padding: 18px clamp(18px, 4vw, 52px) 42px; }\n.board-shell, .manual-shell, .relation-shell, .taxonomy-shell { background: var(--panel); border: 1px solid var(--line); }\n.board-shell { grid-row: span 2; }\n.relation-shell, .taxonomy-shell { grid-column: 1 / -1; }\n.section-heading { padding: 17px 18px 14px; display: flex; justify-content: space-between; align-items: flex-start; gap: 18px; border-bottom: 1px solid var(--soft-line); }\n.section-heading.compact { display: block; }\n.section-heading p { margin-bottom: 0; color: var(--muted); font-size: 14px; line-height: 1.45; }\n.action-row, .button-row { display: flex; flex-wrap: wrap; gap: 8px; }\n.module-board { position: relative; min-height: 650px; height: auto; overflow: visible; background: linear-gradient(#eef2f7 1px, transparent 1px), linear-gradient(90deg, #eef2f7 1px, transparent 1px), #fbfcfe; background-size: 36px 36px; }\n.relation-layer { position: absolute; inset: 0; }\r\n.stage-layer { position: relative; inset: auto; }\r\n.relation-layer { width: 100%; height: 100%; pointer-events: none; overflow: visible; z-index: 4; }\n.manual-relation { stroke: var(--focus); stroke-width: 2.4; fill: none; marker-end: url(#arrow); opacity: 0.9; }\n.relation-label { fill: var(--focus); font-size: 11px; font-weight: 750; }\n.stage-layer { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; padding: 18px; }\n.stage-column { position: relative; z-index: 1; min-width: 0; padding: 14px; background: rgba(255,255,255,0.86); border: 1px solid var(--soft-line); }\n.stage-column h3 { margin: 0 0 12px; font-size: 15px; }\n.module-list { display: grid; gap: 10px; }\n.module-card { width: 100%; min-height: 76px; padding: 11px; border: 1px solid var(--line); background: #fff; color: var(--ink); text-align: left; cursor: pointer; box-shadow: 0 6px 14px rgba(34,45,65,0.07); }\n.module-card:hover, .module-card:focus-visible { border-color: var(--focus); outline: none; box-shadow: 0 0 0 3px rgba(36,84,166,0.14); }\n.module-card.is-selected { border-color: var(--focus); box-shadow: inset 4px 0 0 var(--focus), 0 8px 18px rgba(34,45,65,0.1); }\n.module-title { display: block; margin-bottom: 7px; font-size: 14px; font-weight: 780; line-height: 1.25; }\n.module-meta { display: block; color: var(--muted); font-size: 12px; line-height: 1.35; }\n.case-count { display: inline-flex; margin-top: 7px; padding: 4px 7px; color: var(--focus); background: #eef4ff; border: 1px solid #bdd0ef; font-size: 12px; font-weight: 750; }\n.manual-panel { padding: 18px; }\n.selected-title { margin: 0 0 12px; font-size: 23px; line-height: 1.15; }\n.panel-block { margin-bottom: 13px; padding: 13px; background: #fbfcfe; border: 1px solid var(--soft-line); }\n.panel-block h3 { margin: 0 0 10px; font-size: 15px; }\n.form-grid { display: grid; gap: 10px; }\n.form-field label { display: block; margin-bottom: 5px; color: var(--muted); font-size: 12px; font-weight: 750; }\n.form-field input, .form-field select, .form-field textarea { width: 100%; padding: 8px; border: 1px solid var(--line); background: #fff; color: var(--ink); }\n.form-field textarea { min-height: 76px; resize: vertical; line-height: 1.4; }\n.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }\n.primary-button, .secondary-button, .danger-button { min-height: 34px; padding: 7px 11px; border: 1px solid; cursor: pointer; }\n.primary-button { color: #fff; background: var(--focus); border-color: var(--focus); }\n.secondary-button { color: var(--focus); background: #eef4ff; border-color: #b7c9ee; }\n.danger-button { color: #9b1c16; background: #fff0ed; border-color: #e5b7b0; }\n.saved-list { display: grid; gap: 8px; max-height: 320px; overflow: auto; }\n.saved-item { padding: 10px; border: 1px solid var(--line); background: #fff; }\n.saved-item strong { display: block; margin-bottom: 5px; font-size: 13px; }\n.saved-item span { display: block; color: var(--muted); font-size: 12px; line-height: 1.4; }\n.badges { display: flex; flex-wrap: wrap; gap: 6px; margin: 7px 0; }\n.badge { display: inline-flex; padding: 4px 7px; border: 1px solid currentColor; font-size: 12px; font-weight: 750; }\n.severity-critical { color: var(--critical); background: var(--critical-bg); }\n.severity-error { color: var(--error); background: var(--error-bg); }\n.severity-warning { color: var(--warning); background: var(--warning-bg); }\n.severity-info { color: var(--info); background: var(--info-bg); }\n.dimension-badge { color: var(--focus); background: #eef4ff; }\n.relation-view { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; padding: 18px; }\n.relation-card { padding: 14px; border: 1px solid var(--line); background: #fff; }\n.relation-card h3 { margin: 0 0 8px; font-size: 16px; }\n.relation-card p { margin-bottom: 8px; color: var(--muted); font-size: 13px; line-height: 1.45; }\n.empty-state { padding: 14px; color: var(--muted); background: #f8fafc; border: 1px dashed var(--line); font-size: 14px; line-height: 1.45; }\n.json-output { display: none; width: calc(100% - 36px); min-height: 170px; margin: 0 18px 18px; padding: 12px; border: 1px solid var(--line); resize: vertical; font-family: Consolas, monospace; font-size: 12px; line-height: 1.45; }\n.json-output.is-visible { display: block; }\n.taxonomy-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; padding: 18px; }\n.taxonomy-grid article { padding: 14px; border: 1px solid var(--line); background: #fff; }\n.taxonomy-grid h3 { margin: 0 0 8px; font-size: 15px; }\n.taxonomy-grid p { margin-bottom: 0; color: var(--muted); font-size: 13px; line-height: 1.45; }\n@media (max-width: 1120px) { .app-layout { grid-template-columns: 1fr; } .board-shell { grid-row: auto; } .stage-layer, .taxonomy-grid, .relation-view { grid-template-columns: 1fr; } .module-board { min-height: 1050px; } }\n@media (max-width: 720px) { .app-header, .section-heading { display: block; } .mode-card { width: 100%; margin-top: 18px; } .action-row { margin-top: 12px; } .two-col { grid-template-columns: 1fr; } }\r\n.affected-target-list { display: grid; gap: 10px; }\n.affected-target-row { padding: 11px; border: 1px solid var(--line); background: #fff; }\n.row-heading { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 9px; }\n.row-heading strong { font-size: 13px; }\r\n.source-label-strip { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 7px; }\n.source-label-strip .badge { font-size: 11px; padding: 3px 6px; }\r\n.case-name-list { display: grid; gap: 4px; margin-top: 7px; }\n.case-name-list span { display: block; padding: 4px 6px; background: #f8fafc; border: 1px solid var(--soft-line); color: var(--muted); font-size: 11px; line-height: 1.25; }\r\n.module-main-button { display: block; width: 100%; padding: 0; border: 0; background: transparent; color: inherit; text-align: left; cursor: pointer; }\n.case-name-list button { display: block; width: 100%; padding: 4px 6px; background: #f8fafc; border: 1px solid var(--soft-line); color: var(--muted); font-size: 11px; line-height: 1.25; text-align: left; cursor: pointer; }\n.case-name-list button:hover, .case-name-list button:focus-visible { border-color: var(--focus); color: var(--focus); outline: none; }\n.downstream-label-strip { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 7px; padding-top: 7px; border-top: 1px solid var(--soft-line); }\n.downstream-label-strip::before { content: \"Affected by selected mistake\"; width: 100%; color: var(--muted); font-size: 11px; font-weight: 750; }\n.saved-item.is-active, .relation-card.is-active { border-color: var(--focus); box-shadow: inset 4px 0 0 var(--focus); }\n.manual-relation.is-active { stroke-width: 3.4; opacity: 1; }\n.relation-label.is-active { font-weight: 800; }\r\n.source-taxonomy-list { display: grid; gap: 4px; margin-top: 7px; }\n.source-taxonomy-list span { display: block; padding: 5px 6px; background: #eef4ff; border: 1px solid #bdd0ef; color: #2454a6; font-size: 11px; line-height: 1.3; }\n.source-taxonomy-list strong { display: block; margin-bottom: 2px; color: #17202c; font-size: 11px; }\r\n.downstream-taxonomy-item { display: block; width: 100%; padding: 5px 6px; background: #fff; border: 1px solid var(--soft-line); color: var(--muted); font-size: 11px; line-height: 1.3; }\n.downstream-taxonomy-item strong { display: block; margin: 4px 0 2px; color: #17202c; font-size: 11px; }\n.downstream-taxonomy-item .badge { margin-bottom: 2px; }\r\n\r\n\r\n.taxonomy-chain { position: relative; }\n.taxonomy-chain::after { content: \"Layer 4\"; display: inline-block; margin-left: 6px; color: #637083; font-size: 10px; font-weight: 750; }\r\n\r\n\r\n\r\n.taxonomy-influence { display: block; margin-top: 6px; padding-top: 5px; border-top: 1px solid var(--soft-line); color: var(--muted); font-style: normal; font-size: 11px; line-height: 1.35; }\r\n";

const STORAGE_KEY = "manualBehaviourRelations.v2";

const firstLevelOptions = ["Critical Error", "Error", "Warning", "Informational"];
const coordinatorSecondLevelOptions = ["Task Planning", "Coordination", "Progress Management"];
const expertSecondLevelOptions = ["Task Understanding", "Task Execution", "Result Communication"];
const scopeOptionsByDimension = {
  "Task Planning": ["Goal interpretation", "Task formulation", "Task decomposition", "Determination of task dependencies"],
  Coordination: ["Subtask Generation", "Expert Assignment"],
  "Progress Management": ["Progress tracking", "Monitoring execution status", "Verification and validation", "Reflection", "Error detection", "Replanning and recovery"],
  "Task Understanding": ["Understanding task objectives", "Understanding task constraints", "Understanding expected outputs", "Understanding provided context", "Interpreting the coordinator's instructions", "Identifying task requirements"],
  "Task Execution": ["Information processing", "Reasoning", "Memory utilisation", "Tool interaction", "Domain-specific operations"],
  "Result Communication": ["Result Construction", "Information Selection", "Information Organization", "Communication Completeness"],
};

const modules = [
  { id: "understand-question", stage: "Coordinator", title: "Understand the question", hint: "Interpret user goal and expected output" },
  { id: "collect-organize", stage: "Coordinator", title: "Collect and organize information", hint: "Gather facts, constraints, assumptions" },
  { id: "analyse-question", stage: "Coordinator", title: "Analyse the question / thinking", hint: "Reason about what must be solved" },
  { id: "plan-execution", stage: "Coordinator", title: "Plan execution task", hint: "Create subtasks and execution path" },
  { id: "decide-expert", stage: "Coordinator", title: "Decide the expert", hint: "Assign suitable expert role" },
  { id: "receive-task", stage: "Expert", title: "Receive the task", hint: "Read coordinator assignment" },
  { id: "organise-query", stage: "Expert", title: "Organise the query", hint: "Translate task into query or operation" },
  { id: "retrieve-document", stage: "Expert", title: "Retrieval document / strategy", hint: "Choose and execute retrieval strategy" },
  { id: "get-conclusion", stage: "Expert", title: "Get conclusion", hint: "Synthesize answer from work" },
  { id: "receive-conclusion", stage: "Coordinator 2", title: "Receive the conclusion", hint: "Take expert output as input" },
  { id: "verify-reasonable", stage: "Coordinator 2", title: "Verify if it is reasonable", hint: "Check validity and relevance" },
  { id: "combine-subsequent", stage: "Coordinator 2", title: "Combine with subsequent task", hint: "Use output in later work" },
  { id: "analyse-dependency", stage: "Coordinator 2", title: "Analyse dependency / parallelism", hint: "Decide dependent or parallel subtasks" },
  { id: "decide-next-stop", stage: "Coordinator 2", title: "Decide following task / stop", hint: "Continue, recover, or stop" },
];

const stages = [
  { id: "Coordinator", title: "Coordinator: first round" },
  { id: "Expert", title: "Expert" },
  { id: "Coordinator 2", title: "Coordinator: next round" },
];

const stageLayer = document.getElementById("stage-layer");
const relationLayer = document.getElementById("relation-layer");
const manualPanel = document.getElementById("manual-panel");
const relationView = document.getElementById("relation-view");
const jsonOutput = document.getElementById("json-output");
const exportButton = document.getElementById("export-json");
const exportH5Button = document.getElementById("export-h5");
const clearButton = document.getElementById("clear-all");

let selectedModuleId = modules[0].id;
let activeMistakeKey = null;
let affectedTargets = [];
let store = loadStore();

function loadStore() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { relations: [] };
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed.relations) ? parsed : { relations: [] };
  } catch (error) {
    return { relations: [] };
  }
}

function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function moduleById(id) {
  return modules.find((item) => item.id === id);
}

function moduleIndex(id) {
  return modules.findIndex((item) => item.id === id);
}

function isExpertModule(module) {
  return module.stage === "Expert";
}

function secondLevelOptionsForModule(module) {
  return isExpertModule(module) ? expertSecondLevelOptions : coordinatorSecondLevelOptions;
}

function scopeOptionsForDimension(dimension) {
  return scopeOptionsByDimension[dimension] || [];
}

function laterModules(id) {
  return modules.slice(moduleIndex(id) + 1);
}

function rootSourceId(relation) {
  return relation.rootSourceModuleId || relation.sourceModuleId;
}

function relationsForSource(id) {
  return store.relations.filter((relation) => relation.sourceModuleId === id);
}

function rootRelationsForSource(id) {
  return store.relations.filter((relation) => rootSourceId(relation) === id);
}

function sourceFirstLevelsForModule(id) {
  return [...new Set(relationsForSource(id).map((relation) => relation.sourceFirstLevel))];
}

function sourceTaxonomyForModule(id) {
  const seen = new Set();
  return relationsForSource(id)
    .map((relation) => ({ secondLevel: relation.sourceSecondLevel, scope: relation.sourceScope }))
    .filter((item) => {
      const key = `${item.secondLevel}::${item.scope}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function mistakeCaseNamesForModule(id) {
  return [...new Set(rootRelationsForSource(id).map((relation) => relation.caseName))];
}

function mistakeCaseEntriesForModule(id) {
  const seen = new Set();
  return rootRelationsForSource(id)
    .map((relation) => ({ name: relation.caseName, key: mistakeKey(rootSourceId(relation), relation.caseName) }))
    .filter((item) => {
      if (seen.has(item.key)) return false;
      seen.add(item.key);
      return true;
    });
}

function mistakeKey(sourceModuleId, caseName) {
  return `${sourceModuleId}::${caseName}`;
}

function mistakeKeyFromRelation(relation) {
  return mistakeKey(rootSourceId(relation), relation.caseName);
}

function relationsForMistakeKey(key) {
  return store.relations
    .filter((relation) => mistakeKeyFromRelation(relation) === key)
    .sort((a, b) => (a.chainIndex || 0) - (b.chainIndex || 0));
}

function taxonomyPointKey(moduleId, firstLevel, secondLevel, scope) {
  return `${moduleId}::${firstLevel}::${secondLevel}::${scope || ""}`;
}

function activeDownstreamLabelsForModule(id) {
  if (!activeMistakeKey) return [];
  return relationsForMistakeKey(activeMistakeKey)
    .filter((relation) => relation.targetModuleId === id)
    .map((relation) => relation.targetFirstLevel);
}

function activeDownstreamTaxonomyForModule(id) {
  if (!activeMistakeKey) return [];
  const seen = new Set();
  return relationsForMistakeKey(activeMistakeKey)
    .filter((relation) => relation.targetModuleId === id)
    .map((relation) => ({
      pointKey: taxonomyPointKey(relation.targetModuleId, relation.targetFirstLevel, relation.targetSecondLevel, relation.targetScope),
      firstLevel: relation.targetFirstLevel,
      secondLevel: relation.targetSecondLevel,
      scope: relation.targetScope,
      relationInfluence: relation.influence,
    }))
    .filter((item) => {
      if (seen.has(item.pointKey)) return false;
      seen.add(item.pointKey);
      return true;
    });
}

function mistakeGroupsForSource(sourceModuleId) {
  const groups = new Map();
  relationsForSource(sourceModuleId).forEach((relation) => {
    const key = mistakeKeyFromRelation(relation);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(relation);
  });
  return [...groups.entries()].map(([key, relations]) => ({ key, relations, first: relations[0] }));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function labelClass(label) {
  return {
    "Critical Error": "severity-critical",
    Error: "severity-error",
    Warning: "severity-warning",
    Informational: "severity-info",
  }[label] || "dimension-badge";
}

function badge(label, extraClass = "") {
  return `<span class="badge ${labelClass(label)} ${extraClass}">${escapeHtml(label)}</span>`;
}

function optionList(options, selected) {
  return options.map((option) => `<option value="${escapeHtml(option)}" ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`).join("");
}

function resetAffectedTargets() {
  const targets = laterModules(selectedModuleId);
  affectedTargets = targets.length ? [{ rowId: `target-${Date.now()}`, targetModuleId: targets[0].id }] : [];
}

function addAffectedTargetRow() {
  const targets = laterModules(selectedModuleId);
  if (!targets.length) return;
  affectedTargets.push({ rowId: `target-${Date.now()}-${affectedTargets.length}`, targetModuleId: targets[0].id });
  renderManualPanel();
}

function removeAffectedTargetRow(rowId) {
  affectedTargets = affectedTargets.filter((row) => row.rowId !== rowId);
  if (!affectedTargets.length) resetAffectedTargets();
  renderManualPanel();
}

function updateAffectedTarget(rowId, targetModuleId) {
  const row = affectedTargets.find((item) => item.rowId === rowId);
  if (row) row.targetModuleId = targetModuleId;
  renderManualPanel();
}

function updateScopeOptions(dimensionSelect, scopeSelect) {
  const options = scopeOptionsForDimension(dimensionSelect.value);
  scopeSelect.innerHTML = optionList(options, options[0]);
}

function createRelation(form) {
  const sourceModule = moduleById(selectedModuleId);
  const caseName = form.caseName.value.trim() || `${sourceModule.title} mistake`;
  const rows = Array.from(form.querySelectorAll(".affected-target-row"));
  const rootSourceModuleId = selectedModuleId;
  let currentSource = {
    moduleId: selectedModuleId,
    firstLevel: form.sourceFirstLevel.value,
    secondLevel: form.sourceSecondLevel.value,
    scope: form.sourceScope.value,
  };

  if (activeMistakeKey) {
    store.relations = store.relations.filter((relation) => mistakeKeyFromRelation(relation) !== activeMistakeKey);
  }

  rows.forEach((row, index) => {
    const target = {
      moduleId: row.querySelector("[name='targetModuleId']").value,
      firstLevel: row.querySelector("[name='targetFirstLevel']").value,
      secondLevel: row.querySelector("[name='targetSecondLevel']").value,
      scope: row.querySelector("[name='targetScope']").value,
    };
    const relation = {
      id: `relation-${Date.now()}-${index}`,
      rootSourceModuleId,
      chainIndex: index,
      sourceModuleId: currentSource.moduleId,
      targetModuleId: target.moduleId,
      caseName,
      sourceFirstLevel: currentSource.firstLevel,
      sourceSecondLevel: currentSource.secondLevel,
      sourceScope: currentSource.scope,
      targetFirstLevel: target.firstLevel,
      targetSecondLevel: target.secondLevel,
      targetScope: target.scope,
      influence: row.querySelector("[name='influence']").value.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    store.relations.push(relation);
    currentSource = target;
  });

  activeMistakeKey = mistakeKey(rootSourceModuleId, caseName);
  saveStore();
  resetAffectedTargets();
  renderAll();
}

function editMistakeCase(key) {
  const relations = relationsForMistakeKey(key);
  if (!relations.length) return;
  selectedModuleId = rootSourceId(relations[0]);
  activeMistakeKey = key;
  affectedTargets = relations.map((relation, index) => ({
    rowId: `edit-${Date.now()}-${index}`,
    targetModuleId: relation.targetModuleId,
    targetFirstLevel: relation.targetFirstLevel,
    targetSecondLevel: relation.targetSecondLevel,
    targetScope: relation.targetScope,
    influence: relation.influence,
  }));
  renderAll();
}

function deleteMistakeCase(key) {
  store.relations = store.relations.filter((relation) => mistakeKeyFromRelation(relation) !== key);
  if (activeMistakeKey === key) activeMistakeKey = null;
  saveStore();
  resetAffectedTargets();
  renderAll();
}

function deleteRelation(id) {
  store.relations = store.relations.filter((relation) => relation.id !== id);
  saveStore();
  renderAll();
}

function appendBlockAnnotation(groups, annotation) {
  const key = annotation.pointKey;
  if (!groups.has(key)) {
    groups.set(key, {
      pointKey: key,
      sourcePointKey: "",
      targetPointKey: "",
      firstLevel: annotation.firstLevel,
      secondLevel: annotation.secondLevel,
      scope: annotation.scope,
      relationInfluences: [],
    });
  }
  const item = groups.get(key);
  if (annotation.sourcePointKey) item.sourcePointKey = annotation.sourcePointKey;
  if (annotation.targetPointKey) item.targetPointKey = annotation.targetPointKey;
  if (annotation.relationInfluence && !item.relationInfluences.includes(annotation.relationInfluence)) {
    item.relationInfluences.push(annotation.relationInfluence);
  }
}

function blockAnnotationsForModule(id) {
  if (!activeMistakeKey) return [];
  const groups = new Map();
  relationsForMistakeKey(activeMistakeKey).forEach((relation) => {
    const sourcePointKey = taxonomyPointKey(relation.sourceModuleId, relation.sourceFirstLevel, relation.sourceSecondLevel, relation.sourceScope);
    const targetPointKey = taxonomyPointKey(relation.targetModuleId, relation.targetFirstLevel, relation.targetSecondLevel, relation.targetScope);
    if (relation.sourceModuleId === id) {
      appendBlockAnnotation(groups, {
        pointKey: sourcePointKey,
        sourcePointKey,
        firstLevel: relation.sourceFirstLevel,
        secondLevel: relation.sourceSecondLevel,
        scope: relation.sourceScope,
        relationInfluence: relation.influence,
      });
    }
    if (relation.targetModuleId === id) {
      appendBlockAnnotation(groups, {
        pointKey: targetPointKey,
        targetPointKey,
        firstLevel: relation.targetFirstLevel,
        secondLevel: relation.targetSecondLevel,
        scope: relation.targetScope,
        relationInfluence: relation.influence,
      });
    }
  });
  return [...groups.values()];
}
function renderStages() {
  stageLayer.innerHTML = stages.map((stage) => {
    const cards = modules.filter((item) => item.stage === stage.id).map((item) => {
      const blockAnnotations = blockAnnotationsForModule(item.id);
      const caseNames = mistakeCaseNamesForModule(item.id);
      return `
        <article class="module-card ${item.id === selectedModuleId ? "is-selected" : ""}" data-module-id="${item.id}">
          <button class="module-main-button" type="button" data-module-select="${item.id}">
            <span class="module-title">${escapeHtml(item.title)}</span>
            <span class="module-meta">${escapeHtml(item.hint)}</span>
            ${blockAnnotations.length ? `<span class="downstream-label-strip">${blockAnnotations.map((item) => `<span class="downstream-taxonomy-item taxonomy-chain" ${item.sourcePointKey ? `data-source-point="${escapeHtml(item.sourcePointKey)}"` : ""} ${item.targetPointKey ? `data-target-point="${escapeHtml(item.targetPointKey)}"` : ""}>${badge(item.firstLevel)}<strong>${escapeHtml(item.secondLevel)}</strong>${escapeHtml(item.scope || "Scope not set")}${item.relationInfluences.map((text) => `<em class="taxonomy-influence">${escapeHtml(text)}</em>`).join("")}</span>`).join("")}</span>` : ""}
          </button>
          ${caseNames.length ? `<span class="case-name-list">${caseNames.map((name) => `<button type="button" data-edit-mistake="${escapeHtml(mistakeKey(item.id, name))}">${escapeHtml(name)}</button>`).join("")}</span>` : ""}
        </article>
      `;
    }).join("");
    return `
      <article class="stage-column">
        <h3>${escapeHtml(stage.title)}</h3>
        <div class="module-list">${cards}</div>
      </article>
    `;
  }).join("");

  stageLayer.querySelectorAll("[data-module-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedModuleId = button.dataset.moduleSelect;
      activeMistakeKey = null;
      resetAffectedTargets();
      renderAll();
    });
  });
  stageLayer.querySelectorAll("[data-edit-mistake]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      editMistakeCase(button.dataset.editMistake);
    });
  });
}

function elementAnchor(element, side = "center") {
  const board = document.getElementById("module-board");
  if (!element || !board) return null;
  const rect = element.getBoundingClientRect();
  const boardRect = board.getBoundingClientRect();
  const rawX = side === "right" ? rect.right : side === "left" ? rect.left : rect.left + rect.width / 2;
  return {
    x: rawX - boardRect.left,
    y: rect.top - boardRect.top + rect.height / 2,
  };
}

function moduleAnchor(id, side = "center") {
  return elementAnchor(stageLayer.querySelector(`[data-module-id="${id}"]`), side) || { x: 0, y: 0 };
}

function relationPoint(relation, side) {
  const key = side === "source"
    ? taxonomyPointKey(relation.sourceModuleId, relation.sourceFirstLevel, relation.sourceSecondLevel, relation.sourceScope)
    : taxonomyPointKey(relation.targetModuleId, relation.targetFirstLevel, relation.targetSecondLevel, relation.targetScope);
  const selector = side === "source" ? `[data-source-point="${CSS.escape(key)}"]` : `[data-target-point="${CSS.escape(key)}"]`;
  const anchorSide = side === "source" ? "right" : "left";
  const point = elementAnchor(stageLayer.querySelector(selector), anchorSide);
  if (point) return point;
  return side === "source" ? moduleAnchor(relation.sourceModuleId, "right") : moduleAnchor(relation.targetModuleId, "left");
}

function renderManualRelations() {
  relationLayer.innerHTML = `
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2454a6"></path>
      </marker>
    </defs>
  ` + (activeMistakeKey ? relationsForMistakeKey(activeMistakeKey) : []).map((relation) => {
    const source = relationPoint(relation, "source");
    const target = relationPoint(relation, "target");
    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    const activeClass = mistakeKeyFromRelation(relation) === activeMistakeKey ? "is-active" : "";
    return `
      <path class="manual-relation ${activeClass}" d="M ${source.x} ${source.y} L ${source.x + 18} ${source.y} C ${midX} ${source.y}, ${midX} ${target.y}, ${target.x - 18} ${target.y} L ${target.x} ${target.y}"></path>
      <text class="relation-label ${activeClass}" x="${midX}" y="${midY - 6}" text-anchor="middle">${escapeHtml(relation.targetFirstLevel)}</text>
    `;
  }).join("");
}

function renderManualPanel() {
  const source = moduleById(selectedModuleId);
  const targets = laterModules(selectedModuleId);
  const saved = relationsForSource(selectedModuleId);
  const activeRelations = activeMistakeKey ? relationsForMistakeKey(activeMistakeKey) : [];
  const activeRelation = activeRelations[0] || null;
  if (!affectedTargets.length && targets.length) resetAffectedTargets();
  manualPanel.innerHTML = `
    <h3 class="selected-title">${escapeHtml(source.title)}</h3>
    <div class="panel-block">
      <h3>${activeMistakeKey ? "Edit selected mistake" : "Add affected downstream blocks"}</h3>
      ${targets.length ? renderRelationForm(source, targets, activeRelation) : `<div class="empty-state">This is the final module, so there are no later modules to annotate.</div>`}
    </div>
    <div class="panel-block">
      <h3>Saved mistakes from this module</h3>
      ${saved.length ? `<div class="saved-list">${mistakeGroupsForSource(selectedModuleId).map(renderSavedMistakeGroup).join("")}</div>` : `<div class="empty-state">No mistake saved from this module yet.</div>`}
    </div>
  `;

  const form = manualPanel.querySelector("#relation-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      createRelation(form);
    });
  }
  const addButton = manualPanel.querySelector("#add-affected-target");
  if (addButton) addButton.addEventListener("click", addAffectedTargetRow);
  manualPanel.querySelectorAll("[data-remove-target]").forEach((button) => {
    button.addEventListener("click", () => removeAffectedTargetRow(button.dataset.removeTarget));
  });
  manualPanel.querySelectorAll("[data-target-row-select]").forEach((select) => {
    select.addEventListener("change", () => updateAffectedTarget(select.dataset.targetRowSelect, select.value));
  });
  manualPanel.querySelectorAll("[data-scope-source]").forEach((select) => {
    select.addEventListener("change", () => updateScopeOptions(select, manualPanel.querySelector("[name='sourceScope']")));
  });
  manualPanel.querySelectorAll("[data-scope-target]").forEach((select) => {
    select.addEventListener("change", () => {
      const row = select.closest(".affected-target-row");
      updateScopeOptions(select, row.querySelector("[name='targetScope']"));
    });
  });
  manualPanel.querySelectorAll("[data-edit-mistake]").forEach((button) => {
    button.addEventListener("click", () => editMistakeCase(button.dataset.editMistake));
  });
  manualPanel.querySelectorAll("[data-delete-mistake]").forEach((button) => {
    button.addEventListener("click", () => deleteMistakeCase(button.dataset.deleteMistake));
  });
  manualPanel.querySelectorAll("[data-delete-relation]").forEach((button) => {
    button.addEventListener("click", () => deleteRelation(button.dataset.deleteRelation));
  });
}

function renderRelationForm(source, targets, activeRelation = null) {
  const sourceOptions = secondLevelOptionsForModule(source);
  const initialSourceDimension = activeRelation?.sourceSecondLevel || sourceOptions[0];
  const initialSourceScope = activeRelation?.sourceScope || scopeOptionsForDimension(initialSourceDimension)[0];
  const submitLabel = activeMistakeKey ? "Update mistake case" : "Save all affected blocks";
  return `
    <form id="relation-form" class="form-grid">
      <div class="form-field">
        <label>Mistake case name</label>
        <input name="caseName" value="${escapeHtml(activeRelation?.caseName || "")}" placeholder="e.g. Wrong objective affects retrieval and verification">
      </div>
      <div class="two-col">
        <div class="form-field">
          <label>Source block: first-level label</label>
          <select name="sourceFirstLevel">${optionList(firstLevelOptions, activeRelation?.sourceFirstLevel || firstLevelOptions[0])}</select>
        </div>
        <div class="form-field">
          <label>Source block: second-level label</label>
          <select name="sourceSecondLevel" data-scope-source="true">${optionList(sourceOptions, initialSourceDimension)}</select>
        </div>
      </div>
      <div class="form-field">
        <label>Source block: scope</label>
        <select name="sourceScope">${optionList(scopeOptionsForDimension(initialSourceDimension), initialSourceScope)}</select>
      </div>
      <div class="affected-target-list">
        ${affectedTargets.map((row, index) => renderAffectedTargetRow(row, targets, index)).join("")}
      </div>
      <div class="button-row">
        <button class="secondary-button" id="add-affected-target" type="button">Add affected downstream block</button>
        <button class="primary-button" type="submit">${submitLabel}</button>
      </div>
    </form>
  `;
}

function renderAffectedTargetRow(row, targets, index) {
  const target = moduleById(row.targetModuleId) || targets[0];
  const targetOptions = secondLevelOptionsForModule(target);
  const initialTargetDimension = row.targetSecondLevel || targetOptions[0];
  const initialTargetScope = row.targetScope || scopeOptionsForDimension(initialTargetDimension)[0];
  return `
    <article class="affected-target-row" data-row-id="${row.rowId}">
      <div class="row-heading">
        <strong>Affected block ${index + 1}</strong>
        ${affectedTargets.length > 1 ? `<button class="danger-button" type="button" data-remove-target="${row.rowId}">Remove</button>` : ""}
      </div>
      <div class="form-field">
        <label>Affected downstream block</label>
        <select name="targetModuleId" data-target-row-select="${row.rowId}">${targets.map((item) => `<option value="${item.id}" ${item.id === row.targetModuleId ? "selected" : ""}>${escapeHtml(item.title)}</option>`).join("")}</select>
      </div>
      <div class="two-col">
        <div class="form-field">
          <label>Downstream block: first-level label</label>
          <select name="targetFirstLevel">${optionList(firstLevelOptions, row.targetFirstLevel || firstLevelOptions[1])}</select>
        </div>
        <div class="form-field">
          <label>Downstream block: second-level label</label>
          <select name="targetSecondLevel" data-scope-target="true">${optionList(targetOptions, initialTargetDimension)}</select>
        </div>
      </div>
      <div class="form-field">
        <label>Downstream block: scope</label>
        <select name="targetScope">${optionList(scopeOptionsForDimension(initialTargetDimension), initialTargetScope)}</select>
      </div>
      <div class="form-field">
        <label>How the source mistake affects this downstream block</label>
        <textarea name="influence" placeholder="Describe the propagated effect manually">${escapeHtml(row.influence || "")}</textarea>
      </div>
    </article>
  `;
}

function renderSavedMistakeGroup(group) {
  const relationCount = group.relations.length;
  return `
    <article class="saved-item ${group.key === activeMistakeKey ? "is-active" : ""}">
      <strong>${escapeHtml(group.first.caseName)}</strong>
      <span>${relationCount} affected downstream block${relationCount > 1 ? "s" : ""}</span>
      <div class="badges">
        ${badge(group.first.sourceFirstLevel)} ${badge(group.first.sourceSecondLevel, "dimension-badge")} ${badge(group.first.sourceScope || "Scope not set", "dimension-badge")}
      </div>
      <div class="button-row">
        <button class="secondary-button" type="button" data-edit-mistake="${escapeHtml(group.key)}">Edit / show impact</button>
        <button class="danger-button" type="button" data-delete-mistake="${escapeHtml(group.key)}">Delete</button>
      </div>
    </article>
  `;
}

function renderSavedItem(relation) {
  const target = moduleById(relation.targetModuleId);
  return `
    <article class="saved-item">
      <strong>${escapeHtml(relation.caseName)}</strong>
      <span>${escapeHtml(moduleById(relation.sourceModuleId).title)} -> ${escapeHtml(target.title)}</span>
      <div class="badges">
        ${badge(relation.sourceFirstLevel)} ${badge(relation.sourceSecondLevel, "dimension-badge")} ${badge(relation.sourceScope || "Scope not set", "dimension-badge")}
        ${badge(relation.targetFirstLevel)} ${badge(relation.targetSecondLevel, "dimension-badge")} ${badge(relation.targetScope || "Scope not set", "dimension-badge")}
      </div>
      <span>${escapeHtml(relation.influence || "No influence note entered.")}</span>
      <div class="button-row"><button class="danger-button" type="button" data-delete-relation="${relation.id}">Delete</button></div>
    </article>
  `;
}

function renderRelationView() {
  if (!store.relations.length) {
    relationView.innerHTML = `<div class="empty-state">No manually annotated relations yet. Select a module and save a source -> downstream relation.</div>`;
    jsonOutput.classList.remove("is-visible");
    return;
  }
  relationView.innerHTML = store.relations.map((relation) => {
    const source = moduleById(relation.sourceModuleId);
    const target = moduleById(relation.targetModuleId);
    const key = mistakeKeyFromRelation(relation);
    return `
      <article class="relation-card ${key === activeMistakeKey ? "is-active" : ""}">
        <h3>${escapeHtml(relation.caseName)}</h3>
        <p><strong>Relation:</strong> ${escapeHtml(source.title)} -> ${escapeHtml(target.title)}</p>
        <div class="badges">
          ${badge(`Source: ${relation.sourceFirstLevel}`, labelClass(relation.sourceFirstLevel))}
          ${badge(relation.sourceSecondLevel, "dimension-badge")}
          ${badge(relation.sourceScope || "Scope not set", "dimension-badge")}
          ${badge(`Target: ${relation.targetFirstLevel}`, labelClass(relation.targetFirstLevel))}
          ${badge(relation.targetSecondLevel, "dimension-badge")}
          ${badge(relation.targetScope || "Scope not set", "dimension-badge")}
        </div>
        <p>${escapeHtml(relation.influence || "No influence note entered.")}</p>
        <div class="button-row"><button class="secondary-button" type="button" data-edit-mistake="${escapeHtml(key)}">Edit / show impact</button></div>
      </article>
    `;
  }).join("");
}

relationView.addEventListener("click", (event) => {
  const button = event.target.closest("[data-edit-mistake]");
  if (button) editMistakeCase(button.dataset.editMistake);
});
function exportJson() {
  const payload = { exportedAt: new Date().toISOString(), modules, relations: store.relations };
  jsonOutput.value = JSON.stringify(payload, null, 2);
  jsonOutput.classList.add("is-visible");
  jsonOutput.focus();
  jsonOutput.select();
}

function collectCurrentCss() {
  const sheetCss = Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules || []).map((rule) => rule.cssText).join("\n");
      } catch (error) {
        return "";
      }
    })
    .filter(Boolean)
    .join("\n");
  return sheetCss || fallbackExportCss;
}

function buildStandaloneH5() {
  const payload = {
    exportedAt: new Date().toISOString(),
    modules,
    stages,
    relations: store.relations,
  };
  const h5Data = JSON.stringify(payload).replace(/</g, "\\u003c");
  const embeddedCss = `${collectCurrentCss()}
    body.h5-export-body { background: var(--bg); }
    .h5-export-body .app-layout { display: block; padding: 8px 12px 28px; }
    .h5-export-body .board-shell { width: 100%; margin: 0; }
    .h5-export-body .section-heading { display: block; }
    .h5-export-body .module-board { min-height: 940px; overflow: visible; }
    .h5-export-body .stage-layer { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .h5-export-body .case-name-list button.is-active { border-color: var(--focus); color: var(--focus); background: #eef4ff; }
    .h5-export-body .module-card.is-linked { border-color: #8fb0ea; }
    .h5-export-body .manual-relation { stroke: var(--focus); stroke-width: 3.2; fill: none; marker-end: url(#arrow); opacity: .96; stroke-dasharray: 9 7; animation: h5RelationFlow 1.05s linear infinite; filter: drop-shadow(0 2px 2px rgba(36,84,166,.2)); }
    .h5-export-body .relation-label { fill: var(--focus); font-size: 11px; font-weight: 800; paint-order: stroke; stroke: #fff; stroke-width: 4px; stroke-linejoin: round; }
    @keyframes h5RelationFlow { from { stroke-dashoffset: 32; } to { stroke-dashoffset: 0; } }
    @media (max-width: 900px) { .h5-export-body .stage-layer { grid-template-columns: 1fr; } .h5-export-body .module-board { min-height: 1500px; } }
  `.replace(/<\/style/gi, "<\\/style");

  return String.raw`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Execution Blocks Annotation Animation</title>
  <style>${embeddedCss}</style>
</head>
<body class="h5-export-body">
  <main class="app-layout">
    <section class="board-shell" aria-labelledby="board-title">
      <div class="section-heading">
        <div>
          <h2 id="board-title">Execution Blocks</h2>
          <p>Click a mistake case name to reveal the affected blocks and animated propagation lines.</p>
        </div>
      </div>
      <div id="module-board" class="module-board">
        <svg id="relation-layer" class="relation-layer" aria-hidden="true"></svg>
        <div id="stage-layer" class="stage-layer"></div>
      </div>
    </section>
  </main>
  <script id="annotation-data" type="application/json">${h5Data}</script>
  <script>
    var data = JSON.parse(document.getElementById("annotation-data").textContent);
    var stageLayer = document.getElementById("stage-layer");
    var relationLayer = document.getElementById("relation-layer");
    var activeMistakeKey = null;

    function esc(value) {
      return String(value == null ? "" : value).replace(/[&<>\"]/g, function(char) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\\\"": "&quot;" }[char];
      });
    }
    function rootSourceId(relation) { return relation.rootSourceModuleId || relation.sourceModuleId; }
    function mistakeKey(sourceModuleId, caseName) { return sourceModuleId + "::" + caseName; }
    function mistakeKeyFromRelation(relation) { return mistakeKey(rootSourceId(relation), relation.caseName); }
    function relationsForMistakeKey(key) {
      return data.relations.filter(function(relation) { return mistakeKeyFromRelation(relation) === key; })
        .sort(function(a, b) { return (a.chainIndex || 0) - (b.chainIndex || 0); });
    }
    function relationsForSource(id) { return data.relations.filter(function(relation) { return relation.sourceModuleId === id; }); }
    function rootRelationsForSource(id) { return data.relations.filter(function(relation) { return rootSourceId(relation) === id; }); }
    function taxonomyPointKey(moduleId, firstLevel, secondLevel, scope) { return moduleId + "::" + firstLevel + "::" + secondLevel + "::" + (scope || ""); }
    function labelClass(label) { return { "Critical Error": "severity-critical", Error: "severity-error", Warning: "severity-warning", Informational: "severity-info" }[label] || "dimension-badge"; }
    function badge(label, extraClass) { return "<span class=\"badge " + labelClass(label) + " " + (extraClass || "") + "\">" + esc(label) + "</span>"; }

    function appendBlockAnnotation(groups, annotation) {
      var key = annotation.pointKey;
      if (!groups.has(key)) {
        groups.set(key, { pointKey: key, sourcePointKey: "", targetPointKey: "", firstLevel: annotation.firstLevel, secondLevel: annotation.secondLevel, scope: annotation.scope, relationInfluences: [] });
      }
      var item = groups.get(key);
      if (annotation.sourcePointKey) item.sourcePointKey = annotation.sourcePointKey;
      if (annotation.targetPointKey) item.targetPointKey = annotation.targetPointKey;
      if (annotation.relationInfluence && item.relationInfluences.indexOf(annotation.relationInfluence) === -1) item.relationInfluences.push(annotation.relationInfluence);
    }

    function blockAnnotationsForModule(id) {
      if (!activeMistakeKey) return [];
      var groups = new Map();
      relationsForMistakeKey(activeMistakeKey).forEach(function(relation) {
        var sourcePointKey = taxonomyPointKey(relation.sourceModuleId, relation.sourceFirstLevel, relation.sourceSecondLevel, relation.sourceScope);
        var targetPointKey = taxonomyPointKey(relation.targetModuleId, relation.targetFirstLevel, relation.targetSecondLevel, relation.targetScope);
        if (relation.sourceModuleId === id) {
          appendBlockAnnotation(groups, { pointKey: sourcePointKey, sourcePointKey: sourcePointKey, firstLevel: relation.sourceFirstLevel, secondLevel: relation.sourceSecondLevel, scope: relation.sourceScope, relationInfluence: relation.influence });
        }
        if (relation.targetModuleId === id) {
          appendBlockAnnotation(groups, { pointKey: targetPointKey, targetPointKey: targetPointKey, firstLevel: relation.targetFirstLevel, secondLevel: relation.targetSecondLevel, scope: relation.targetScope, relationInfluence: relation.influence });
        }
      });
      return Array.from(groups.values());
    }
    function mistakeCaseEntriesForModule(id) {
      var seen = new Set();
      return rootRelationsForSource(id).map(function(relation) {
        return { name: relation.caseName, key: mistakeKey(rootSourceId(relation), relation.caseName) };
      }).filter(function(item) {
        if (seen.has(item.key)) return false;
        seen.add(item.key);
        return true;
      });
    }

    function renderStages() {
      var activeRelations = activeMistakeKey ? relationsForMistakeKey(activeMistakeKey) : [];
      var activeRoot = activeRelations.length ? rootSourceId(activeRelations[0]) : "";
      var linkedIds = new Set();
      activeRelations.forEach(function(relation) { linkedIds.add(relation.sourceModuleId); linkedIds.add(relation.targetModuleId); });
      stageLayer.innerHTML = data.stages.map(function(stage) {
        var cards = data.modules.filter(function(item) { return item.stage === stage.id; }).map(function(item) {
          var blockAnnotations = blockAnnotationsForModule(item.id);
          var caseEntries = mistakeCaseEntriesForModule(item.id);
          var caseHtml = caseEntries.length ? "<span class=\"case-name-list\">" + caseEntries.map(function(entry) { return "<button type=\"button\" class=\"" + (entry.key === activeMistakeKey ? "is-active" : "") + "\" data-edit-mistake=\"" + esc(entry.key) + "\">" + esc(entry.name) + "</button>"; }).join("") + "</span>" : "";
          var annotationHtml = blockAnnotations.length ? "<span class=\"downstream-label-strip\">" + blockAnnotations.map(function(annotation) {
            var sourceAttr = annotation.sourcePointKey ? " data-source-point=\"" + esc(annotation.sourcePointKey) + "\"" : "";
            var targetAttr = annotation.targetPointKey ? " data-target-point=\"" + esc(annotation.targetPointKey) + "\"" : "";
            var relationInfluences = annotation.relationInfluences.map(function(text) { return "<em class=\"taxonomy-influence\">" + esc(text) + "</em>"; }).join("");
            return "<span class=\"downstream-taxonomy-item taxonomy-chain\"" + sourceAttr + targetAttr + ">" + badge(annotation.firstLevel) + "<strong>" + esc(annotation.secondLevel) + "</strong>" + esc(annotation.scope || "Scope not set") + relationInfluences + "</span>";
          }).join("") + "</span>" : "";
          return "<article class=\"module-card " + (item.id === activeRoot ? "is-selected" : "") + " " + (linkedIds.has(item.id) ? "is-linked" : "") + "\" data-module-id=\"" + esc(item.id) + "\"><button class=\"module-main-button\" type=\"button\"><span class=\"module-title\">" + esc(item.title) + "</span><span class=\"module-meta\">" + esc(item.hint) + "</span>" + annotationHtml + "</button>" + caseHtml + "</article>";
        }).join("");
        return "<article class=\"stage-column\"><h3>" + esc(stage.title) + "</h3><div class=\"module-list\">" + cards + "</div></article>";
      }).join("");
      Array.from(stageLayer.querySelectorAll("[data-edit-mistake]")).forEach(function(button) {
        button.addEventListener("click", function() {
          activeMistakeKey = button.dataset.editMistake;
          renderStages();
          requestAnimationFrame(renderRelations);
        });
      });
    }

    function elementAnchor(element, side) {
      var board = document.getElementById("module-board");
      if (!element || !board) return null;
      var rect = element.getBoundingClientRect();
      var boardRect = board.getBoundingClientRect();
      var rawX = side === "right" ? rect.right : side === "left" ? rect.left : rect.left + rect.width / 2;
      return { x: rawX - boardRect.left, y: rect.top - boardRect.top + rect.height / 2 };
    }
    function moduleAnchor(id, side) { return elementAnchor(stageLayer.querySelector("[data-module-id=\"" + CSS.escape(id) + "\"]"), side) || { x: 0, y: 0 }; }
    function relationPoint(relation, side) {
      var key = side === "source"
        ? taxonomyPointKey(relation.sourceModuleId, relation.sourceFirstLevel, relation.sourceSecondLevel, relation.sourceScope)
        : taxonomyPointKey(relation.targetModuleId, relation.targetFirstLevel, relation.targetSecondLevel, relation.targetScope);
      var selector = side === "source" ? "[data-source-point=\"" + CSS.escape(key) + "\"]" : "[data-target-point=\"" + CSS.escape(key) + "\"]";
      var point = elementAnchor(stageLayer.querySelector(selector), side === "source" ? "right" : "left");
      if (point) return point;
      return side === "source" ? moduleAnchor(relation.sourceModuleId, "right") : moduleAnchor(relation.targetModuleId, "left");
    }

    function renderRelations() {
      var relations = activeMistakeKey ? relationsForMistakeKey(activeMistakeKey) : [];
      relationLayer.innerHTML = "<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#2454a6\"></path></marker></defs>" + relations.map(function(relation) {
        var source = relationPoint(relation, "source");
        var target = relationPoint(relation, "target");
        var midX = (source.x + target.x) / 2;
        var midY = (source.y + target.y) / 2;
        return "<path class=\"manual-relation\" d=\"M " + source.x + " " + source.y + " L " + (source.x + 18) + " " + source.y + " C " + midX + " " + source.y + ", " + midX + " " + target.y + ", " + (target.x - 18) + " " + target.y + " L " + target.x + " " + target.y + "\"></path><text class=\"relation-label\" x=\"" + midX + "\" y=\"" + (midY - 6) + "\" text-anchor=\"middle\">" + esc(relation.targetFirstLevel) + "</text>";
      }).join("");
    }

    window.addEventListener("resize", renderRelations);
    renderStages();
    renderRelations();
  </script>
</body>
</html>`;
}
function exportH5() {
  const html = buildStandaloneH5();
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "annotated-execution-blocks.html";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
function clearAll() {
  store = { relations: [] };
  activeMistakeKey = null;
  saveStore();
  renderAll();
}

function renderAll() {
  renderStages();
  requestAnimationFrame(renderManualRelations);
  renderManualPanel();
  renderRelationView();
}

resetAffectedTargets();
window.addEventListener("resize", renderManualRelations);
exportButton.addEventListener("click", exportJson);
exportH5Button.addEventListener("click", exportH5);
clearButton.addEventListener("click", clearAll);
renderAll();






























