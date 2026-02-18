# Desain Web Responsif

## Definisi Desain Web Responsif

- Prinsip inti: adaptasi. Situs web harus bisa menyesuaikan tata letak dan konten sesuai ukuran layar dan kemampuan perangkat (smartphone, tablet, desktop).

- Tujuan: memastikan pengalaman pengguna tetap nyaman di berbagai perangkat.

## Komponen Utama

1. Kisi-kisi Fluid (Fluid Grid)

- Menggunakan satuan relatif (misalnya %, vw) bukan piksel tetap.

- Membuat elemen otomatis menyesuaikan ukuran layar.

Contoh:

```css
.container {
  width: 80%; /* bukan fixed px */
}
```

2. Gambar Fleksibel

- Gambar menyesuaikan wadahnya agar tidak melampaui layar kecil.

Contoh:

```css
img {
  max-width: 100%;
  height: auto;
}
```

3. Media Queries

- Digunakan untuk menerapkan gaya berbeda berdasarkan karakteristik perangkat (viewport, orientasi, resolusi, dll).

Contoh dasar:

```css
@media screen and (min-width: 768px) {
  body {
    font-size: 1.125rem;
  }
}
```


## Jenis Media

- all → default, cocok untuk semua perangkat.
- print → untuk tampilan cetak/pratinjau.
- screen → untuk layar perangkat.

## Fitur Media Query

- aspect-ratio

Menargetkan rasio layar (misalnya 16:9).

```css
@media screen and (aspect-ratio: 16/9) {
  body { background: lightblue; }
}
```

- orientation

Menentukan orientasi perangkat (portrait/landscape).

```css
@media screen and (orientation: landscape) {
  body { background: lightgreen; }
}
```

- resolution

Menargetkan resolusi tinggi (misalnya retina display).

```css
@media screen and (min-resolution: 300dpi) {
  body { font-size: 18px; }
}
```

- hover

Mengecek apakah perangkat mendukung hover (misalnya mouse).

```css
@media (hover: hover) {
  a:hover { color: red; }
}
```

- prefers-color-scheme

Menyesuaikan tema terang/gelap sesuai preferensi pengguna.

```css
@media (prefers-color-scheme: dark) {
  body { background: #111; color: #eee; }
}
```


## Operator Logika dalam Media Query

- and → menggabungkan beberapa kondisi.

- not → meniadakan kondisi.

- only → membatasi agar hanya berlaku pada media tertentu.

Contoh:

```css
@media screen and (min-width: 768px) and (orientation: landscape) {
  body { background: pink; }
}
```


## Breakpoints Umum

- Smartphone (kecil): ≤ 640px

- Tablet (sedang): 641px – 1024px

- Desktop (besar): ≥ 1025px

Contoh:

```css
@media screen and (max-width: 64px) {
  body { font-size: 14px; }
}

@media screen and (min-width: 641px) and (max-width: 1024px) {
  body { font-size: 16px; }
}

@media screen and (min-width: 1025px) {
  body { font-size: 18px; }
}
```


## Pendekatan Mobile-First

- Filosofi: desain dimulai dari layar kecil (mobile), lalu ditingkatkan untuk layar lebih besar.

- Keuntungan: lebih ringan, cepat, dan ramah pengguna mobile.

Contoh:

```css
/* Base styles untuk mobile */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media screen and (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
}

/* Desktop */
@media screen and (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```


## ✨ Ringkasan Utama

- Responsif = adaptasi → layout menyesuaikan perangkat.

- Gunakan fluid grid dan gambar fleksibel.

- Media queries memungkinkan gaya berbeda sesuai kondisi (viewport, orientasi, resolusi, preferensi).

- Breakpoints umum: smartphone ≤640px, tablet 641–1024px, desktop ≥1025px.

- Mobile-first → mulai dari desain untuk layar kecil, lalu tingkatkan ke layar besar.


