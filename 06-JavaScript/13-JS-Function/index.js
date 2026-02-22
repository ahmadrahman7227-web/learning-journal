// ==========================================
// 1. DEFINISI FUNGSI
// Di sini kita menentukan PARAMETER.
// Parameter adalah "label" atau "wadah kosong".
// ==========================================
function mesinKopi(bahan1, bahan2) { 
  // bahan1 dan bahan2 adalah PARAMETER
  return "Kopi rasa " + bahan1 + " dengan campuran " + bahan2;
}


// ==========================================
// 2. PEMANGGILAN FUNGSI
// Di sini kita memberikan ARGUMEN.
// Argumen adalah "isi" atau "nilai nyata".
// ==========================================

// "Gula" mengisi bahan1, "Susu" mengisi bahan2
const pesananSatu = mesinKopi("Gula", "Susu"); 

// "Cokelat" mengisi bahan1, "Hazelnut" mengisi bahan2
const pesananDua = mesinKopi("Cokelat", "Hazelnut"); 

console.log(pesananSatu); // Output: Kopi rasa Gula dengan campuran Susu
console.log(pesananDua); // Output: Kopi rasa Cokelat dengan campuran Hazelnut





function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!




function greet() {
  console.log("Hello, Jessica!");
}
greet(); // "Hello, Jessica!"



// parameter dan argumentasi:
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!
// nameberfungsi sebagai parameter sementara string Alicedan Nickadalah sebagai argumen. Sekarang kita memiliki fungsi yang dapat digunakan kembali yang dapat digunakan puluhan kali di seluruh kode kita dengan argumen yang berbeda.



// Ketika sebuah fungsi selesai eksekusi, ia akan selalu mengembalikan nilai. Secara default, nilai pengembalian akan undefined. 
function doSomething() {
  console.log("Doing something...");
}
let result = doSomething();
console.log(result); // undefined



// ika Anda membutuhkan fungsi Anda untuk mengembalikan nilai tertentu, maka Anda harus menggunakan return pernyataan. 
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7



// Sejauh ini, kami telah bekerja dengan fungsi bernama, tetapi Anda juga dapat membuat apa yang disebut fungsi anonim. Fungsi anonim adalah fungsi tanpa nama yang dapat diberikan ke variabel seperti ini:

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7



// Fungsi mendukung parameter default, memungkinkan Anda untuk menetapkan nilai default untuk parameter. Nilai-nilai default ini digunakan jika fungsi disebut tanpa argumen untuk parameter tersebut. Berikut adalah contoh:

function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!

// Dalam contoh ini, jika tidak ada argumen yang disediakan untuk name, itu default untuk Guest.



