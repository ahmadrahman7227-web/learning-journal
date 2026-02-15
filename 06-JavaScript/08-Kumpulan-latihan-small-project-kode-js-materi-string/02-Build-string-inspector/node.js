const caSentence = "Google is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasGoogle = caSentence.includes("Google");
console.log(`caSentence.includes("Google") returns ${hasGoogle} because the word "Google" is in the sentence.`);

const hasJavaScript = caSentence.includes("JavaScript");
console.log(`caSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseCA = caSentence.includes("codeacademy");
console.log(`caSentence.includes("codeacademy") returns ${hasLowercaseCA} because includes is case-sensitive.`);

const message = "Welcome to CodeAcademy!";

console.log("Here are some examples of the slice() method:");

const platform = message.slice(11, 22);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log("Workshop complete! You now know how to use includes() and slice().");