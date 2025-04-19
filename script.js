// --- Initial Data and Plan Setup ---
const initialTasksData = [
  {
    id: 1,
    name: "16W Mech Svce Loader WA1200-6",
    frequency: "16W",
    duration: 22,
    suppressions: "4",
  },
  {
    id: 2,
    name: "1W Svce Lodr Daily Zone",
    frequency: "1W",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 3,
    name: "2W Mech Svce Loader WA1200-6",
    frequency: "2W",
    duration: 7,
    suppressions: "8, 7, 1, 4",
  },
  {
    id: 4,
    name: "32W Mech Svce Loader WA1200-6",
    frequency: "32W",
    duration: 19,
    suppressions: "none",
  },
  {
    id: 5,
    name: "4W Hyd Hose Insp Zone A WA1200-6",
    frequency: "4W",
    duration: 0,
    suppressions: "7",
  },
  {
    id: 6,
    name: "4W Hyd Hose Insp Zone B WA1200-6",
    frequency: "4W",
    duration: 0,
    suppressions: "7",
  },
  {
    id: 7,
    name: "4W Mech Svce Loader WA1200-6",
    frequency: "4W",
    duration: 15,
    suppressions: "8, 4, 1",
  },
  {
    id: 8,
    name: "8W Mech Svce Loader WA1200-6",
    frequency: "8W",
    duration: 17,
    suppressions: "4, 1",
  },
  {
    id: 9,
    name: "16W Insp EMV Comp",
    frequency: "16W",
    duration: 1,
    suppressions: "none",
  },
  {
    id: 10,
    name: "10Y Stat Repl Brke Acum",
    frequency: "10Y",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 11,
    name: "240W Insp Stat Fire Syst WA1200-6",
    frequency: "240W",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 12,
    name: "24W Insp Fuel Fast Fill Syst",
    frequency: "24W",
    duration: 1.5,
    suppressions: "none",
  },
  {
    id: 13,
    name: "24W Insp Stat Fire Syst WA1200-6",
    frequency: "24W",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 14,
    name: "24W Test Ulsc Cabn Seal",
    frequency: "24W",
    duration: 2,
    suppressions: "none",
  },
  {
    id: 15,
    name: "26W Tech Insp CAS Syst",
    frequency: "26W",
    duration: 1,
    suppressions: "none",
  },
  {
    id: 16,
    name: "2Y Stat Insp Ext Brke Acum",
    frequency: "2Y",
    duration: 1,
    suppressions: "none",
  },
  {
    id: 17,
    name: "4000H Repl Fuel Hoses WA1200-6",
    frequency: "4000H",
    duration: 3,
    suppressions: "none",
  },
  {
    id: 18,
    name: "48W Insp Stat Fire Syst WA1200-6",
    frequency: "48W",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 19,
    name: "6M Sfty Insp WAH Anch Pont",
    frequency: "6M",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 20,
    name: "26W Mech Cond Mntr NDT",
    frequency: "26W",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 21,
    name: "52W Mech Cond Mntr NDT",
    frequency: "52W",
    duration: 34,
    suppressions: "none",
  },
  {
    id: 22,
    name: "10000H Repl Bckt Pins WA1200-6",
    frequency: "10000H",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 23,
    name: "10000H Repl Blcr Pins WA1200-6",
    frequency: "10000H",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 24,
    name: "10000H Repl Btm Vlve Sfty Suction",
    frequency: "10000H",
    duration: 0,
    suppressions: "55",
  },
  {
    id: 25,
    name: "10000H Repl Ctr Vlve Sfty Suction",
    frequency: "10000H",
    duration: 0,
    suppressions: "56",
  },
  {
    id: 26,
    name: "10000H Repl Top Vlve Sfty Suction",
    frequency: "10000H",
    duration: 0,
    suppressions: "59",
  },
  {
    id: 27,
    name: "12000H Engi Drive Shaft WA1200-6",
    frequency: "12000H",
    duration: 3,
    suppressions: "none",
  },
  {
    id: 28,
    name: "12000H Repl Both Brke Tredle Vlve",
    frequency: "12000H",
    duration: 11.5,
    suppressions: "none",
  },
  {
    id: 29,
    name: "12000H Repl Brng Driv CTR",
    frequency: "12000H",
    duration: 5.5,
    suppressions: "none",
  },
  {
    id: 30,
    name: "12000H Repl Engi Dapr WA1200",
    frequency: "12000H",
    duration: 26,
    suppressions: "none",
  },
  {
    id: 31,
    name: "12000H Repl Matl Engi Mid WA1200",
    frequency: "12000H",
    duration: 27,
    suppressions: "67",
  },
  {
    id: 32,
    name: "12000H Repl ROS Pumps WA1200-6",
    frequency: "12000H",
    duration: 8,
    suppressions: "none",
  },
  {
    id: 33,
    name: "16000H Repl Brke Colr Fan Motr",
    frequency: "16000H",
    duration: 5.5,
    suppressions: "none",
  },
  {
    id: 34,
    name: "16000H Repl Colr Tran WA1200",
    frequency: "16000H",
    duration: 10.5,
    suppressions: "none",
  },
  {
    id: 35,
    name: "16000H Repl Emer Ster Syst",
    frequency: "16000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 36,
    name: "16000H Repl Impt Pump P1 WA1200",
    frequency: "16000H",
    duration: 11,
    suppressions: "none",
  },
  {
    id: 37,
    name: "16000H Repl Impt Pump P2 WA1200",
    frequency: "16000H",
    duration: 11,
    suppressions: "none",
  },
  {
    id: 38,
    name: "16000H Repl LH Dump Cyli WA1200-6",
    frequency: "16000H",
    duration: 20,
    suppressions: "none",
  },
  {
    id: 39,
    name: "16000H Repl LH Lift Cyli WA1200-6",
    frequency: "16000H",
    duration: 52,
    suppressions: "none",
  },
  {
    id: 40,
    name: "16000H Repl Pump Emer Ster LWR",
    frequency: "16000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 41,
    name: "16000H Repl Pump Emer Ster UPR",
    frequency: "16000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 42,
    name: "16000H Repl Pump Ster",
    frequency: "16000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 43,
    name: "16000H Repl RH Dump Cyli WA1200-6",
    frequency: "16000H",
    duration: 20,
    suppressions: "none",
  },
  {
    id: 44,
    name: "16000H Repl RH Lift Cyli WA1200-6",
    frequency: "16000H",
    duration: 52,
    suppressions: "none",
  },
  {
    id: 45,
    name: "16000H Repl Ster Cyli L",
    frequency: "16000H",
    duration: 7,
    suppressions: "none",
  },
  {
    id: 46,
    name: "16000H Repl Ster Cyli R",
    frequency: "16000H",
    duration: 7,
    suppressions: "none",
  },
  {
    id: 47,
    name: "16000H Repl Ster Demand Vlve L",
    frequency: "16000H",
    duration: 5.5,
    suppressions: "none",
  },
  {
    id: 48,
    name: "16000H Repl Ster Demand Vlve R",
    frequency: "16000H",
    duration: 5.5,
    suppressions: "none",
  },
  {
    id: 49,
    name: "16000H Repl Swch Pump WA1200-6",
    frequency: "16000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 50,
    name: "16000H Repl Tran & TC WA1200",
    frequency: "16000H",
    duration: 16,
    suppressions: "none",
  },
  {
    id: 51,
    name: "16000H Repl Tran Pump WA1200-6",
    frequency: "16000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 52,
    name: "16000H Repl Trop Hydr Colr",
    frequency: "16000H",
    duration: 8,
    suppressions: "none",
  },
  {
    id: 53,
    name: "20000H Ovhl Brng Artc",
    frequency: "20000H",
    duration: 170,
    suppressions: "none",
  },
  {
    id: 54,
    name: "20000H Repl Bckt",
    frequency: "20000H",
    duration: 41,
    suppressions: "none",
  },
  {
    id: 55,
    name: "20000H Repl Btm Hydr Ctrl Vlve",
    frequency: "20000H",
    duration: 20,
    suppressions: "none",
  },
  {
    id: 56,
    name: "20000H Repl Ctre Hydr Ctrl Vlve",
    frequency: "20000H",
    duration: 20,
    suppressions: "none",
  },
  {
    id: 57,
    name: "20000H Repl Frme Pins & Bushes",
    frequency: "20000H",
    duration: 0,
    suppressions: "56",
  },
  {
    id: 58,
    name: "20000H Repl Pilt Ctrl Vlve WA1200",
    frequency: "20000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 59,
    name: "20000H Repl Top Hydr Ctrl Vlve",
    frequency: "20000H",
    duration: 14,
    suppressions: "none",
  },
  {
    id: 60,
    name: "24000H Ovhl A/C WA1200-6",
    frequency: "24000H",
    duration: 16,
    suppressions: "67",
  },
  {
    id: 61,
    name: "24000H Repl Axle Assy F WA1200-6",
    frequency: "24000H",
    duration: 39.5,
    suppressions: "none",
  },
  {
    id: 62,
    name: "24000H Repl Axle Assy R WA1200-6",
    frequency: "24000H",
    duration: 41.5,
    suppressions: "none",
  },
  {
    id: 63,
    name: "24000H Repl Brng Axle Ocil",
    frequency: "24000H",
    duration: 0,
    suppressions: "62",
  },
  {
    id: 64,
    name: "24000H Repl Driv Shft CTR WA1200",
    frequency: "24000H",
    duration: 5.5,
    suppressions: "62",
  },
  {
    id: 65,
    name: "24000H Repl Driv Shft F WA1200",
    frequency: "24000H",
    duration: 5.5,
    suppressions: "62",
  },
  {
    id: 66,
    name: "24000H Repl Driv Shft R WA1200",
    frequency: "24000H",
    duration: 5.5,
    suppressions: "62",
  },
  {
    id: 67,
    name: "24000H Repl Engi Assy",
    frequency: "24000H",
    duration: 84,
    suppressions: "none",
  },
  {
    id: 68,
    name: "24000H Repl Fan WA1200-6",
    frequency: "24000H",
    duration: 5.5,
    suppressions: "none",
  },
  {
    id: 69,
    name: "24000H Repl Hydr Colr WA1200-6",
    frequency: "24000H",
    duration: 10,
    suppressions: "none",
  },
  {
    id: 70,
    name: "24000H Repl Rdtr WA1200-6",
    frequency: "24000H",
    duration: 16,
    suppressions: "none",
  },
  {
    id: 71,
    name: "4000H Repl Brke Hoses",
    frequency: "4000H",
    duration: 11,
    suppressions: "none",
  },
  {
    id: 72,
    name: "4000H Repl Brke Pumps WA1200-6",
    frequency: "4000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 73,
    name: "4000H Repl Hydr Hose WA1200-6",
    frequency: "4000H",
    duration: 18,
    suppressions: "none",
  },
  {
    id: 74,
    name: "4000H Repl LH Lift Cyli Hose",
    frequency: "4000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 75,
    name: "4000H Repl LH Tilt Cyli Hose",
    frequency: "4000H",
    duration: 10.5,
    suppressions: "none",
  },
  {
    id: 76,
    name: "4000H Repl RH Lift Cyli Hose",
    frequency: "4000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 77,
    name: "4000H Repl RH Tilt Cyli Hose",
    frequency: "4000H",
    duration: 4,
    suppressions: "none",
  },
  {
    id: 78,
    name: "5000H Repl Hose Htch Cntr",
    frequency: "5000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 79,
    name: "52W Repl Batteries WA1200-6",
    frequency: "52W",
    duration: 5,
    suppressions: "none",
  },
  {
    id: 80,
    name: "52W Repl Oper Seat WA1200-6",
    frequency: "52W",
    duration: 1.5,
    suppressions: "none",
  },
  {
    id: 81,
    name: "52W Svce A/C Syst WA1200-6",
    frequency: "52W",
    duration: 12,
    suppressions: "none",
  },
  {
    id: 82,
    name: "6000H Repl Eng Driv Shft Uvsl",
    frequency: "6000H",
    duration: 0,
    suppressions: "none",
  },
  {
    id: 83,
    name: "6000H Repl Uvsl Driv Shft CTR",
    frequency: "6000H",
    duration: 4.5,
    suppressions: "none",
  },
  {
    id: 84,
    name: "6000H Repl Uvsl Driv Shft F",
    frequency: "6000H",
    duration: 4.5,
    suppressions: "none",
  },
  {
    id: 85,
    name: "6000H Repl Uvsl Driv Shft R",
    frequency: "6000H",
    duration: 4.5,
    suppressions: "none",
  },
  {
    id: 86,
    name: "6M Hyd Tune Up OEM WA1200-6",
    frequency: "6M",
    duration: 5.5,
    suppressions: "none",
  },
  {
    id: 87,
    name: "8000H Repl Brke Hoses",
    frequency: "8000H",
    duration: 16,
    suppressions: "none",
  },
  {
    id: 88,
    name: "8000H Repl Ster Cyli Hose L",
    frequency: "8000H",
    duration: 5,
    suppressions: "none",
  },
  {
    id: 89,
    name: "8000H Repl Ster Cyli Hose R",
    frequency: "8000H",
    duration: 5,
    suppressions: "none",
  },
  {
    id: 90,
    name: "6000H Repl Grease Pump & dump vlve",
    frequency: "6000H",
    duration: 6,
    suppressions: "none",
  },
  {
    id: 91,
    name: "12000H Engine Harness",
    frequency: "12000H",
    duration: 4,
    suppressions: "none",
  },
];

let planData = {
  A: {
    tasks: [],
    allSuppressions: [],
    scheduledTasks: [],
    monthlySummary: {},
    loaded: false,
  },
  B: {
    tasks: [],
    allSuppressions: [],
    scheduledTasks: [],
    monthlySummary: {},
    loaded: false,
  },
  C: {
    tasks: [],
    allSuppressions: [],
    scheduledTasks: [],
    monthlySummary: {},
    loaded: false,
  },
};

// --- DOM Elements ---
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const initialAgeInput = document.getElementById("initialAge");
const avgDailyUsageInput = document.getElementById("avgDailyUsage");
const calculateBtn = document.getElementById("calculateBtn");

const csvInputs = {
  A: document.getElementById("csvInputA"),
  B: document.getElementById("csvInputB"),
  C: document.getElementById("csvInputC"),
};
const loadCsvBtns = {
  A: document.getElementById("loadCsvBtnA"),
  B: document.getElementById("loadCsvBtnB"),
  C: document.getElementById("loadCsvBtnC"),
};
const taskTableBodies = {
  A: document.getElementById("taskTableA").querySelector("tbody"),
  B: document.getElementById("taskTableB").querySelector("tbody"),
  C: document.getElementById("taskTableC").querySelector("tbody"),
};
const summaryTableBodies = {
  A: document.getElementById("summaryTableA").querySelector("tbody"),
  B: document.getElementById("summaryTableB").querySelector("tbody"),
  C: document.getElementById("summaryTableC").querySelector("tbody"),
};
const saveTasksBtns = document.querySelectorAll(".saveTasksBtn");
const printSummaryBtns = document.querySelectorAll(".printSummaryBtn");
const saveSummaryBtns = document.querySelectorAll(".saveSummaryBtn");

// --- Helper Functions ---
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  if (tabName === "chartTab" && lastChartData.labels.length > 0) {
    renderImpactChart(lastChartData.labels, lastChartData.datasets);
  }
}

function openSubTab(evt, parentTabId, planId) {
  const parentTab = document.getElementById(parentTabId);
  let i, subtabcontent, subtablinks;
  subtabcontent = parentTab.getElementsByClassName("sub-tab-content");
  for (i = 0; i < subtabcontent.length; i++) {
    subtabcontent[i].classList.remove("active");
  }
  const subTabContainer = parentTab.querySelector(".sub-tab-container");
  subtablinks = subTabContainer.getElementsByClassName("sub-tab-button");
  for (i = 0; i < subtablinks.length; i++) {
    subtablinks[i].classList.remove("active");
  }
  document.getElementById(parentTabId + planId).classList.add("active");
  evt.currentTarget.classList.add("active");
}

function parseFrequency(freqStr) {
  const match = freqStr.match(/^(\d+)([WHM Y])$/i);
  if (!match) return { value: 0, unit: null, type: null, hours: 0 };
  const value = parseInt(match[1], 10);
  const unit = match[2].toUpperCase();
  let hours = 0;
  let type = "calendar";
  switch (unit) {
    case "W":
      hours = value * 7 * 24;
      break;
    case "M":
      hours = value * 30.44 * 24;
      break;
    case "Y":
      hours = value * 365.25 * 24;
      break;
    case "H":
      hours = value;
      type = "hourly";
      break;
    default:
      return { value: 0, unit: null, type: null, hours: 0 };
  }
  return { value, unit, type, hours };
}

function formatDate(date) {
  if (!(date instanceof Date)) return "";
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getDefaultEndDate(startDate, initialAge, avgDailyUsage, planId) {
  let maxHours = 0;
  const tasks = planData[planId].tasks;
  tasks.forEach((task) => {
    if (task.frequencyData && task.frequencyData.hours > 0) {
      const freqHours = task.frequencyData.hours;
      if (freqHours > maxHours) maxHours = freqHours;
    }
  });
  const totalHours = maxHours > 0 ? maxHours * 2 : 365 * 24 * 2;
  const days = totalHours / avgDailyUsage;
  return addDays(startDate, days);
}

function updateDefaultEndDate() {
  const startDate = new Date(startDateInput.value);
  const initialAge = parseFloat(initialAgeInput.value) || 0;
  const avgDailyUsage = parseFloat(avgDailyUsageInput.value) || 24;
  if (isNaN(startDate.getTime())) return;
  const defaultEndDate = getDefaultEndDate(
    startDate,
    initialAge,
    avgDailyUsage,
    "A"
  );
  endDateInput.value = formatDate(defaultEndDate);
}

// --- Core Logic Functions ---
function parseCsvData(csvText) {
  const lines = csvText.trim().split("\n");
  const parsedData = [];
  const startIndex = lines[0].toLowerCase().startsWith("id,") ? 1 : 0;
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const parts = [];
    let current = "";
    let inQuotes = false;
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        parts.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    parts.push(current);
    if (parts.length >= 5) {
      const id = parseInt(parts[0], 10);
      const name = parts[1].replace(/^"|"$/g, "");
      const frequency = parts[2].replace(/^"|"$/g, "");
      const duration = parseFloat(parts[3]) || 0;
      const suppressions = parts[4].replace(/^"|"$/g, "");
      if (!isNaN(id) && name && frequency) {
        parsedData.push({ id, name, frequency, duration, suppressions });
      } else {
        console.warn(`Skipping invalid line ${i + 1}: ${line}`);
        alert(`Warning: Invalid data format found on line ${i + 1}.`);
      }
    } else {
      console.warn(
        `Skipping line ${i + 1} due to insufficient columns: ${line}`
      );
      alert(`Warning: Insufficient columns found on line ${i + 1}.`);
    }
  }
  return parsedData;
}

function processInitialData(sourceData, planId) {
  const plan = planData[planId];
  plan.tasks = sourceData.map((task) => ({
    ...task,
    duration: parseFloat(task.duration) || 0,
    frequencyData: parseFrequency(task.frequency),
    explicitSuppressions:
      task.suppressions === "none"
        ? []
        : task.suppressions
            .split(",")
            .map((s) => parseInt(s.trim(), 10))
            .filter((id) => !isNaN(id)),
    suppressedBy: [],
    activeSuppressions: {},
  }));
  identifySuppressions(planId);
  populateTaskTable(planId);
  plan.loaded = true;
  console.log(`Plan ${planId} processed with ${plan.tasks.length} tasks.`);
}

function identifySuppressions(planId) {
  const plan = planData[planId];
  plan.allSuppressions = [];
  const tasks = plan.tasks;
  const taskMap = new Map(tasks.map((t) => [t.id, t]));
  tasks.forEach((task) => {
    task.suppressedBy = [];
    task.explicitSuppressions.forEach((suppressorId) => {
      if (taskMap.has(suppressorId)) {
        const suppression = {
          suppressedById: suppressorId,
          suppressesId: task.id,
          type: "explicit",
          active: true,
        };
        plan.allSuppressions.push(suppression);
        task.suppressedBy.push({ id: suppressorId, type: "explicit" });
        if (!task.activeSuppressions.hasOwnProperty(suppressorId)) {
          task.activeSuppressions[suppressorId] = true;
        }
      }
    });
    tasks.forEach((potentialSuppressor) => {
      if (task.id === potentialSuppressor.id) return;
      if (task.name === potentialSuppressor.name) {
        const freqA = task.frequencyData,
          freqB = potentialSuppressor.frequencyData;
        if (freqA.hours > 0 && freqB.hours > 0) {
          if (freqB.hours > freqA.hours && freqB.hours % freqA.hours === 0) {
            const suppression = {
              suppressedById: potentialSuppressor.id,
              suppressesId: task.id,
              type: "implicit",
              active: true,
            };
            if (
              !plan.allSuppressions.some(
                (s) =>
                  s.suppressedById === potentialSuppressor.id &&
                  s.suppressesId === task.id
              )
            ) {
              plan.allSuppressions.push(suppression);
              task.suppressedBy.push({
                id: potentialSuppressor.id,
                type: "implicit",
              });
              if (
                !task.activeSuppressions.hasOwnProperty(potentialSuppressor.id)
              ) {
                task.activeSuppressions[potentialSuppressor.id] = true;
              }
            }
          }
        }
      }
    });
  });
  populateTaskTable(planId);
}

function populateTaskTable(planId) {
  const tableBody = taskTableBodies[planId];
  const tasks = planData[planId].tasks;
  const taskMap = new Map(tasks.map((t) => [t.id, t]));
  tableBody.innerHTML = "";
  if (!tasks || tasks.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5">No tasks loaded for Plan ${planId}.</td></tr>`;
    return;
  }
  tasks.forEach((task) => {
    const row = tableBody.insertRow();
    row.insertCell().textContent = task.id;
    row.insertCell().textContent = task.name;
    row.insertCell().textContent = task.frequency;
    const durationCell = row.insertCell();
    const durationInput = document.createElement("input");
    durationInput.type = "number";
    durationInput.value = task.duration;
    durationInput.min = 0;
    durationInput.step = 0.1;
    durationInput.dataset.taskId = task.id;
    durationInput.dataset.planId = planId;
    durationInput.addEventListener("change", handleDurationChange);
    durationCell.appendChild(durationInput);
    const activationCell = row.insertCell();
    const suppressionList = document.createElement("ul");
    suppressionList.className = "suppression-list";
    if (task.suppressedBy.length === 0) {
      activationCell.textContent = "None";
    } else {
      task.suppressedBy.forEach((s) => {
        const suppressor = taskMap.get(s.id);
        if (!suppressor) return;
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.activeSuppressions[s.id] !== false;
        checkbox.dataset.taskId = task.id;
        checkbox.dataset.suppressorId = s.id;
        checkbox.dataset.planId = planId;
        checkbox.addEventListener("change", handleSuppressionToggle);
        const label = document.createElement("label");
        label.appendChild(checkbox);
        label.append(` by ID ${s.id} (${suppressor.name})`);
        listItem.appendChild(label);
        suppressionList.appendChild(listItem);
      });
      activationCell.appendChild(suppressionList);
    }
  });
}

function handleDurationChange(event) {
  const taskId = parseInt(event.target.dataset.taskId, 10);
  const planId = event.target.dataset.planId;
  const newDuration = parseFloat(event.target.value) || 0;
  const task = planData[planId].tasks.find((t) => t.id === taskId);
  if (task) {
    task.duration = newDuration;
    console.log(
      `Plan ${planId}, Task ${taskId} duration updated to ${newDuration}`
    );
    planData[planId].scheduledTasks = [];
    planData[planId].monthlySummary = {};
    clearSummaryTable(planId);
    clearChart();
  }
}

function handleSuppressionToggle(event) {
  const taskId = parseInt(event.target.dataset.taskId, 10);
  const suppressorId = parseInt(event.target.dataset.suppressorId, 10);
  const planId = event.target.dataset.planId;
  const isActive = event.target.checked;
  const task = planData[planId].tasks.find((t) => t.id === taskId);
  if (task) {
    task.activeSuppressions[suppressorId] = isActive;
    console.log(
      `Plan ${planId}: Suppression of Task ${taskId} by Task ${suppressorId} set to ${isActive}`
    );
    const suppressionLink = planData[planId].allSuppressions.find(
      (s) => s.suppressesId === taskId && s.suppressedById === suppressorId
    );
    if (suppressionLink) {
      suppressionLink.active = isActive;
    }
    planData[planId].scheduledTasks = [];
    planData[planId].monthlySummary = {};
    clearSummaryTable(planId);
    clearChart();
  }
}

function calculateAllSchedules() {
  console.log("Calculating schedules for all loaded plans...");
  const startDate = new Date(startDateInput.value);
  const initialAge = parseFloat(initialAgeInput.value) || 0;
  const avgDailyUsage = parseFloat(avgDailyUsageInput.value) || 1;
  if (isNaN(startDate.getTime())) {
    alert("Invalid Start Date");
    return;
  }
  if (avgDailyUsage <= 0) {
    alert("Average Daily Usage must be positive.");
    return;
  }
  let analysisEndDate = null;
  if (endDateInput.value) {
    analysisEndDate = new Date(endDateInput.value);
    if (isNaN(analysisEndDate.getTime())) {
      alert("Invalid End Date. Using default.");
      analysisEndDate = null;
    }
  }
  let overallMaxEndDate = new Date(startDate);
  ["A", "B", "C"].forEach((planId) => {
    if (planData[planId].loaded) {
      const planEndDate =
        analysisEndDate ||
        getDefaultEndDate(startDate, initialAge, avgDailyUsage, planId);
      if (planEndDate > overallMaxEndDate) overallMaxEndDate = planEndDate;
      calculateScheduleForPlan(
        planId,
        startDate,
        planEndDate,
        initialAge,
        avgDailyUsage
      );
    } else {
      planData[planId].scheduledTasks = [];
      planData[planId].monthlySummary = {};
      clearSummaryTable(planId);
    }
  });
  console.log("Calculating summaries...");
  ["A", "B", "C"].forEach((planId) => {
    if (planData[planId].loaded) {
      calculateAndRenderSummary(planId, startDate, overallMaxEndDate);
    }
  });
  console.log("Rendering combined chart...");
  renderCombinedImpactChart(startDate, overallMaxEndDate);
}

function calculateScheduleForPlan(
  planId,
  startDate,
  analysisEndDate,
  initialAge,
  avgDailyUsage
) {
  console.log(`Calculating schedule for Plan ${planId}...`);
  const plan = planData[planId];
  const tasks = plan.tasks;
  const allSuppressions = plan.allSuppressions;
  let scheduledTasks = [];
  tasks.forEach((task) => {
    if (!task.frequencyData || task.frequencyData.hours <= 0) return;
    let nextDueDate = null,
      nextDueHour = null;
    const freqHours = task.frequencyData.hours;
    if (task.frequencyData.type === "hourly") {
      const hoursRemaining = freqHours - (initialAge % freqHours);
      nextDueHour = initialAge + hoursRemaining;
      const daysUntilNext = (nextDueHour - initialAge) / avgDailyUsage;
      nextDueDate = addDays(startDate, daysUntilNext);
    } else {
      const daysToAdd = freqHours / 24;
      nextDueDate = addDays(startDate, daysToAdd);
    }
    let currentDueDate = nextDueDate,
      currentDueHour = nextDueHour;
    while (currentDueDate <= analysisEndDate) {
      scheduledTasks.push({
        id: task.id,
        name: task.name,
        start: formatDate(currentDueDate),
        originalTask: task,
        dueDate: new Date(currentDueDate),
        dueHour: currentDueHour,
      });
      if (task.frequencyData.type === "hourly") {
        currentDueHour += freqHours;
        const daysUntilNext = (currentDueHour - initialAge) / avgDailyUsage;
        currentDueDate = addDays(startDate, daysUntilNext);
      } else {
        const daysToAdd = freqHours / 24;
        currentDueDate = addDays(currentDueDate, daysToAdd);
      }
    }
  });
  const finalSchedule = [];
  scheduledTasks.sort((a, b) => a.dueDate - b.dueDate);
  scheduledTasks.forEach((taskInstance) => {
    let isSuppressed = false;
    const taskDefinition = taskInstance.originalTask;
    const activeSuppressors = allSuppressions.filter(
      (s) => s.suppressesId === taskDefinition.id && s.active
    );
    for (const suppression of activeSuppressors) {
      const suppressorId = suppression.suppressedById;
      const suppressorInstance = scheduledTasks.find(
        (supInstance) =>
          supInstance.id === suppressorId &&
          Math.abs(
            supInstance.dueDate.getTime() - taskInstance.dueDate.getTime()
          ) <
            1000 * 60 * 60 * 12
      );
      if (suppressorInstance) {
        isSuppressed = true;
        break;
      }
    }
    if (!isSuppressed) {
      finalSchedule.push(taskInstance);
    }
  });
  plan.scheduledTasks = finalSchedule;
  console.log(
    `Plan ${planId} schedule calculated with ${finalSchedule.length} tasks.`
  );
}

function calculateAndRenderSummary(planId, analysisStart, analysisEnd) {
  const plan = planData[planId];
  const schedule = plan.scheduledTasks;
  const tableBody = summaryTableBodies[planId];
  tableBody.innerHTML = "";
  if (!schedule || schedule.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5">No scheduled tasks found for Plan ${planId}.</td></tr>`;
    plan.monthlySummary = {};
    return;
  }
  const monthlySummary = {};
  let currentDate = new Date(analysisStart);
  while (currentDate <= analysisEnd) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthKey = `${year}-${(month + 1).toString().padStart(2, "0")}`;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalHoursInMonth = daysInMonth * 24;
    if (!monthlySummary[monthKey]) {
      monthlySummary[monthKey] = {
        totalHours: totalHoursInMonth,
        downtime: 0,
        tasks: [],
      };
    }
    schedule.forEach((task) => {
      const taskStartDate = new Date(task.start);
      if (
        taskStartDate.getFullYear() === year &&
        taskStartDate.getMonth() === month
      ) {
        const taskDefinition = plan.tasks.find((t) => t.id === task.id);
        if (taskDefinition) {
          monthlySummary[monthKey].downtime += taskDefinition.duration;
          monthlySummary[monthKey].tasks.push(`ID ${task.id} (${task.start})`);
        }
      }
    });
    currentDate.setMonth(currentDate.getMonth() + 1);
    currentDate.setDate(1);
  }
  Object.keys(monthlySummary)
    .sort()
    .forEach((monthKey) => {
      const summary = monthlySummary[monthKey];
      const impact =
        summary.totalHours > 0
          ? (summary.downtime * 100) / summary.totalHours
          : 0;
      const row = tableBody.insertRow();
      row.insertCell().textContent = monthKey;
      row.insertCell().textContent = summary.totalHours.toFixed(0);
      row.insertCell().textContent = summary.downtime.toFixed(1);
      row.insertCell().textContent = impact.toFixed(1) + "%";
      row.insertCell().textContent = summary.tasks.join(", ");
    });
  plan.monthlySummary = monthlySummary;
}

function clearSummaryTable(planId) {
  summaryTableBodies[
    planId
  ].innerHTML = `<tr><td colspan="5">Calculate schedule to view summary.</td></tr>`;
}

function clearChart() {
  if (impactChart) {
    impactChart.destroy();
    impactChart = null;
  }
  lastChartData = { labels: [], datasets: [] };
  const ctx = document.getElementById("impactChart").getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// --- Chart.js Functions ---
let impactChart = null;
let lastChartData = { labels: [], datasets: [] };

function renderCombinedImpactChart(analysisStart, analysisEnd) {
  const allMonths = new Set();
  const planSummaries = {};
  ["A", "B", "C"].forEach((planId) => {
    if (planData[planId].loaded && planData[planId].monthlySummary) {
      planSummaries[planId] = planData[planId].monthlySummary;
      Object.keys(planSummaries[planId]).forEach((monthKey) =>
        allMonths.add(monthKey)
      );
    }
  });
  const sortedMonths = Array.from(allMonths).sort();
  const chartLabels = sortedMonths.map(formatMonthYear);
  const datasets = [];
  const planColors = {
    A: "rgba(54, 162, 235, 0.7)",
    B: "rgba(255, 159, 64, 0.7)",
    C: "rgba(75, 192, 192, 0.7)",
  };
  ["A", "B", "C"].forEach((planId) => {
    if (planSummaries[planId]) {
      const data = sortedMonths.map((monthKey) => {
        const summary = planSummaries[planId][monthKey];
        if (summary) {
          const impact =
            summary.totalHours > 0
              ? (summary.downtime * 100) / summary.totalHours
              : 0;
          return Number(impact.toFixed(2));
        }
        return 0;
      });
      datasets.push({
        label: `Plan ${planId} Impact (%)`,
        data: data,
        backgroundColor: planColors[planId],
      });
    }
  });
  lastChartData = { labels: chartLabels, datasets: datasets };
  renderImpactChart(chartLabels, datasets);
}

function renderImpactChart(labels, datasets) {
  const ctx = document.getElementById("impactChart").getContext("2d");
  if (impactChart) {
    impactChart.destroy();
  }
  if (!labels || labels.length === 0 || !datasets || datasets.length === 0) {
    console.log("No data to render chart.");
    clearChart();
    return;
  }
  let maxImpact = 0;
  datasets.forEach((ds) => {
    const maxInData = Math.max(...ds.data, 0);
    if (maxInData > maxImpact) maxImpact = maxInData;
  });
  const yAxisMax = Math.max(10, Math.ceil(maxImpact / 10) * 10);
  impactChart = new Chart(ctx, {
    type: "bar",
    data: { labels: labels, datasets: datasets },
    options: {
      responsive: true,
      plugins: { legend: { position: "top" }, title: { display: false } },
      scales: {
        x: { title: { display: true, text: "Month Year" } },
        y: {
          title: { display: true, text: "Est. Availability Impact (%)" },
          beginAtZero: true,
          max: yAxisMax,
        },
      },
    },
  });
}

function formatMonthYear(ym) {
  const [year, month] = ym.split("-");
  const date = new Date(year, parseInt(month, 10) - 1, 1);
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}

// --- Event Listeners ---
calculateBtn.addEventListener("click", function (e) {
  calculateBtn.classList.remove("clicked");
  void calculateBtn.offsetWidth;
  calculateBtn.classList.add("clicked");
  setTimeout(() => calculateBtn.classList.remove("clicked"), 250);
  calculateAllSchedules();
});

printSummaryBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    window.print();
  });
});

saveSummaryBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    const planId = event.target.dataset.plan;
    exportSummaryAsCSV(planId);
  });
});

function exportSummaryAsCSV(planId) {
  const table = document.getElementById(`summaryTable${planId}`);
  if (!table) return;
  let csv = "";
  const headers = Array.from(table.querySelectorAll("thead th")).map((th) =>
    escapeCSV(th.textContent)
  );
  csv += headers.join(",") + "\r\n";
  const rows = table.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    if (
      row.cells.length > 1 &&
      !row.cells[0].textContent.includes("No scheduled tasks")
    ) {
      const cells = Array.from(row.querySelectorAll("td")).map((td) =>
        escapeCSV(td.textContent)
      );
      csv += cells.join(",") + "\r\n";
    }
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `monthly_summary_plan_${planId}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

Object.keys(csvInputs).forEach((planId) => {
  csvInputs[planId].addEventListener("change", () => {
    if (csvInputs[planId].files && csvInputs[planId].files[0]) {
      loadCsvBtns[planId].click();
    }
  });
});

Object.keys(loadCsvBtns).forEach((planId) => {
  loadCsvBtns[planId].addEventListener("click", () => {
    const file = csvInputs[planId].files && csvInputs[planId].files[0];
    if (!file) {
      alert(`Please select a CSV file for Plan ${planId}.`);
      return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      const csvText = e.target.result;
      const newData = parseCsvData(csvText);
      if (newData.length > 0) {
        processInitialData(newData, planId);
        clearSummaryTable(planId);
        clearChart();
        if (planId === "A") {
          updateDefaultEndDate();
        }
        alert(
          `Plan ${planId} data loaded successfully (${newData.length} tasks).`
        );
      } else {
        planData[planId] = {
          tasks: [],
          allSuppressions: [],
          scheduledTasks: [],
          monthlySummary: {},
          loaded: false,
        };
        populateTaskTable(planId);
        clearSummaryTable(planId);
        clearChart();
        alert(`No valid task data found in the CSV for Plan ${planId}.`);
      }
    };
    reader.onerror = function () {
      alert(`Error reading file for Plan ${planId}.`);
      planData[planId] = {
        tasks: [],
        allSuppressions: [],
        scheduledTasks: [],
        monthlySummary: {},
        loaded: false,
      };
      populateTaskTable(planId);
      clearSummaryTable(planId);
      clearChart();
    };
    reader.readAsText(file);
  });
});

saveTasksBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const planId = event.currentTarget.dataset.plan;
    console.log(`Save Tasks button clicked for Plan ${planId}`);
    exportTasksAsCSV(planId);
  });
});

function escapeCSV(val) {
  if (typeof val !== "string") val = String(val);
  if (val.includes(",") || val.includes('"') || val.includes("\n")) {
    return '"' + val.replace(/"/g, '""') + '"';
  }
  return val;
}

function exportTasksAsCSV(planId) {
  if (!planData[planId]) {
    alert(`No data available for Plan ${planId}.`);
    return;
  }
  const tasks = planData[planId].tasks;
  if (!tasks || tasks.length === 0) {
    alert(`No tasks loaded for Plan ${planId} to save.`);
    return;
  }
  const header = [
    "ID",
    "Maintenance Items",
    "Frequency",
    "Duration",
    "Suppression Items",
    "",
  ];
  let csv = header.join(",") + "\r\n";
  tasks.forEach((task) => {
    const row = [
      task.id,
      task.name,
      task.frequency,
      task.duration,
      task.suppressions !== undefined
        ? task.suppressions
        : task.explicitSuppressions && task.explicitSuppressions.length > 0
        ? task.explicitSuppressions.join(", ")
        : "none",
      "",
    ];
    csv += row.map(escapeCSV).join(",") + "\r\n";
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `maintenance_tasks_plan_${planId}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  processInitialData(initialTasksData, "A");
  populateTaskTable("B");
  populateTaskTable("C");
  clearSummaryTable("A");
  clearSummaryTable("B");
  clearSummaryTable("C");
  clearChart();
  updateDefaultEndDate();
  openSubTab(
    { currentTarget: document.querySelector("#tasksTab .sub-tab-button") },
    "tasksTab",
    "A"
  );
  openSubTab(
    { currentTarget: document.querySelector("#summaryTab .sub-tab-button") },
    "summaryTab",
    "A"
  );
});
