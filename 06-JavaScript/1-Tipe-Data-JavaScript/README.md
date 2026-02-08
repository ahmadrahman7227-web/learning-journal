# Tipe Data di JavaScript

---

## Tipe Data di JavaScript

1. Number
Digunakan untuk angka bulat ataupun desimal.

2. String
Digunakan untuk teks diapit tanda kutip ganda ("") atau tunggal ('').

3. Boolean
Nilai logika: true or false.

4. Undefined
Variabel sudah dibuat tapi belum diberi nilai.

5. null
Variabel sengaja diisi dengan "kosong".

6. Object
Kumpulan pasangan kunci nilai.

7. Symbol
Nilai unik yang tidak bisa diubah.

8. BigInt
Untuk angka sangat besar.

9. Array
Digunakan untuk menyimpan lebih dari satu elemen dalam satu variabel.
---

## Variabel di JavaScript

1. Deklarasi dengan **let**:
Nilainya bisa diubah.

2. Deklarasi dengan **const**:
Nilainya tetap, tidak bisa diubah.

3. Deklarasi tanpa nilai:
- **let**: boleh tanpa nilai, hasilnya = undefined.
- **const**: wajib langsung diberi nilai.

4. Deklarasi dengan **var**:

Karakteristik var
- Function scope: hanya terbatas dalam fungsi, bukan blok {}.
- Hoisting: deklarasi naik ke atas, tapi nilai tetap undefined sampai di-assign.
- Bisa dideklarasikan ulang tanpa error.
- Tidak disarankan untuk penggunaan modern, lebih baik pakai let atau const.
---

## Reassignment

- **let**: bisa diubah nilainya.
- **const**: tidak bisa diubah nilainya.

---

## Aturan Penamaan Variabel

1. Harus dengan huruf, (_) atau ($).
2. Tidak boleh mulai dengan angka.
3. Case sensitive ((age) beda dengan (Age)). age: variabel pertama, Age: variabel kedua.
4. Gunakan CamelCase (kata pertama huruf kecil, lalu setiap kata berikutnya diawali huruf besar tanpa spasi atau tanda pemisah).

```js
// valid
let studentName;
let _Score;
let $total;

// invalid
let 1stPlace;
```

---

## Perbedaan JavaScript dengan TypeScript

```js
const productName = "Indomie Kuah";
let price = 123;
var isExpiry = false;
```

```ts
const productName: string = "Indomie Goreng";
let: number = 123;
var isExpiry: boolean = false;
```