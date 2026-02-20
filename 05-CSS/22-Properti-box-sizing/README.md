# Nilai Properti content-box dan border-box

## box-sizing Properti : 

Properti ini digunakan untuk menentukan bagaimana nilai akhir widthdan height dihitung untuk elemen HTML.

## content-box Nilai : 

Dalam content-box model, nilai width dan height yang Anda tetapkan untuk suatu elemen menentukan dimensi area konten tetapi tidak termasuk padding, border, atau margin.

## border-box Nilai : 

Dengan border-box, width dan height dari sebuah elemen mencakup area konten, padding, dan border, tetapi tidak termasuk margin.

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