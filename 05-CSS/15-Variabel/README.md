# Variabel CSS

## Variabel CSS (Custom Properties)

- Definisi: Variabel CSS adalah nilai yang bisa kita simpan dengan nama tertentu, lalu digunakan kembali di stylesheet.

### Penulisan:

- Ditulis dengan awalan -- (dua tanda minus).

- Dipanggil menggunakan fungsi var(--nama-variabel).

### Keuntungan:

- Membuat kode lebih rapi dan fleksibel.

- Mudah diubah (misalnya untuk tema terang/gelap).

- Mengurangi duplikasi nilai.

Contoh Dasar

```css
:root {
  --bg-color: white;
  --text-color: black;
}

.dark-theme {
  --bg-color: #333;
  --text-color: white;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

👉 Artinya:
- Default (:root) → background putih, teks hitam.
- Jika memakai .dark-theme → background abu gelap, teks putih.
- Body otomatis mengikuti nilai variabel.


## Nilai Alternatif dengan var()

- Bisa memberikan fallback value jika variabel tidak tersedia.

```css
.button {
  background-color: var(--main-color, #3498db);
}
```

👉 Jika --main-color tidak didefinisikan, maka otomatis menggunakan warna biru #3498db.


## Aturan @property

- Definisi: Memberi kontrol lebih detail saat membuat variabel CSS, terutama untuk animasi dan nilai default.

- Aturan:

```css
@property --property-name {
  syntax: '<type>';        /* tipe: <color>, <length>, <number>, <percentage>, <angle> */
  inherits: true | false;  /* apakah mewarisi dari parent */
  initial-value: <value>;  /* nilai default */
}
```

- (--property-name) :

Ini adalah nama properti kustom yang Anda definisikan. Seperti semua properti kustom, nama ini harus diawali dengan dua tanda hubung.

- (syntax) :

Ini mendefinisikan tipe properti, yang bisa berupa hal-hal seperti <color>, <length>, <number>, <percentage>, atau tipe yang lebih kompleks.

- (inherits) : 

Ini menentukan apakah properti tersebut harus mewarisi nilainya dari elemen induknya.

- (initial-value) : 

Ini mengatur nilai default properti tersebut.

### Contoh Animasi Gradien

```css
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.gradient-box {
  width: 100px;
  height: 100px;
  background: linear-gradient(var(--gradient-angle), red, blue);
  transition: --gradient-angle 0.5s;
}

.gradient-box:hover {
  --gradient-angle: 90deg;
}
```

👉 Saat kursor diarahkan ke kotak, gradien akan berubah sudutnya dengan animasi halus.

## ✨ Ringkasan Utama

- Variabel CSS (--nama) → memudahkan reuse nilai, mendukung tema dinamis.
- Gunakan var(--nama, fallback) untuk nilai alternatif.
- Aturan @property → mendefinisikan variabel dengan tipe, pewarisan, dan nilai awal.
- Bisa digunakan untuk animasi yang lebih halus dan terkontrol.

## Contoh Lengkap Tema + Animasi

```css
:root {
  --bg-color: #fff;
  --text-color: #000;
}

.dark-theme {
  --bg-color: #222;
  --text-color: #eee;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.5s, color 0.5s;
}

@property --rotate-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.box {
  width: 150px;
  height: 150px;
  background: linear-gradient(var(--rotate-angle), red, yellow);
  transition: --rotate-angle 1s;
}

.box:hover {
  --rotate-angle: 360deg;
}
```

👉 Dengan ini:
- Tema bisa diganti hanya dengan menambahkan class .dark-theme ke <body>.
- Kotak akan berputar gradiennya saat di‑hover.
