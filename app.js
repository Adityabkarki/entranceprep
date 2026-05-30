const colleges = [
  ["Patan Multiple Campus", "TU", "Lalitpur", "Kathmandu", "Constituent", 144, 78],
  ["Amrit Science Campus", "TU", "Kathmandu", "Kathmandu", "Constituent", 144, 76],
  ["Bhaktapur Multiple Campus", "TU", "Bhaktapur", "Kathmandu", "Constituent", 72, 68],
  ["Padma Kanya Multiple Campus", "TU", "Bagbazar, Kathmandu", "Kathmandu", "Constituent", 72, 66],
  ["Siddhanath Science Campus", "TU", "Mahendranagar", "Outside Valley", "Constituent", 72, 58],
  ["Ramsworup Ramsagar Multiple Campus", "TU", "Janakpur", "Outside Valley", "Constituent", 72, 58],
  ["Mechi Multiple Campus", "TU", "Bhadrapur, Jhapa", "Outside Valley", "Constituent", 72, 58],
  ["Mahendra Morang Adarsh Multiple Campus", "TU", "Biratnagar", "Outside Valley", "Constituent", 72, 60],
  ["Birendra Multiple Campus", "TU", "Bharatpur, Chitwan", "Outside Valley", "Constituent", 72, 62],
  ["Prithvi Narayan Campus", "TU", "Pokhara", "Pokhara", "Constituent", 72, 68],
  ["Butwal Multiple Campus", "TU", "Butwal", "Outside Valley", "Constituent", 72, 58],
  ["Bhairahawa Multiple Campus", "TU", "Bhairahawa", "Outside Valley", "Constituent", 108, 58],
  ["Mahendra Multiple Campus", "TU", "Nepalgunj", "Outside Valley", "Constituent", 72, 56],
  ["Mahendra Multiple Campus Dang", "TU", "Dang", "Outside Valley", "Constituent", 36, 54],
  ["Central Campus of Technology", "TU", "Hetauda", "Outside Valley", "Constituent", 36, 56],
  ["St. Xavier's College", "TU", "Maitighar, Kathmandu", "Kathmandu", "Private", 48, 82],
  ["Kathford International College of Engineering and Management", "TU", "Balkumari, Lalitpur", "Kathmandu", "Private", 48, 74],
  ["New Summit College", "TU", "Old Baneshwor, Kathmandu", "Kathmandu", "Private", 48, 68],
  ["Prime College", "TU", "Nayabazar, Kathmandu", "Kathmandu", "Private", 48, 70],
  ["St. Lawrence College", "TU", "Chabahil, Kathmandu", "Kathmandu", "Private", 36, 62],
  ["College of Applied Business", "TU", "Chabahil, Kathmandu", "Kathmandu", "Private", 36, 62],
  ["Kathmandu Bernhardt College", "TU", "Bafal, Kathmandu", "Kathmandu", "Private", 48, 62],
  ["Mt. Annapurna Campus", "TU", "Pokhara", "Pokhara", "Private", null, 58],
  ["Birendra Memorial College", "TU", "Dharan", "Outside Valley", "Private", null, 56],
  ["National College of Computer Studies", "TU", "Kantipath, Kathmandu", "Kathmandu", "Private", null, 66],
  ["Nagarjun College of IT", "TU", "Pulchowk, Lalitpur", "Kathmandu", "Private", null, 64],
  ["Shreeyantra College", "TU", "Damak, Jhapa", "Outside Valley", "Private", null, 54],
  ["Orchid International College", "TU", "Sinamangal, Kathmandu", "Kathmandu", "Private", null, 64],
  ["Nepalaya College", "TU", "Kalanki, Kathmandu", "Kathmandu", "Private", null, 62],
  ["Madan Bhandari Memorial College", "TU", "Anamnagar, Kathmandu", "Kathmandu", "Private", null, 62],
  ["Vedas College", "TU", "Jawalakhel, Lalitpur", "Kathmandu", "Private", null, 62],
  ["Academia International College", "TU", "Gwarko, Lalitpur", "Kathmandu", "Private", null, 62],
  ["Asian School of Management and Technology", "TU", "Samakhushi, Kathmandu", "Kathmandu", "Private", null, 62],
  ["Himalaya College of Engineering", "TU", "Shankhamul, Kathmandu", "Kathmandu", "Private", null, 64],
  ["Sagarmatha College of Science and Technology", "TU", "Sanepa, Lalitpur", "Kathmandu", "Private", null, 64],
  ["Ambition College", "TU", "Baneshwor, Kathmandu", "Kathmandu", "Private", null, 62],
  ["Texas International College", "TU", "Chabahil, Kathmandu", "Kathmandu", "Private", null, 62],
  ["Deerwalk Institute of Technology", "TU", "Sifal, Kathmandu", "Kathmandu", "Private", null, 74],
  ["NIST College", "TU", "Banepa", "Outside Valley", "Private", null, 56],
  ["National Infotech College", "TU", "Birgunj", "Outside Valley", "Private", null, 54],
  ["Niharika College", "TU", "Biratnagar", "Outside Valley", "Private", null, 54],
  ["Birat Kshitiz College", "TU", "Biratnagar", "Outside Valley", "Private", null, 54],
  ["Birat Multiple College", "TU", "Biratnagar", "Outside Valley", "Private", null, 54],
  ["AIMS College", "TU", "Biratnagar", "Outside Valley", "Private", null, 54],
  ["Godawari College", "TU", "Itahari", "Outside Valley", "Private", null, 54],
  ["Hetauda City College", "TU", "Hetauda, Makwanpur", "Outside Valley", "Private", 36, 54],
  ["Indreni College", "TU", "Bharatpur, Chitwan", "Outside Valley", "Private", null, 54],
  ["Soch College of IT", "TU", "Pokhara", "Pokhara", "Private", null, 56],
  ["Lumbini ICT College", "TU", "Gaidakot, Nawalparasi", "Outside Valley", "Private", null, 54],
  ["Lumbini City College", "TU", "Butwal", "Outside Valley", "Private", null, 54],
  ["Trinity International College", "TU", "Dillibazar, Kathmandu", "Kathmandu", "Private", null, 62],
  ["Kathmandu College of Technology", "TU", "Lokanthali, Bhaktapur", "Kathmandu", "Private", null, 62],
  ["Swastik College", "TU", "Thimi, Bhaktapur", "Kathmandu", "Private", null, 62],
  ["Samriddhi College", "TU", "Lokanthali, Bhaktapur", "Kathmandu", "Private", null, 62],
  ["Nepalgunj Campus", "TU", "Nepalgunj", "Outside Valley", "Private", null, 54],
  ["Nepathya College", "TU", "Butwal", "Outside Valley", "Private", null, 54],
  ["Ambikeshwari Information and Technical Campus", "TU", "Ghorahi, Dang", "Outside Valley", "Private", null, 54],
  ["Bake Bageshwori College", "TU", "Nepalgunj", "Outside Valley", "Private", null, 54],
  ["Asian College of Higher Studies", "TU", "Kamaladi, Kathmandu", "Kathmandu", "Private", null, 62],
  ["Himalaya Darshan College", "TU", "Biratnagar", "Outside Valley", "Private", null, 54],
  ["Reliance International College", "RJU", "Chabahil, Kathmandu", "Kathmandu", "Private", null, 56],
  ["SANN International College", "RJU", "Naikap, Chandragiri, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Brooklyn College", "RJU", "Sukedhara, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Tech AI College", "RJU", "New Baneshwor, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Greenfield National College", "RJU", "Bafal, Kathmandu", "Kathmandu", "Private", 40, 56],
  ["Vibrant College", "RJU", "New Baneshwor, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Ankur Institute of Engineering and Management Studies", "RJU", "Bardibas, Mahottari", "Outside Valley", "Private", null, 52],
  ["Baidehi Gyankunj College", "RJU", "Biratnagar, Morang", "Outside Valley", "Private", null, 52],
  ["Creative International College", "RJU", "Butwal, Rupandehi", "Outside Valley", "Private", null, 52],
  ["Metro College", "RJU", "Lalitpur", "Kathmandu", "Private", null, 54],
  ["TechLaw College", "RJU", "Tinkune, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Tejashree Business College", "RJU", "Lahan, Siraha", "Outside Valley", "Private", null, 52],
  ["Metahorizon College", "RJU", "New Baneshwor, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Model College of Engineering, Law, and Management", "RJU", "Chakupat, Lalitpur", "Kathmandu", "Private", null, 54],
  ["National Pupil English College", "RJU", "Kanchanrup, Saptari", "Outside Valley", "Private", null, 52],
  ["Ambition Guru College", "RJU", "Kamaladi, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Lord Buddha HRD Academy", "RJU", "Maitidevi, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Global Multiple College", "RJU", "Lahan, Siraha", "Outside Valley", "Private", null, 52],
  ["Greenfield College of Information Technology", "RJU", "Bafal, Kathmandu", "Kathmandu", "Private", null, 56],
  ["Itahari Global College", "RJU", "Itahari, Sunsari", "Outside Valley", "Private", null, 52],
  ["Nightingale College", "RJU", "Kupandole, Lalitpur", "Kathmandu", "Private", null, 54],
  ["Einstein Xavier College", "RJU", "Mahalaxmi Chowk, Lalitpur", "Kathmandu", "Private", null, 54],
  ["Metropolitan College", "RJU", "Koteshwor, Kathmandu", "Kathmandu", "Private", null, 56],
  ["University Campus: Rajarshi Janak University", "RJU", "Janakpurdham, Dhanusha", "Outside Valley", "University Campus", null, 52],
  ["DAV College", "FWU", "Bhanimandal, Lalitpur", "Kathmandu", "Private", null, 52],
  ["AADIM National College", "FWU", "Chabahil, Kathmandu", "Kathmandu", "Private", null, 52],
  ["Dreams College", "FWU", "Bharatpur, Chitwan", "Outside Valley", "Private", null, 52],
  ["Shikshyalaya College", "FWU", "Lokanthali, Bhaktapur", "Kathmandu", "Private", null, 52],
  ["Maharishi College", "FWU", "New Baneshwor, Kathmandu", "Kathmandu", "Private", null, 52],
  ["Gyan Jyoti Foundation", "FWU", "Tulsipur, Dang", "Outside Valley", "Private", null, 50],
  ["Arcane College", "FWU", "Kumaripati, Lalitpur", "Kathmandu", "Private", null, 52],
  ["Gandaki Academy of Interdisciplinary Studies", "FWU", "Nadipur, Pokhara", "Pokhara", "Private", null, 52],
  ["Himalaya College", "FWU", "Koteshwor, Kathmandu", "Kathmandu", "Private", null, 52],
  ["Kailali Multiple Campus", "FWU", "Dhangadhi, Kailali", "Outside Valley", "Constituent", null, 50],
  ["Graduate School of Science and Technology", "MWU", "Birendranagar, Surkhet", "Outside Valley", "University Campus", null, 50],
].map(([name, university, city, region, type, seats, minimum]) => ({
  name,
  university,
  city,
  region,
  type,
  seats,
  range: [minimum, 100],
  fill: minimum >= 74 ? "Fills fast" : minimum >= 62 ? "Competitive" : "Verify trend",
}));

const roadmap = [
  ["Check eligibility", "Confirm your Class 12 stream, minimum marks, and required documents before forms open."],
  ["Study the entrance syllabus", "Separate must-score topics from lower-priority topics and start with math fundamentals."],
  ["Submit entrance form", "Track notices, deadlines, admit card, and exam center details in one checklist."],
  ["Take mock exams", "Practice with timed sets, review mistakes, and repeat weak topics every week."],
  ["Use score planning", "Compare your expected score with college demand and prepare backup choices early."],
];

const focusAreas = [
  ["Mathematics", 92],
  ["Physics fundamentals", 76],
  ["English comprehension", 64],
  ["Chemistry basics", 58],
  ["Computer awareness", 72],
];

const plans = {
  30: [
    ["Week 1", "Diagnostic mock, algebra, functions, mechanics basics, English grammar refresh."],
    ["Week 2", "Calculus, vectors, electricity, chemistry numericals, 2 topic tests."],
    ["Week 3", "Past-paper patterns, timed mixed sets, shortcut formulas, error notebook."],
    ["Week 4", "Full mocks, revision sheets, college target planning, final weak-area repair."],
  ],
  60: [
    ["Days 1-15", "Build concepts in math and physics with daily MCQ practice."],
    ["Days 16-30", "Add chemistry, English, computer awareness, and weekly mocks."],
    ["Days 31-45", "Past papers, repeated patterns, formula speed, and score tracking."],
    ["Days 46-60", "Full exam simulation, percentile push, and college prediction."],
  ],
  90: [
    ["Month 1", "Complete fundamentals slowly and repair Class 11/12 gaps."],
    ["Month 2", "Practice topic-wise sets, build speed, and begin past papers."],
    ["Month 3", "Mocks every week, high-value revision, and admission strategy."],
    ["Final 7 days", "Formula sheet, repeated MCQs, sleep schedule, and exam-day plan."],
  ],
};

const resources = [
  ["Past Papers", "Year-wise exam papers with solution mode and exam mode.", "Archive"],
  ["High-Value Questions", "Repeated patterns and concepts that raise your baseline quickly.", "Top percentile"],
  ["Cheat Sheets", "Formula banks, shortcuts, and final-week revision notes.", "Fast revision"],
  ["Mock Exam Sets", "Timed model sets with scoring, explanations, and weak-area feedback.", "Practice"],
];

let quiz = [];

const collegeList = document.querySelector("#collegeList");
const collegeCount = document.querySelector("#collegeCount");
const universityCount = document.querySelector("#universityCount");
const mapFilterLabel = document.querySelector("#mapFilterLabel");
const roadmapNode = document.querySelector("#roadmap");
const focusNode = document.querySelector("#focusAreas");
const studyPlan = document.querySelector("#studyPlan");
const resourceGrid = document.querySelector("#resourceGrid");
const quizArea = document.querySelector("#quizArea");
const scoreBox = document.querySelector("#scoreBox");
const submitQuiz = document.querySelector("#submitQuiz");
const resetQuiz = document.querySelector("#resetQuiz");
const subjectSelect = document.querySelector("#subjectSelect");
const topicSelect = document.querySelector("#topicSelect");
const questionLimit = document.querySelector("#questionLimit");
const startPractice = document.querySelector("#startPractice");
const bankSummary = document.querySelector("#bankSummary");
const examLeadForm = document.querySelector("#examLeadForm");
const practiceGate = document.querySelector("#practiceGate");
const practiceWorkspace = document.querySelector("#practiceWorkspace");
const predictorForm = document.querySelector("#predictorForm");
const predictionResults = document.querySelector("#predictionResults");
const leadDialog = document.querySelector("#leadDialog");
const leadForm = document.querySelector("#leadForm");

const nepalBounds = [
  [26.2, 80.0],
  [30.55, 88.35],
];

const universityColors = {
  TU: "#157347",
  RJU: "#246b9f",
  FWU: "#c58a24",
  MWU: "#b84f61",
};

const locationCoordinates = [
  ["Kathmandu", 27.7172, 85.324],
  ["Lalitpur", 27.6588, 85.3247],
  ["Bhaktapur", 27.671, 85.4298],
  ["Banepa", 27.6325, 85.521],
  ["Pokhara", 28.2096, 83.9856],
  ["Biratnagar", 26.4525, 87.2718],
  ["Itahari", 26.6667, 87.2833],
  ["Dharan", 26.8125, 87.2833],
  ["Bhadrapur", 26.544, 88.0944],
  ["Damak", 26.659, 87.694],
  ["Janakpur", 26.7288, 85.9263],
  ["Janakpurdham", 26.7288, 85.9263],
  ["Lahan", 26.7202, 86.4826],
  ["Saptari", 26.6185, 86.7537],
  ["Bardibas", 26.9955, 85.8994],
  ["Birgunj", 27.0104, 84.8774],
  ["Hetauda", 27.4284, 85.0322],
  ["Bharatpur", 27.6768, 84.4359],
  ["Chitwan", 27.5291, 84.3542],
  ["Gaidakot", 27.7079, 84.3964],
  ["Butwal", 27.7006, 83.4484],
  ["Bhairahawa", 27.5057, 83.4163],
  ["Tulsipur", 28.1306, 82.2973],
  ["Dang", 28.0297, 82.3018],
  ["Ghorahi", 28.0406, 82.4861],
  ["Nepalgunj", 28.05, 81.6167],
  ["Surkhet", 28.6, 81.6333],
  ["Mahendranagar", 28.963, 80.177],
  ["Dhangadhi", 28.6852, 80.6216],
];

let collegeMap;
let collegeMarkerLayer;
let activeFilter = "all";

function coordinatesForCollege(college, index) {
  const matched = locationCoordinates.find(([label]) => college.city.toLowerCase().includes(label.toLowerCase()));
  const base = matched ? [matched[1], matched[2]] : [28.3949, 84.124];
  const offsetGroup = index % 9;
  const row = Math.floor(offsetGroup / 3) - 1;
  const col = (offsetGroup % 3) - 1;
  return [base[0] + row * 0.018, base[1] + col * 0.026];
}

function initCollegeMap() {
  if (collegeMap || typeof L === "undefined") {
    return;
  }

  collegeMap = L.map("collegeMap", {
    maxBounds: nepalBounds,
    maxBoundsViscosity: 1,
    minZoom: 6,
    maxZoom: 11,
    zoomControl: true,
    attributionControl: true,
  }).setView([28.25, 84.1], 7);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 6,
    maxZoom: 11,
    bounds: nepalBounds,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(collegeMap);

  collegeMarkerLayer = L.layerGroup().addTo(collegeMap);
}

function renderCollegeMap(filtered) {
  if (!collegeMap) {
    initCollegeMap();
  }

  if (!collegeMap || !collegeMarkerLayer) {
    document.querySelector("#collegeMap").textContent = "Map could not load. Check the college list beside it.";
    return;
  }

  collegeMarkerLayer.clearLayers();
  filtered.forEach((college, index) => {
    const [lat, lng] = coordinatesForCollege(college, index);
    const marker = L.circleMarker([lat, lng], {
      radius: 7,
      color: "#ffffff",
      weight: 2,
      fillColor: universityColors[college.university] || "#157347",
      fillOpacity: 0.92,
    });

    marker.bindPopup(`
      <strong>${college.name}</strong>
      <span>${college.university} - ${college.city}</span>
      <span>${college.seats ? `${college.seats} seats` : "Seats to verify"}</span>
    `);
    marker.addTo(collegeMarkerLayer);
  });

  if (filtered.length > 0) {
    const markerBounds = L.latLngBounds(filtered.map((college, index) => coordinatesForCollege(college, index)));
    collegeMap.fitBounds(markerBounds.pad(0.18), { maxZoom: 8 });
  } else {
    collegeMap.fitBounds(nepalBounds);
  }

  collegeMap.setMaxBounds(nepalBounds);
  mapFilterLabel.textContent = activeFilter === "all" ? "All universities" : activeFilter;
}

function renderColleges(filter = "all") {
  activeFilter = filter;
  const filtered =
    filter === "all"
      ? colleges
      : ["TU", "RJU", "FWU", "MWU"].includes(filter)
        ? colleges.filter((college) => college.university === filter)
        : colleges.filter((college) => college.region === filter);
  collegeCount.textContent = filtered.length;
  universityCount.textContent = new Set(filtered.map((college) => college.university)).size;
  collegeList.innerHTML = filtered
    .map(
      (college) => `
        <article class="college-card">
          <div>
            <h3>${college.name}</h3>
            <p>${college.university} - ${college.city} - ${college.type} - ${college.seats ? `${college.seats} seats` : "seats to verify"}</p>
            <div class="tag-row">
              <span class="tag">${college.university}</span>
              <span class="tag">${college.region}</span>
              <span class="tag">Sample score ${college.range[0]}+</span>
              <span class="tag fill-fast">${college.fill}</span>
            </div>
          </div>
          <a class="secondary-btn" href="#predictor">Check fit</a>
        </article>
      `
    )
    .join("");
  renderCollegeMap(filtered);
}

function renderRoadmap() {
  roadmapNode.innerHTML = roadmap
    .map(
      ([title, body], index) => `
        <div class="timeline-item">
          <span>${index + 1}</span>
          <div>
            <h3>${title}</h3>
            <p>${body}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function renderFocusAreas() {
  focusNode.innerHTML = focusAreas
    .map(
      ([label, score]) => `
        <div class="focus-meter">
          <div class="meter-label">
            <span>${label}</span>
            <span>${score}% focus</span>
          </div>
          <div class="meter-track"><span style="--score: ${score}%"></span></div>
        </div>
      `
    )
    .join("");
}

function renderPlan(days = "30") {
  studyPlan.innerHTML = plans[days]
    .map(
      ([title, body]) => `
        <article class="plan-card">
          <strong>${title}</strong>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
}

function renderResources() {
  resourceGrid.innerHTML = resources
    .map(
      ([title, body, tag]) => `
        <article class="resource-card">
          <em>${tag}</em>
          <strong>${title}</strong>
          <p>${body}</p>
          <button class="secondary-btn button-reset lead-trigger" type="button">Get updates</button>
        </article>
      `
    )
    .join("");
}

function renderQuiz() {
  if (practiceWorkspace.hidden) {
    return;
  }
  scoreBox.hidden = true;
  const subject = subjectSelect.value || "All subjects";
  const topic = topicSelect.value || "All topics";
  const limit = Number(questionLimit.value || 10);
  quiz = studyPortQuestionBank.generateQuestions({ subject, topic, limit });
  quizArea.innerHTML = quiz
    .map(
      (item, questionIndex) => `
        <fieldset class="question">
          <legend><strong>${questionIndex + 1}. ${item.question}</strong></legend>
          <div class="tag-row">
            <span class="tag">${item.subject}</span>
            <span class="tag">${item.topic}</span>
            <span class="tag">${item.difficulty}</span>
          </div>
          <div class="option-list">
            ${item.options
              .map(
                (option, optionIndex) => `
                  <label>
                    <input type="radio" name="question-${questionIndex}" value="${optionIndex}" />
                    <span>${option}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </fieldset>
      `
    )
    .join("");
}

function calculateQuiz() {
  const answers = quiz.map((_, index) => {
    const checked = document.querySelector(`input[name="question-${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
  const correct = answers.reduce((total, answer, index) => total + (answer === quiz[index].answer ? 1 : 0), 0);
  const percent = Math.round((correct / quiz.length) * 100);
  const missedTopics = quiz
    .filter((item, index) => answers[index] !== item.answer)
    .map((item) => item.topic)
    .filter((topic, index, list) => list.indexOf(topic) === index)
    .slice(0, 4);
  const nextStep = percent >= 75 ? "Move into full exam mode and score planning." : `Review: ${missedTopics.join(", ") || "the attempted topics"}.`;

  scoreBox.hidden = false;
  scoreBox.innerHTML = `
    <strong>Your practice score: ${correct}/${quiz.length} (${percent}%)</strong>
    <p>${nextStep}</p>
    <button class="primary-btn button-reset lead-trigger" type="button">Send result to me</button>
  `;
}

function renderPracticeControls() {
  subjectSelect.innerHTML = ["All subjects", ...studyPortQuestionBank.subjectNames]
    .map((subject) => `<option value="${subject}">${subject}</option>`)
    .join("");

  renderTopicOptions();
  bankSummary.innerHTML = `
    <span>${studyPortQuestionBank.counts.toLocaleString()}+ generated MCQs</span>
    <span>100-mark exam blueprint</span>
    <span>Subject and topic practice</span>
  `;
}

function renderTopicOptions() {
  topicSelect.innerHTML = studyPortQuestionBank
    .allTopics(subjectSelect.value || "All subjects")
    .map((topic) => `<option value="${topic}">${topic}</option>`)
    .join("");
}

function predictColleges(score, region) {
  const matches = colleges
    .filter((college) => region === "Any" || college.region === region)
    .map((college) => {
      const minimum = college.range[0];
      const status = score >= minimum + 8 ? "Likely" : score >= minimum ? "Target" : score >= minimum - 8 ? "Reach" : "Low chance";
      return { ...college, status };
    });

  const visibleMatches = matches.slice(0, 14);
  predictionResults.innerHTML = visibleMatches
    .map(
      (college) => `
        <div class="prediction-card">
          <strong>${college.name}</strong>
          <p>${college.university} - ${college.city} - ${college.seats ? `${college.seats} seats` : "seats to verify"} - ${college.status}</p>
        </div>
      `
    )
    .join("") + (matches.length > visibleMatches.length ? `<p class="muted">Showing ${visibleMatches.length} best visible matches. Use university or region filters to narrow the list.</p>` : "");
}

function openLeadDialog() {
  if (typeof leadDialog.showModal === "function") {
    leadDialog.showModal();
  }
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderColleges(button.dataset.filter);
  });
});

document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-plan]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPlan(button.dataset.plan);
  });
});

document.body.addEventListener("click", (event) => {
  if (event.target.closest(".lead-trigger")) {
    openLeadDialog();
  }
});

submitQuiz.addEventListener("click", calculateQuiz);
resetQuiz.addEventListener("click", renderQuiz);
startPractice.addEventListener("click", renderQuiz);
subjectSelect.addEventListener("change", () => {
  renderTopicOptions();
  renderQuiz();
});

predictorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const score = Number(document.querySelector("#scoreInput").value);
  const region = document.querySelector("#regionInput").value;
  predictColleges(score, region);
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const lead = Object.fromEntries(formData.entries());
  localStorage.setItem("studyportLead", JSON.stringify(lead));
  leadDialog.close();
});

examLeadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const lead = {
    name: document.querySelector("#examName").value.trim(),
    email: document.querySelector("#examEmail").value.trim(),
    phone: document.querySelector("#examPhone").value.trim(),
    source: "mock-exam",
  };
  localStorage.setItem("studyportExamLead", JSON.stringify(lead));
  practiceWorkspace.hidden = false;
  practiceGate.hidden = true;
  renderQuiz();
});

renderColleges();
renderRoadmap();
renderFocusAreas();
renderPlan();
renderResources();
renderPracticeControls();
predictColleges(72, "Any");
