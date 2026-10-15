// =======================
// Langkah 1: Tebak Dulu, Baru Cek
// =======================

// Potongan A
// Tebakan awal:
// 1: gak masuk (0 falsy)
// 2: masuk ("0" truthy karena string ada isi)
// 3: gak masuk ("" falsy)
// 4: masuk ([] truthy karena object)
// 5: gak masuk (null falsy)
// 6: masuk (-1 truthy)
// Hasil asli: 2: masuk, 4: masuk, 6: masuk

if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}

// Pertanyaan Langkah 1:
// 1. "0" itu string, selama ada karakter tetap truthy. [] itu array/object, semua object di JS itu truthy walau kosong. Falsy cuma 7: false, 0, "", null, undefined, NaN, 0n.
// 2. Karena if dibaca dari atas. 120000 >= 25000 sudah true jadi langsung ambil diskon 5% dan else if di bawah di-skip. Fix harus urut dari terbesar: 100000, 50000, 25000.
// 3. Tercetak 2 baris karena case "sabtu" tidak ada break jadi fall-through ke "minggu". Fix tambah break di tiap case.

// Potongan B
// Tebakan: Diskon 5% (karena kondisi pertama sudah true)
// Hasil asli: Diskon 5%
let belanja = 120000;
if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

// Potongan C
// Tebakan: Muncul 2 baris Promo Akhir Pekan dan Promo Keluarga
// Hasil asli: Promo Akhir Pekan, Promo Keluarga
let hari = "sabtu";
switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

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

