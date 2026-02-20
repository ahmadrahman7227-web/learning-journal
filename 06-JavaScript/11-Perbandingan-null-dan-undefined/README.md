# Perbandingan null dan undefined


- undefined → nilai default ketika variabel sudah dideklarasikan tapi belum diberi nilai.

Contoh:

```js
let x;
console.log(x); // undefined
```

- null → nilai yang sengaja diberikan untuk menunjukkan “kosong” atau “tidak ada nilai”.

Contoh:

```js
let y = null;
console.log(y); // null
```


##  Perbandingan dengan Operator

1. Menggunakan (==) (longgar, dengan type coercion)

```js
console.log(null == undefined); // true
```

 → null dan undefined dianggap sama.

2. Menggunakan === (ketat, tanpa type coercion)

```js
console.log(null === undefined); // false
```
→ Tidak sama, karena tipe datanya berbeda.

3. Perbandingan dengan angka/string

```js
console.log(null == 0);  // false
console.log(undefined == 0); // false
console.log(null >= 0);  // true (tricky!)
console.log(undefined > 0); // false
```
 → null bisa “dipaksa” jadi angka 0 dalam beberapa konteks, sedangkan undefined jadi NaN (Not a Number), sehingga semua perbandingan numerik dengan undefined hasilnya false.


##  Kesimpulan
- Gunakan === (strict equality) untuk membandingkan, agar lebih aman dan tidak ada hasil yang membingungkan.
- Ingat: null dan undefined hanya sama dengan dirinya sendiri, dan sama satu sama lain jika pakai ==.
