# Praktik Terbaik untuk Penataan Input

---

- Penataan Input : 

Seperti halnya semua elemen teks, Anda perlu memastikan gaya yang Anda terapkan pada input teks mudah diakses. Ini berarti ukuran font harus memadai, dan warna harus memiliki kontras yang cukup dengan latar belakang. Elemen input juga dapat difokuskan. Saat Anda mengedit gaya, Anda harus berhati-hati untuk mempertahankan indikator yang terlihat jelas ketika elemen tersebut difokuskan, seperti garis tepi tebal.

- Penggunaan **(appearance: none)** untuk Input

**(appearance: none)** Browser menerapkan gaya default pada banyak elemen. **(appearance: none)** Properti CSS memberi Anda kendali penuh atas gaya, tetapi ada beberapa hal yang perlu diperhatikan. Saat membuat gaya khusus untuk elemen input, Anda perlu memastikan indikator fokus dan kesalahan tetap ada.

- Masalah Umum: Penataan Gaya **datetime-local** dan **color Properti**

Masalah Umum : 

Jenis input khusus ini bergantung pada pseudo-elemen yang kompleks untuk membuat hal-hal seperti pemilih tanggal dan warna. Hal ini menghadirkan tantangan signifikan untuk penataan gaya input ini. Salah satu tantangannya adalah penataan gaya default sepenuhnya bergantung pada browser, sehingga CSS yang Anda tulis untuk membuat pemilih terlihat seperti yang Anda inginkan mungkin sangat berbeda di browser lain.

## Contoh Kode

1. Penataan Input Teks

```css
input[type="text"] {
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  padding: 8px;
}

input[type="text"]:focus {
  border-color: #007BFF; /* indikator fokus jelas */
  outline: none;
}
```

2. Menghapus Gaya Default

```css
input[type="text"] {
  appearance: none;
  -webkit-appearance: none; /* untuk Safari */
  -moz-appearance: none;    /* untuk Firefox */
}
```

3. Input Khusus (datetime-local)

```css
input[type="datetime-local"] {
  font-size: 14px;
  padding: 6px;
  border: 1px solid #666;
  appearance: none; /* gaya default dihapus */
}
```

👉 Jadi intinya: jangan hanya fokus pada tampilan cantik, tapi juga pastikan input tetap mudah digunakan dan aksesibel.