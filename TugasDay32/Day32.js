// =====================
// TUGAS DAY 32 - Kasir Warung
// Nama: Ahmad Yazid
// =====================

// ---------- LANGKAH 1: Tebak Dulu, Baru Cek ----------

// ----- Potongan A -----
// Tebakan sebelum jalan:
// terakhirDibuang = "Jus" karena pop ambil paling akhir
// pertamaDibuang = "Air" karena shift ambil paling depan
// menu = ["Kopi", "Roti", "Susu"] setelah di splice Teh
// irisan = ["Roti", "Susu"] slice dari index 1 sampai sebelum 3
// indexOf Susu = 2
// indexOf Nasi = -1 karena tidak ada
// includes Kopi = true
// menu[length-1] = "Susu"

let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang); // Hasil asli: Jus
console.log(pertamaDibuang); // Hasil asli: Air
console.log(menu); // Hasil asli: [ 'Kopi', 'Roti', 'Susu' ]
console.log(irisan); // Hasil asli: [ 'Roti', 'Susu' ]
console.log(menu.indexOf("Susu")); // Hasil asli: 2
console.log(menu.indexOf("Nasi")); // Hasil asli: -1
console.log(menu.includes("Kopi")); // Hasil asli: true
console.log(menu[menu.length - 1]); // Hasil asli: Susu

// Jawaban pertanyaan Langkah 1A:
// 1. menu dan irisan beda karena menu adalah array asli yang sudah diubah, sedangkan irisan adalah potongan baru. Method yang mengubah aslinya: push, unshift, pop, shift, splice. Yang tidak mengubah: slice, indexOf, includes.

// ----- Potongan B -----
// Tebakan:
// x = 5 karena tambah return 2+3
// y = undefined karena cetakTambah cuma console.log tidak ada return, dan di dalamnya akan log 5 dulu
// console.log(x) = 5
// console.log(y) = undefined

function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3); // ini akan cetak 5 dulu
console.log(x); // Hasil asli: 5
console.log(y); // Hasil asli: undefined

// Jawaban pertanyaan Langkah 1B:
// 2. tambah mengembalikan nilai dengan return jadi bisa disimpan, cetakTambah cuma mencetak ke console jadi return-nya undefined. Makanya y jadi undefined.

// ----- Potongan C -----
// Tebakan:
// hitungDiskonPersen(50000,20) = 40000
// hitungDiskonPersen(50000) = 45000 karena persen default 10
// cekAngka(-5) = "negatif"
// cekAngka(5) = "bukan negatif"
// Baris console.log("Baris ini muncul atau tidak?") tidak akan tercetak karena sudah return duluan

const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20)); // Hasil asli: 40000
console.log(hitungDiskonPersen(50000)); // Hasil asli: 45000

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5)); // Hasil asli: negatif
console.log(cekAngka(5)); // Hasil asli: bukan negatif

// Jawaban pertanyaan Langkah 1C:
// 3. Tetap menghasilkan angka karena ada nilai default persen=10 jadi kalau tidak diisi tetap dihitung. Baris console.log setelah return tidak tercetak karena return menghentikan function.

