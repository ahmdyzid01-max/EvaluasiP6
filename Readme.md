# Evaluasi Pekan 6 - Kedai Senja

Proyek kasir sederhana Kedai Senja dengan menu, transaksi, laporan harian, latihan logika, perbaikan kode, dan eksperimen JavaScript.

## Cara Menjalankan
- Buka `index.html` untuk program utama Kedai Senja
- Buka `logika.html` untuk latihan logika
- Buka `perbaikan.html` untuk kode yang diperbaiki
- Buka `eksperimen.html` untuk tebak dan eksperimen
- Semua hasil tampil di Console Browser (F12 > Console)

## Teknologi
- HTML
- JavaScript
- Git dan GitHub

## Penulis
Ahmad Yazid

## Git Log
*   bcd2448 (HEAD -> master) - Kenapa pekerjaan dibagi ke ban
|\  
| * 41f2e68 (docs/tebak-jelaskan) experimen.html
| * 3d3a51f 7.3:Jelaskan
| * 2e7be31 Bagian 7:tebak dan eksperimen
* | dbd0f27 (fix/perbaikan-kode) commit terus
* | 20b647f perbaikan.html
|/  
* 3918b87 All:Jawaban+Perbaikan kode
* 97a7475 Fix:Perbaikan kode
* 1e0f932 (feat/latihan-logika) Logika+jawaban
* 66157e6 feat:latihan logika
* 2fc458a (feat/laporan-harian) jawaban laporan harian
* 21e5687 feat: hitung laporan harian
* 215065c (feat/mesin-kasir) dibranch yang benar
* 7b2e18e (feat/data-dan-pembersihan) fix
* c5df475 feat: mesin kasir
* 0629089 feat: tambah data dan pembersihan data
* 485d6b3 chore: inisialisasi proyek evaluasi pekan 6

## Jawaban
1. Pekerjaan dibagi ke banyak branch agar rapi, tidak campur aduk, mudah dicek per fitur, dan kalau ada error gampang cari di branch mana. Kalau semua di main akan berantakan dan susah kolaborasi.
2. .gitignore berfungsi untuk memberitahu git file/folder apa yang tidak perlu di-track dan tidak di-upload ke GitHub. Contoh yang dimasukkan: node_modules/, .DS_Store, dist/.
3. Merge lokal dilakukan langsung di komputer lewat perintah git merge di terminal. Pull Request dilakukan di GitHub, untuk minta review dan merge branch ke main lewat website, dengan diskusi dan approval dulu.