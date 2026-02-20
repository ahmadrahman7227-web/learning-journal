# CSS Transformations


## Definisi

Properti transform memungkinkan kita menerapkan berbagai transformasi visual pada elemen HTML, baik dalam ruang 2D maupun 3D.

Transformasi ini tidak mengubah alur dokumen (flow), hanya tampilan visual elemen.

## Fungsi Utama

a. translate()

- Fungsi: Memindahkan elemen dari posisi asalnya.

- **translate(x. y)**

- Contoh:

```css
.box {
  transform: translate(50px, 100px);
}
```

👉 Elemen bergeser 50px ke kanan dan 100px ke bawah.


b. scale()

- Fungsi: Mengubah ukuran elemen (besar/kecil).

- **scale(x, y)**

- Contoh:

```css
.box {
  transform: scale(1.5, 2);
}
```

👉 Elemen diperbesar 1.5 kali secara horizontal dan 2 kali secara vertikal.

c. rotate()

- Fungsi: Memutar elemen sesuai sudut derajat.

- **rotate(angle)**

- Contoh:

```css
.box {
  transform: rotate(45deg);
}
```

👉 Elemen diputar searah jarum jam sebesar 45°.


d. skew()

- Fungsi: Memiringkan elemen pada sumbu X atau Y.

- **skew(x-angle, y-angle)**

- Contoh:

```css
.box {
  transform: skew(20deg, 10deg);
}
```

👉 Elemen dimiringkan 20° pada sumbu X dan 10° pada sumbu Y.


## Transformasi 3D

- rotateX(angle) -> memutar di sumbu X.
- rotateY(angle) -> memutar di sumbu Y.
- rotateZ(angle) -> memutar di sumbu Z.
- translateZ(length) -> menggeser elemen ke depan/ belakang layar.
- scaleZ(number) -> mengubah ujuran pada sumbu Z.

```css
.box {
  transform: rotateY(60deg);
}
```

⚠️ Elemen diputar 60 derajat pada sumbu Y, terlihat seperti berputar ke samping.

## Properti Tambahan

- perspective -> memberi efek kedalaman pada transformasi 3D.

```css
.container {
    perspective: 500px;
}
.box {
    transform: rotateX(45deg);
}
```

⚠️ Elemen terlihat seperti berputar dengan efek ruang 3D.

- backface-visibility -> menentukan apakah sisi belakang elemen terlihat saat diputar.

```css
.box {
    backface-visisbilty: hidden;
}
```
## Gabungan Transformasi

Kita bisa menggabungkan beberapa transformasi sekaligus:

```css
.box {
  transform: translate(50px, 0) rotate(30deg) scale(1.2);
}
```

👉 Elemen bergeser, diputar, dan diperbesar dalam satu deklarasi.


## Transformasi & Aksesibilitas

- Transformasi hanya memindahkan elemen secara visual, bukan secara semantik.

- Jika ingin menyembunyikan konten, jangan hanya memindahkan keluar layar dengan translate().

### Gunakan cara yang benar:

- display: none; → konten benar-benar hilang dari dokumen.

- visibility: hidden; → konten tetap ada tapi tidak terlihat.

Hal ini penting agar pembaca layar (screen reader) dan navigasi keyboard tetap bisa mengakses konten dengan benar.
