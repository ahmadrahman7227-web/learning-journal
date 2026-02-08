# 7. Media Elements dan Optimasi

## Iframe: Menyematkan konten eksternal.

```html
<iframe src="https://www.example.com" title="Example Site"></iframe>
```

## Anda dapat menyertakan allowfullscreenatribut yang memungkinkan pengguna untuk menampilkan iframe dalam mode layar penuh.

```html
<iframe
  src="video-url"
  width="width-value"
  height="height-value"
  allowfullscreen
></iframe>
```
- Format Gambar: 
Dua format file yang paling umum adalah PNG dan JPG, tetapi format ini bukan lagi format yang paling ideal untuk menyajikan gambar. Kecuali Anda memerlukan dukungan untuk browser lama, **Anda harus mempertimbangkan untuk menggunakan format yang lebih optimal, seperti WEBP atau AVIF.**

- **SVG (Scalable Vector Graphics)**
melacak data berdasarkan jalur dan persamaan untuk memplot titik, garis, dan kurva. Artinya, grafik vektor, seperti SVG, dapat diskalakan ke ukuran apa pun tanpa memengaruhi kualitasnya.

- Mengoptimalkan media : Ada tiga hal yang perlu dipertimbangkan saat menggunakan media, seperti gambar, di halaman web Anda: ukuran, format, dan kompresi. Algoritma kompresi digunakan untuk mengurangi ukuran file atau data.

- Lisensi gambar : Gambar yang berada di domain publik tidak memiliki hak cipta dan bebas digunakan tanpa batasan apa pun. Gambar yang dilisensikan secara khusus di bawah lisensi Creative Commons 0 dianggap sebagai domain publik. Beberapa gambar mungkin dirilis di bawah lisensi permisif, seperti lisensi Creative Commons, atau lisensi BSD yang digunakan freeCodeCamp.

```html
<h1>A freeCodeCamp YouTube Video Embedded with the iframe Element</h1>

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/PkZNo7MFNFg?si=-UBVIUNM3csdeiWF"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
```
