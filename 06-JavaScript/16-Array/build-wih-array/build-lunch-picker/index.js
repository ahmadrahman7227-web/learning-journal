
// 1. Inisialisasi: Membuat array kosong sebagai wadah menu makan siang.
const lunches = [];

/**
 * MENAMBAH ITEM KE AKHIR
 * Menggunakan .push() untuk meletakkan item di posisi paling belakang.
 */
function addLunchToEnd(menuArray, itemBaru) {
  // Menampilkan pesan konfirmasi ke konsol
  console.log(`${itemBaru} added to the end of the lunch menu.`);
  
  // Menambahkan item ke akhir array
  menuArray.push(itemBaru);
  // Mengembalikan array yang sudah diperbarui
  return menuArray;
}

/**
 * MENAMBAH ITEM KE AWAL
 * Menggunakan .unshift() untuk meletakkan item di posisi paling depan (indeks 0).
 */
function addLunchToStart(menuArray, itemBaru) {
  // Menampilkan pesan konfirmasi ke konsol
  console.log(`${itemBaru} added to the start of the lunch menu.`);

  // Menambahkan item ke awal array (elemen lain akan bergeser ke belakang)
  menuArray.unshift(itemBaru);
  return menuArray;
}

/**
 * MENGHAPUS ITEM TERAKHIR
 * Menggunakan .pop() untuk mengambil elemen paling ujung belakang.
 */
function removeLastLunch(menuArray) {
  // Validasi: Cek apakah ada item di dalam array menggunakan .length
  if (menuArray.length === 0) {
    console.log("No lunches to remove.");
  } else {
    // .pop() menghapus elemen terakhir dan menyimpannya ke variabel removedItem
    const removedItem = menuArray.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  
  return menuArray;
}

/**
 * MENGHAPUS ITEM PERTAMA
 * Menggunakan .shift() untuk mengambil elemen di indeks 0.
 */
function removeFirstLunch(menuArray) {
  // Validasi: Jika panjang array adalah 0, berarti menu kosong
  if (menuArray.length === 0) {
    console.log("No lunches to remove.");
  } else {
    // .shift() menghapus elemen pertama dan menggeser sisanya ke depan
    const removedItem = menuArray.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }

  return menuArray;
}

/**
 * MEMILIH MENU ACAK
 * Menggunakan logika matematika untuk mendapatkan indeks secara random.
 */
function getRandomLunch(menuArray) {
  // Cek ketersediaan menu sebelum mengacak
  if (menuArray.length === 0) {
    console.log("No lunches available.");
    return; 
  }
  
  // Math.random() (0-0.9) * panjang array, lalu dibulatkan ke bawah oleh Math.floor()
  const randomIndex = Math.floor(Math.random() * menuArray.length);
  
  // Mengambil item berdasarkan nomor indeks hasil acakan
  const randomItem = menuArray[randomIndex];
  
  console.log(`Randomly selected lunch: ${randomItem}`);
  
  return randomItem;
}

/**
 * MENAMPILKAN SELURUH MENU
 * Mengubah data array menjadi kalimat yang mudah dibaca.
 */
function showLunchMenu(menuArray) {
  // Cek apakah ada data yang bisa ditampilkan
  if (menuArray.length === 0) {
    console.log("The menu is empty.");
  } else {
    // .join(", ") menggabungkan semua elemen menjadi satu string dipisahkan koma
    const itemsString = menuArray.join(", ");
    
    console.log(`Menu items: ${itemsString}`);
  }
}