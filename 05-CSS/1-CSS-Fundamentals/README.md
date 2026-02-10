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
• 	 → lebar elemen
• 	 → tinggi elemen
• 	 /  → batas minimum/maksimum lebar
• 	 /  → batas minimum/maksimum tinggi
Contoh:


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

• 	**Inline** → tidak memulai baris baru (contoh: , ).
• 	**Block** → memulai baris baru dan memenuhi lebar (contoh: , ).
• 	**Inline-block** → gabungan keduanya, bisa diatur  & .

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
