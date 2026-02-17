# Urutan Kekuatan Aturan CSS


## Apa itu Spesifisitas?

Spesifisitas adalah tingkat kekuatan aturan CSS ketika ada beberapa aturan yang berlaku pada elemen yang sama. Aturan dengan spesifisitas lebih tinggi akan menimpa aturan dengan spesifisitas lebih rendah.

## Urutan Kekuatan Aturan CSS

### 1. Inline CSS

- Ditulis langsung di atribut style pada elemen HTML.

- Paling kuat karena langsung menempel pada elemen.

- Contoh:

```html
<p style="color: blue;">Teks ini biru</p>
```


### 2. ID Selector

- Menggunakan tanda (#) di CSS.

- Lebih kuat daripada class dan type selector.

- Contoh:

```css
#judul {
  color: red;
}
```


### 3. Class Selector

- Menggunakan tanda . di CSS.

- Kekuatan sedang, bisa digunakan berulang pada banyak elemen.

- Contoh:

```css
.highlight {
  color: green;
}
```


### 4. Type Selector (Tag Selector)

- Menggunakan nama elemen HTML langsung.

- Lebih lemah dibanding class dan ID.

- Contoh:

```css
p {
  color: orange;
}
```


### 5. Universal Selector

- Menggunakan tanda (*).

- Paling lemah, berlaku untuk semua elemen.

- Contoh:

```css
* {
  color: gray;
}
```

## 📌 Ringkasan

• 	Inline CSS → paling kuat.

• 	ID selector → kuat.

• 	Class selector → sedang.

• 	Type selector → lemah.

• 	Universal selector → paling lemah.

👉 Jadi, kalau ada konflik antar aturan, CSS akan memilih aturan dengan spesifisitas tertinggi.

