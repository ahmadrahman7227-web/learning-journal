# HTML Form Elements dan Attributes

---

## Elemen Formulir

- **form** elemen : 

digunakan untuk membuat formulir HTML untuk input pengguna.
- **action** atribut : 

digunakan untuk menentukan URL tempat data formulir harus dikirim.

- **method** Atribut : 

digunakan untuk menentukan metode HTTP yang akan digunakan saat mengirim data formulir. Metode yang paling umum adalah GETdan POST.

```html
<form method="POST" action="/submit">
  <!-- input fields -->
</form>
```

### Elemen Input

- **input** elemen : 

digunakan untuk membuat kolom input untuk masukan pengguna.

- type Atribut : 

digunakan untuk menentukan tipe kolom input. Contoh: text, email, number, radio, checkbox, dll.

- placeholder Atribut : 

digunakan untuk menampilkan petunjuk kepada pengguna agar mereka tahu apa yang harus dimasukkan ke dalam kolom input.

- value Atribut : 

digunakan untuk menentukan nilai input. Jika input memiliki buttontipe, valueatribut dapat digunakan untuk mengatur teks tombol.

- name Atribut : 

digunakan untuk memberikan nama pada kolom input, yang berfungsi sebagai kunci saat data formulir dikirimkan. Untuk tombol radio, memberikan nama yang sama nameakan mengelompokkannya bersama, sehingga hanya satu opsi dalam grup yang dapat dipilih pada satu waktu.

- size Atribut : 

digunakan untuk menentukan jumlah karakter yang akan terlihat saat pengguna mengetik ke dalam kolom input.

- min atribut : 

dapat digunakan dengan tipe input seperti numberuntuk menentukan nilai minimum yang diizinkan dalam kolom input.

- max atribut : 

dapat digunakan dengan tipe input seperti numberuntuk menentukan nilai maksimum yang diizinkan dalam kolom input.

- minlength atribut : 

digunakan untuk menentukan jumlah minimum karakter yang dibutuhkan dalam kolom input.

- maxlength atribut :  

digunakan untuk menentukan jumlah maksimum karakter yang diizinkan dalam kolom input.

- required atribut : 

digunakan untuk menentukan bahwa kolom input harus diisi sebelum mengirimkan formulir.

- disabled atribut : 

digunakan untuk menentukan bahwa kolom input harus dinonaktifkan.
- readonly atribut : 

 digunakan untuk menentukan bahwa kolom input hanya dapat dibaca.

```html
<input 
  type="text"
  name="username"
  placeholder="Enter your name"
  minlength="3"
  maxlength="20"
  required
/>
```

```html
<!-- Text input -->
<input 
  type="text"
  id="name"
  name="name"
  placeholder="e.g. Quincy Larson" 
  size="20"
  minlength="5"
  maxlength="30"
  required
/>

<!-- Number input -->
<input 
  type="number"
  id="quantity"
  name="quantity"
  min="2"
  max="10"
  disabled/>

  <!-- Button -->
<input type="button" value="Show Alert" />
  ```

### Label

- label  element:

digunakan untuk membuat label untuk kolom input.

- for  attribute:

digunakan untuk menentukan kolom input mana yang dimaksud dengan label.

- Implicit form association: 

 input dapat diasosiasikan dengan label dengan membungkus kolom input di dalam labelelemen.

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" />
```

- Asosiasi formulir eksplisit : 

input dapat diasosiasikan dengan label dengan menggunakan foratribut pada labelelemen tersebut.
```html
<form action="">
  <label for="email">Email Address: </label>
  <input type="email" id="email" />
</form>
```

### Button

• button Elemen	: 

Tombol interaktif.

• type Atribut	: 

submit, reset, atau button.

```html
<button type="submit">Kirim</button>
<button type="reset">Ulangi</button>
```

### Fieldset dan Legend

• fieldset elemen 	: 

Mengelompokkan input terkait.

• legend elemen 

	: Judul kelompok input.

```html
<fieldset>
  <legend>Jenis Kelamin</legend>
  <label><input type="radio" name="gender" value="male" /> Pria</label>
  <label><input type="radio" name="gender" value="female" /> Wanita</label>
</fieldset>
```
- Focused state:

  ini adalah status kolom input ketika dipilih oleh pengguna.

  ### Dropdown

```html
  <label for="buah">Pilih buah favorit:</label>
<select id="buah" name="buah">
  <option value="apel" selected>Apel</option>
  <option value="pisang">Pisang</option>
  <option value="jeruk">Jeruk</option>
  <option value="mangga">Mangga</option>
</select>
```

---


## HTML Table Elements dan Attributes

### Struktur Tabel

- <table>: Membuat tabel.
- <caption>: Judul tabel.
- <thead>: Bagian kepala tabel.
- <tbody>: Isi tabel.
- <tfoot>: Bagian bawah tabel.
- <tr>: Baris tabel.
- <th>: Header kolom.
- <td>: Data sel.
- colspan: Menggabungkan beberapa kolom.

```html
<table>
  <caption>Nilai Ujian</caption>
  <thead>
    <tr>
      <th>Nama</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ahmad</td>
      <td>90</td>
    </tr>
    <tr>
      <td>Siti</td>
      <td>85</td>
    </tr>
  </tbody>
</table>
```

## 🛠️ Tools Pengembangan HTML

• 	HTML Validator: Memeriksa sintaks HTML.
• 	DOM Inspector: Melihat dan mengedit struktur HTML.
• 	DevTools (Browser): Debug, analisis, dan profiling halaman web.
