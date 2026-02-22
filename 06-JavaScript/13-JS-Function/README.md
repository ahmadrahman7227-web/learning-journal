# JavaScript Functions 


## Functions JavaScript

- Fungsi adalah blok kode yang dapat digunakan kembali yang melakukan tugas tertentu.

- Fungsi dapat didefinisikan dengan menggunakan `function` kata kunci diikuti dengan nama, daftar parameter, dan blok kode yang melakukan tugas.

```js
function addNumbers(x, y, z) {
  return x + y + z;
}

console.log(addNumbers(5, 3, 8)); // Output: 16
```


- Argumen adalah nilai-nilai yang diteruskan ke fungsi ketika disebut.

- Panggilan fungsi adalah proses pelaksanaan fungsi dalam suatu program dengan menentukan nama fungsi diikuti oleh tanda kurung, opsional termasuk argumen di dalam tanda kurung.

- Ketika sebuah fungsi selesai eksekusi, ia akan selalu mengembalikan nilai.

- Secara default, nilai pengembalian fungsi adalah `undefined`.

- Yang `return` Kata kunci digunakan untuk menentukan nilai yang akan dikembalikan dari fungsi dan mengakhiri pelaksanaan fungsi.

- Parameter default memungkinkan fungsi untuk memiliki nilai-nilai yang telah ditentukan yang akan digunakan jika argumen tidak diberikan ketika fungsi disebut. Hal ini membuat fungsi lebih fleksibel dan mencegah kesalahan dalam kasus-kasus di mana argumen tertentu mungkin dihilangkan.


```js
const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + (amount * taxRate);
};

console.log(calculateTotal(100)); // Output: 105
```

- Ekspresi fungsi adalah fungsi yang Anda tetapkan ke variabel. Dengan melakukan ini, Anda dapat menggunakan fungsi di bagian mana pun dari kode Anda di mana variabel dapat diakses.

```js
const multiplyNumbers = function(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

console.log(multiplyNumbers(4, 5)); // Output: 20
```


## Fungsi Panah

- Fungsi panah adalah cara yang lebih ringkas untuk menulis fungsi dalam JavaScript.

```js
const calculateArea = (length, width) => {
  const area = length * width;
  return `The area of the rectangle is ${area} square units.`;
};

console.log(calculateArea(5, 10)); // Output: "The area of the rectangle is 50 square units."
```

- Ketika mendefinisikan fungsi panah, Anda tidak perlu `function` kata kunci.
Jika Anda menggunakan satu parameter, Anda dapat menghilangkan tanda kurung di sekitar daftar parameter.

```js
const cube = x => {
  return x * x * x;
};

console.log(cube(3)); // Output: 27
```


- Jika fungsi tubuh terdiri dari satu ekspresi, Anda dapat menghilangkan curly braces dan `return` kata kunci.


```js
const square = number => number * number;

console.log(square(5)); // Output: 25
```
```js
const greetings = name => console.log("Hello, " + name + "!");
```

- Jika fungsi panah Anda tidak memiliki parameter, maka Anda harus menggunakan tanda kurung seperti ini:

```js
const greetings = () => {
  console.log("Hello");
};
```

- Penting untuk dicatat bahwa menghapus tanda kurung dan kawat gigi keriting untuk sintaks fungsi reguler tidak akan berfungsi. Anda akan mendapatkan kesalahan jika Anda mencoba melakukan sesuatu seperti ini:

```js
// This will produce syntax errors 
function greetings name console.log("Hello, " + name + "!");
```

- Berikut adalah contoh menggunakan sintaks fungsi panah untuk menghitung `area`:

```js
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(calculateArea(5, 3)); // 15
```

- Kami membuat variabel di dalam fungsi yang disebut `area` dan kemudian mengembalikan variabel itu. Tapi kita bisa membersihkan kode kita sedikit dan mengembalikan perhitungan itu sendiri:

```js
const calculateArea = (width, height) => {
  return width * height;
}; 

console.log(calculateArea(5, 3)); // 15
```

- Jika Anda mencoba untuk menghapus kawat gigi keriting dan menempatkan perhitungan pada baris yang sama, maka Anda akan mendapatkan `Uncaught SyntaxError: Unexpected token 'return'` pesan:

```js
const calculateArea = (width, height) => return width * height;
```

- Alasan mengapa Anda mendapatkan kesalahan ini, adalah karena Anda perlu menghapus returnpernyataan. Ketika Anda menghapus itu returnStatement, kesalahan akan hilang dan fungsinya masih akan secara implisit mengembalikan perhitungan.

```js
const calculateArea = (width, height) => width * height;
```

### Catatan Tambahan

cara yang benar untuk menulis fungsi panah yang mengambil dua parameter dan mengembalikan jumlah mereka:

```js
(a, b) => a + b
```

cara yang benar untuk menulis fungsi panah yang tidak mengambil parameter dan mengembalikan string "Hello":

```js
() => "Hello"
```


## Ruang Lingkup dalam Pemrograman (Scope in Programming)

Lingkup dalam pemrograman mengacu pada visibilitas dan aksesibilitas variabel di berbagai bagian kode Anda. Ini menentukan di mana variabel dapat diakses atau dimodifikasi. Dalam JavaScript, pemahaman lingkup sangat penting untuk menulis kode bersih, efisien, dan bebas bug. Ada tiga jenis ruang lingkup utama: ruang lingkup global, ruang lingkup lokal, dan lingkup blok.

- **Lingkup global (global scope)**: 

Lingkup global adalah ruang lingkup terluar dalam program JavaScript. Variabel yang dinyatakan dalam lingkup global dapat diakses dari mana saja dalam kode Anda, termasuk dalam fungsi dan blok. Variabel-variabel ini sering disebut variabel global. Sementara variabel global dapat nyaman, mereka harus digunakan hemat karena mereka dapat menyebabkan konflik penamaan dan membuat kode Anda lebih sulit untuk dipertahankan. 

```js
let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"
```
->  Dalam contoh ini, `globalVar` dinyatakan dalam lingkup global dan dapat diakses di dalam `printGlobalVar` fungsi.

- **Lingkup lokal (local scope)**: Ini mengacu pada variabel yang dinyatakan dalam suatu fungsi. Variabel-variabel ini hanya dapat diakses dalam fungsi di mana mereka dinyatakan dan disebut variabel lokal.

```js
function greet() {
    let message = "Hello, local scope!";
    console.log(message);
}

greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error
```

->  Dalam kode ini, `message` adalah variabel lokal dalam `greet` fungsi. Ini dapat digunakan di dalam fungsi, tetapi mencoba untuk mengaksesnya di luar fungsi akan mengakibatkan kesalahan.

- **Blok lingkup (blok scope)**: Blok adalah satu set pernyataan yang tertutup dalam curly brances `{}` seperti dalam `if` pernyataan, `for` loop atau `while` loop.

- Blok scoping dengan `let` dan `const` Memberikan kontrol yang lebih baik atas aksesibilitas variabel, membantu mencegah kesalahan dan membuat kode Anda lebih dapat diprediksi.

```js
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // "I'm in a block"
}
console.log(blockVar); // This will throw an error
```

->  Dalam contoh ini, `blockVar` hanya dapat diakses di dalam `if` blok. Mencoba mengaksesnya di luar blok akan mengakibatkan kesalahan. Memahami berbagai jenis ruang lingkup ini sangat penting untuk mengelola aksesibilitas variabel dan menghindari efek samping yang tidak diinginkan dalam kode Anda.


## Jenis Scope,Lokasi Pendeklarasian,Jangkauan Akses,Catatan Penting

- Global,Di luar fungsi atau blok apa pun.,Bisa diakses dari mana saja di seluruh file.,Gunakan seperlunya saja. Terlalu banyak variabel global membuat kode berantakan (naming conflict).

- Lokal (Fungsi),Di dalam sebuah fungsi function() { ... }.,Hanya bisa diakses di dalam fungsi tersebut.,"Variabel akan ""mati"" atau dihapus dari memori setelah fungsi selesai dijalankan."

- Blok,"Di dalam kurung kurawal { ... } (seperti if, for, while).",Hanya bisa diakses di dalam kurung kurawal tersebut.,Khusus untuk variabel yang dibuat dengan kata kunci let dan const.