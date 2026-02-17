# Nilai Properti content-box dan border-box

## box-sizing Properti : 

Properti ini digunakan untuk menentukan bagaimana nilai akhir widthdan heightdihitung untuk elemen HTML.

## content-box Nilai : 

Dalam content-boxmodel, nilai widthdan heightyang Anda tetapkan untuk suatu elemen menentukan dimensi area konten tetapi tidak termasuk padding, border, atau margin.

## border-box Nilai : 

Dengan border-box, widthdan heightdari sebuah elemen mencakup area konten, padding, dan border, tetapi tidak termasuk margin.

```css
.sizing-box {
  width: 150px;
  padding: 10px;
  border: 4px solid teal;
  margin-bottom: 10px;
  background: peachpuff;
  text-align: center;
}

.content-box {
  box-sizing: content-box;  
}

.border-box {
  box-sizing: border-box;
  background: lightgreen;
}
```