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

// ---------- LANGKAH 2: Perbaiki 7 Kesalahan ----------
let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX 1: unshift salah, seharusnya push untuk tambah di akhir
daftarBelanja.push("Susu"); // Seharusnya: ["Kopi", "Teh", "Roti", "Susu"]

// FIX 2: slice tidak mengubah array, seharusnya splice untuk hapus
daftarBelanja.splice(1, 1); // Seharusnya: ["Kopi", "Roti", "Susu"]

// FIX 3: indexOf mengembalikan angka, seharusnya includes untuk dapat true/false
let adaRoti = daftarBelanja.includes("Roti"); // Seharusnya: true

// FIX 4: length itu di luar index, seharusnya length - 1 untuk elemen terakhir
let terakhir = daftarBelanja[daftarBelanja.length - 1]; // Seharusnya: "Susu"

// FIX 5: function tidak ada return, jadi hasilnya undefined
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100; // FIX: tambah return
}

// FIX 6: arrow function pakai kurung kurawal harus ada return
const hitungPajak = (subtotal) => {
  return subtotal * 0.11; // FIX: tambah return
};

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// FIX 7: const arrow function tidak bisa dipanggil sebelum didefinisikan (hoisting), pindah ke atas sebelum dipanggil
const hitungTotal = (subtotal, pajak) => subtotal + pajak; // FIX: definisi dipindah ke atas pemanggilan
console.log(hitungTotal(80000, 8800));

// Jawaban pertanyaan Langkah 2:
// 1. Daftar 7 kesalahan:
// - Kesalahan 1: pakai unshift padahal mau tambah di akhir, perbaiki jadi push.
// - Kesalahan 2: pakai slice yang tidak mengubah array, perbaiki jadi splice(1,1).
// - Kesalahan 3: pakai indexOf yang hasilnya angka, perbaiki jadi includes.
// - Kesalahan 4: akses index pakai length yang out of bounds, perbaiki jadi length-1.
// - Kesalahan 5: hitungDiskon tidak pakai return, perbaiki tambah return.
// - Kesalahan 6: hitungPajak arrow pakai {} tapi tidak return, perbaiki tambah return.
// - Kesalahan 7: hitungTotal dipanggil sebelum didefinisikan padahal const, perbaiki pindah definisi ke atas.
// 2. Yang menyebabkan error di console: Kesalahan 7 karena ReferenceError Cannot access before initialization. Sisanya tidak error tapi hasilnya salah/undefined.
// 3. hitungDiskon dan hitungPajak sama-sama undefined karena lupa return. Yang satu function declaration tanpa return, yang satu arrow function dengan blok {} tapi tidak ada return, jadi keduanya default return undefined.

// ---------- LANGKAH 3: Bikin Kasir Sendiri ----------
const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];

// Syarat 1: Kelola keranjang dengan array method
kasirKeranjang.push("Kopi Susu"); // tambah di akhir
kasirKeranjang.push("Es Teh");
kasirKeranjang.push("Roti Bakar");
kasirKeranjang.unshift("Jus Jeruk"); // prioritas di depan
kasirKeranjang.push("Nasi Goreng");
console.log("Keranjang sebelum dibatalkan:", kasirKeranjang);
kasirKeranjang.pop(); // batalkan 1 item terakhir (Nasi Goreng) -> contoh pop
kasirKeranjang.push("Nasi Goreng"); // tambah lagi
kasirKeranjang.splice(2, 1, "Es Teh"); // ganti item index 2 jadi Es Teh (contoh splice ganti)

// Syarat 2: includes dan slice
let kasirCekEsTeh = kasirKeranjang.includes("Es Teh");
let kasirPaketCepat = kasirKeranjang.slice(0, 3);
console.log("Apakah ada Es Teh?", kasirCekEsTeh);
console.log("Paket cepat 3 item:", kasirPaketCepat);

// Syarat 3: Function declaration cari harga
function kasirCariHarga(namaMenu) {
  let indeks = kasirNamaMenu.indexOf(namaMenu);
  if (indeks === -1) {
    return 0;
  }
  return kasirHargaMenu[indeks];
}

// Syarat 4: Function expression hitung subtotal
const kasirHitungSubtotal = function () {
  let total = 0;
  for (let i = 0; i < kasirKeranjang.length; i++) {
    total += kasirCariHarga(kasirKeranjang[i]);
  }
  return total;
};

// Syarat 5: Arrow function dengan {} dan return untuk diskon
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) {
    return subtotal * 0.15;
  } else if (subtotal >= 50000) {
    return subtotal * 0.10;
  } else if (subtotal >= 25000) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
};

// Syarat 6: Arrow ringkas satu baris dengan default
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;

// Syarat 7: Function cetak struk
function kasirCetakStruk(subtotal, diskon, pajak) {
  let totalAkhir = subtotal - diskon + pajak;
  console.log(`\n===== STRUK YB WARKOP =====`);
  console.log(`Daftar Belanja:`);
  for (let i = 0; i < kasirKeranjang.length; i++) {
    console.log(`${i + 1}. ${kasirKeranjang[i]} - Rp${kasirCariHarga(kasirKeranjang[i])}`);
  }
  console.log(`---------------------------`);
  console.log(`Subtotal : Rp${subtotal}`);
  console.log(`Diskon : Rp${diskon}`);
  console.log(`Pajak 11%: Rp${pajak}`);
  console.log(`Total : Rp${totalAkhir}`);
  console.log(`===========================\n`);
  return totalAkhir;
}

// Syarat 8 & 9: Uji 2 skenario
// Skenario 1: Keranjang sedang -> diskon 10%
kasirKeranjang = ["Kopi Susu", "Es Teh", "Roti Bakar", "Jus Jeruk"]; // 18000+7500+15000+12000 = 52500
let sub1 = kasirHitungSubtotal();
let disc1 = kasirHitungDiskon(sub1);
let pajak1 = kasirHitungPajak(sub1 - disc1);
kasirCetakStruk(sub1, disc1, pajak1);
// Skenario 1: keranjang berisi ["Kopi Susu", "Es Teh", "Roti Bakar", "Jus Jeruk"]
// Hasil:
// Subtotal: 52500
// Diskon : 5250 (10%)
// Pajak : 5197.5
// Total : 52447.5

// Skenario 2: Keranjang besar -> diskon 15%
kasirKeranjang = ["Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Kopi Susu", "Roti Bakar", "Jus Jeruk"]; // 22000*2 + 18000*2 + 15000 + 12000 = 107000
let sub2 = kasirHitungSubtotal();
let disc2 = kasirHitungDiskon(sub2);
let pajak2 = kasirHitungPajak(sub2 - disc2, 0.11); // coba dengan 2 argumen
kasirCetakStruk(sub2, disc2, pajak2);
// Skenario 2: keranjang berisi ["Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Kopi Susu", "Roti Bakar", "Jus Jeruk"]
// Hasil:
// Subtotal: 107000
// Diskon : 16050 (15%)
// Pajak : 10004.5
// Total : 100954.5

