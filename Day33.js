// TUGAS DAY 32 - Kasir Warung
// Nama: Ahmad Yazid
// Ini file buat belajar array sama function

// ===== LANGKAH 1: TEBAK DULU BARU CEK =====

// Potongan A - mainan array
// Tebakan aku sebelum jalan:
// terakhirDibuang = Jus, soalnya pop itu ngambil yang paling belakang
// pertamaDibuang = Air, soalnya shift ngambil yang paling depan
// menu jadi [Kopi, Roti, Susu] karena Teh udah di splice
// irisan jadi [Roti, Susu] soalnya slice 1 sampe 3
// Susu indexnya 2, Nasi -1 soalnya gak ada, Kopi true ada, terakhir Susu

let menu = ["Kopi", "Teh", "Roti", "Susu"];
menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang); // Hasil asli: Jus
console.log(pertamaDibuang); // Hasil asli: Air
console.log(menu); // Hasil asli: ['Kopi','Roti','Susu']
console.log(irisan); // Hasil asli: ['Roti','Susu']
console.log(menu.indexOf("Susu")); // 2
console.log(menu.indexOf("Nasi")); // -1
console.log(menu.includes("Kopi")); // true
console.log(menu[menu.length - 1]); // Susu

// Jawaban 1A :
// menu sama irisan beda karena menu itu array aslinya yang diubah-ubah, irisan itu cuma fotokopi potongan. Yang ngerubah asli: push, unshift, pop, shift, splice. Yang gak ngerubah: slice, indexOf, includes. Gampangnya yang ngerusak asli vs yang cuma ngintip.

// Potongan B
// Tebakan: x = 5 karena ada return, y = undefined karena cuma console.log doang gak dibalikin
function tambah(a, b) { return a + b; }
function cetakTambah(a, b) { console.log(a + b); }
let x = tambah(2, 3);
let y = cetakTambah(2, 3); // ini ngeprint 5 duluan
console.log(x); // 5
console.log(y); // undefined
// Jawaban 1B: tambah itu ngasih balik nilai jadi bisa disimpan, cetakTambah cuma ngeprint doang jadi y kosong alias undefined.

// Potongan C
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20)); // 40000
console.log(hitungDiskonPersen(50000)); // 45000 soalnya default 10%

function cekAngka(n) {
  if (n < 0) { return "negatif"; console.log("Baris ini muncul atau tidak?"); }
  return "bukan negatif";
}
console.log(cekAngka(-5)); // negatif
console.log(cekAngka(5)); // bukan negatif
// Jawaban 1C: Bisa tetap keluar angka karena persen ada default 10 jadi kalo gak diisi otomatis 10. Baris console.log di bawah return gak akan kepanggil soalnya return itu kayak pintu keluar, udah keluar duluan.

