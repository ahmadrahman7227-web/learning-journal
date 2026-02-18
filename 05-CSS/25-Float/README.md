# Float

## Konsep Dasar Float

- Definisi: 

Properti float digunakan untuk mengapungkan elemen ke kiri (float: left;) atau ke kanan (float: right;) dari kontainer.

- Efek: 

Elemen lain di halaman akan otomatis membungkus (wrap) di sekitar elemen yang di‑float.

- Masalah: 

Jika banyak elemen di‑float, layout bisa berantakan. Contoh umum: tinggi kontainer runtuh (collapse) karena elemen di dalamnya semua di‑float.

## Solusi Masalah Float

- Clearfix: Teknik untuk memastikan kontainer tetap menghitung tinggi elemen yang di‑float.

Contoh CSS Clearfix:

```css
.container::after {
  content: "";
  display: block;
  clear: both;
}
```
Dengan ini, kontainer akan “menyapu” float sehingga tinggi kontainer kembali normal.

 
## Properti Inset

- Definisi: Shorthand untuk top, right, bottom, left.

- Contoh:

```css
.box {
  inset: 20px; /* sama dengan top:20px; right:20px; bottom:20px; left:20px */
}
```

## Contoh Lengkap Float

HTML:

```html
<div class="container">
  <div class="box left">Float Left</div>
  <div class="box right">Float Right</div>
  <p>
    Ini adalah teks yang akan membungkus di sekitar elemen yang di-float.
    Perhatikan bagaimana teks menyesuaikan posisi.
  </p>
</div>
```

CSS:

```css
.container {
  border: 2px solid #333;
  padding: 10px;
}

.box {
  width: 150px;
  height: 100px;
  background: lightblue;
  margin: 10px;
}

.left {
  float: left;
}

.right {
  float: right;
}

/* Clearfix untuk mencegah kontainer runtuh */
.container::after {
  content: "";
  display: block;
  clear: both;
}
```


## Ringkasan Utama

- float digunakan untuk mengapungkan elemen ke kiri/kanan.
- Elemen lain akan membungkus di sekitar elemen float.
- Masalah umum: kontainer runtuh → solusinya gunakan clearfix.
- Properti inset adalah shorthand untuk posisi (top, right, bottom, left).
- Gunakan float dengan hati‑hati, karena layout modern lebih sering memakai Flexbox atau Grid yang lebih stabil.


