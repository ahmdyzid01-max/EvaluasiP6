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

