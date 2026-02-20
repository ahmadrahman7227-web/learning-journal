# Jenis Position dalam CSS


## 1. Static (default)

- Definisi: Semua elemen secara default memiliki position: static.

- Perilaku: Elemen mengikuti alur normal dokumen (atas → bawah, kiri → kanan).

- Keterbatasan: Tidak bisa diatur dengan properti top, left, right, bottom.

Contoh:

```css
div {
  position: static; /* default */
}
```


## 2. Relative

- Definisi: Elemen tetap berada dalam alur normal dokumen, tetapi bisa digeser menggunakan top, left, right, bottom.

- Efek: Elemen bergeser dari posisi aslinya, namun ruang aslinya tetap dipertahankan.

- Kegunaan: Sering digunakan sebagai patokan (reference) bagi elemen dengan position: absolute di dalamnya.

Contoh:

```css
.box {
  position: relative;
  top: 30px;
  left: 30px;
}
```


## 3. Absolute

- Definisi: Elemen keluar dari alur normal dokumen.

- Efek: Posisi ditentukan relatif terhadap ancestor terdekat yang memiliki position: relative, absolute, atau fixed.

- Jika tidak ada ancestor berposisi khusus: Maka elemen akan diposisikan relatif terhadap viewport.

Contoh:

```css
.child {
  position: absolute;
  top: 30px;
  left: 30px;
}
```


## 4. Fixed

- Definisi: Elemen diposisikan relatif terhadap viewport (layar browser).

- Efek: Tetap berada di tempat yang sama meskipun halaman di-scroll.

- Kegunaan: Cocok untuk header, navbar, atau tombol “back to top”.

Contoh:

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```


## 5. Sticky

- Definisi: Kombinasi antara relative dan fixed.

- Efek: Elemen awalnya mengikuti alur normal (relative), tetapi akan “menempel” (fixed) ketika mencapai posisi tertentu saat halaman di-scroll.

- Kegunaan: Digunakan untuk membuat efek sticky header atau sticky section.

Contoh:

```css
.header {
  position: sticky;
  top: 0; /* menempel di atas saat scroll */
}
```

## 6. Z-index (lapisan elemen)

- Definisi:

(z-index) menentukan urutan tumpukan elemen (depan-belakang).

- Aturan:

Nilai lebih besar tampil di atas.

- Catatan:

Hanya berfungsi pada elemen yang posisinya bukan static ( harus relatif, absolute, fixed, atau sticky. )

```css
.box {
    position: absolute;
    z-index: 1;
}
```

## Ringkasan Utama

- Static → default, tidak bisa digeser dengan top/left.

- Relative → bergeser dari posisi normal, tetap mempertahankan ruang aslinya.

- Absolute → keluar dari alur normal, posisinya relatif terhadap ancestor berposisi khusus.

- Fixed → relatif terhadap viewport, tetap di tempat saat scroll.

- Sticky → gabungan relative + fixed, menempel saat scroll mencapai posisi tertentu.


