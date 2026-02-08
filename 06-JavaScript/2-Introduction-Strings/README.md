# Introduction Strings

[08 - Februari - 2026]

---

## Apa itu string dalam JavaScript dan apa itu Immutabilitas string ?

1. String

- String adalah urutan karakter yang digunakan untuk mempresentasikan data teks.
- Untuk membuat string di JavaScript, harus menggunakan tanda kutip tunggal ('') atau ganda ("").

```js
let singleQuotes = 'Contoh';

let doubleQuotes = "Contoh";
```

2. Immutabilitas

Berarti bahwa setelah sesuatu dibuat, ia tidak dapat diubah.

Contoh cara kerjanya:

```js
let name = "Leo";
console.log(name); // Leo

name = "Zee";
console.log(name); // Zee
```

---

## Penggabungan String dengan Variabel

1. String Concatenation

adalah penggabungan bagian bagian teks. Penggabungan string dapat menggunakan **(+)**, **(+=)**, dan **concat()**.

2. Operator **+**

Definisi: 

Operator **+** adalah salah satu metode paling sederhana dan paling sering digunakan untuk menggabungkan string.

Fungsi:

Operator ini memungkinkan untuk menggabungkan beberapa string atau menggabungkan string dengan variabel yang berisi teks.

Contoh: 

```js
let firstName = "Jhon";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName); // Jhon Doe
```

Kelemahan:

Untuk penggabungan string dapat menyebabkan maslah spasi jika tidak mengatur spasi antara string. Jika tidak menggunakan **(" ")** diantara variabel maka tidak ada spasi antara JhonDoe.

3. Operator **+=**

Fungsi:

Jika perlu menambahkan atau menyisipkan ke dalam string yang sudah ada. Operator **+=** berguna ketika ingin mengembangkan string dengan menambahkan banyak teks ke dalamnya seiring waktu.

Contoh:

```js
let greeting = 'Hello';
greeting += ', Jhon';

console.log(greeting); // Hello, Jhon
```

4. **concat()**

```js
let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat('', str2);
console.log(result); // Hello World
```

---

## Sebelum lanjut kita harus tau apa itu Fungsi dan Metode

- Fungsi:

adalah blok kode yang dapat digunakan kembali, yang melakukan tugas spesifik dan dapat di panggil dengan berbagai input.

- Metode 

adalah jenis fungsi yang terkait dengan suatu objek, artinya metode tersebut beroperasi pada data yang terdapat di dalam objek tersebut.

---

## Kegunaan **console.log**

- **console.log** adalah alat seerhana yang ampuh digunakan untuk menampilkan pesan atau mengeluarkan informasi ke konsol browser.
- Alat ini sebagian besar digunakan oleh pengembang untuk melakukan debugging dan memeriksa kode saat mengerjakan program.

```js
console.log("Hello"); // Hello

let num = 5;
console.log(num); // 5

let name = "Alice";
console.log("Hello, " + name + "!"); // Hello, Alice!

let name = "Leo";
let age = "21";
console.log("Name: ", name, "Age: ", age); // Name: Leo Age: 21
```