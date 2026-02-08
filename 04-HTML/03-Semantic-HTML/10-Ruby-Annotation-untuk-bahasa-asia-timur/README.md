# 10. Ruby Annotation (untuk bahasa Asia Timur)
---

- **ruby** Elemen Anotasi Ruby: 

digunakan untuk memberi anotasi pada teks dengan penjelasan pengucapan atau arti. Contoh penggunaannya adalah untuk tipografi Asia Timur.

- Elemen teks ruby ​​**(rt)** : 

digunakan untuk menunjukkan teks untuk anotasi ruby. Biasanya digunakan untuk pengucapan, atau detail terjemahan dalam tipografi Asia Timur.

- **rp**: 

fallback tanda kurung jika ruby tidak didukung.

```html
<ruby>
  漢 <rt>kan</rt>
  字 <rt>ji</rt>
</ruby>

<ruby>
   漢 字 <rp> ( </rp><rt>kanji</rt><rp> ) </rp>
```