# 1. Elemen Audio

Digunakan untuk menambahkan suara ke halaman web.

## Contoh dasar:
```html
<audio src="lagu.mp3"></audio>
```

## Atribut penting:

• **src** → lokasi file audio.
• 	**controls** → menampilkan kontrol pemutar (play, pause, volume).

• 	**loop** → mengulang audio terus-menerus.

• 	**muted** → memulai audio dalam keadaan mute.

• 	**autoplay** → memutar otomatis saat halaman dimuat (tidak disarankan karena bisa mengganggu).

• 	**source** → mendukung berbagai format audio agar kompatibel di semua browser.

```html
<audio controls>
  <source src="lagu.ogg" type="audio/ogg">
  <source src="lagu.mp3" type="audio/mpeg">
</audio>
```
---

# 2. Elemen Video

Digunakan untuk menambahkan video ke halaman web.

## Contoh dasar:
```html
<video src="video.mp4"></video>
```

## Atribut penting:

• 	**src** → lokasi file video.

• 	**controls** → menampilkan kontrol pemutar video.

• 	**loop** → mengulang video terus-menerus.

• 	**muted** → memulai video dalam keadaan mute.

• 	**autoplay** → memutar otomatis saat halaman dimuat.

• 	**poster** → gambar yang ditampilkan sebelum video diputar.

• 	**width dan height** → ukuran video.

• 	**source** → mendukung berbagai format video.

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
</video>
```