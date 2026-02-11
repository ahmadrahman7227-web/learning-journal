# 9. Memasukan Code  pada HTML dan Teks Khusus
---

- **code** Elemen Kode Sebaris: 

digunakan untuk merepresentasikan fragmen kode komputer

- Elemen Teks yang Diformat Sebelumnya **(pre)** : 
mewakili teks yang diformat sebelumnya

```html
<pre>
    <code>
    body {
        color: red;
    }
    </code>
</pre>

<pre>
Line 1
Line 2
</pre>
```

- **u** Elemen Anotasi Tak Terartikulasi: 

digunakan untuk merepresentasikan rentang teks sebaris yang harus dirender sedemikian rupa sehingga menunjukkan bahwa teks tersebut memiliki anotasi non-tekstual

```html
<p>
    teks dengan anotasi non-teks
    <u>inccccccort</u> <u>Nama salah eja</u>
</p>
```