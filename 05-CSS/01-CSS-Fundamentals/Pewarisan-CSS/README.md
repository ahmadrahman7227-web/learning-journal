# Pewarisan CSS

## Pewarisan CSS
Beberapa properti diwariskan dari elemen induk ke anak.
Contoh: jika  diberi , maka teks di dalamnya akan otomatis biru kecuali ditimpa.

## 1. Pewarisan Warna

- Semua teks di dalam <body> akan otomatis berwarna biru, termasuk <h1>, <p>, dan <span>.
- Ini terjadi karena properti color adalah salah satu properti yang dapat diwariskan.
- Jadi, meskipun kita tidak menuliskan color: blue; pada <h1> atau <p>, mereka tetap mengikuti aturan dari induknya.


```css
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      color: blue;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <h1>Judul halaman</h1>
  <p>Paragraf pertama</p>
  <span>Teks dalam span</span>
</body>
</html>
```

## 2. Pewarisan dengan Penimpa

- Secara default, semua teks akan hijau karena diwariskan dari <body>.
- Namun, untuk elemen <p>, kita menuliskan aturan khusus color: red;.
- Akibatnya, teks dalam <p> akan menimpa pewarisan dan tampil merah.
- <span> tetap hijau karena tidak ada aturan khusus untuknya.


```css
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      color: green;
    }
    p {
      color: red;
    }
  </style>
</head>
<body>
  <h2>Judul sub bab</h2>
  <p>Paragraf ini akan merah</p>
  <span>Teks ini tetap hijau</span>
</body>
</html>
```

## ⚠️ Inti Pewarisan CSS

- Properti yang diwariskan: color, font-family, font-size, line-height, dll.
- Properti yang tidak diwariskan: margin, padding, border, background, dll.
- Override: Jika elemen anak punya aturan sendiri, maka aturan itu akan menggantikan pewarisan dari induk.