# CSS Fundamentals

---

## Apa itu CSS?
CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk memberi gaya pada elemen HTML.
Bayangkan HTML itu seperti kerangka rumah, sedangkan CSS adalah cat, dekorasi, dan tata letaknya.

## Anatomi Aturan CSS
Setiap aturan CSS terdiri dari:
• 	Selektor → menentukan elemen mana yang akan diberi gaya.
• 	Deklarasi → berisi properti dan nilai gaya.

## Sintaks Dasar

```css
selector {
  property: value;
}
```

- Contoh:

```css
p {
  color: red;
  font-size: 16px;
}
```

Artinya: semua  akan berwarna merah dengan ukuran font 16px.

## Cara Menulis CSS
• 	Inline CSS → langsung di dalam elemen HTML.

• 	Internal CSS → ditulis di dalam  di .

• 	Eksternal CSS → ditulis di file  terpisah.

👉 Untuk proyek nyata, eksternal CSS adalah pilihan terbaik karena lebih rapi dan mudah dikelola.

## Width & Height
• width	 → lebar elemen
• height	 → tinggi elemen
• min-width	/ max-width → batas minimum/maksimum lebar
• min-height / max-height → batas minimum/maksimum tinggi

Contoh:

```css
.box {
  width: 300px;          /* lebar tetap 300px */
  height: 200px;         /* tinggi tetap 200px */
  min-width: 150px;      /* lebar tidak boleh kurang dari 150px */
  max-width: 500px;      /* lebar tidak boleh lebih dari 500px */
  min-height: 100px;     /* tinggi minimum 100px */
  max-height: 400px;     /* tinggi maksimum 400px */
  background-color: lightblue;
}
```


## Kombinator CSS
Digunakan untuk memilih elemen berdasarkan hubungan antar elemen.

1. Kombinator Keturunan (spasi)
Digunakan untuk menargetkan semua elemen yang berada di dalam elemen induk, tidak peduli seberapa dalam posisinya.

```css
div p {
  color: blue;
}
```

Artinya: semua  di dalam  akan berwarna biru, baik anak langsung maupun cucu.

2. Kombinator Anak Langsung ( > )
Hanya menargetkan elemen yang merupakan anak langsung dari induknya.

```css
.container > p {
  color: red;
}
```

Artinya: hanya  yang langsung berada di dalam  yang akan berwarna merah.
Jika  ada di dalam  lain di dalam , maka tidak terpengaruh.

3. Kombinator Sibling Berikutnya ( + )
Menargetkan elemen yang langsung mengikuti elemen tertentu.

```css
h2 + p {
  background: yellow;
}
```

Artinya: hanya  yang langsung berada setelah  yang akan diberi latar kuning.

4. Kombinator Saudara Kandung ( ~ )
Menargetkan semua elemen saudara kandung setelah elemen tertentu, selama masih dalam induk yang sama.

```css
ul ~ p {
  font-style: italic;
}
```

Artinya: semua  yang berada setelah  dalam induk yang sama akan menjadi miring.

👉 Analoginya begini:
• 	Keturunan (spasi) = semua keturunan dalam keluarga.
• 	Anak langsung ( > ) = hanya anak kandung.
• 	Sibling berikutnya ( + ) = adik tepat setelah kakaknya.
• 	Saudara kandung ( ~ ) = semua adik setelah kakak, bukan hanya yang pertama


## Display: Inline vs Block

• 	**Inline** → tidak memulai baris baru.
• 	**Block** → memulai baris baru dan memenuhi lebar.
• 	**Inline-block** → gabungan keduanya, bisa diatur.

## Margin & Padding

• 	**Margin** → jarak di luar elemen.
• 	**Padding** → jarak di dalam elemen (antara konten dan border).
Contoh shorthand:


## Spesifisitas CSS

Urutan kekuatan aturan CSS:

1. 	Inline CSS → paling kuat 
2. 	ID selector → kuat 
3. 	Class selector → sedang 
4. 	Type selector → lemah 
5. 	Universal selector  → paling lemah 
👉  bisa menimpa semua, tapi gunakan hati-hati.

## Pewarisan CSS
Beberapa properti diwariskan dari elemen induk ke anak.
Contoh: jika  diberi , maka teks di dalamnya akan otomatis biru kecuali ditimpa.

1. Pewarisan Warna

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

2. Pewarisan dengan Penimpa

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

⚠️ Inti Pewarisan CSS

- Properti yang diwariskan: color, font-family, font-size, line-height, dll.
- Properti yang tidak diwariskan: margin, padding, border, background, dll.
- Override: Jika elemen anak punya aturan sendiri, maka aturan itu akan menggantikan pewarisan dari induk.
