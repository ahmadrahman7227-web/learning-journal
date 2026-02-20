# CSS Pseudo-classes Review

---

## User Action Pseudo-classes

- :active -> keadaan saat elemen sedang diklik atau ditekan.

- :hover -> keadaan saat kursor berada di atas elemen.

- :focus -> keadaan saat elemen mendapat fokus, misalnya input yang sedang diketik.

- :focus-within -> keadaan saat sebuah elemen atau anaknya sedang fokus.


## Input Pseudo-classes

- :enabled -> elemen form yang aktif dan bisa digunakan.

- :disabled -> elemen form yang tidak bisa digunakan.

- :checked -> elemen seperti checkbox atau radio yang sudah dicentang.

- :valid -> input yang sesuai dengan aturan validasi.

- :invalid -> input yang tidak sesuai aturan validasi.

- :in-range -> nilai input berada dalam batas yang ditentukan.

- :out-of-range -> nilai input berada di luar batas yang ditentukan.

- :required -> input wajib diisi sebelum form bisa dikirim.

- :optional -> input yang tidak wajib diisi.- :autofill -> input yang otomatis diisi oleh browser.

## Location Pseudo-classes

- :any-link -> menargetkan semua link, baik yang sudah dikunjungi maupun belum.- :link -> menargetkan link yang belum pernah dikunjungi.

- :visited -> menargetkan link yang sudah pernah dikunjungi.

- :local-link -> menargetkan link internal yang menuju halaman yang sama.

- :target -> menargetkan elemen yang menjadi target dari URL fragment.

## Tree-structural Pseudo-classes

- :root -> elemen paling atas dalam dokumen, biasanya <html>.

- :empty -> elemen yang tidak memiliki isi atau anak.

- :nth-child(n) -> menargetkan elemen berdasarkan urutan anak ke-n.

- :nth-last-child(n) -> menargetkan elemen berdasarkan urutan dari belakang.

- :first-child -> anak pertama dari sebuah parent.

- :last-child -> anak 
terakhir dari sebuah parent.

- :only-child -> elemen yang menjadi satu-satunya anak dalam parent.

- :first-of-type -> elemen pertama dari jenis tertentu dalam parent.

- :last-of-type -> elemen terakhir 
dari jenis tertentu dalam parent.

- :nth-of-type(n) -> elemen ke-n dari jenis tertentu dalam parent.

- :only-of-type -> elemen yang menjadi satu-satunya dari jenis tertentu dalam parent.

## Functional Pseudo-classes

- :is() -> memilih elemen yang cocok dengan salah satu selector dalam daftar.

- :where() -> mirip dengan :is(), tetapi tidak menambah bobot spesifisitas.

- :has() -> menargetkan elemen parent yang memiliki anak sesuai selector.

- :not() -> menargetkan elemen yang tidak cocok dengan selector tertentu.


## Pseudo-elements

- ::before -> menambahkan konten dekoratif sebelum isi elemen.

- ::after -> menambahkan konten dekoratif setelah isi elemen.

- ::first-letter -> menargetkan huruf pertama dari isi elemen.

- ::marker -> menargetkan tanda bullet atau nomor pada list.

- ::placehoder -> fungsinya mengatur tampilan text placeholder pada elemen input (misalnya <input> atau <textarea>)

```css
input::placeholder {
    color: gray;
    font-style: italic;
} /*ini hanya akan mempengaruhi text placeholder, bukan nilai yang diketik user.*/
```

- ::spelling-error -> fungsinya menargetkan text yang dianggap salah eja oleh browser (biasanya di input atau textarea dengan spellcheck aktif).

```css
textarea::spelling-error {
    text-decoration: underline red wavy;
} /*memberi khusus pada kata yang salah eja*/
```

- ::selection -> fungsinya mengatur tampilan text saat user melakukan highlight (seleksi) dengan, mouse/keyboard.

```css
::selection {
    background: yellow;
    color: black
}
```

## Kesimpulan:

- Pseudo-class digunakan untuk memilih elemen berdasarkan keadaan atau posisi dalam dokumen.

- Sedangkan pseudo-element digunakan untuk menargetkan bagian tertentu dari isi elemen, biasanya untuk dekorasi atau styling khusus.