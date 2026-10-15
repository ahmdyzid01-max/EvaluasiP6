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

