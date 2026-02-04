# About GitHub and Git
---
## About GitHub

GitHub adalah platform berbasis cloud tempat Anda dapat menyimpan, berbagi, dan bekerja sama dengan orang lain untuk menulis kode.

Menyimpan kode Anda di "repositori" di GitHub memungkinkan Anda untuk:

- Pamerkan atau bagikan karya Anda.
- Lacak dan kelola perubahan pada kode Anda dari waktu ke waktu.
- Izinkan orang lain meninjau kode Anda, dan memberikan saran untuk memperbaikinya.
- Berkolaborasilah dalam proyek bersama, tanpa perlu khawatir bahwa perubahan Anda akan memengaruhi pekerjaan kolaborator Anda sebelum Anda siap untuk mengintegrasikannya.

Kerja sama tim, salah satu fitur fundamental GitHub, dimungkinkan berkat perangkat lunak sumber terbuka, Git, yang menjadi dasar pembangunan GitHub.

## About Git

Git adalah sistem kontrol versi yang secara cerdas melacak perubahan pada file. Git sangat berguna ketika Anda dan sekelompok orang melakukan perubahan pada file yang sama secara bersamaan.

Biasanya, untuk melakukan ini dalam alur kerja berbasis Git, Anda akan:

- Buat cabang terpisah dari salinan utama file yang sedang Anda (dan kolaborator Anda) kerjakan.
- Lakukan pengeditan pada file secara mandiri dan aman di cabang pribadi Anda.
- Biarkan Git menggabungkan perubahan spesifik Anda secara cerdas ke dalam salinan utama file, sehingga perubahan Anda tidak memengaruhi pembaruan orang lain.
- Biarkan Git melacak perubahan Anda dan perubahan orang lain, sehingga Anda semua tetap mengerjakan versi proyek yang paling mutakhir.

---

## Panduan Git & GitHub untuk Kolaborasi Tim

### 1. Dasar Perintah Terminal
- ⚠️**pwd**: Menampilkan lokasi folder saat ini.
- ⚠️**ls**: Melihat isi folder.
- ⚠️**cd nama_folder**: Masuk ke folder tertentu.
- ⚠️**mkdir nama_folder**: Membuat folder baru.
- ⚠️**touch nama_file.txt**: Membuat file kosong.
- ⚠️**rm nama_file.txt**: Menghapus file.
- ⚠️**code**: Membuka folder di VS Code
### 2. Setup Git
- ⚠️**git --version**: Cek apakah Git sudah terpasang.
- ⚠️**git config --global user.name "Nama Kamu"**: Atur nama pengguna Git.
- ⚠️**git config --global user.email "email@contoh.com"**: Atur email pengguna Git.

### 3. Membuat Repository Lokal
- ⚠️**mkdir proyek-kolaborasi**: Membuat folder proyek.
- ⚠️**cd proyek-kolaborasi**: Masuk ke folder proyek.
- ⚠️**git init**: Inisialisasi Git di folder.

### 4. Menyimpan Perubahan
- ⚠️**git add**: Menambahkan semua file ke staging.
- ⚠️**git commit -m "pesan"**: Menyimpan perubahan dengan pesan.

### 5. Hubungkan ke GitHub
- ⚠️**git remote add origin URL**: Menghubungkan repo lokal ke GitHub.- git push 
- ⚠️**u origin main**: Mengirim kode ke GitHub.

### 6. Kolaborasi
- ⚠️**git clone URL**: Mengambil project dari GitHub.
- ⚠️**git pull**: Mengambil update terbaru.
- ⚠️**git checkout -b nama_branch**: Membuat branch baru.
- ⚠️**git push origin nama_branch**: Mengirim branch ke GitHub.
- ⚠️**Pull Request & Merge**: Ajukan perubahan dan gabungkan ke main
- ⚠️**git push -u origin main**: Mengirim ke main

---

## Alur Kerja Git

### Langkah 1: Clone atau Fork Repository

Perintah:

⚠️**git clone https://github.com/username/nama-repo.git**
⚠️**cd nama-repo**

Catatan: Jika kontribusi ke repo orang lain, lakukan fork di GitHub lalu clone hasil fork.

### Langkah 2: Buat Branch Baru

Perintah:

⚠️**git checkout -b feature/nama-fitur**

Catatan: Jangan bekerja langsung di branch main; gunakan nama branch yang jelas.

### Langkah 3: Lakukan Perubahan & Commit

Perintah:

⚠️**git status**: 
- Menunjukkan branch aktif
- Menampilkan file yang berubah tapi belum di-stage
- Menampilkan file yang sudah di-stage dan siap di-commit
- Menampilkan file baru (untracked)
👉 Jadi, fungsinya: melihat apa saja yang berubah sebelum git add dan git commit.

⚠️**git add nama-file.js**
⚠️**git commit -m "feat: tambah fitur login"**

Catatan: Gunakan pesan commit konvensional

### Langkah 4: Push Branch ke GitHub

Perintah:

⚠️**git push origin feature/nama-fitur**

### Langkah 5: Buat Pull Request (PR)

Instruksi: Buka GitHub, pilih repo, klik Compare & Pull Request, tambahkan
deskripsi perubahan, minta review.

### Langkah 6: Review & Diskusi

Perintah jika perlu sinkronisasi dan menyelesaikan konflik:

⚠️**git pull origin main**

edit file konflik

⚠️**git add**
⚠️**git commit -m "fix: resolve merge conflict"**
⚠️**git push**

Catatan: Edit bagian konflik yang ditandai oleh Git (<<<<<<< >>>>>>>).

### Langkah 7: Merge ke Main

Instruksi: Setelah PR disetujui, merge ke main di GitHub. Semua anggota tim

update repo lokal:

⚠️**git pull origin main**

Ringkasan Alur:- Clone/Fork -> Branch -> Edit & Commit -> Push -> PR -> Review -> Merge -> Sinkronisasi

### Tips Singkat:
1) Selalu cek `git status` sebelum commit.
2) Buat pesan commit jelas.
3) Tarik (pull) main sebelum mulai kerja.
4) Gunakan branch terpisah untuk setiap fitur.
