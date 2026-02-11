// Penggunaan Index 
const developer = "Jessica";
console.log(developer[0]); // J

// \n (karakter baris baru)
const poem = "Mawar berwana merah,\nViolet berwarna biru,\nJavaScript itu menyenangkan,\nAnd so are you.";
console.log(poem);

// Escaping String (menghindari string)
const statment = "She said, \"Hello!\"";
console.log(statment); // She said, "Hello!"

// Template Literal
const name = "Jessica";
const greeting = `Hello, ${name}!`;

console.log(greeting); // "Hello, Jessica!"

// MetodecharCodeAt()
const letter = "A" ;
console.log(letter.charCodeAt( 0 )); // 65

// MetodefromCharCode()
const char = String.fromCharCode ( 65 );
console.log(char); // A

// metode indexOf()
const text = "The quick brown fox jumps over the lazy dog." ;

console.log(text.indexOf( "fox" )); // 116
console.log(text.indexOf( "cat" )); // -1

// Metode includes
// const text = "Text quick brown fox jumps over the lazy dog." ;

// console.log(text.includes( "fox" )); // true
// console.log(text.includes( "cat" )); //false

// // Metode slice()
// const text = "Belajar JavaScript" ;

// console.log(text.slice( 0, 7 )); // Belajar
// console.log(text.slice( 7, 17 )); // JavaScript

// // Metode topUpperCase()
// const text = "Hallo, dunia!";

// console.log(text.to.UpperCase()); // "HALO, DUNIA!"

// // Metode toLowerCase
// const text = "Hallo, Dunia!";

// console.log(text.toLowerCase()); // "hallo, dunia!"

// // Mettode replace()
// const text = "I like cats";

// console.log(text.replace("cats", "dogs")); // "I like dogs"

// // replaceAll()
// const text = "I love cats and cats are so much fun!";
// console.log(text.replaceAll("cats", "dogs")); // " I love dogs and dogs are so much fun!"

// // repeat()
// const text = "Hello";

// console.log(text.repeat(3)); // "HelloHelloHello"

// // trim()
// const text = " Hello, world! ";
// console.log(text.trim()); // "Hello, world!"

// // trimStart()
// const text = " Hello, world! ";

// console.log(text.trimStart()); // "Hello, world! "

// // trimEnd()
// const text = " Hallo, world! ";

// console.log(text.trimEnd()); // " Hello, world!"

// prompt()
const answer = window.prompt("What's your favorite animal?"); // This will change depending on what the user answers

