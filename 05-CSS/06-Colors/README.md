# CSS Colors Review

---

## Teori Warna

• 	Definisi: Studi tentang bagaimana warna berinteraksi dan memengaruhi persepsi manusia.
• 	Warna Primer: Merah, biru, kuning → dasar semua warna.
• 	Warna Sekunder: Campuran dua primer → hijau, oranye, ungu.
• 	Warna Tersier: Campuran primer + sekunder → kuning-hijau, biru-hijau, biru-ungu.
• 	Warna Hangat: Merah, oranye, kuning → memberi kesan energi, semangat, kehangatan.
• 	Warna Dingin: Biru, hijau, ungu → memberi kesan tenang, damai, profesional.
• 	Roda Warna (Color Wheel): Diagram lingkaran untuk melihat hubungan antar warna.
• 	Skema Warna:
• 	Analogous: Warna berdekatan di roda warna → harmonis, lembut.
• 	Complementary: Warna berlawanan di roda warna → kontras tinggi.
• 	Triadic: Tiga warna berjarak sama → cerah, seimbang.
• 	Monochromatic: Variasi dari satu warna dasar → seragam, harmonis.

---

## Format Warna

1. RGB
- Format: rgb(red, green, blue)
- Nilai: 0-255 untuk masing-masing komponen.

```css
p {
  color: rgb(255, 0, 0); /* merah */
}
```

2. RGBA
- Format: rgba(red, green, blue, alpha)
- Nilai: red, green, blue = 0-255; alpha = 0-1.

```css
div {
  background-color: rgba(0, 0, 255, 0.5); /* biru transparan */
}
```

3. HSL
- Format: hsl(hue, saturation%, lightness%)
- Nilai: hue = 0-360; saturation = 0-100%; lightness = 0-100%.

```css
p {
  color: hsl(120, 100%, 50%); /* hijau cerah */
}
4. HSLA- Format: hsla(hue, saturation%, lightness%, alpha)- Nilai: sama dengan HSL + alpha (0-1).
div {
  background-color: hsla(0, 100%, 50%, 0.3); /* merah transparan */
}
```

5. Hexadecimal
- Format: #RRGGBB atau #RGB.
- Nilai: kombinasi angka 0-9 dan huruf A-F.

```css
h1 {
  color: #FF5733; /* merah-oranye */
}
```

6. Nama Warna
- CSS memiliki daftar nama warna bawaan (sekitar 140).

```css
span {
  color: lightgreen;
}
```

Catatan
- `color` -> teks.
- `background-color` -> latar belakang.
- `border-color` -> garis tepi.

