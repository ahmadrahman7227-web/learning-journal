# Switch vs If/Else


- Switch → cocok untuk membandingkan satu variabel dengan banyak kemungkinan nilai.

Contoh:

```js
let day = 3;

switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Hari tidak dikenal");
}
```

- If/Else → lebih fleksibel, bisa membandingkan banyak variabel dan kondisi kompleks.

Contoh:

```js
let score = 720;
let income = 60000;

if (score >= 750 && income >= 80000) {
  console.log("Pinjaman premium");
} else if (score >= 700 && income >= 50000) {
  console.log("Pinjaman standar");
} else {
  console.log("Tidak memenuhi syarat");
}
```


## Kesimpulan

- Gunakan switch kalau hanya membandingkan satu variabel dengan banyak nilai tetap.

- Gunakan if/else kalau kondisi lebih kompleks, melibatkan banyak variabel atau logika.
