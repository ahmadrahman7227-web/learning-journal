# Aksesibilitas
 
## Alat Kontras Warna

- WebAIM Contrast Checker

Alat daring untuk mengecek kontras warna foreground dan background sesuai standar WCAG.

- TPGi Colour Contrast Analyzer

Aplikasi gratis untuk memeriksa kontras warna. Dilengkapi fitur Color Blindness Simulator agar bisa melihat tampilan bagi pengguna dengan gangguan penglihatan warna.

## Pohon Aksesibilitas

- Struktur yang digunakan oleh teknologi bantu (misalnya screen reader) untuk membaca dan berinteraksi dengan konten web.

- Jika elemen dihapus dari pohon aksesibilitas, maka pembaca layar tidak bisa mengaksesnya.

## Fungsi **max()**

- Digunakan untuk memilih nilai terbesar dari beberapa nilai.

- Contoh:

```css
img {
  width: max(250px, 25vw);
}
```

- Jika viewport < 1000px → lebar = 250px
- Jika viewport ≥ 1000px → lebar = 25% dari viewport

## Praktik Terbaik CSS & Aksesibilitas

- display: none;

Konten hilang total, tidak bisa diakses screen reader.

- visibility: hidden;

Konten tetap ada di layout, tapi juga tidak terbaca screen reader.

- .sr-only

Teknik untuk menyembunyikan konten secara visual, tapi tetap bisa diakses screen reader.

Contoh:

```html
<span>This span element can be read</span>
<span class="sr-only">This span element can only be read by screen readers</span>
<p style="display: none">Not accessible to screen readers</p>
<p style="visibility: hidden">Also not accessible</p>
```

## Animasi & Aksesibilitas

- scroll-behavior: smooth;
Mengaktifkan scroll halus.

- prefers-reduced-motion
Media query untuk mendeteksi preferensi pengguna yang ingin mengurangi animasi.

Contoh:

```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```


## Menyembunyikan Konten dengan Atribut HTML

- aria-hidden
Menyembunyikan elemen dari screen reader, tapi tetap terlihat oleh pengguna biasa.

- hidden
Menyembunyikan elemen dari tampilan visual dan pohon aksesibilitas.

Contoh:

```html
<p aria-hidden>This paragraph is visible but hidden from assistive tech.</p>
<p hidden>This paragraph is hidden from both.</p>
<p>This is a normal paragraph</p>
```


## Masalah Aksesibilitas pada placeholder

- Placeholder sering disalahartikan sebagai nilai input sebenarnya.

- Sebaiknya gunakan label untuk menjelaskan input, bukan hanya placeholder.

Contoh yang lebih baik:

```html
<label for="email">Email:</label>
<input type="email" id="email" placeholder="example@mail.com">
```



## Ringkasan Utama

- Gunakan alat kontras warna untuk memastikan teks mudah dibaca.

- Pahami pohon aksesibilitas agar konten bisa diakses screen reader.

- Gunakan max() untuk ukuran responsif.

- Hati‑hati dengan display: none dan visibility: hidden.

- Gunakan .sr-only untuk konten khusus screen reader.

- Perhatikan preferensi animasi dengan prefers-reduced-motion.

- Gunakan atribut aria-hidden dan hidden sesuai kebutuhan.

- Jangan hanya mengandalkan placeholder, gunakan label untuk aksesibilitas.


