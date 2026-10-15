// Nama: Ahmad Yazid
// Tugas Day 28 - Kasir Warung dengan Operator
// File: tugas_day_28.js

// ============ LANGKAH 1: TEBAK DULU BARU CEK ============

// Tebakan: 13, soalnya kali dulu baru tambah
// Hasil asli: 13 ✔
console.log(7 + 3 * 2);

// Tebakan: 20, soalnya yang dalam kurung dulu
// Hasil asli: 20 ✔
console.log((7 + 3) * 2);

// Tebakan: 2, sisa bagi 17/5
// Hasil asli: 2 ✔
console.log(17 % 5);

// Tebakan: 8, 2 pangkat 3
// Hasil asli: 8 ✔
console.log(2 ** 3);

// Tebakan: true, soalnya == cuma cek nilai gak peduli tipe
// Hasil asli: true ✔
console.log(5 == "5");

// Tebakan: false, === cek tipe juga, number vs string beda
// Hasil asli: false ✔
console.log(5 === "5");

// Tebakan: false, true dan false hasilnya false
// Hasil asli: false ✔
console.log(true && false);

// Tebakan: true, salah satu true udah true
// Hasil asli: true ✔
console.log(true || false);

// Tebakan: false, kebalikan true
// Hasil asli: false ✔
console.log(!true);

// Tebakan: false, 10>5 true tapi 3>8 false, true && false = false
// Hasil asli: false ✔
console.log(10 > 5 && 3 > 8);

// Jawaban pertanyaan Langkah 1 :
// 1. Semua tebakanku bener, yang paling susah itu 10>5 && 3>8 soalnya harus cek satu-satu dulu baru digabung pakai &&
// 2. 7+3*2 hasilnya 13 bukan 20 karena di matematika kali dulu baru tambah, namanya prioritas operator. Kalau mau 20 harus pakai kurung (7+3)*2
// 3. 5 == "5" true karena == itu longgar, dia cuma liat angkanya 5 sama 5. Kalau === itu ketat, harus cek tipe juga number sama string beda jadi false

// ============ LANGKAH 2: PERBAIKI 4 KESALAHAN ============
const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";

// FIX 1: salah hitung, harusnya 2 kopi + 2 teh, jadi harus pakai kurung biar tambah dulu baru kali 2
let totalPesanan = (hargaKopi + hargaTeh) * 2; // Seharusnya 51000

// FIX 2: uangDiterima itu string "51000" sedangkan total number 51000, kalau pakai == emang true tapi kalau === jadi false. Di sini pertahanin == biar true sesuai seharusnya
let uangPas = uangDiterima == totalPesanan; // Seharusnya true

// FIX 3: ini cuma dijumlah doang tapi gak disimpan, jadi jumlahMember tetap 5. Harus pakai += atau = 
jumlahMember += 1; // FIX: tadinya jumlahMember + 1 doang gak ada samadengannya, sekarang jadi 6

// FIX 4: pakai && artinya harus dua-duanya true, padahal soalnya bilang ATAU. Harus pakai ||
let dapatDiskon = sudahMember || totalPesanan > 100000; // Seharusnya true karena sudahMember true

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon); // 51000 true 6 true

// Jawaban pertanyaan Langkah 2 bahasaku:
// 1. Kesalahan 1: total salah karena gak pakai kurung -> perbaiki pakai (hargaKopi+hargaTeh)*2
//    Kesalahan 2: uangPas tadinya gak pas karena hitungan total salah -> benerin total dulu jadi pas
//    Kesalahan 3: jumlahMember + 1 gak disimpan -> perbaiki pakai +=1
//    Kesalahan 4: && harusnya || karena soalnya bilang ATAU bukan DAN
// 2. Kalau ganti == jadi === hasilnya false karena tipe beda string vs number. Biar true harus ubah uangDiterima jadi number pakai Number(uangDiterima) atau pakai == aja
// 3. && itu DAN harus dua-duanya true baru true, || itu ATAU salah satu true aja udah true. Contoh dapatDiskon pakai || jadi kalau sudahMember true aja udah dapet diskon walau total gak >100000
