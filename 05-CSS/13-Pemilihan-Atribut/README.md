# Atribut Selector CSS

## Contoh Penggunaan pada Link

### 1. Semua link yang punya atribut tertentu

```css
a[href] { color: blue; }   /* semua link dengan href */
a[title] { font-weight: bold; } /* semua link dengan title */
```

### 2. Link dengan nilai atribut tertentu

```css
a[href="https://example.com"] { color: red; }
a[class="primary"] { background: yellow; }
```

### 3. Selector dengan pola nilai

- Dimulai dengan (^=):

```css
a[href^="https"] { color: green; } /* link yang dimulai dengan https */
```

- Diakhiri dengan ($=):

```css
a[href$=".pdf"] { color: orange; } /* link yang diakhiri .pdf */
```

- Mengandung kata tertentu (*=):

```css
a[href*="login"] { color: purple; } /* link yang mengandung kata login */
```



## Attribute Bahasa

- Menargetkan elemen berdasarkan atribut (lang) atau (data-*).

```css
p[lang="en"] { font-style: italic; } /* paragraf bahasa Inggris */
div[data-lang="fr"] { color: blue; } /* konten berbahasa Prancis */
```


## Ordered List dengan Attribute Selector

HTML <ol> bisa diatur dengan atribut type:

```css
ol[type="A"] { list-style-type: upper-alpha; } /* A, B, C... */
ol[type="a"] { list-style-type: lower-alpha; } /* a, b, c... */
ol[type="I"] { list-style-type: upper-roman; } /* I, II, III... */
ol[type="i"] { list-style-type: lower-roman; } /* i, ii, iii... */
```



## ✨ Ringkasan Utama

- Attribute selector menargetkan elemen berdasarkan atribut HTML.

- Bentuk umum:

- [attr] → elemen dengan atribut tertentu.

- [attr="value"] → elemen dengan nilai tertentu.

- [attr^="value"] → nilai dimulai dengan.

- [attr$="value"] → nilai diakhiri dengan.

- [attr*="value"] → nilai mengandung kata.

- Bisa digunakan untuk link, bahasa, data attribute, dan list.

- Membantu membuat CSS lebih fleksibel tanpa harus menambah class/id baru.

