# Properti CSS Overflow


- Definisi : 
Overflow mengacu pada cara elemen menangani konten yang melebihi, atau "meluap", ukuran elemen yang menampungnya. Overflow bersifat dua dimensi.

- overflow-x : 
Sumbu x menentukan luapan horizontal.

- overflow-y :
Sumbu y menentukan luapan vertikal.

- overflow : 
Properti singkat untuk overflow-xdan overflow-y. Jika diberikan satu nilai, kedua overflow akan menggunakannya. Jika diberikan dua nilai, overflow-xakan menggunakan nilai pertama, dan overflow-yakan menggunakan nilai kedua.


## Nilai pada CSS overflow

1. visible (default)

- Konten yang melampaui ukuran elemen tetap terlihat keluar dari kotak.
- Tidak ada pemotongan atau scroll.
- Cocok untuk elemen yang tidak perlu dibatasi.

```css
div {
  overflow: visible;
}
```


2. hidden

- Konten yang melampaui ukuran elemen dipotong.
- Tidak ada scroll, konten yang terpotong tidak bisa diakses.
- Berguna untuk layout yang rapi tanpa scroll.

```css
div {
  overflow: hidden;
}
```


3. scroll

- Konten yang melampaui ukuran elemen selalu menampilkan scrollbar (horizontal/vertikal).
- Scrollbar muncul meskipun konten tidak melampaui batas.
- Berguna untuk memastikan pengguna bisa menggulir.

```css
div {
  overflow: scroll;
}
```


4. auto

- Scrollbar hanya muncul jika diperlukan (konten melampaui batas).
- Lebih fleksibel dibanding scroll.
- Umumnya digunakan untuk area teks panjang.

```css
div {
  overflow: auto;
}
```


5. inherit

- Nilai overflow akan mengikuti dari elemen induk.
- Berguna untuk konsistensi styling antar elemen.

```css
div {
  overflow: inherit;
}
```


6. clip (CSS terbaru)

- Mirip hidden, tetapi tidak mendukung scroll sama sekali.
- Konten dipotong ketat sesuai ukuran elemen.

```css
div {
  overflow: clip;
}
```



