# CSS Flexbox


## 1. Apa itu Flexbox?

Flexbox adalah cara mengatur tata letak elemen di dalam sebuah kontainer.
Bayangkan sebuah kotak besar (container) berisi kotak-kotak kecil (items). Flexbox membantu mengatur posisi item agar rapi, baik secara horizontal (baris) maupun vertikal (kolom).

## Konsep Dasar

- Main axis (sumbu utama): arah utama item disusun (horizontal/vertikal).

- Cross axis (sumbu silang): arah tegak lurus dari sumbu utama. (Misal sumbu utama horizontal, maka sumbu silang vertikal).

- Untuk menggunakan Flexbox WAJIB menyertakan ini :

```css
.container {
  display: flex;
}
```


## 2. Flex-direction

Mengatur arah item di dalam kontainer.
Nilai:

- row → item berjejer ke samping (default).

- row-reverse → item berjejer ke samping, urutannya dibalik.

- column → item berjejer ke bawah.

- column-reverse → item berjejer ke bawah, urutannya dibalik.

```css
.container {
  display: flex;
  flex-direction: row;
}
```


## 3. Flex-wrap

Mengatur apakah item boleh pindah ke baris/kolom baru jika ruang tidak cukup.

### Nilai:

- nowrap → semua item tetap di satu baris (default).

- wrap → item turun ke baris baru jika penuh.

- wrap-reverse → sama seperti wrap, tapi urutan baris dibalik.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```


## 4. Flex-flow

Gabungan dari flex-direction dan flex-wrap.

```css
.container {
  display: flex;
  flex-flow: column wrap-reverse;
}
```


## 5. Justify-content

Mengatur posisi item di sepanjang sumbu utama.

### Nilai:

- flex-start → item di awal sumbu utama.

- flex-end → item di akhir sumbu utama.

- center → item di tengah.

- space-between → item tersebar rata tanpa ruang di ujung.

- space-around → item tersebar rata dengan jarak sama di kiri-kanan tiap item.

- space-evenly → item tersebar rata dengan jarak sama di kiri-kanan dan tengah.

```css
.container {
  display: flex;
  justify-content: center;
}
```


## 6. Align-items

Mengatur posisi item di sepanjang sumbu silang.

### Nilai:

- flex-start → item menempel di sisi awal sumbu silang.

- flex-end → item menempel di sisi akhir sumbu silang.

- center → item berada di tengah sumbu silang.

- stretch → item direntangkan agar memenuhi tinggi kontainer.

```css
.container {
  display: flex;
  align-items: center;
}
```


## 7. Align-self

Mengatur posisi item individual di sepanjang sumbu silang.

### Nilai:

- flex-start -> item menempel di sisi awal sumbu silang.

- flex-end -> item menempel di sisi akhir sumbu silang.

- center -> item berada di tengah sumbu silang.

- stretch -> item direntangkan agar memenuhi tinggi kontainer.

```css
.item {
  align-self: center;
}
```


## 8. Order Properti

Mengatur urutan tampilan item tanpa mengubah urutan di HTML.

### Nilai:

- Default = 0.

- Nilai lebih kecil → tampil lebih awal.

- Nilai lebih besar → tampil lebih akhir.

```css
.item {
  order: -1; /* tampil lebih awal */
}
```


## 9. Flex Properti (Shorthand)

Gabungan dari flex-grow, flex-shrink, flex-basis.

- flex-grow: kemampuan item untuk tumbuh jika ada ruang kosong.

- flex-shrink: kemampuan item untuk menyusut jika ruang sempit.

- flex-basis: ukuran dasar item sebelum tumbuh/menyusut.

### Nilai (Value)

- (flex-grow: 0;) -> item tidak tumbuh meski ada ruang kosong.

- (flex-shrink: 0;) -> item tidak menyusut meskipun ruang sempit.

- (flex-basis: 200px;) -> ukuran dasar item (200px).

Contoh:

```css
.item {
  flex: 1;          /* bisa tumbuh */
  flex: 0 0 200px;  /* fix 200px */
  flex: 9;          /* tumbuh lebih besar */
}
```


## 10. Gap

Memberikan jarak antar item di dalam container Flex (tanpa padding).

### Variasi:

- row-gap → jarak antar baris.

- column-gap → jarak antar kolom.

- gap → jarak antar baris dan kolom sekaligus.

```css
.container {
  display: flex;
  gap: 20px;
}
```

## Ringkasan

• 	Flexbox mempermudah pengaturan layout responsif.

• 	Dengan kombinasi properti ini, kita bisa membuat layout yang fleksibel, rapi, dan konsisten di berbagai ukuran layar.

