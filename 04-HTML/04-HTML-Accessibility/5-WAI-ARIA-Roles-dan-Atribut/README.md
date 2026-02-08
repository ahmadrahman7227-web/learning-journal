# WAI-ARIA, Peran, dan Atribut
---

- WAI-ARIA : Singkatan dari Web Accessibility Initiative - Accessible Rich Internet Applications. Ini adalah serangkaian atribut yang dapat ditambahkan ke elemen HTML untuk meningkatkan aksesibilitas. WAI-ARIA memberikan informasi tambahan kepada teknologi bantu tentang tujuan dan struktur konten.

- Peran ARIA : Sekumpulan peran yang telah ditentukan sebelumnya yang dapat ditambahkan ke elemen HTML untuk mendefinisikan tujuannya. Ini membantu orang yang menggunakan teknologi bantu memahami konten situs web. Contohnya termasuk 

```html
<img src="...">, <img src="..."> role="tab", role="menu"dan <img src="..." role="alert">.
Ada enam kategori utama peran ARIA:
```
## Ada enam kategori utama peran ARIA:

- Peran struktur dokumen : Peran-peran ini mendefinisikan struktur keseluruhan halaman web. Dengan peran-peran ini, teknologi bantu dapat memahami hubungan antara berbagai bagian dan membantu pengguna menavigasi konten.

- Peran widget : 

Peran-peran ini mendefinisikan tujuan dan fungsionalitas elemen interaktif, seperti bilah gulir.

- Peran penanda (Landmark Roles ): 

Peran ini mengklasifikasikan dan memberi label pada bagian-bagian utama halaman web. Pembaca layar menggunakannya untuk menyediakan navigasi yang mudah ke bagian-bagian penting dari sebuah halaman.

- Peran wilayah langsung : 

Peran ini mendefinisikan elemen dengan konten yang akan berubah secara dinamis. Dengan cara ini, pembaca layar dan teknologi bantu lainnya dapat mengumumkan perubahan kepada pengguna dengan disabilitas visual.

- Peran jendela : 

Peran ini mendefinisikan sub-jendela, seperti dialog modal pop-up. Peran ini meliputi alertdialogdan dialog.

- Peran abstrak :

 Peran-peran ini membantu mengatur dokumen. Peran-peran ini hanya dimaksudkan untuk digunakan secara internal oleh browser, bukan oleh pengembang, jadi Anda perlu mengetahui keberadaannya tetapi Anda tidak boleh menggunakannya di situs web atau aplikasi web Anda.

- **aria-label dan aria-labelledby** atribut : 

Atribut ini digunakan untuk memberi elemen nama terprogram (atau aksesibel), yang membantu orang yang menggunakan teknologi bantu (seperti pembaca layar) memahami tujuan elemen tersebut. Atribut ini sering digunakan ketika label visual untuk suatu elemen berupa gambar atau simbol, bukan teks. **aria-label** memungkinkan Anda untuk mendefinisikan nama secara langsung dalam atribut, sedangkan **aria-labelledby** memungkinkan Anda untuk merujuk pada teks yang sudah ada di halaman.

```html
<button aria-label="Search">
    <i class="fas fa-search"></i>
</button>
```

1. aria-label
- Memberikan nama atau label langsung pada elemen.
- Berguna jika elemen tidak memiliki teks yang bisa dibaca screen reader (misalnya ikon).
<button aria-label="Cari">
  <i class="fas fa-search"></i>
</button>

---

1. aria-label
• 	Memberikan nama atau label langsung pada elemen.
• 	Berguna jika elemen tidak memiliki teks yang bisa dibaca screen reader (misalnya ikon).

```html
<button aria-label="Cari">
  <i class="fas fa-search"></i>
</button>
```

2. aria-labelledby
• 	Menghubungkan elemen dengan teks label yang sudah ada di halaman.
• 	Nilai atribut adalah  dari elemen teks yang menjadi label.

```html
<input type="text" aria-labelledby="search-btn">
<button id="search-btn">Cari</button>
```

3. aria-describedby
• 	Memberikan deskripsi tambahan dengan menghubungkan ke elemen lain.
• 	Biasanya digunakan untuk memberikan instruksi atau pesan error.

```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help">
  <p id="password-help">Minimal 8 karakter.</p>
</form>
```

4. aria-hidden
- Menyembunyikan elemen dari screen reader.
- Cocok untuk ikon dekoratif yang tidak perlu dibacakan.

```html
<i class="fa fa-gear" aria-hidden="true"></i>
```

5. aria-live
• 	Menandai area yang kontennya bisa berubah secara dinamis.
• 	Screen reader akan otomatis membacakan perubahan.

```html
<div aria-live="polite">Data sedang dimuat...</div>
```

Nilai umum:
- **polite** → dibacakan saat pengguna selesai dengan interaksi saat ini.
- **assertive** → dibacakan segera, menginterupsi screen reader.


6. aria-role (role)
- Menentukan peran elemen agar screen reader tahu fungsinya.
- Contoh:

```html
<nav role="navigation">Menu Navigasi</nav>
<div role="dialog">Popup Pengaturan</div>
```

7. aria-expanded
- Menunjukkan apakah elemen bisa diperluas atau tidak (misalnya menu dropdown).

```html
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>
  <li>Item 1</li>
</ul>
```

8. aria-controls
- Menunjukkan elemen lain yang dikontrol oleh elemen ini.


```html
<button aria-controls="menu">Tampilkan Menu</button>
<ul id="menu">...</ul>
```

9. aria-checked
- Digunakan pada elemen seperti checkbox untuk menunjukkan status.

```html
<input type="checkbox" aria-checked="true"> Saya setuju
```

10. aria-disabled
- Menandai elemen sebagai tidak aktif (disabled).

```html
<button aria-disabled="true">Tidak bisa diklik</button>
```