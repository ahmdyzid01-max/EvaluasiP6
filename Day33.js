// Nama: Ahmad Yazid
// Tugas Day 33 - Kasir Warung Kedai senja
// File: tugas_day_33.js

// ================== LANGKAH 1: TEBAK DULU BARU CEK ==================

// Potongan A
// Tebakan aku sebelum jalan:
// produk.nama = Kopi Susu, produk[kunci] = Kopi Susu juga soalnya kunci isinya "nama"
// produk["harga"] = 20000 soalnya udah diubah
// produk.stok = undefined soalnya udah di delete
// kategori ada true, stok ada false
// keys = ['nama','harga','kategori'], values = ['Kopi Susu',20000,'minuman']

const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };
produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama); // Hasil: Kopi Susu
console.log(produk[kunci]); // Hasil: Kopi Susu
console.log(produk["harga"]); // Hasil: 20000
console.log(produk.stok); // Hasil: undefined
console.log("kategori" in produk); // Hasil: true
console.log("stok" in produk); // Hasil: false
console.log(Object.keys(produk)); // Hasil: ['nama','harga','kategori']
console.log(Object.values(produk)); // Hasil: ['Kopi Susu',20000,'minuman']

// Jawaban 1A :
// produk.nama sama produk[kunci] sama aja hasilnya, bedanya yang dot langsung tulis namanya, yang bracket bisa pakai variabel. produk.stok undefined karena propertinya udah dihapus pakai delete jadi gak ada lagi.

// Potongan B
// Tebakan: sisa = 30000, cekSaldo print Rina: Rp 30000, terus sisa jadi 20000
const dompet = {
  pemilik: "Rina",
  saldo: 50000,
  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },
  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa); // 30000
dompet.cekSaldo(); // Rina: Rp 30000
dompet.belanja(10000);
dompet.cekSaldo(); // Rina: Rp 20000
console.log(dompet.saldo); // 20000

// Jawaban 1B :
// Saldo jadi 20000 karena belanja itu ngerubah this.saldo langsung di dalam object, jadi walau gak disimpan ke variabel saldonya tetep berkurang. this itu maksudnya dompet itu sendiri, kayak bilang "saldo punya aku sendiri".

// Potongan C
// Tebakan: for of hari = Senin Selasa, for in hari = 0 1 (index), for in kopi = nama: Kopi harga: 18000, for of "Kopi" = K o p i
const hari = ["Senin", "Selasa"];
for (let nilai of hari) { console.log(nilai); } // Senin, Selasa
for (let indeks in hari) { console.log(indeks); } // 0, 1
const kopi = { nama: "Kopi", harga: 18000 };
for (let kolom in kopi) { console.log(kolom + ": " + kopi[kolom]); } // nama: Kopi, harga: 18000
for (let huruf of "Kopi") { console.log(huruf); } // K o p i

// Percobaan yang error:
// for (let x of kopi) { console.log(x); } // Tebakan: error karena object gak bisa di for...of
// Hasil error asli: TypeError: kopi is not iterable
// Jawaban 1C bahasaku:
// for...in itu ngambil kunci/indexnya, makanya array keluar 0 1. for...of ngambil isinya. Object gak bisa di for...of karena object bukan list yang bisa diiterasi kayak array/string, makanya error.