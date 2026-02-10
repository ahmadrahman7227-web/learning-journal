# Bekerja dengan Tipe Data

[10 - Februari - 2026]

---

## 1. Dynamic Typing di JavaScript dan Perbedaannya dengan Bahasa Pemrograman yang Menggunakan Pengetikan Statis.

- JavaScript adalah bahasa pemrograman bertipe **dinamis**, artinya kita tidak perlu menentukan tipe data variabel saat mendeklarasikannya. Sebaliknya, tipenya ditentukan berdasarkan nilai yang diberikan pada variabel saat program berjalan. Hal ini memungkinkan kita untuk mengubah tipe variabel di sepanjang program.

- Contoh:

```js
let example = "Hello";
example = 42;
```

⚠️ Dalam contoh ini kita memiliki variabel bernama **example** dengan tipe data string. Tetapi kemudian kita memperbarui nilainya menjadi angka.

- Fleksibelitas pengetikan dinamis membuat JavaScrip lebih mudah dan fleksibel untuk digunakan dalam pembuatan skrip cepat, tetapi juga dapat menimbulakan bug yang mungkin sulit untuk dutangkap, terutama saat program anda semakin besar.

- Sebagai contoh jika mendeklarasikan variabel sebagai **integer** pada bahasa pemrograman bertipe statis seperti **C# atau C++**, anda hanya dapat menetapkan nilai **integer** padanya.

- Contoh dalam bahasa **C#**:

```js
int data = 42; // data must always be an integer
data = "Hello"; // This would cause an error in C#
```

### Kesimpulan Tipe Dinamis dan Statis

- **Tipe Dinamis**: 

Pengetikan dinamis JavaScript memungkinkan variabel untuk mengubah tipe secara bebas, yang menawarkan fleksibelitas tetapi dapat menyebabkan kesalahan yang tidak terduga selama eksekusi.

- **Tipe Statis**:

Bahasa pemrograman bertipe statis seperti **Java** mengharuskan kita menentukan tipe variabel d awal, yang membantu mendeteksi kesalahan sebelum dijalankan tetapi menawarkan fleksibilitas yang lebih sedikit.

---

## 2. Cara Kerja Operator **typeof** dan Apa itu Bug **typeof null** di JavaScript ?

- **Operator typeof** di JavaScript adalh alat sederhana namun ampuh yang memungkinkan kita melihat tipe data suatu variabel atau nilai. Operator ini selalu mengembalikan string yang menunjukan tipenya.

- Penggunaan **typeof** sangat berguna saat kita melakukan debugging atau mencoba memahami jenis data yang sedang kita kerjakan dalam kode.

- Contoh:

```js
let num = 42;
console.log(typeof num); // "number"
```

```js
let isUserLoggedIn = true;
console.log(typeof isUserLoggedIn); // "boolean"
```

- Namun, ada keanehan yang terkenal di JavaScript terkait **null**

- Contohnya:

```js
let exampleVariable = null;
console.log(typeof exampleVariable); // "object"
```

Dalam contoh ini, kita memiliki variabel bernama **exampleVariable** dan telah menetapkan nilainya yaitu **null**. Tetapi ketika kita menggunakan **typeof** operator, operator tersebut mengembalikan string **object**.