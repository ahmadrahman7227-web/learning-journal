# CSS Grid – Ulasan Lengkap


## A. Apa itu CSS Grid?

- CSS Grid adalah sistem tata letak dua dimensi (baris dan kolom).

- Digunakan untuk membuat layout halaman web yang kompleks.

- Untuk mengaktifkan Grid:

```css
.container {
  display: grid;
}
```


## B. Unit dan Jarak

### Unit FR (Fraction/pecahan): 

membagi ruang secara fleksibel.

```css
grid-template-columns: 1fr 2fr; 
/* kolom pertama 1 bagian, kolom kedua 2 bagian */
```

### Jarak antar elemen:

- column-gap → jarak antar kolom.

- row-gap → jarak antar baris.

- gap → shorthand untuk keduanya.

```css
.container {
   gap: 20px;
}
```


## C. Properti Grid Utama

- grid-template-columns → menentukan jumlah dan ukuran kolom.

```css
grid-template-columns: 30px 1fr;
```

- grid-template-rows → menentukan jumlah dan ukuran baris.

```css
grid-teplate-rows: auto 1fr auto;
```

- grid-auto-flow → mengatur arah otomatis penempatan item (row atau column).

```css
geid-auto-flow: column;
```

- grid-auto-rows → ukuran baris otomatis.

```css
grid-auto-rows: auto;
```

- grid-auto-columns → ukuran kolom otomatis.

```css
grid-auto-columns: auto;
```

- align-items / place-items → mengatur perataan item di dalam grid.

```css
.item {
  grid-column: 1 / -1; /*Membuat elemen merentang di semua kolom:*/
}
```


## D. Fungsi Penting

- repeat() → mengulang pola ukuran.

```css
grid-template-columns: repeat(3, 1fr);
/* 3 kolom sama besar */
```

- minmax() → menentukan ukuran minimum & maksimum.

```css
grid-auto-rows: minmax(50px, auto);
```


## E. Grid Eksplisit vs Implisit

- Eksplisit: jumlah baris/kolom ditentukan dengan **grid-template-columns / grid-template-rows**.

- Implisit: baris/kolom otomatis dibuat jika item ditempatkan di luar grid yang sudah didefinisikan.

## F. Penempatan Berbasis Garis (Line-based Placement)

- Grid memiliki garis (line) yang membagi kolom dan baris.

- Garis dihitung mulai dari 1 di sisi kiri/atas grid, dan bertambah ke kanan/bawah.

- Dengan properti ini, kita bisa menempatkan item grid di posisi tertentu berdasarkan nomor garis.

### grid-column-start & grid-column-end

- Digunakan untuk menentukan awal dan akhir posisi item pada kolom.

- Item akan membentang dari garis awal ke garis akhir.

Contoh:

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

👉 Item akan menempati kolom dari garis 1 sampai sebelum garis 3 (artinya mencakup kolom 1 dan 2).

### grid-row-start & grid-row-end

- Digunakan untuk menentukan awal dan akhir posisi item pada baris.

- Item akan membentang dari garis awal ke garis akhir.

Contoh:

```css
.item {
  grid-row-start: 2;
  grid-row-end: 4;
}
```

👉 Item akan menempati baris dari garis 2 sampai sebelum garis 4 (artinya mencakup baris 2 dan 3).


### Shorthand
Daripada menulis panjang, kita bisa gunakan shorthand:

```css
.item {
  grid-column: 1 / 3; /* sama dengan start:1, end:3 */
  grid-row: 2 / 4;    /* sama dengan start:2, end:4 */
}
```


## Contoh Lengkap

HTML:

```html
<div class="container">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

CSS:

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 50px);
  gap: 5px;
}

.item1 {
  background: lightblue;
  grid-column: 1 / 3; /* menempati kolom 1 dan 2 */
  grid-row: 1 / 2;    /* baris pertama */
}

.item2 {
  background: lightgreen;
  grid-column: 3 / 5; /* menempati kolom 3 dan 4 */
  grid-row: 1 / 3;    /* baris 1 dan 2 */
}

.item3 {
  background: pink;
  grid-column: 2 / 4; /* kolom 2 dan 3 */
  grid-row: 3 / 5;    /* baris 3 dan 4 */
}
```

### 👉 Hasil:

- Item 1 berada di kiri atas (kolom 1–2, baris 1).

- Item 2 berada di kanan atas (kolom 3–4, baris 1–2).

- Item 3 berada di tengah bawah (kolom 2–3, baris 3–4).


## G. Grid Template Areas

- Memberi nama area agar lebih mudah diposisikan.

Contoh Layout:

```html
HTML:
<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main</div>
  <div class="footer">Footer</div>
</div>
```


```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main   { grid-area: main; }
.footer { grid-area: footer; }
```


## H. Menerapkan CSS Grid

### DevTools (Alat Pengembang):

- Bisa memeriksa dan mengubah CSS secara real-time di browser.
- Menampilkan semua aturan CSS yang aktif.
- Bisa mematikan properti, mengedit nilai, atau menambahkan aturan baru.

### Validator CSS:

- Memeriksa apakah kode CSS sesuai standar.
- Contoh: W3C CSS Validator untuk menemukan error atau peringatan.

### Desain Responsif:

- Membuat desain halaman web menyesuaikan isi dengan ukuran layar.
- Membantu menemukan masalah breakpoint atau gaya yang tidak sesuai di perangkat berbeda.

## ✨ Ringkasan Utama

- CSS Grid → sistem layout dua dimensi (baris & kolom).
- Gunakan fr unit, gap, repeat(), minmax() untuk fleksibilitas.
- Ada grid eksplisit (ditentukan) dan implisit (otomatis).
- Penempatan item bisa berbasis garis (line) atau area (template areas).
- Gunakan DevTools untuk debugging, Validator CSS untuk standar, dan pastikan desain responsif.
