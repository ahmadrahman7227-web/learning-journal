# Tinjauan Daftar, Tautan, Latar Belakang, dan Batas

---

## Styling Lists

1. **line-height** Properti : Properti ini digunakan untuk membuat spasi antar baris teks. line-heightNilai yang diterima meliputi kata kunci normal, angka, persentase, dan satuan panjang seperti emsatuan.
2. **list-style-type** Properti : Properti ini digunakan untuk menentukan penanda untuk item daftar. Nilai yang dapat diterima meliputi circle, disc, atau decimal.

- Berikut contoh penggunaan **list-style-type** untuk mengubah gaya poin-poin:

```css
ul {
  list-style-type: square;
}
```

3. **list-style-position** Properti : Properti ini digunakan untuk mengatur posisi penanda daftar. Hanya ada dua nilai yang dapat diterima, yaitu **inside dan outside**.

- Berikut contoh yang menunjukkan perbedaan antara **inside** dan **outside**:

```css
.inside-list {
  list-style-position: inside;
}

.outside-list {
  list-style-position: outside;
}
```

4. **list-style-image** Properti : Properti ini digunakan untuk menggunakan gambar sebagai penanda item daftar. Kasus penggunaan umum adalah menggunakan **url** fungsi dengan nilai yang ditetapkan ke lokasi gambar yang valid.

## Memberi jarak antar item daftar menggunakan **margin**

- Selain itu **line-height**, margin juga dapat digunakan dalam CSS untuk meningkatkan jarak dan keterbacaan item daftar.

- Margin menciptakan ruang di luar setiap **li** elemen, memungkinkan kontrol atas jarak antar item dalam daftar.

- **margin-bottom** Digunakan untuk membuat spasi di bawah setiap item daftar. Misalnya, **margin-bottom: 10px;** akan membuat celah 10 piksel di bawah setiap item daftar.

```css
.list li {
  margin-bottom: 20px;
}
```