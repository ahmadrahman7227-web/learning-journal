# Properti Filter CSS


## Definisi

Properti CSS filter adalah alat ampuh yang memungkinkan kita menerapkan efek grafis pada elemen di halaman web.

## Fungsi

Properti ini dapat digunakan untuk menciptakan berbagai efek seperti pengaburan, penggeseran warna, dan penyesuaian kontras.

## Sintaks Dasar

```css
selector {
    filter: function(amount);
}
```

## CSS Filter Functions

1. grayscale() 

- Mengubah elemen menjadi hitam putih.

 Nilai: (nilai dalam (%))

- 0% = normal
- 100% = full hitam putih

Contoh:

```css
img {
  filter: grayscale(100%);
}
```


2. sepia()

- Memberi efek foto jadul berwarna coklat.

 Nilai: (nilai dalam (%))

- 0% = normal
- 100% = sepia penuh

Contoh:

```css
img {
  filter: sepia(80%);
}
```


3. hue-rotate()

- Memutar warna berdasarkan lingkaran warna.

- Nilai dalam derajat (deg).

Contoh:

```css
img {
  filter: hue-rotate(90deg);
}
```


4. invert()

- Membalik warna menjadi negatif.

 Nilai: (nilai daalam (%))

- 0% = normal
- 100% = warna terbalik sepenuhnya

Contoh:

```css
img {
  filter: invert(100%);
}
```


5. contrast()

- Mengatur kontras elemen.

 Nilai: (nilai dalam (%))

- 0% = elemen abu-abu rata
- 100% = kontras normal
- 100% = kontras lebih tajam

Contoh:

```css
img {
  filter: contrast(100%);
}
```


6. saturate()

- Mengatur intensitas warna.

 Nilai: (nilai dalam (%))

- 0% = warna hilang (abu-abu)
- 100% = normal
- 100% = warna lebih kuat

Contoh:

```css
img {
  filter: saturate(150%);
}
```


7. brightness()

- Mengatur kecerahan elemen.

 Nilai: (nilai dalam (%))

- 0% = sangat gelap
- 100% = normal
- 100% = lebih terang

Contoh:

```css
img {
  filter: brightness(110%);
}
```

8. blur()

- Membuat elemen jadi buram

 Fungsi:

 Fungsi ini menerapkan efek (Gaussian blur) pada elemen. 
 
  Nilai:
  
 ditentukan dalam (px) dan mewarnai radius blur.

 ```css
 filter: blur(2px);
 ```



