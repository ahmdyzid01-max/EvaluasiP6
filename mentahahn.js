// =======================
// Langkah 2: Perbaiki 5 Kesalahan
// =======================
let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// FIX 1: Urutan diskon harus dari terbesar ke terkecil
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// FIX 2: Typo jenismember -> jenisMember
// FIX 3: Tambah break di case gold biar gak jatuh ke silver
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break;
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// FIX 4: Pakai === bukan = . = itu assignment, hasilnya "" yang falsy
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

let totalAkhir = totalBelanja - diskon - potonganMember;

// FIX 5: Pakai >= biar uang pas tetap lunas
let uangBayar = 67000;
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);
// Output harus: Voucher tidak dipakai, Status: Lunas, 8000 5000 67000

// Pertanyaan Langkah 2:
// 1. (1) Urutan if diskon kebalik - perbaiki urut dari 100k dulu. (2) Typo jenismember - perbaiki jadi jenisMember. (3) Lupa break di gold - tambah break. (4) Salah pakai = - ganti jadi ===. (5) Kondisi lunas pakai > - ganti jadi >=.
// 2. Yang error merah di console: typo jenismember (ReferenceError). 4 lainnya tidak error tapi logic salah.
// 3. = itu untuk mengisi nilai, == banding nilai saja, === banding nilai + tipe. Tidak error karena (kodeVoucher = "") adalah expression yang sah, hasilnya string kosong yang masih valid di dalam if.

// =======================
// Langkah 3: Bikin Kasir Sendiri
// =======================
const kasirNama = "Rina";
let kasirBelanja = 90000;
let kasirHariPromo = "sabtu";
let kasirMember = "silver";
let kasirVoucher = "SENJA10";
let kasirBayar = 100000;

let kasirDiskon;
if (kasirBelanja >= 100000) {
  kasirDiskon = kasirBelanja * 0.15;
} else if (kasirBelanja >= 50000) {
  kasirDiskon = kasirBelanja * 0.1;
} else if (kasirBelanja >= 25000) {
  kasirDiskon = kasirBelanja * 0.05;
} else {
  kasirDiskon = 0;
}

let kasirPotMember;
switch (kasirMember) {
  case "gold":
    kasirPotMember = 5000;
    break;
  case "silver":
    kasirPotMember = 2000;
    break;
  default:
    kasirPotMember = 0;
}

let kasirPotHari;
switch (kasirHariPromo) {
  case "jumat":
    kasirPotHari = 3000;
    break;
  case "sabtu":
  case "minggu":
    kasirPotHari = 5000;
    break;
  default:
    kasirPotHari = 0;
}

if (kasirNama) {
  console.log(`Pelanggan: ${kasirNama}`);
} else {
  console.log(`Nama pelanggan belum diisi`);
}

let kasirPotVoucher;
if (kasirVoucher) {
  kasirPotVoucher = 2000;
  console.log(`Voucher dipakai: ${kasirVoucher}`);
} else {
  kasirPotVoucher = 0;
  console.log(`Voucher tidak dipakai`);
}

let kasirAkhir = kasirBelanja - kasirDiskon - kasirPotMember - kasirPotHari - kasirPotVoucher;

if (kasirBayar > kasirAkhir) {
  console.log(`Total akhir: ${kasirAkhir}`);
  console.log(`Status: Lunas, kembalian ${kasirBayar - kasirAkhir}`);
} else if (kasirBayar === kasirAkhir) {
  console.log(`Total akhir: ${kasirAkhir}`);
  console.log(`Status: Lunas (uang pas)`);
} else {
  console.log(`Total akhir: ${kasirAkhir}`);
  console.log(`Status: Kurang ${kasirAkhir - kasirBayar}`);
}

// Skenario 1: Rina, 90000, sabtu, silver, SENJA10, 100000
// Hasil: Pelanggan: Rina, Voucher dipakai: SENJA10, Total akhir: 76000, Status: Lunas kembalian 24000 (diskon 10%)

// Skenario 2: "", 120000, jumat, gold, "", 90000
// Hasil: Nama pelanggan belum diisi, Voucher tidak dipakai, Total akhir: 94000, Status: Kurang 4000 (diskon 15%, promo jumat)

// Skenario 3: Budi, 20000, senin, biasa, HEMAT, 18000
// Hasil: Pelanggan: Budi, Voucher dipakai: HEMAT, Total akhir: 18000, Status: Lunas (uang pas) (diskon 0%, promo default)

// Pertanyaan Langkah 3:
// 1. Harus dari terbesar biar yang 100k tidak kejebak di 25k. Kalau dibalik, semua akan dapat diskon paling kecil.
// 2. Switch lebih cocok karena cek 1 variabel dengan banyak nilai pasti, lebih rapi dan bisa gabung case sabtu+minggu.
// 3. Sengaja tidak pakai break di sabtu biar fall-through ke minggu, hasilnya tetap benar karena memang promo sabtu dan minggu sama.
// 4. Nilai yang bikin if(nama) false: "", null, undefined (juga 0, false, NaN)
// 5. if(-1) true karena -1 truthy, if(-1 > 0) false karena secara matematika -1 tidak lebih besar dari 0.

// =======================
// Bonus
// =======================
let bulan = 2;
switch (bulan) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 hari");
    break;
  case 2:
    console.log("28 atau 29 hari");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 hari");
    break;
  default:
    console.log("Bulan tidak valid");
}
// Bisa gabung case tanpa break karena switch pakai fall-through, jadi kalau tidak ada break dia lanjut ke case bawahnya sampai ketemu break. Kita manfaatkan untuk bulan yang jumlah harinya sama.