# CSS Animations 


## 1. Konsep Dasar

- Animasi CSS memungkinkan elemen berubah gaya secara bertahap dari satu keadaan ke keadaan lain.

### Dibuat dengan dua komponen utama:

- @keyframes → mendefinisikan tahapan animasi.

- animation properties → mengontrol bagaimana animasi dijalankan.

## 2. @keyframes

- Digunakan untuk menentukan gaya elemen di awal, tengah, dan akhir animasi.

- Bisa menggunakan persentase (0%, 50%, 100%) atau kata kunci (from, to).

Contoh:

```css
@keyframes slide-in {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
```

- Juga bisa menggunakan (from) dan juga (to)

```css
@keyframes zoom-in {
  from { transform: scale(0.5); }
  to   { transform: scale(1); }
}
```


## 3. Properti Animation

Properti yang digunakan untuk mengontrol animasi:

### animation-name → nama animasi, sesuai dengan @keyframes.

### animation-duration → durasi animasi (misalnya 2s).

### animation-timing-function → pola kecepatan animasi:

- linear → kecepatan konstan.

- ease → lambat di awal, cepat di tengah, lambat di akhir.

- ease-in → lambat di awal, cepat di akhir.

- ease-out → cepat di awal, lambat di akhir.

- ease-in-out → kombinasi lambat di awal dan akhir.

### animation-delay → jeda sebelum animasi dimulai.

### animation-iteration-count → jumlah pengulangan (1, 2, atau infinite).

### animation-direction → arah animasi:

1. normal (default) →

- Animasi berjalan dari awal ke akhir sesuai urutan di @keyframes.

- Jika  dimulai dari  ke , maka animasi bergerak maju.

2. reverse → 

- Animasi berjalan kebalikan dari urutan @keyframes.

- Jika @keyframes mendefinisikan 0% → 100%, maka animasi akan berjalan dari 100% → 0%.


- alternate → 

- Animasi berjalan normal pada siklus pertama, lalu reverse pada siklus berikutnya, dan bergantian seterusnya.

- Cocok untuk animasi bolak-balik (misalnya bouncing).


- alternate-reverse → 

- Kebalikan dari alternate.

- Animasi berjalan reverse pada siklus pertama, lalu normal pada siklus berikutnya, bergantian seterusnya.


### animation-fill-mode → gaya elemen sebelum/sesudah animasi:
 
- none → kembali ke posisi awal setelah selesai.

- forwards → tetap di posisi akhir.

- backwards → memakai gaya awal sebelum animasi dimulai.

- both → kombinasi awal dan akhir.

### animation-play-state -> bisa di pause atau running

- pause -> animasi berhenti sementara di posisi akhir.

- running -> animasi berjalan normal sesuai pengaturan.

## 4. Sintaks Dasar

```css
@keyframes nama-animasi {
  from { /* gaya awal */ }
  to   { /* gaya akhir */ }
}

.selector {
  animation-name: nama-animasi;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
```

## Bisa ditulis singkat dengan shorthand:

```css
.selector {
  animation: nama-animasi 2s ease 0s 1 normal forwards;
}
```


## 5. Contoh Jenis Animasi Populer

- Fade In / Fade out

-> Animasi memunculkan atau menghilangkan elemen dengan perubahan opacity.

```css
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.fade { animation: fade-in 2s ease-in forwards; }
```

- Bounce

-> Animasi elemen seperti melompat.

```css
@keyframes bounce {
  0%,20%,50%,80%,100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}
.bounce { animation: bounce 2s infinite; }
```

- Rotate

-> Animasi memutar elemen.

```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.rotate { animation: rotate 3s linear infinite; }
```

- Zoom In / Zoom out

-> Animasi memperbesar atau memperkecil elemen.

```css
@keyframes zoom-in {
  from { transform: scale(0.5); }
  to   { transform: scale(1); }
}
.zoom { animation: zoom-in 1s ease-out forwards; }
```

- Slide Up / Slide down

-> Animasi bergerak vertikal.

```css
@keyframes slide-up {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}
.slide-up { animation: slide-up 1.5s ease-out forwards; }
```

Contoh lengkap:

```html
<div class="box">Animasi</div>
```

```css
/* 1. Definisikan keyframes */
@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* 2. Terapkan ke selector */
.box {
  width: 150px;
  height: 100px;
  background: lightblue;
  animation-name: slide-in;        /* memanggil @keyframes */
  animation-duration: 2s;          /* durasi animasi */
  animation-timing-function: ease; /* pola kecepatan */
  animation-fill-mode: forwards;   /* tetap di posisi akhir */
}
```


