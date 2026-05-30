const studyPortQuestionBank = (() => {
  const subjects = {
    Mathematics: {
      target: 3000,
      examMarks: 25,
      topics: ["Algebra", "Trigonometry", "Coordinate Geometry", "Calculus", "Vectors", "Probability"],
    },
    Physics: {
      target: 2500,
      examMarks: 25,
      topics: ["Mechanics", "Heat and Thermodynamics", "Waves and Sound", "Optics", "Electricity and Magnetism", "Modern Physics"],
    },
    Chemistry: {
      target: 2500,
      examMarks: 25,
      topics: ["Physical Chemistry", "Atomic Structure", "Chemical Bonding", "Equilibrium", "Organic Chemistry", "Inorganic Chemistry"],
    },
    English: {
      target: 1200,
      examMarks: 15,
      topics: ["Grammar", "Vocabulary", "Comprehension", "Sentence Correction"],
    },
    "Computer and General IT": {
      target: 1000,
      examMarks: 10,
      topics: ["Computer Basics", "Number System", "Internet", "Programming Logic", "Database Basics"],
    },
  };

  const subjectNames = Object.keys(subjects);
  const counts = subjectNames.reduce((total, subject) => total + subjects[subject].target, 0);

  const letters = ["A", "B", "C", "D"];

  function shuffleOptions(correct, distractors, seed) {
    const options = [correct, ...distractors.slice(0, 3)];
    const shift = seed % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return {
      options: rotated.map(String),
      answer: rotated.findIndex((item) => item === correct),
    };
  }

  function item(id, subject, topic, difficulty, question, correct, distractors, explanation) {
    const shuffled = shuffleOptions(String(correct), distractors.map(String), id);
    return {
      id: `${subject.slice(0, 3).toUpperCase()}-${String(id).padStart(5, "0")}`,
      subject,
      topic,
      difficulty,
      question,
      options: shuffled.options,
      answer: shuffled.answer,
      explanation,
    };
  }

  const generators = {
    Mathematics(id, topic) {
      const n = (id % 9) + 2;
      const a = (id % 7) + 3;
      const b = (id % 11) + 5;
      const c = (id % 5) + 1;
      if (topic === "Algebra") {
        const x = n + c;
        return item(id, "Mathematics", topic, "Medium", `If ${a}x + ${b} = ${a * x + b}, find x.`, x, [x + 1, x - 1, a + b], `Subtract ${b} and divide by ${a}.`);
      }
      if (topic === "Trigonometry") {
        return item(id, "Mathematics", topic, "Easy", `If sin theta = ${n}/${n + 1}, which identity is always true?`, "sin^2 theta + cos^2 theta = 1", ["tan theta = sin theta + cos theta", "sin theta = cos theta", "cos^2 theta - sin^2 theta = 1"], "The Pythagorean identity is true for all theta.");
      }
      if (topic === "Coordinate Geometry") {
        const x1 = c;
        const y1 = n;
        const x2 = c + 4;
        const y2 = n + 3;
        return item(id, "Mathematics", topic, "Medium", `Find the distance between (${x1}, ${y1}) and (${x2}, ${y2}).`, 5, [4, 6, 7], "Use sqrt((4)^2 + (3)^2) = 5.");
      }
      if (topic === "Calculus") {
        return item(id, "Mathematics", topic, "Medium", `The derivative of x^${n} with respect to x is:`, `${n}x^${n - 1}`, [`x^${n - 1}`, `${n - 1}x^${n}`, `${n}x^${n}`], "Use the power rule d/dx x^n = nx^(n-1).");
      }
      if (topic === "Vectors") {
        return item(id, "Mathematics", topic, "Medium", `If vector a = (${n}, ${c}) and vector b = (${a}, ${b}), what is a dot b?`, n * a + c * b, [n + a + c + b, n * b - c * a, a * b], "Dot product is x1x2 + y1y2.");
      }
      return item(id, "Mathematics", topic, "Easy", `A fair die is rolled once. What is the probability of getting an even number?`, "1/2", ["1/3", "2/3", "1/6"], "The even outcomes are 2, 4, and 6 out of 6 outcomes.");
    },

    Physics(id, topic) {
      const m = (id % 8) + 2;
      const a = (id % 5) + 2;
      const u = (id % 6) + 3;
      if (topic === "Mechanics") {
        return item(id, "Physics", topic, "Medium", `A body of mass ${m} kg accelerates at ${a} m/s^2. What is the force?`, `${m * a} N`, [`${m + a} N`, `${m - a} N`, `${m * a * 2} N`], "Use F = ma.");
      }
      if (topic === "Heat and Thermodynamics") {
        return item(id, "Physics", topic, "Easy", "Which quantity remains constant in an isothermal process?", "Temperature", ["Pressure", "Volume", "Heat supplied"], "Isothermal means constant temperature.");
      }
      if (topic === "Waves and Sound") {
        const f = ((id % 5) + 2) * 100;
        const lambda = (id % 4) + 2;
        return item(id, "Physics", topic, "Medium", `A wave has frequency ${f} Hz and wavelength ${lambda} m. Find its speed.`, `${f * lambda} m/s`, [`${f + lambda} m/s`, `${f / lambda} m/s`, `${lambda / f} m/s`], "Use v = f lambda.");
      }
      if (topic === "Optics") {
        return item(id, "Physics", topic, "Easy", "The image formed by a plane mirror is:", "Virtual and laterally inverted", ["Real and inverted", "Real and magnified", "Virtual and upside down"], "Plane mirrors form virtual, erect, laterally inverted images.");
      }
      if (topic === "Electricity and Magnetism") {
        const r = (id % 6) + 2;
        return item(id, "Physics", topic, "Medium", `If current is ${a} A through a ${r} ohm resistor, what is voltage?`, `${a * r} V`, [`${a + r} V`, `${r / a} V`, `${a / r} V`], "Use Ohm's law V = IR.");
      }
      return item(id, "Physics", topic, "Medium", `A photon has energy E = hf. If frequency doubles, the energy becomes:`, "2E", ["E/2", "E", "4E"], "Photon energy is directly proportional to frequency.");
    },

    Chemistry(id, topic) {
      const n = (id % 5) + 1;
      if (topic === "Physical Chemistry") {
        return item(id, "Chemistry", topic, "Medium", `How many moles are present in ${18 * n} g of water?`, `${n} mol`, [`${18 * n} mol`, `${n / 2} mol`, `${n + 1} mol`], "Molar mass of water is 18 g/mol.");
      }
      if (topic === "Atomic Structure") {
        return item(id, "Chemistry", topic, "Easy", "The maximum number of electrons in the second shell is:", 8, [2, 18, 32], "Use 2n^2. For n = 2, maximum electrons = 8.");
      }
      if (topic === "Chemical Bonding") {
        return item(id, "Chemistry", topic, "Easy", "A covalent bond is formed by:", "Sharing of electrons", ["Transfer of protons", "Transfer of neutrons", "Loss of nucleus"], "Covalent bonding involves sharing electron pairs.");
      }
      if (topic === "Equilibrium") {
        return item(id, "Chemistry", topic, "Medium", "For an exothermic reaction at equilibrium, increasing temperature shifts equilibrium toward:", "Reactants", ["Products", "No side", "Catalyst"], "Heat behaves like a product in an exothermic reaction.");
      }
      if (topic === "Organic Chemistry") {
        return item(id, "Chemistry", topic, "Easy", "The functional group of alcohols is:", "-OH", ["-CHO", "-COOH", "-NH2"], "Alcohols contain the hydroxyl group.");
      }
      return item(id, "Chemistry", topic, "Easy", "Which element is an alkali metal?", "Sodium", ["Calcium", "Aluminium", "Chlorine"], "Sodium belongs to Group 1.");
    },

    English(id, topic) {
      if (topic === "Grammar") {
        return item(id, "English", topic, "Easy", "Choose the correct sentence.", "She has completed her assignment.", ["She have completed her assignment.", "She completing her assignment.", "She complete her assignment."], "Singular subject takes has in present perfect.");
      }
      if (topic === "Vocabulary") {
        return item(id, "English", topic, "Medium", "Choose the closest synonym of 'accurate'.", "Precise", ["Careless", "Doubtful", "Ordinary"], "Accurate means correct or precise.");
      }
      if (topic === "Comprehension") {
        return item(id, "English", topic, "Medium", "In exam instructions, the word 'attempt' most nearly means:", "Try or answer", ["Avoid", "Erase", "Copy"], "To attempt a question means to try to answer it.");
      }
      return item(id, "English", topic, "Medium", "Select the correct correction: 'He do not know the answer.'", "He does not know the answer.", ["He did not knows the answer.", "He do not knows the answer.", "He does not knows the answer."], "With third-person singular, use does and base verb.");
    },

    "Computer and General IT"(id, topic) {
      if (topic === "Computer Basics") {
        return item(id, "Computer and General IT", topic, "Easy", "Which one is an input device?", "Keyboard", ["Monitor", "Printer", "Speaker"], "A keyboard sends input to the computer.");
      }
      if (topic === "Number System") {
        const decimal = (id % 8) + 2;
        return item(id, "Computer and General IT", topic, "Medium", `The binary equivalent of decimal ${decimal} is:`, decimal.toString(2), [(decimal + 1).toString(2), `${decimal}`, (decimal * 2).toString(2)], "Convert decimal by repeated division by 2.");
      }
      if (topic === "Internet") {
        return item(id, "Computer and General IT", topic, "Easy", "HTTP is mainly used for:", "Web communication", ["Spreadsheet calculation", "Image compression", "Power supply"], "HTTP is the protocol used by the web.");
      }
      if (topic === "Programming Logic") {
        return item(id, "Computer and General IT", topic, "Medium", "A loop is used when we need to:", "Repeat a block of instructions", ["Store only images", "Delete memory permanently", "Increase screen size"], "Loops repeat instructions while a condition or count applies.");
      }
      return item(id, "Computer and General IT", topic, "Easy", "In a relational database, a row is also called a:", "Record", ["Field", "Table name", "Query"], "A row stores one record.");
    },
  };

  function allTopics(subject) {
    if (subject === "All subjects") {
      return ["All topics"];
    }
    return ["All topics", ...subjects[subject].topics];
  }

  function generateQuestions({ subject = "All subjects", topic = "All topics", limit = 10 } = {}) {
    const selectedSubjects = subject === "All subjects" ? subjectNames : [subject];
    const questions = [];
    let id = 1;

    while (questions.length < limit) {
      for (const selectedSubject of selectedSubjects) {
        const topicList = topic === "All topics" ? subjects[selectedSubject].topics : [topic];
        for (const selectedTopic of topicList) {
          questions.push(generators[selectedSubject](id, selectedTopic));
          id += 1;
          if (questions.length >= limit) {
            return questions;
          }
        }
      }
    }

    return questions;
  }

  return {
    subjects,
    subjectNames,
    counts,
    allTopics,
    generateQuestions,
    letters,
  };
})();
