# CSS Relative dan Absolute Units

---

## Absolute Units (Satuan Tetap)

Absolute units memiliki ukuran tetap dan tidak bergantung pada elemen lain atau ukuran layar.

• 	px (Pixel) → 1px = 1/96 inch.

• 	in (Inch) → 1in = 96px.

• 	cm (Centimeter) → 1cm ≈ 37.8px.

• 	mm (Millimeter) → 1mm = 1/10 cm.

• 	q (Quarter-millimeter) → 1q = 1/40 cm.

• 	pc (Pica) → 1pc = 1/6 inch = 16px.

• 	pt (Point) → 1pt = 1/72 inch ≈ 1.33px.

📌 Catatan: Absolute units jarang dipakai untuk web modern karena tidak fleksibel di berbagai layar.

**Contoh:**

```css
.kotak-px {
  width: 100px;   /* selalu 100 pixel */
  height: 50px;
}

.kotak-in {
  width: 1in;     /* sama dengan 96px */
}

.kotak-cm {
  width: 2cm;     /* sekitar 75.6px */
}

.kotak-mm {
  width: 10mm;    /* sama dengan 1cm */
}

.kotak-q {
  width: 40q;     /* sama dengan 1cm */
}

.kotak-pc {
  font-size: 2pc; /* sekitar 32px */
}

.kotak-pt {
  font-size: 12pt; /* sekitar 16px */
}
```

## Relative Units (Satuan Relatif)

Relative units bergantung pada konteks: ukuran parent, root, atau viewport.

• 	% (Persentase) → relatif terhadap elemen induk.

• 	em → relatif terhadap font-size parent.

• 	rem → relatif terhadap font-size root ().

• 	vh (Viewport Height) → 1vh = 1% tinggi layar.

• 	vw (Viewport Width) → 1vw = 1% lebar layar.

📌 Catatan: Relative units lebih fleksibel untuk desain responsif.

**Contoh:**

```css
.parent {
  width: 400px;
  font-size: 16px;
}

.anak-percent {
  width: 50%;   /* setengah dari parent */
}

.anak-em {
  font-size: 2em; /* 2 × font parent = 32px */
}

.anak-rem {
  font-size: 2rem; /* 2 × font root (html) */
}

.kotak-vh {
  height: 50vh; /* setengah tinggi layar */
}

.kotak-vw {
  width: 50vw;  /* setengah lebar layar */
}
```

## Fungsi **calc()**

 **calc()** memungkinkan kita menghitung nilai CSS secara dinamis. Bisa menggabungkan unit berbeda.

Contoh:

```css
.kotak {
  width: calc(100% - 50px); /* lebar penuh dikurangi 50px */
  height: calc(50vh + 20px); /* setengah tinggi layar + 20px */
}
```

📌 Analogi: Bayangkan  seperti kalkulator di dalam CSS. Kamu bisa bilang: "Lebar = seluruh layar dikurangi margin tertentu."