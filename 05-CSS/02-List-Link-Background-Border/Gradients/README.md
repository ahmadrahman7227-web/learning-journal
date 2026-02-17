# Gradients


1. linear-gradient()

• Transisi warna sepanjang garis lurus.

• 	Arah bisa: , , , , atau menggunakan sudut (misalnya ).

• 	Membutuhkan minimal 2 warna (color stops).

• 	Bisa ditambahkan lebih banyak warna untuk transisi kompleks.


```css
div {
  background: linear-gradient(to right, red, yellow);
  height: 100px;
}
```

2. radial-gradient()

- Transisi warna dari titik pusat (lingkaran/ellipse).

- Bentuk bisa circle atau ellipse.

- Bisa menentukan posisi pusat (at center, at top left, dll).


```css
div {
  background: radial-gradient(circle, red, yellow, green);
  height: 100px;
}
```

3. Conic Gradient (conic-gradient())

- Transisi warna berputar mengelilingi titik pusat (seperti pie chart).

- Bisa menentukan sudut awal (from 0deg) dan posisi pusat (at center).

- Contoh:

```css
div {
  background: conic-gradient(from 0deg at center, red, yellow, green);
}
```

## Repeating Gradients

Selain gradien biasa, ada versi berulang:

- repeating-linear-gradient()

- repeating-radial-gradient()

- repeating-conic-gradient()

Digunakan untuk membuat pola berulang dengan gradien.

Contoh:

```css
div {
  background: repeating-linear-gradient(
    45deg,
    red 0px,
    yellow 10px,
    green 20px
  );
}
```


### Nilai yang Dapat Digunakan

- Arah/Sudut: to right, to bottom, 45deg, 180deg.

- Bentuk: circle, ellipse.

- Posisi: at center, at top left, at bottom right.

- Color stops: warna dengan posisi tertentu (red 0%, yellow 50%, green 100%).

- Fungsi berulang: 
repeating-linear-gradient, dll.


## 📌 Kesimpulan:

- Linear → transisi lurus.
- Radial → transisi melingkar dari pusat.
- Conic → transisi berputar mengelilingi pusat.
- Repeating → pola gradien berulang.


