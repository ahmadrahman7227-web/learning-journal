# Tinjauan String JavaScript

[11 - Februari - 2026]

---

## 1. Dasar-Dasar String

- **Definisi**:

String adalah rangkaian karakter yang diapit oleh tanda kutip tunggal (''), tanda kutip ganda (""), atau tanda kutip terbalik (``). String adalah tipe data primitif dan bersifat tidah dapat diubah (immutable). Ketidakdapatan diubah berarti setelah sebuah string dibuat tersebut tidak dapat diubah.

- **Mengakses Karakter dari String**:

Untuk mengakses kkarakter dari sebuah string, kita dapat menggunakan notasi kurung siku dan memasukan nomor indeks. **Indeks** adalah posisi karakter dalam sebuah string dan dimuai dari nol (0).

```js
const developer = "Jessica";
console.log(developer[0]); // J
```

- **\n** (Karakter Baris Baru):

Kita dapat membuat baris baru dalam sebuah string dengan menggunakan **\n** (karakter baris baru).

```js
const poem = "Mawar berwana merah,\nViolet berwarna biru,\nJavaScript itu menyenangkan,\nAnd so are you.";
console.log(poem);
```

- **Cara Menyisipkan Karakter dalam String (Escaping Strings)**:

Kita dapat menyisipkan karakter dalam string dengan menempatkan **garis miring trbalik (\)** di depan tanda kutip.

```js
const statment = "She said, \"Hello!\"";
console.log(statment); // She said, "Hello!"
```

---

## 2. Template Literals (Template Strings) and String Interpolation

- **Definition**:

Template Literal didefinisikan dengan tanda backtick (`). Template Literal memungkinkan manipulasi string yang lebih mudah, termasuk menyematkan variabel langsung dalam string, fitur yang dikenal sebagai interpolation string.

```js
const name = "Jessica";
const greeting = `Hello, ${name}!`;

console.log(greeting); // "Hello, Jessica!"
```

---

## 3. ASCII, the charCodeAt() Method and the fromCharCode() Method

- **ASCII**:

ASCII, singkatan dari **American Standard Code for Information Interchange**, adalah standar pengkodean karakter yang digunakan dalam komputer untuk merepresentasikan teks. Standar ini menetapkan nilai numerik untuk setiap karakter, yang secara universal dikenali oleh mesin.

- **Metode charCodeAt()**:

 ini dipanggil pada sebuah string dan mengembalikan kode ASCII dari karakter pada indeks yang ditentukan .

```js
const letter = "A" ;
console.log(letter.charCodeAt( 0 )); // 65
```

- **Metode fromCharCode()**:

 ini mengubah kode ASCII menjadi karakter yang sesuai .

```js
const char = String.fromCharCode ( 65 );
console.log(char); // A
```

---

## 4. Metode String Umum Lainnya

- **Metode indexOf**:

Ini digunakan untuk mencari substring di dalam sebuah string. Jika substring ditemukan, metode **indexOf** mengembalikan index (atau posisi) kemunculan pertama substring tersebut. Jika substring tidak ditemukan, **indexOf** metode ini mengembalikan -1, yang menunjukan bahwa pencarian tidak berhasil.

```js
const text = "The quick brown fox jumps over the lazy dog." ;

console.log(text.indexOf( "fox" )); // 116
console.log(text.indexOf( "cat" )); // -1
```

- **Metode includes()**:

ini digunakan untuk memeriksa apakah sebuah string mengandung substring tertentu. jika substring tersebut ditemukan di dalam string, metode ini mengembalikan nilai **true**. Jika tidak, metode ini mengembalikan nilai **false**.

```js
const text = "Text quick brown fox jumps over the lazy dog." ;

console.log(text.includes( "fox" )); // true
console.log(text.includes( "cat" )); //false
```

- **Metode slice()**:

Ini mengekstrak sabagian dari sebuah string dan mengembalikan string baru, tanpa mengubah string asli. Metode ini menerima dua parameter: index awal dan index akhir (opsional).

```js
const text = "Belajar JavaScript" ;

console.log(text.slice( 0, 7 )); // Belajar
console.log(text.slice( 7, 17 )); // JavaScript
```

- **topUpperCase()**:

Metode ini mengubah semua karakter menjadi huruf besar dan mengembalikan string baru yang seluruhnya berisi karakter huruf besar.

```js
const text = "Hallo, dunia!";

console.log(text.to.UpperCase()); // "HALO, DUNIA!"
```

- **Metode toLowerCase()**:

Ini mengubah semua karakter dalam sebuah string menjadi huruf kecil.

```js
const text = "Hallo, Dunia!";

console.log(text.toLowerCase()); // "hallo, dunia!"
```

- **Metode replace()**:

Ini ememungkinkan kita menemukan nilai tertentu (seperti kata atau karakter) dalam sebuah string dan menggantinya dengan nilai lain. Metode ini mengembalikan string baru dengan penggantian tersebut dan membiarkan string asli tidak berubah karena string JavaScript bersifat immutable (tidak dapat diubah).

```js
const text = "I like cats";

console.log(text.replace("cats", "dogs")); // "I like dogs"
```

- **Metode replaceAll()**:

Ini memungkinkan kita untuk menemukan semua kemunculan nilai tertentu (kata, katakter, atau pola) dalam sebuah string dan menggantinya dengan nilai lain. Cara kerjanya mirip dengan **replace()** tetapi alih-alih berhenti setelah kecocockan pertama, metode ini memperbarui setiap kecocokan yang ditemukan dalam string.

```js
const text = "I love cats and cats are so much fun!";
console.log(text.replaceAll("cats", "dogs")); // " I love dogs and dogs are so much fun!"
```

- **Metode repeat()**:

Ini digunakan untuk mengulang sebuah string sebanyak mungkin.

```js
const text = "Hello";

console.log(text.repeat(3)); // "HelloHelloHello"
```

- **Metode trim()**:

Ini digunakan untuk menghapus spasi dari awal dan akhir string.

```js
const text = " Hello, world! ";
console.log(text.trim()); // "Hello, world!"
```

- **Metode trimStart()**:

ini menghapus spasi dari awal.

```js
const text = " Hello, world! ";

console.log(text.trimStart()); // "Hello, world! "
```

- **Metode trimEnd()**:

Ini menghapus spasi dari akhir string.

```js
const text = " Hallo, world! ";

console.log(text.trimEnd()); // " Hello, world!"
```

- **Metode prompt()**:

Ini digunakan untuk mendapatkan informasi dari pengguna melalui formulir kotak dialog. Metode **window** ini menerima dua argumen. Argumen pertama adalah pesan yang akan muncul di dalam kotak dialog, biasanya meminta pengguna untuk memasukkan informasi. Argumen kedua adalah nilai default yang bersifat opsional dan akan mengisi kolom input secara awal.

```js
const answer = window.prompt("What's your favorite animal?"); // This will change depending on what the user answers
```