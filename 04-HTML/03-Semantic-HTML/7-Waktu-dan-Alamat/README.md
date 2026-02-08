# 7. Waktu dan Tanggal
---

- **address** Elemen Alamat Kontak: 

digunakan untuk menampilkan informasi kontak.

```html
<address>
  Ditulis oleh Ahmad<br>
  Email: ahmad@example.com
</address>
```

- **time** Elemen (Tanggal) Waktu:

 digunakan untuk merepresentasikan tanggal dan/atau waktu. datetimeAtribut ini digunakan untuk menerjemahkan tanggal dan waktu ke dalam format yang dapat dibaca mesin.

```html
<p>
  The reservations are for the <time datetime="20:00">20:00 </time>
</p>
```

- **datetime** Atribut Tanggal ISO 8601:

 digunakan untuk merepresentasikan tanggal dan waktu dalam format yang dapat dibaca mesin. Format standarnya adalah **YYYY-MM-DDThh:mm:ss**, dengan huruf kapital Tsebagai pemisah antara tanggal dan waktu

```html
<time datetime="2026-02-07">7 Februari 2026</time>
```