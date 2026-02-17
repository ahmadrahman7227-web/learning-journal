# Kombinator CSS
Digunakan untuk memilih elemen berdasarkan hubungan antar elemen.


## 1. Kombinator Keturunan (spasi)
Digunakan untuk menargetkan semua elemen yang berada di dalam elemen induk, tidak peduli seberapa dalam posisinya.

```css
div p {
  color: blue;
}
```

Artinya: semua  di dalam  akan berwarna biru, baik anak langsung maupun cucu.

## 2. Kombinator Anak Langsung ( > )
Hanya menargetkan elemen yang merupakan anak langsung dari induknya.

```css
.container > p {
  color: red;
}
```

Artinya: hanya  yang langsung berada di dalam  yang akan berwarna merah.
Jika  ada di dalam  lain di dalam , maka tidak terpengaruh.

## 3. Kombinator Sibling Berikutnya ( + )
Menargetkan elemen yang langsung mengikuti elemen tertentu.

```css
h2 + p {
  background: yellow;
}
```

Artinya: hanya  yang langsung berada setelah  yang akan diberi latar kuning.

## 4. Kombinator Saudara Kandung ( ~ )
Menargetkan semua elemen saudara kandung setelah elemen tertentu, selama masih dalam induk yang sama.

```css
ul ~ p {
  font-style: italic;
}
```

Artinya: semua  yang berada setelah  dalam induk yang sama akan menjadi miring.

## ⚠️ Kesimpulannya

👉 Analoginya begini:

• 	Keturunan (spasi) = semua keturunan dalam keluarga.
• 	Anak langsung ( > ) = hanya anak kandung.
• 	Sibling berikutnya ( + ) = adik tepat setelah kakaknya.
• 	Saudara kandung ( ~ ) = semua adik setelah kakak, bukan hanya yang pertama