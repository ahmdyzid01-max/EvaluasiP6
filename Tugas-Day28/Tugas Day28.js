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

// Jawaban pertanyaan Langkah 2 :
// 1. Kesalahan 1: total salah karena gak pakai kurung -> perbaiki pakai (hargaKopi+hargaTeh)*2
//    Kesalahan 2: uangPas tadinya gak pas karena hitungan total salah -> benerin total dulu jadi pas
//    Kesalahan 3: jumlahMember + 1 gak disimpan -> perbaiki pakai +=1
//    Kesalahan 4: && harusnya || karena soalnya bilang ATAU bukan DAN
// 2. Kalau ganti == jadi === hasilnya false karena tipe beda string vs number. Biar true harus ubah uangDiterima jadi number pakai Number(uangDiterima) atau pakai == aja
// 3. && itu DAN harus dua-duanya true baru true, || itu ATAU salah satu true aja udah true. Contoh dapatDiskon pakai || jadi kalau sudahMember true aja udah dapet diskon walau total gak >100000


// ============ LANGKAH 3: BIKIN KASIR SENDIRI ============
const NAMA_BARANG = "Kopi Susu Gula Aren";
const HARGA_SATUAN = 18000;
const TARIF_PAJAK = 0.11;

let jumlahBeli = 4;
let uangDibayar = 100000;

// Hitung subtotal, pajak, total
let subtotal = HARGA_SATUAN * jumlahBeli; // 72000
let pajak = subtotal * TARIF_PAJAK; // 7920
let totalBayar = subtotal + pajak; // 79920

// Pakai 2 operator penugasan ringkas
let potongan = 5000;
totalBayar -= potongan; // Syarat 1: pakai -=, total jadi 74920, ini diskon member
let poinMember = 10;
poinMember += jumlahBeli; // Syarat 2: pakai +=, poin jadi 14

let kembalian = uangDibayar - totalBayar; // 25080

// Cek genap pakai %
let jumlahGenap = jumlahBeli % 2 === 0; // true karena 4 sisa 0

// 3 Boolean pakai perbandingan dan logika
let uangCukup = uangDibayar >= totalBayar; // true
let gratisKantong = subtotal >= 50000 || jumlahBeli >= 5; // true karena subtotal 72000
let dapatBonus = uangCukup && jumlahGenap; // true karena dua-duanya true

// Pakai kurung biar jelas urutannya
let totalTanpaPajakSalah = HARGA_SATUAN + HARGA_SATUAN * TARIF_PAJAK; // tanpa kurung dikali dulu
let totalDenganKurung = (HARGA_SATUAN + HARGA_SATUAN) * TARIF_PAJAK; // dengan kurung tambah dulu

console.log("Barang      : " + NAMA_BARANG);
console.log("Jumlah      : " + jumlahBeli);
console.log("Subtotal    : " + subtotal);
console.log("Pajak (11%) : " + pajak);
console.log("Potongan    : " + potongan);
console.log("Total bayar : " + totalBayar);
console.log("Uang dibayar: " + uangDibayar);
console.log("Kembalian   : " + kembalian);
console.log("Uang cukup? : " + uangCukup);
console.log("Gratis kantong? : " + gratisKantong);
console.log("Dapat bonus genap? : " + dapatBonus);
console.log("Jumlah genap? : " + jumlahGenap);

// Jawaban pertanyaan Langkah 3 :
// 1. Aku pilih uangCukup = uangDibayar >= totalBayar. Artinya uang yang dibawa pembeli cukup gak buat bayar. Hasil sekarang true karena 100000 lebih besar dari 74920 jadi cukup.
// 2. Aku coba ganti gratisKantong dari || jadi &&. Sebelum pakai || hasilnya true karena subtotal 72000 udah cukup. Sesudah ganti && jadi false karena harus dua syarat: subtotal >=50000 true tapi jumlahBeli >=5 false, true && false = false. Jadi berubah.
// 3. Contoh kurung di totalDenganKurung. Dengan kurung (18000+18000)*0.11 = 3960. Tanpa kurung 18000+18000*0.11 = 19980. Beda jauh karena kalau gak pakai kurung kali dulu baru tambah.

// ============ BONUS +5 ============
let totalMenit = 250;
let jam = Math.floor(totalMenit / 60); // bagi dapet jam
let menitSisa = totalMenit % 60; // sisa bagi dapet menit sisanya
console.log(jam + " jam " + menitSisa + " menit"); // 4 jam 10 menit
// Penjelasan bonus bahasaku: / buat dapet jamnya berapa, % buat dapet sisa menit yang gak cukup sejam. Makanya 250/60 = 4 sisa 10, jadi 4 jam 10 menit.