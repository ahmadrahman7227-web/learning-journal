# JavaScript Arrays


## Dasar-Dasar Array JavaScript

- Definisi: 

Array JavaScript adalah kumpulan nilai yang dipesan, masing-masing diidentifikasi oleh indeks numerik. Nilai-nilai dalam array JavaScript dapat dari berbagai jenis data, termasuk angka, string, booleans, objek, dan bahkan array lainnya. Array berdekatan dalam memori, yang berarti bahwa semua elemen disimpan dalam satu blok lokasi memori yang terus menerus, memungkinkan pengindeksan yang efisien dan akses cepat ke elemen dengan indeks mereka.

```js
const developers = ["Jessica", "Naomi", "Tom"];
```

- Mengakses Elemen Dari Array: 

Untuk mengakses elemen dari array, Anda perlu mereferensikan array yang diikuti dengan nomor indeksnya di dalam kurung persegi. Array JavaScript adalah indeks berbasis nol yang berarti elemen pertama berada pada indeks 0, elemen kedua berada pada indeks 1, dll. Jika Anda mencoba mengakses indeks yang tidak ada untuk array, maka JavaScript akan kembali `undefined`.

```js
const developers = ["Jessica", "Naomi", "Tom"];
console.log(developers[0]) // "Jessica"
console.log(developers[1]) // "Naomi"

console.log(developers[10]) // undefined
```

- `length` Properti: Properti ini digunakan untuk mengembalikan jumlah barang dalam array.

```js
const developers = ["Jessica", "Naomi", "Tom"];
console.log(developers.length) // 3
```

- Memperbarui Elemen dalam Array: Untuk memperbarui elemen dalam array, Anda menggunakan operator penugasan (=) untuk menetapkan nilai baru ke elemen pada indeks tertentu.

```js
const fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'blueberry';

console.log(fruits); // ['apple', 'blueberry', 'cherry']
```


## Dua Array Dimensi (Two Dimensional Arrays)

- Definisi: 

Array dua dimensi (Two Dimensional Arrays) pada dasarnya adalah array array. Ini digunakan untuk mewakili data yang memiliki struktur seperti grid alami, seperti papan catur, spreadsheet, atau piksel dalam gambar. Untuk mengakses elemen dalam array dua dimensi, Anda memerlukan dua indeks: satu untuk baris dan satu untuk kolom.

```js
const chessboard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

console.log(chessboard[0][3]); // "Q"
```

## Array Destructuring

- Definition `Array` destructuring:

 adalah fitur dalam JavaScript yang memungkinkan Anda untuk mengekstrak nilai dari array dan menetapkannya ke variabel dengan cara yang lebih ringkas dan mudah dibaca. Ini menyediakan sintaks yang nyaman untuk membongkar elemen array ke dalam variabel yang berbeda.

```js
const fruits = ["apple", "banana", "orange"];

const [first, second, third] = fruits;

console.log(first); // "apple"
console.log(second); // "banana"
console.log(third); // "orange"
```

- Rest Syntax: Ini memungkinkan Anda untuk menangkap elemen yang tersisa dari array yang belum didestrukturisasi menjadi array baru.

```js
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
const [first, second, ...rest] = fruits;

console.log(first); // "apple"
console.log(second); // "banana"
console.log(rest); // ["orange", "mango", "kiwi"]
```

## Metode Array Umum (Common Array Methods)

- `push()` Metode: Metode ini digunakan untuk menambahkan elemen ke akhir array dan akan mengembalikan panjang baru.

```js
const desserts = ["cake", "cookies", "pie"];
desserts.push("ice cream");

console.log(desserts); // ["cake", "cookies", "pie", "ice cream"];
```

- `pop()` Metode: Metode ini digunakan untuk menghapus elemen terakhir dari array dan akan mengembalikan elemen yang dihapus. Jika arraynya kosong, maka nilai pengembalian akan undefined.

```js
const desserts = ["cake", "cookies", "pie"];
desserts.pop();

console.log(desserts); // ["cake", "cookies"];
```

- `shift()` Metode: Metode ini digunakan untuk menghapus elemen pertama dari array dan mengembalikan elemen yang dihapus. Jika arraynya kosong, maka nilai pengembalian akan undefined.

```js
const desserts = ["cake", "cookies", "pie"];
desserts.shift();

console.log(desserts); // ["cookies", "pie"];
```

- `unshift()` Metode: Metode ini digunakan untuk menambahkan elemen ke awal array dan akan mengembalikan panjang baru.

```js
const desserts = ["cake", "cookies", "pie"];
desserts.unshift("ice cream");

console.log(desserts); // ["ice cream", "cake", "cookies", "pie"];
```

- `indexOf()` Metode: Metode ini berguna untuk menemukan indeks pertama dari elemen tertentu dalam array. Jika elemen tidak dapat ditemukan, maka itu akan kembali -1.

```js
const fruits = ["apple", "banana", "orange", "banana"];
const index = fruits.indexOf("banana");

console.log(index); // 1
console.log(fruits.indexOf("not found")); // -1
```

- `splice()` Metode: 

Metode ini digunakan untuk menambah atau menghapus elemen dari posisi apa pun dalam array. Nilai pengembalian untuk splice()metode akan menjadi array dari item dihapus dari array. Jika tidak ada yang dihapus, maka array kosong akan dikembalikan. Metode ini akan bermutasi array asli, memodifikasinya di tempat daripada membuat array baru. Argumen pertama menentukan indeks untuk mulai memodifikasi array. Argumen kedua adalah jumlah elemen yang ingin Anda hapus. Argumen berikut adalah elemen yang ingin Anda tambahkan.

```js
const colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
```

    
- `includes()` Metode: Metode ini digunakan untuk memeriksa apakah array berisi nilai tertentu. Metode ini kembali truejika array berisi elemen yang ditentukan, dan falsejika tidak.

```js
const programmingLanguages = ["JavaScript", "Python", "C++"];

console.log(programmingLanguages.includes("Python")); // true
console.log(programmingLanguages.includes("Perl")); // false

    concat()Metode: Metode ini menciptakan array baru dengan menggabungkan dua atau lebih array.

const programmingLanguages = ["JavaScript", "Python", "C++"];
const newList = programmingLanguages.concat("Perl");

console.log(newList); // ["JavaScript", "Python", "C++", "Perl"]
```

- `slice()` Metode: 

ini mengembalikan array baru yang berisi salinan dangkal dari sebagian dari array asli, ditentukan oleh awal dan akhir indeks. Array baru berisi referensi ke elemen yang sama dengan array asli (bukan duplikat). Ini berarti bahwa jika unsur-unsurnya primitif (seperti angka atau string), nilai-nilai disalin; tetapi jika elemen adalah objek atau array, referensi disalin, bukan objek itu sendiri.

```js
const programmingLanguages = ["JavaScript", "Python", "C++"];
const newList = programmingLanguages.slice(1);

console.log(newList); // ["Python", "C++"]
```

- `Spread Syntax`: Spread Syntax yang tersebar digunakan untuk membuat salinan dangkal dari array.

```js
const originalArray = [1, 2, 3];
const shallowCopiedArray = [...originalArray];

shallowCopiedArray.push(4);

console.log(originalArray); // [1, 2, 3]
console.log(shallowCopiedArray); // [1, 2, 3, 4]
```

- `split()` Metode:

 ini membagi string menjadi berbagai substring dan menentukan di mana setiap perpecahan harus terjadi berdasarkan pemisah yang diberikan. Jika tidak ada pemisah yang disediakan, metode ini mengembalikan array yang berisi string asli sebagai elemen tunggal.

```js
const str = "hello";
const charArray = str.split("");

console.log(charArray); // ["h", "e", "l", "l", "o"]
```

- `reverse()` Metode: Metode ini membalikkan array di tempat.

```js
const desserts = ["cake", "cookies", "pie"];
console.log(desserts.reverse()); // ["pie", "cookies", "cake"]
```

- `join()` Metode: Metode ini menghubungkan semua elemen array menjadi satu string, dengan masing-masing elemen dipisahkan oleh pemisah tertentu. Jika tidak ada pemisah yang disediakan, atau string kosong `("")` digunakan, elemen akan bergabung tanpa pemisah.

```js
const reversedArray = ["o", "l", "l", "e", "h"];
const reversedString = reversedArray.join("");

console.log(reversedString); // "olleh"
```