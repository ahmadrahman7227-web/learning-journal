#  Lists (Daftar)


## 	Jenis daftar:

• <ul>	 → unordered list (bullet/lingkaran).

• <ol>	 → ordered list (angka/roman/alphabet).

## 	Styling Lists

1. line-height

- Digunakan untuk memberi jarak antar baris teks.

### Nilai bisa berupa:

- normal (default)
- angka (1.5, 2)
- persentase (150%)
- satuan panjang (2em, 20px)

Contoh:

```CSS
p {
  line-height: 1.5;
}
```


2. list-style-type

- Menentukan bentuk marker pada list item.

- Nilai umum: disc, circle, square, decimal.

Contoh:

```CSS
ul {
  list-style-type: square;
}
```


3. list-style-position

- Menentukan posisi marker list.

- Nilai: inside (marker di dalam konten) atau outside (default, marker di luar konten).

Contoh:

```CSS
.inside-list {
  list-style-position: inside;
}
.outside-list {
  list-style-position: outside;
}
```


4. list-style-image

- Menggunakan gambar sebagai marker list.

- Nilai: url("gambar.png").

Contoh:

```CSS
ul {
  list-style-image: url("bullet.png");
}
```


5. Spacing dengan margin

- Memberi jarak antar list item.

- Umumnya menggunakan margin-bottom.

Contoh:

```CSS
li {
  margin-bottom: 10px;
}
```









## 	Shorthand: 

**list-style: type position image;**

Contoh:

```css
ul {
  list-style-type: square;
  list-style-position: inside;
}
```

