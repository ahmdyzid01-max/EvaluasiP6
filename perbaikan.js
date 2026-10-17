// perbaikan.js - Bagian 6: Perbaiki Kode
const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
  nama: "rina",
  saldo: 100000,

  bayar(jumlah) {
    this.saldo -= jumlah; // FIX: tambah this. karena saldo bukan variabel global
    return this.saldo; // FIX: tambah this. agar return sisa saldo yang benar
  },
};

// Subtotal: seharusnya 50000
let subtotal = 0;
for (let i = 0; i < keranjang.length; i++) { // FIX: ganti <= menjadi <, kalau <= akan akses index di luar array -> undefined -> NaN
  subtotal += harga[keranjang[i]];
}

// Persen diskon: seharusnya 5000
let persen;
if (subtotal >= 50000) { // FIX: cek 50000 dulu sebelum 25000, kalau dibalik 50000 akan kena 5
  persen = 10;
} else if (subtotal >= 25000) {
  persen = 5;
} else {
  persen = 0;
}
let diskon = (subtotal * persen) / 100;

// Promo hari: seharusnya 3000
let hari = "jumat";
let promo;
switch (hari) {
  case "jumat":
    promo = 3000;
    break; // FIX: tambah break, kalau tidak akan fall-through ke sabtu/minggu jadi 5000
  case "sabtu":
  case "minggu":
    promo = 5000;
    break;
  default:
    promo = 0;
}

// Pajak: seharusnya 4620
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK; // FIX: tambah kurung, tanpa kurung yang dikali pajak hanya promo

// Total: seharusnya 46620
let total = subtotal - diskon - promo + pajak;

// Uang bayar: seharusnya 100000, kembalian 53380
let uangBayarTeks = "100.000";
let uangBayar = parseInt(uangBayarTeks.replaceAll(".", "")); // FIX: hapus titik dulu, parseInt berhenti di titik jadi 100
let kembalian = uangBayar - total;

// Status: seharusnya "Lunas"
let status;
if (uangBayar >= total) { // FIX: ganti = menjadi >=, = itu assignment bukan perbandingan
  status = "Lunas";
} else {
  status = "Kurang";
}

// Nama rapi: seharusnya "Rina"
let namaRapi =
  pelanggan.nama.slice(0, 1).toUpperCase() + pelanggan.nama.slice(1); // FIX: slice(0) harusnya slice(1)

// Keranjang: seharusnya [ 'kopi', 'roti', 'teh', 'air' ]
keranjang.splice(1, 1); // FIX: slice tidak mengubah array, harus splice untuk hapus "teh" pertama
keranjang.push("air"); // FIX: unshift menambah di depan, harus push menambah di akhir

// Member: seharusnya 6
let jumlahMemberBaru = Number(jumlahMember) + 1; // FIX: jumlahMember bertipe string "5", "5"+1 = "51"

// Rata-rata: seharusnya 11665
let rataRata = total / 4; // FIX: jangan pakai toFixed karena hasilnya string, "11655.00"+10 = "11655.0010"
let rataRataTotal = rataRata + 10;

// Format rupiah: seharusnya "Rp 53380"
function formatRupiah(angka) {
  return "Rp " + angka; // FIX: tidak ada return, function mengembalikan undefined
}

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));
for (let kunci in harga) { // FIX: for...of tidak bisa untuk object, harus for...in
  console.log(kunci + ": " + harga[kunci]);
}

