# Display: Inline vs Block


## 1. Display: Inline

Konsep CSS:

- Elemen dengan display: inline tidak memulai baris baru.

- Lebar dan tinggi elemen hanya mengikuti konten.

- Properti width dan height tidak berlaku.

- Cocok untuk elemen teks atau link.

Contoh CSS & HTML:

```css
<style>
.inline-box {
  display: inline;
  background-color: lightblue;
  border: 1px solid blue;
  padding: 5px;
}
</style>

<p>
  Teks <span class="inline-box">inline 1</span> 
  dan <span class="inline-box">inline 2</span> tetap sejajar.
</p>
```


👉 Kotak "inline 1" dan "inline 2" akan tampil dalam satu baris bersama teks.


## 2. Display: Block

Konsep CSS:

- Elemen dengan display: block selalu memulai baris baru.

- Lebarnya secara default 100% dari container.

- Bisa diatur width, height, margin, dan padding.

- Cocok untuk struktur layout (header, section, div).

```css
Contoh CSS & HTML:
<style>
.block-box {
  display: block;
  background-color: lightgreen;
  border: 1px solid green;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

<div class="block-box">Box Block 1</div>
<div class="block-box">Box Block 2</div>
```

👉 Setiap box akan tampil di baris baru, memenuhi lebar container.


## 3. Display: Inline-block

Konsep CSS:

- Elemen dengan display: inline-block tidak memulai baris baru (seperti inline).

- Tapi bisa diatur width dan height (seperti block).

- Cocok untuk membuat elemen sejajar dengan ukuran yang bisa dikontrol (misalnya tombol, kartu, menu).

```css
Contoh CSS & HTML:
<style>
.inline-block-box {
  display: inline-block;
  width: 120px;
  height: 60px;
  background-color: orange;
  border: 1px solid darkorange;
  margin-right: 10px;
  text-align: center;
}
</style>

<div class="inline-block-box">Box 1</div>
<div class="inline-block-box">Box 2</div>
```

👉 Kedua box tampil sejajar dalam satu baris, tapi ukurannya bisa diatur.


