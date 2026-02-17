# JavaScript Math Review

[13-15 Februari 2026]

---

## 1. Working with the number data type

- Definisi: 

Tipe data JavaScript **Number** mencakup **bilangan bulat (integers)**, **bilangan floating-point**, **Infinity** and **NaN**.

- **Bilangan bulat atau integer**:

adalah jenis bilangan dalam matematika yang mencakup:

Cakupan Bilangan Bulat
a.	Bilangan bulat negatif: … -3, -2, -1
b. 	Nol: 0
c.	Bilangan bulat positif: 1, 2, 3, …

```js
const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number
```

- **Bilangan (floatingp-point)**:

adalah bilangan dengan titik desiaml.

```js
const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number
```

- **Bilangan (Infinity) positif**:

adalh bilangan yang lebih besar dari bilangan lainnya.

```js
const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number
```

- **Bilangan (-Infinity) negatif**:

adalah bilangan yang lebih kecil dari bilangan lainnya.

```js
console.log(-1 / 0);       // -Infinity
console.log(-Math.pow(10, 1000)); // -Infinity
```

- **NaN (Not a Number)**:

mewakili nilai numerik yang tidak valid, seperti string "Jesica".

```js
const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN
```

---

## 2. Operasi Aritmatika Umum

- Operator Penjumlahan **(+)**:

operator **(+)** digunakan untuk menghitung jumlah dari dua angka atau lebih.

```js
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 + num2;
const result2 = num2 + num1;
const result3 = num2 + num1 + num3;

console.log(result1); // 15
console.log(result2); // 15
console.log(result3); // 30
```

- Opererator pengurangan **(-)**:

 Operator ini **(-)** digunakan untuk menghitung selisih antara dua angka

 ```js
const difference = 10 - 5;
console.log(difference); // 5

const difference = 5 - 10;
console.log(difference); // -5

const num1 = 10;
const num2 = 5;
const result = num1 - num2;

console.log(result); // 5
```

- Operator perkalian (*):

Operator ini (*) digunakan untuk menghitung hasil perkalian dua angka atau lebih.

```js
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 * num2;
const result2 = num2 * num1;
const result3 = num2 * num1 * num3;

console.log(result1); // 50
console.log(result2); // 50
console.log(result3); // 750
```

- Operator pembagian **(/)**:

digunakan untuk menghitung hasil bagi antara dua angka.

```js
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 / num2;
const result2 = num2 / num1;
const result3 = num2 / num1 / num3;

console.log(result1); // 2
console.log(result2); // 0.5
console.log(result3); // 0.03333333333333333
```

- Pembagian dengan Nol:

ika Anda mencoba membagi dengan nol, JavaScript akan mengembalikan nilai **(Infinity)**.

```js
const result = 10 / 0; 

console.log(result); // Infinity
```

- Operator Sisa **(%)**: 

Operator ini **(%)** mengembalikan sisa dari suatu pembagian.

```js
const num1 = 10;
const num2 = 3;
const remainder = num1 % num2;

console.log(remainder); // 1
```

- Operator Perpangkatan (**): 

Operator ini (**) memangkatkan suatu bilangan dengan bilangan lainnya.

```js
const num1 = 2;
const num2 = 3;

const exponent = num1 ** num2;
console.log(exponent); // 8
```

- mix operators in a single operation or expression:

```js
const result = 10 + 5 * 2 - 8 / 4;
console.log(result); // 18
```

---

## 3. Perhitungan dengan angka string

- Penjelasan : 

Saat Anda menggunakan (+) operator dengan angka dan string, JavaScript akan mengubah angka menjadi string dan menggabungkan kedua nilai tersebut. Saat Anda menggunakan operator (-), (*) atau (/) dengan string dan angka, JavaScript akan mengubah string menjadi angka dan hasilnya akan berupa angka. Untuk (null) dan (undefined), JavaScript memperlakukan (null) sebagai (0) dan tidak terdefinisi seperti (NaN) dalam operasi matematika.

```js
const result = 5 + '10';

console.log(result); // "510"
console.log(typeof result); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
```

- jika string tersebut tidak terlihat seperti angka? Mari kita lihat apa yang terjadi dalam kasus tersebut:

```js
const subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = 'abc' * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number
```

- jika Anda melakukan operasi aritmatika dengan boolean (true atau false)? 

Mari kita lihat apa yang terjadi. JavaScript memperlakukan boolean sebagai angka dalam operasi matematika: **(true menjadi 1)**, dan **(false menjadi 0)**.

```js
const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string
```

---

## 4. Prioritas Operator

- Definisi : 

Prioritas operator menentukan urutan operasi yang dievaluasi dalam suatu ekspresi. Operator dengan prioritas lebih tinggi dievaluasi sebelum operator dengan prioritas lebih rendah. Nilai di dalam **tanda kurung** akan dievaluasi terlebih dahulu dan **perkalian/pembagian** akan memiliki prioritas lebih tinggi daripada **penjumlahan/pengurangan**. Jika operator memiliki prioritas yang sama, maka JavaScript akan menggunakan asosiatif.

```js
const result = (2 + 3) * 4;

console.log(result); // 20

const result2 = 10 - 2 + 3;

console.log(result2); // 11

const result3 = 2 ** 3 ** 2;

console.log(result3); // 512
```

- Definisi : 

Asosiativitas memberi tahu kita arah evaluasi suatu ekspresi ketika terdapat beberapa operator dengan tipe yang sama. Ini menentukan apakah ekspresi tersebut harus dievaluasi dari kiri ke kanan **(left-associative)** atau dari kanan ke kiri **(right-associative)**. 

Misalnya, operator eksponen juga bersifat asosiatif dari kanan ke kiri:

```js
const result4 = 5 ** 4 ** 1; 

console.log(result4); // 625
```

---

## 5. Opeerator penambahan dan pengurangan 

- Operator **Increment** (Penambahan): 

Operator ini digunakan untuk menambah nilai sebesar satu. Notasi prefiks **++num** menambah nilai variabel terlebih dahulu, kemudian mengembalikan nilai baru. Notasi postfix **num++** mengembalikan nilai variabel saat ini terlebih dahulu, kemudian menambahnya.

```js
let x = 5;

console.log(++x); // 6
console.log(x); // 6


let y = 5;

console.log(y++); // 5
console.log(y); // 6
```

- **Decrement** Operator (Pengurangan): 

 Operator ini digunakan untuk mengurangi nilai sebanyak satu. Notasi prefiks (--x) dan notasi postfix(x--) bekerja dengan cara yang sama seperti sebelumnya pada operator penambahan.

 ```js
 let num = 5;

console.log(--num); // 4
console.log(num--); // 4
console.log(num); // 3
```

- Jadi, jika Anda membutuhkan nilai yang diperbarui segera, gunakan prefix. Jika Anda menginginkan nilai saat ini terlebih dahulu dan Anda tidak peduli dengan penambahannya sampai nanti, gunakan postfix.

```js
let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)
```

---

## 6. Compound Assignment Operators (Operator Penugasan Gabungan)

- Addition (Penambahan) Assignment **(+=)** Operator: 

Operator ini melakukan penjumlahan pada nilai-nilai dan menetapkan hasilnya ke variabel.

```js
let num = 5;
num += 2;
console.log(num); // 7

let total = 10;
total += 5;
console.log(total); // 15
```

Jika tidak menggunakan Compound Assignment Operators kita akan menul8is kodenya seperti ini:

```js
let num = 5;
num = num + 2;

console.log(num); // 7
```

- Subtraction (Pengurangan) Assignment **(-=)** Operator: 

 Operator ini melakukan pengurangan pada nilai-nilai dan menetapkan hasilnya ke variabel.

 ```js
let score = 20;
score -= 7;

console.log(score); // 13
 ```

Jika tidak menggunakan Compound Assignment Operators kita akan menulis kodenya seperti ini:

```js
let score = 20;
score = score - 7;

console.log(score); // 13
```

- Multiplication (Perkalian) Assignment (*=) Operator:

Operator ini melakukan perkalian pada nilai-nilai dan menetapkan hasilnya ke variabel.

```js
let points = 5;
points *= 3;

console.log(points); // 15
```

- Division (Pembagian) Assignment **(/=)**  Operator:

Operator ini melakukan pembagian pada nilai-nilai dan menetapkan hasilnya ke variabel.

```js
let balance = 100;
balance /= 4;

console.log(balance); // 25
```

- Remainder (Sisa) Assignment **(%=)**  Operator: 

perator ini membagi sebuah variabel dengan angka yang ditentukan dan menetapkan sisanya ke variabel tersebut.

```js
let x = 10;
x %= 3; // sama dengan x = x % 3
console.log(x); // 1 (karena 10 dibagi 3 sisanya 1)
```

- Exponentiation (Eksponensiasi) Assignment (**=) Operator:

Operator ini memangkatkan sebuah variabel dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel tersebut.

```js
let y = 2;
y **= 3; // sama dengan y = y ** 3
console.log(y); // 8 (karena 2 pangkat 3 = 8)
```

- Operator penugasan AND bitwise (&=):

 yang melakukan operasi AND bitwise dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel.

 ```js
let a = 6;   // biner: 110
a &= 3;      // biner: 011
console.log(a); // 2 (karena 110 & 011 = 010 → 2)
 ```

- Operator penugasan OR bitwise (|=):

 yang melakukan operasi OR bitwise dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel.

 ```js
let b = 6;   // biner: 110
b |= 3;      // biner: 011
console.log(b); // 7 (karena 110 | 011 = 111 → 7)
 ```

---

## 7. Bilangan Boolean dan Kesetaraan

- Definisi Boolean:

Boolean adalah tipe data yang hanya dapat memiliki dua nilai: **true** atau **false**.

```js
let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
 console.log("You're old enough to drive"); // You're old enough to drive
} else {
 console.log("Sorry, you are not old enough to drive");
```

- Operator Equality (Kesamaan) **(==)**:

Untuk membandingkan dua nilai, Anda dapat menggunakan operator kesamaan atau kesamaan ketat. Hasil perbandingan akan berupa nilai boolean `true` atau `false`. 

Berikut contoh penggunaan operator kesamaan untuk membandingkan string dan angka:

```js
console.log(5 == '5'); // true
```

⚠️ Dalam contoh diatas, JavaScript mengkonversi nilai string "5" menjadi angka dan kemudian memeriksa apakah keduanya sama.

Operator kesamaan (equality operator) menggunakan konversi tipe sebelum memeriksa apkah setiap nilai sama.

- Strict Equality (Kesamaan Ketat) **(===)** Operator:

Operator ini tidak melakukan konversi tipe dan memeriksa apakah tipe dan nilainya sama.

```js
console.log(5 === '5'); // false
```

⚠️ Perbandingan diatas akan menghasilkan (false), karena tipe data (string) tidak sama dengan tipe data (number).


- Inequality (Ketidaksetaraan) **(!=)** Operator:

Operator ini menggunakan konversi tipe sebelum memeriksa apakah nilainya sama atau tidak sama.

```js
console.log(5 != "5"); // false
```

⚠️ Dalam contoh ini, hasilnya akan seperti ini (false) karena operator ketidaksetaraan pertama-tama mengubah nilai string menjadi angka dan kemudian membandingkan nilainya. Karena nilainya akan sama, maka akan mengembalikan (false).

- Strict Inequality (Ketidaksetaraan ketat) **(!==)** Operator:

Operator ini tidak melakukan konversi tipe dan memeriksa apakah tipe dan nilainya tidak sama.

```js
console.log(5 !== "5"); // true
```

⚠️ Hasilnya akan seperti itu (true) karena operator ketidaksetaraan ketat tidak melakukan konversi tipe apa pun. Karena angka tersebut 5tidak sama dengan string "5", maka hasilnya adalah (true).

---

## 8. Comparison (Perbandingan) Operators

- Operator Lebih Besar Dari **(>)** :

 Operator ini memeriksa apakah nilai di sebelah kiri lebih besar dari nilai di sebelah kanan.

 ```js
let a = 6;
let b = 9;

console.log(a > b); // false
console.log(b > a); // true
 ```

- Operator Lebih Besar Dari **(>=)** atau Sama Dengan : 

Operator ini memeriksa apakah nilai di sebelah kiri lebih besar dari atau sama dengan nilai di sebelah kanan.

```js
let a = 6;
let b = 9;
let c = 6;

console.log(a >= b); // false
console.log(b >= a); // true
console.log(a >= c); // true
```

- Operator Kurang Dari **(<)** : 

Operator ini memeriksa apakah nilai di sebelah kiri lebih kecil dari nilai di sebelah kanan.

```js
let a = 6;
let b = 9;

console.log(a < b); // true
console.log(b < a); // false
```

- Operator Kurang Dari **(<=)** atau Sama Dengan :

 Operator ini memeriksa apakah nilai di sebelah kiri kurang dari atau sama dengan nilai di sebelah kanan.

 ```js
let a = 6;
let b = 9;
let c = 6;

console.log(a <= b); // true
console.log(b <= a); // false
console.log(a <= c); // true
 ```

 ---

 ## 9. Unary Operators

- Operator **Plus Unary**:

Operator ini mengubah operand menjadi angka. Jika operand sudah berupa angka, maka operand tersebut tetep tidak berubah.

```js
const str = '42';
const num = +str;

console.log(num); // 42
console.log(typeof num); // number
```

- **Unary Negation (-)** Operator:

Opertor ini meniadakan operand.

```js
const num = 4;
console.log(-num); // -4
```

- **Logical NOT (!)** Operator: 

Operator ini membalikan nilai boolean dari operandnya. Jadi jika operandnya adalah **true**, maka menjadi **false**, dan jika **false**  maka menjadi **true**.

---

## 10. Bitwise Operator

- Operator Bitwise AND  **(&)** : 

Operator ini mengembalikan nilai 1 pada setiap posisi bit yang bit-bitnya pada kedua operand sama dengan nilai 1.

- Operator Penugasan Bitwise AND **(&=)** : 

Operator ini melakukan bitwise ANDoperasi dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel.

- Operator Bitwise OR **(|)** : 

Operator ini mengembalikan nilai 1 pada setiap posisi bit di mana bit yang sesuai dari salah satu atau kedua operand adalah 1.

- Operator Penugasan OR Bitwise **(|=)** : 

Operator ini melakukan **bitwise OR**,
operasi dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel.

- Operator XOR Bitwise **(^)** :

 Operator ini mengembalikan nilai 1 pada setiap posisi bit yang bit-bitnya pada salah satu operand, tetapi tidak keduanya, adalah 1.

- Operator Bitwise NOT **(~)** : 

Operator ini membalikkan representasi biner suatu angka.

- Operator Geser Kiri **(<<)** : 

Operator ini menggeser semua bit ke kiri sebanyak sejumlah posisi yang ditentukan.

- Operator Geser Kanan **(>>)** :

 Operator ini menggeser semua bit ke kanan.

 ---

 ## 11. Pernyataan Bersyarat, Nilai Benar, Nilai Salah, dan Operator Ternary

- Pernyataan Bersyarat **(if / else if / else)**

a. 	Digunakan untuk mengecek kondisi.
b. 	Jika kondisi benar (truthy) → jalankan blok kode.
c. 	Jika salah (falsy) → lanjut ke  **(else if)** atau **(else)**.

```js
const score = 87;

if (score >= 90) {
  console.log('You got an A');
} else if (score >= 80) {
  console.log('You got a B'); // hasil: You got a B
} else if (score >= 70) {
  console.log('You got a C');
} else {
  console.log('You failed!');
}
```

- Truthy dan Falsy

a. **Truthy**: 
nilai yang dianggap benar → 'hello', angka selain 0, objek {}.

b. **Falsy**: 
nilai yang dianggap salah → 0, null, undefined, false, NaN, ''


- Operator Ternary **(?:)**

Cara singkat menulis if/else.

a.	Bagian sebelum **(?)** → kondisi yang dicek (misalnya ).

b.	Bagian setelah **(?)** → hasil jika kondisi benar.

c.	Bagian setelah **(:)** → hasil jika kondisi salah.

```js
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`); 
// hasil: It's a sunny day!
```
d. jika dibandingkan dengan cara biasa:

```js
let weather;
if (temperature > 25) {
  weather = 'sunny';
} else {
  weather = 'cool';
}
```

---

## 12. Operator Logika Biner

-  AND (&&) → hanya benar jika kedua operand benar.

```js
const result = true && 'hello'; // hasil: 'hello'
```

- OR (||) → benar jika salah satu operand benar.

- Nullish (??) → hanya fallback jika nilai null atau undefined.

```js
const userSettings = { theme: null };
let theme = userSettings.theme ?? 'light'; 
console.log(theme); // hasil: 'light'
```

---

## 13. Objek Math​

Digunakan untuk operasi angka:

- Math.random() → angka acak antara 0 dan <1.
- Math.max() / Math.min() → nilai terbesar / terkecil.

- Math.ceil() → bulat ke atas.

- Math.floor() → bulat ke bawah.

- Math.round() → bulat ke terdekat.

- Math.trunc() → buang desimal.

- Math.sqrt() → akar kuadrat.

- Math.cbrt() → akar kubik.

- Math.abs() → nilai absolut.

- Math.pow(a, b) → pangkat.

Contoh:

```js
console.log(Math.round(4.5)); // 5
console.log(Math.trunc(4.8)); // 4
```

---

## 14. Metode Bilangan Umum

- isNaN() → 

a. 	Digunakan untuk mengecek apakah suatu nilai bukan angka.

b. 	Tapi, fungsi ini melakukan pemaksaan tipe (type coercion). Jadi kadang hasilnya bisa mengecoh.

```js
console.log(isNaN(NaN));        // true (memang bukan angka)
console.log(isNaN("hello"));    // true (string bukan angka)
console.log(isNaN(undefined));  // true
console.log(isNaN(true));       // false (true dipaksa jadi angka 1)
```

- Number.isNaN() → 

a. 	Versi yang lebih ketat dari **isNaN()**.

b. 	Tidak melakukan pemaksaan tipe. Hanya akan (true) jika nilai benar-benar NaN.

```js
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN("hello"));    // false (string, bukan NaN)
console.log(Number.isNaN(undefined));  // false
```

- parseFloat() → 

a. 	Mengubah string menjadi angka desimal (floating-point).

b. 	Akan membaca angka dari awal string, lalu berhenti ketika ketemu karakter non-angka.

```js
console.log(parseFloat("12.34abc")); // 12.34
console.log(parseFloat("99px"));     // 99
```

- parseInt() →

a. 	Mengubah string menjadi bilangan bulat (integer).

b. 	Sama seperti , tapi hanya mengambil bagian bulat.

c. 	Jika tidak ada angka valid di awal string → hasilnya .

```js
console.log(parseInt("12.34abc")); // 12
console.log(parseInt("99px"));     // 99
console.log(parseInt("abc123"));   // NaN
```

- toFixed(2) → 

a. 	Digunakan untuk memformat angka dengan jumlah digit desimal tertentu.

b. 	Hasilnya berupa string, bukan angka lagi.

```js
let num = 12.3456;
console.log(num.toFixed(2)); // "12.35"
console.log(num.toFixed(0)); // "12"
```

✨ Jadi ringkasnya:

• 	isNaN() → cek bukan angka (longgar, bisa salah karena coercion).

• 	Number.isNaN() → cek NaN dengan ketat.

• 	parseFloat() → ambil angka desimal dari string.

• 	parseInt() → ambil angka bulat dari string.

• 	toFixed() → format angka jadi string dengan jumlah desimal tertentu.