# Ulasan Lengkap Tipografi CSS

## 1. Pengantar Tipografi

- Definisi: 

Tipografi adalah seni memilih font dan format teks agar terlihat menarik dan mudah dibaca.

- Typeface (Jenis Huruf): 

Desain keseluruhan dari sekumpulan karakter, angka, dan simbol.

- Font:

Variasi spesifik dari typeface, mencakup ukuran, ketebalan, gaya, dan lebar.

## 2. Jenis Huruf

- Serif: 

Memiliki garis kecil di ujung karakter. Cocok untuk cetakan tradisional (contoh: Times New Roman, Georgia).

- Sans Serif: 

Tidak memiliki garis kecil, tampilan modern, mudah dibaca di layar digital (contoh: Arial, Helvetica, Roboto).

## 3. Karakteristik Font

- Font Weight (Ketebalan): light, regular, bold, black.

- Font Style (Gaya): italic, oblique.

- Font Width (Lebar): condensed, normal, expanded.

## 4. Anatomi Huruf

- Baseline: garis imajiner tempat huruf bertumpu.

- Cap Height: tinggi huruf kapital dari baseline ke atas.

- X-height: tinggi rata-rata huruf kecil (contoh: "x").

- Ascender: bagian huruf kecil yang naik di atas x-height (h, b, d, f).

- Descender: bagian huruf kecil yang turun di bawah baseline (y, g, p, q).

## 5. Spasi dalam Tipografi

- Kerning: spasi antar pasangan huruf tertentu (contoh: A dan V).

- Tracking: spasi antar semua huruf dalam teks.

- Leading (Line-height): jarak vertikal antar baris teks.

## 6. Praktik Terbaik Tipografi

- Gunakan font yang jelas dan sederhana.

- Maksimal 2–3 font untuk konsistensi visual.

- Gunakan ukuran font untuk hierarki (judul besar, subjudul lebih kecil, paragraf standar).

- Font mudah dibaca meningkatkan pengalaman pengguna dan interaksi.

## 7. CSS font-family

- Definisi: Keluarga font (font-family) adalah sekelompok font dengan desain sama.

- Sintaks:

```css
body {
  font-family: Arial, Lato, sans-serif;
}
```

- Keluarga umum (Common Font Families): serif, sans-serif, monospace, cursive, fantasy.

### Web Safe Fonts:

- Sans-serif: Arial, Verdana, Trebuchet MS.

umumnya digunakan untuk pengembangan web karena tidak memiliki "kaki" atau garis kecil di ujung karakter.

- Serif: Times New Roman, Georgia.

memiliki "kaki" kecil di ujung karakter, sehingga umumnya digunakan untuk cetakan tradisional.

## 8. At-rules dan @font-face

- At-rules: pernyataan CSS untuk instruksi khusus (contoh: @media, @keyframes, @font-face).

- @font-face: menambahkan font kustom ke proyek.

```css
@font-face {
  font-family: "MyCustomFont";
  src: url("font.woff2") format("woff2"),
       url("font.otf") format("opentype"),
       url("font.woff") format("woff");
}
```

- Format font: truetype, opentype, svg, woff, woff2.

- woff/woff2: format web dengan kompresi.

- OpenType: format modern dengan fitur tambahan.

## 9. Font Eksternal
 
- Google Fonts: layanan gratis untuk font web.

Contoh penggunaan:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

body {
  font-family: "Roboto", sans-serif;
}
```

- Bisa juga menggunakan @import di CSS.

- Font Squirrel: sumber lain untuk font eksternal.

## 10. Text-shadow

Menambahkan bayangan pada teks.

Sintaks:

```css
p {
    text-shadow: x-offset y-offset blur-radius color;
}
```

contoh: 

```css
p {
  text-shadow: 2px 2px 4px gray;
}
```

- Offset X/Y: jarak horizontal/vertikal bayangan.

- Warna: bisa ditentukan (contoh: red, rgba).

- Blur radius: membuat bayangan lebih halus.


### Multiple shadows: bisa menambahkan lebih dari satu bayangan.

Contoh:

```css
p {
  text-shadow:
    3px 2px 3px #00ffc3,
    -3px -2px 3px #0077ff,
    5px 4px 3px #dee7e5;
}
```

---


## Properti Font CSS

1. Font-weight ➝ Ketebalan huruf

- Lighter ➝ lebih tipis dari elemen induk
- Normal ➝ berat standar (default)
- Bold ➝ tebal
- Bolder ➝ lebih tebal dari elemen induk
 
### Nilai Numerik:

- 100 ➝ tipis
- 400 ➝ normal
- 700 ➝ tebal
- 900 ➝ sangat tebal

- Contoh:

```css
p {
  font-weight: 600;
}
```


2. Font-style ➝ Mengatur gaya huruf miring

- Normal ➝ default
- Italic ➝ miring
- Oblique ➝ miring dengan sudut lebih dalam

```css
p {
  font-style: italic;
}
```


3. Font-width ➝ Lebar huruf

- Expanded ➝ model lebar
- Condensed ➝ model padat

```css
p {
  font-stretch: condensed;
}
```


4. Line-height ➝ Jarak vertikal antar baris teks

- Nilai relatif: 1.5 kali tinggi font

- Contoh: jika ukuran font 16px → line-height: 1.6;

```css
p {
  line-height: 1.6;
}
```


5. Font-variant ➝ Mengatur tampilan huruf

- Normal ➝ default

- Small-caps ➝ huruf kecil ditampilkan sebagai huruf kapital kecil

```css
p {
  font-variant: small-caps;
}
```


6. Font-size ➝ Ukuran huruf

- Satuan: px, em, rem, %, dll

### Contoh:

- font-size: 16px;
- font-size: 1.6rem;
- font-size: 120%;

7. Font-family ➝ Jenis font yang digunakan

- Bisa ditulis lebih dari satu, dipisahkan dengan koma.

- Font terakhir biasanya berupa generic family sebagai fallback.

- Contoh:

```css
body {
  font-family: Roboto, Arial, sans-serif;
}

```





