# JavaScript Loops Review


## Working with Loops

### `for` Loop: 

- This type of loop is used to repeat a block of code a certain number of times. This loop is broken up into three parts: the initialization statement, the condition, and the increment/decrement statement. The initialization statement is executed before the loop starts. It is typically used to initialize a counter variable. The condition is evaluated before each iteration of the loop. An iteration is a single pass through the loop. If the condition is true, the code block inside the loop is executed. If the condition is false, the loop stops and you move on to the next block of code. The increment/decrement statement is executed after each iteration of the loop. It is typically used to increment or decrement the counter variable.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// output: 1 2 3 4 5 (arah vertikal)

```

### `for...of` Loop: 

This type of loop is used when you need to loop over values from an iterable. Examples of iterables are arrays and strings.

- Berikut adalah sintaksis dasar untuk `for...of` loop:

```js
for (variable of iterable) {
  // code block to be executed
}
```


```js
const str = 'freeCodeCamp';

for (let char of str) {
  console.log(char);
}
```

- `char` yang akan mewakili karakter saat ini dalam string.
- `num` yang akan mewakili nomor saat ini dalam array. 

```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num); // // output: 1 2 3 4 5 (arah vertikal)
}
```

```js
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
```
- Dalam contoh ini, kita memiliki berbagai objek yang disebut `people`. Setiap objek memiliki `name` dan `age` properti.
Ketika kita loop melalui array, kita membuat variabel yang disebut personyang akan mewakili objek saat ini dalam array.
Di dalam lingkaran, kami memasukkan pesan ke konsol.
Pesan pertama akan menjadi `John is 30 years old`, Pesan yang kedua adalah `Jane is 25 years old`, dan pesan ketiga akan `Jim is 40 years old`.

- Penting untuk dicatat bahwa Anda dapat menggunakan `let`, atau `const` ketika menyatakan variabel dalam `for...of` loop.
Jika Anda akan menggunakan `const` Namun, pastikan bahwa nilai variabel tidak berubah di dalam lingkaran. Jika tidak, Anda akan mendapatkan kesalahan.
Berikut ini adalah contoh penggunaan `const` yang menghasilkan kesalahan:

```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
  num = num + 1; // This will cause an error
}
```


### `for...in` Loop: 

This type of loop is best used when you need to loop over the properties of an object. This loop will iterate over all enumerable properties of an object, including inherited properties and non-numeric properties.

```js
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}

// apple
// red
// 0.99
```

```js
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

for (const prop in person) {
  console.log(person[prop]);
}
```
Yang `address` Properti adalah objek itu sendiri. Yang `for...in` loop juga akan loop di atas sifat-sifat personobjek dan log seluruh `address` Keberanian pada konsol.

Berikut adalah apa hasilnya akan terlihat seperti di konsol:

```js
// John
// 30
// { street: '123 Main St', city: 'Anytown', state: 'CA' }
```

- Jika Anda ingin loop atas sifat-sifat addressobjek, Anda dapat bersarang yang lain for...inloop di dalam yang pertama.

```js
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nestedProp in person[prop]) {
      console.log(person[prop][nestedProp]);
    }
  } else {
    console.log(person[prop]);
  }
}
```
- Output nya:

```js
"John"
 30
"123 Main St"
"Anytown"
"CA"
```

1. Fungsi `isObject(obj)`

Ini adalah "filter" atau "penjaga gerbang" utama kita.

    Tujuan: Memastikan bahwa data yang kita periksa benar-benar sebuah Objek Murni `(seperti {a: 1})` dan bukan data lain yang sering menyamar sebagai objek di JavaScript.

    Kenapa butuh tiga pengecekan?

        typeof obj === 'object': Mengecek apakah tipe datanya objek.

        !Array.isArray(obj): Karena di JS, Array dianggap objek. Kita pakai tanda seru (!) untuk bilang: "Pastikan ini BUKAN Array".

        obj !== null: Karena ada bug sejarah di JS di mana null terbaca sebagai object. Kita harus pastikan isinya BUKAN null.

2. Loop `for...in` Pertama

    Tujuan: Berjalan di lapisan terluar dari objek person.

    Variabel prop: Mewakili nama kunci (key) di tingkat pertama, yaitu: name, age, dan address.

    Cara kerja: Ia mengambil satu per satu properti tersebut untuk diperiksa oleh fungsi isObject.

3. Kondisi `if (isObject(...))`

    Tujuan: Membuat keputusan.

        Jika benar (True): Artinya properti tersebut adalah objek lagi (dalam kasus ini adalah address). Maka, kita harus "masuk lebih dalam".

        Jika salah (False): Artinya itu hanya data biasa (seperti "John" atau 30). Maka, langsung saja cetak ke konsol.

4. Loop `for...in` Bersarang (`nestedProp`)

    Tujuan: Ini adalah "penyelam" kita. Ia hanya berjalan jika ditemukan objek di dalam objek.

    Variabel nestedProp: Mewakili nama kunci di dalam objek address, yaitu: street, city, dan state.

    Cara kerja: Ia mengambil nilai dari dalam address dan mencetaknya satu per satu.



### `while` Loop: 

This type of loop will run a block of code as long as the condition is true.

- Berikut adalah sintaksis dasar untuk whileloop:

```js
while (condition) {
  // code block to be executed
}
```

```js
let i = 5;

while (i > 0) {
  console.log(i);
  i--;
}
// 5
// 4
// 3
// 2
// 1

```
```js
let counter = 0;
while(counter < 5) {
  console.log(counter);
  counter++;
}
```

Dalam contoh ini, kita memiliki variabel yang disebut `counter` yang diinisialisasi untuk `0`. Yang `while` loop akan terus berjalan selama nilai `counter` kurang dari `5`. Di dalam loop, kita mencatat nilai `counter` ke konsol dan kemudian kenaikan counteroleh `1`.

## `do...while` Loop: 

This type of loop will execute the block of code at least once before checking the condition.

- sintaks dasar:

```js
do {
  // code block to be executed
} while (condition);
```


```js
let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (Number(userInput) < 1 || Number(userInput) > 10);

alert("You entered a valid number!");
```

```js
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 5); 
``` 

Dalam contoh ini, kita memiliki variabel yang disebut `counter` yang diinisialisasi untuk `0`. Yang `do...while` loop akan mencatat nilai dari `counter` ke konsol dan kemudian kenaikan `counter` oleh `1`. Setelah mengeksekusi blok kode, ia memeriksa apakah nilai `counter` kurang dari `5`. Jika ya, loop akan terus berjalan. Jika tidak, loop akan berhenti.

### Salah satu perbedaan utama antara `do...while` loop dan a `while` loop 

adalah bahwa do...whileloop akan mengeksekusi blok kode setidaknya sekali sebelum memeriksa kondisi.
Jika kondisinya benar, blok kode akan terus dilakukan. Jika kondisinya salah, blok kode akan berhenti mengeksekusi.

## `break` and `continue` Statements

- Definition:

 A break statement is used to exit a loop early, while a continue statement is used to skip the current iteration of a loop and move to the next one.

```js
// Example of break statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, and 4
```
Dalam contoh di atas, loop mulai menghitung pada 0dan sementara `i` kurang dari `10`, loop akan terus berjalan.
Di dalam loop, kita memeriksa apakah `i` adalah sama dengan `5`. Jika ya, kita menggunakan `break` Pernyataan untuk keluar dari loop lebih awal. Jika tidak, kita mencatat nilai dari `i` untuk konsol. Jadi output dari kode akan mencetak angka `0, 1, 2, 3, dan 4`.


```js
// Example of continue statement 
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, 4, 6, 7, 8, and 9
```
Sama seperti sebelumnya, kita telah diinisialisasi `i` untuk `0` dan memiliki kondisi yang akan menjalankan loop selama `i` kurang dari `10`.
Di dalam loop, ketika `i` adalah sama dengan `5`, kita menggunakan `continue` Pernyataan untuk melewatkan iterasi saat ini dan pindah ke yang berikutnya.
Output dari kode ini akan mencetak angka `0, 1, 2, 3, 4, 6, 7, 8, dan 9`. Nomor tersebut `5` dilewati karena `continue` pernyataan.

- Berikut adalah contoh penggunaan label dengan breakpernyataan:

```js
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

Dalam contoh ini, kita memiliki luar `for` loop berlabel `outerLoop`dan batin `for` loop berlabel `innerLoop`.
Ketika `i` adalah sama dengan `1` dan `j` adalah sama dengan `1`, kita menggunakan `break` Pernyataan dengan `outerLoop` label untuk keluar dari loop luar lebih awal. Ini akan keluar dari loop dalam dan luar.

- Output dari kode ini akan log berikut ke konsol:

```js
"i: 0, j: 0"
"i: 0, j: 1"
"i: 0, j: 2"
"i: 1, j: 0"
```
