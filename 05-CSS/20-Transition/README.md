# CSS Transition


## 1. Definisi

- Transition digunakan untuk membuat efek perubahan yang halus ketika suatu properti CSS berubah.

- Contoh: saat hover pada tombol, warna atau ukuran tidak langsung berubah kasar, tetapi bergeser secara smooth.

## 2. Sintaks Dasar

```css
selector {
  transition: property duration timing-function delay;
}
```

### Keterangan:

- property → properti CSS yang ingin dianimasikan (misalnya color, background-color, width, transform).
- duration → lama transisi (misalnya 0.5s, 200ms).
- timing-function → pola kecepatan transisi:
- linear → kecepatan konstan.
- ease → lambat di awal, cepat di tengah, lambat di akhir (default).
- ease-in → lambat di awal.
- ease-out → cepat di awal, lambat di akhir.
- ease-in-out → kombinasi lambat di awal dan akhir.
- delay → jeda sebelum transisi dimulai.

## 3. Contoh Dasar

```css
button {
  background-color: blue;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: red;
  transform: scale(1.1);
  transition: 0.3s ease;
}
```

👉 Hasil:

- Saat kursor diarahkan ke tombol, warna berubah dari biru → merah dengan halus.
- Tombol sedikit membesar (scale(1.1)) dengan transisi halus.


## 4. Contoh Efek pada Card

```css
.card {
  width: 200px;
  height: 200px;
  background: white;
  transition: background 0.3s ease, transform 0.3s ease;
}

.card:hover {
  background: lightblue;
  transform: rotate(5deg) scale(1.05);
}
```

👉 Hasil:

- Saat hover, kartu berubah warna menjadi biru muda.
- Kartu sedikit berputar (rotate(5deg)) dan membesar (scale(1.05)) dengan efek halus.

## ✨ Ringkasan Utama

- Transition membuat perubahan properti CSS lebih halus.
- Sintaks: transition: property duration timing-function delay;.
- Properti yang sering digunakan: color, background-color, width, height, transform.
- Timing-function menentukan pola kecepatan (linear, ease, ease-in, ease-out, ease-in-out).
- Bisa digunakan untuk efek hover pada tombol, card, gambar, dll.


## Catatan Tambahan

- Multiple properties: bisa menambahkan lebih dari satu properti dalam satu baris.

```css
transition: background-color 0.3s ease, transform 0.3s ease;
```

- Shorthand: jika hanya menulis transition: 0.3s ease;, maka semua properti yang berubah akan ikut transisi.

- Best practice: selalu tentukan properti yang ingin ditransisikan agar lebih efisien.


