# 4. Accessibility Best Practices

• 	Heading structure: Gunakan heading sesuai hierarki agar screen reader bisa memahami struktur.

```html
<h1>Judul Utama</h1>
<h2>Sub Bagian</h2>
```

• 	Tables: Gunakan <th> untuk header, <td> untuk data, dan <caption> untuk judul tabel.

```html
<table>
  <caption>Daftar Nilai Siswa</caption>
  <tr><th>Nama</th><th>Nilai</th></tr>
  <tr><td>Ahmad</td><td>90</td></tr>
</table>
```

• 	Labels untuk input:

```html
<label for="email">Email:</label>
<input type="email" id="email">
```

•  	Alt text untuk gambar:

```html
<img src="foto.jpg" alt="Foto profil Ahmad">
```

•  Link text deskriptif:

```html
<a href="laporan.html">Lihat Laporan Keuangan</a>
```

• 	Audio/Video: Tambahkan caption, transcript, dan audio description.

• 	tabindex: Mengatur urutan fokus keyboard.

Gunakan (0) atau (-1), jangan lebih dari(0) .

```html
<p tabindex="-1">Pesan error</p>
```

• 	accesskey: Shortcut keyboard untuk elemen.

```html
<button accesskey="s">Save</button>
<a href="index.html" accesskey="h">Home</a>
```