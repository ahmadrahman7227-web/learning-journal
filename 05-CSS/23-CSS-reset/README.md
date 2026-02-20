# CSS Reset


## Apa itu CSS Reset?

CSS Reset adalah stylesheet yang digunakan untuk menghapus atau menetralkan default styling bawaan dari browser. Setiap browser (Chrome, Firefox, Safari, dll.) memiliki aturan bawaan sendiri untuk elemen HTML seperti margin, padding, ukuran font, dan heading. Akibatnya, tampilan website bisa berbeda antar browser. CSS Reset membantu menciptakan konsistensi tampilan dengan cara menghapus aturan bawaan tersebut sehingga developer bisa memulai dari "lembar kosong" dan mendefinisikan gaya sesuai kebutuhan.

## Tujuan Utama CSS Reset

- Menghilangkan perbedaan antar browser → margin, padding, line-height, dll.

- Memberikan kontrol penuh kepada developer atas tampilan elemen.

- Mempermudah konsistensi desain di berbagai perangkat dan browser.

## Contoh CSS Reset Sederhana
/* CSS Reset dasar */

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: sans-serif;
}
```

👉 Dengan kode ini, semua elemen dimulai tanpa margin/padding bawaan, sehingga developer bisa menambahkan styling sesuai desain.


Contoh penggunaan Normalize.css:

```html
<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
```

👉 Normalize.css tidak menghapus semua gaya, tapi menyamakan gaya bawaan agar konsisten di semua browser.


## Kesimpulan

- CSS Reset cocok jika kamu ingin kontrol penuh dan memulai dari nol.

- Normalize.css cocok jika kamu ingin konsistensi antar browser tanpa kehilangan gaya bawaan yang berguna.

- Banyak framework modern (misalnya Tailwind CSS) sudah menyertakan versi reset/normalize bawaan.


