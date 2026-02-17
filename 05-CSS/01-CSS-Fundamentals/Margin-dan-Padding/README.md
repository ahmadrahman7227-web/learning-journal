# Margin dan Padding

## Margin

- Definisi: Ruang di luar elemen, antara border elemen dengan elemen lain di sekitarnya.

- Fungsi: Memberi jarak antar elemen agar tidak saling menempel.

### Properti:

- margin-top → jarak atas

- margin-right → jarak kanan

- margin-bottom → jarak bawah

- margin-left → jarak kiri

### Shorthand:

- margin: 10px; → semua sisi 10px

- margin: 10px 20px; → atas/bawah 10px, kanan/kiri 20px

- margin: 10px 15px 20px; → atas 10px, kanan/kiri 15px, bawah 20px

- margin: 10px 15px 20px 25px; → atas 10px, kanan 15px, bawah 20px, kiri 25px

Contoh CSS:

```css
.box-margin {
  background-color: lightblue;
  margin: 20px; /* jarak luar 20px di semua sisi */
}
```


## Padding

- Definisi: Ruang di dalam elemen, antara konten dan border.

- Fungsi: Memberi jarak agar teks/konten tidak menempel langsung ke border.

### Properti:

- padding-top → jarak dalam atas

- padding-right → jarak dalam kanan

- padding-bottom → jarak dalam bawah

- padding-left → jarak dalam kiri

### Shorthand: sama seperti margin:

- padding: 10px; → semua sisi 10px

- padding: 10px 20px; → atas/bawah 10px, kanan/kiri 20px

- padding: 10px 15px 20px; → atas 10px, kanan/kiri 15px, bawah 20px

- padding: 10px 15px 20px 25px; → atas 10px, kanan 15px, bawah 20px, kiri 25px

Contoh CSS:

```css
.box-padding {
  background-color: lightgreen;
  padding: 20px; /* jarak dalam 20px di semua sisi */
}
```

## 📌 Ringkasannya:

• 	Margin → jarak luar, mengatur posisi elemen terhadap elemen lain.

• 	Padding → jarak dalam, mengatur posisi konten terhadap border elemen.

👉 Jadi, kalau kamu ingin memberi ruang antar elemen, gunakan margin. Kalau ingin memberi ruang antara teks/konten dengan tepi kotak, gunakan padding.

