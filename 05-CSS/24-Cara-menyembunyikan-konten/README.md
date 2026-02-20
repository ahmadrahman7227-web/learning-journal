# Cara Menyembunyikan konten 


## Menyembunyikan Konten dengan CSS

- display: none;

Konten hilang total, tidak bisa diakses screen reader.

- visibility: hidden;

Konten tetap ada di layout, tapi juga tidak terbaca screen reader.

- .sr-only

Teknik untuk menyembunyikan konten secara visual, tapi tetap bisa diakses screen reader.

```css
/* 1. display: none */
/* Elemen benar-benar hilang dari tampilan dan pohon aksesibilitas */
.hidden-display {
  display: none;
}

/* 2. visibility: hidden */
/* Elemen tetap ada di layout (masih menempati ruang), 
   tapi tidak terlihat dan tidak terbaca screen reader */
.hidden-visibility {
  visibility: hidden;
}

/* 3. .sr-only */
/* Teknik umum untuk menyembunyikan konten secara visual 
   tapi tetap bisa diakses oleh screen reader */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

## Menyembunyikan Konten dengan Atribut HTML

- aria-hidden
Menyembunyikan elemen dari screen reader, tapi tetap terlihat oleh pengguna biasa.

- hidden
Menyembunyikan elemen dari tampilan visual dan pohon aksesibilitas.

Contoh:

```html
<p aria-hidden>This paragraph is visible but hidden from assistive tech.</p>
<p hidden>This paragraph is hidden from both.</p>
<p>This is a normal paragraph</p>
```
