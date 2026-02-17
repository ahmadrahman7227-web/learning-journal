# Background (Latar Belakang)


## 	Background Properties

1. background-image

- Menentukan gambar latar.

```CSS
body {
  background-image: url("cat.jpg");
}
```

2. background-size

- Mengatur ukuran gambar latar.

- Nilai: cover, contain, px, %.

```CSS
body {
  background-size: cover;
}
```

3. background-repeat


- Mengatur pengulangan gambar.
- Nilai: repeat, no-repeat, repeat-x, repeat-y.

```CSS
body {
  background-repeat: no-repeat;
}
```

4. background-position

- Menentukan posisi gambar.

- Nilai: top, bottom, center, left, right.

```CSS
body {
  background-position: center top;
}
```

5. background-attachment

- Menentukan apakah background ikut scroll atau tetap.

- Nilai: scroll (default), fixed.

```CSS
body {
  background-attachment: fixed;
}
```

6. Shorthand background

- Menyatukan semua properti background dalam satu deklarasi.

```CSS
body {
  background: center top no-repeat url("cat.jpg");
}
```



