const questions = [
  {
    category: "Sejarah",
    question: "Siapa President kita saat ini ?",
    choices: ["Jokowi", "Prabowo", "SBY"],
    answer: "Prabowo"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "What is the largest continent on Earth?",
    choices: ["Europe", "North America", "Asia"],
    answer: "Asia"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit"],
    answer: "Central Processing Unit"
  },
];

// PERBAIKAN: Gunakan nama parameter yang jelas (questionsArray) 
// agar tidak tertukar dengan array global 'questions'
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
};

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

function getResults(question, computerChoice) {
  // Requirement 14: Exact equality (===)
  if (computerChoice === question.answer) {
    // Requirement 12: Return string yang tepat
    return "The computer's choice is correct!";
  } else {
    // Requirement 13: Return string dengan template literal yang tepat
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
};

// --- CARA CEK DI CONSOLE ---

// 1. Simpan hasil fungsi ke dalam variabel
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);

// 2. Jalankan console.log menggunakan variabel tersebut
console.log("Pertanyaan:", randomQuestion.question);
console.log("Pilihan Komputer:", computerChoice);
console.log("Hasil:", getResults(randomQuestion, computerChoice)); 