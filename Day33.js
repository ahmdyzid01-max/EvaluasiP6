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

// ================== LANGKAH 2: PERBAIKI 7 KESALAHAN ==================
const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,
  tambahKas(jumlah) {
    // FIX 1: harus pakai this.saldoKas, kalau saldoKas doang dia cari variabel luar yang gak ada
    this.saldoKas += jumlah;
  },
  ambilKas(jumlah) {
    // FIX 2: lupa return jadi harus dibalikin saldonya
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas); // 150000
console.log(warung.ambilKas(30000)); // 120000

const kontak = { "no-wa": "08123" };
// FIX 3: yang ada tanda - gak bisa pakai dot, harus pakai bracket
console.log(kontak["no-wa"]); // 08123

const akun = { nama: "Rina", kataSandi: "abc123" };
// FIX 4: kalau = undefined masih ada propertinya, harus pakai delete biar hilang beneran
delete akun.kataSandi;
console.log(akun); // { nama: 'Rina' }

const menu = ["Kopi", "Teh", "Roti"];
// FIX 5: for in itu keluar index, kalau mau isinya pakai for of
for (let item of menu) {
  console.log(item);
}

const info = { nama: "Warung Senja", kota: "Yogyakarta" };
// FIX 6: object gak bisa for of, harus for in
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// FIX 7: Object.key salah, yang bener Object.keys pakai s
console.log(Object.keys(info)); // [ 'nama', 'kota' ]

// Jawaban Langkah 2 :
// 1. tambahKas lupa this jadi gak nemu saldoKas -> FIX pakai this.saldoKas
// 2. ambilKas lupa return jadi undefined -> FIX tambah return
// 3. kontak.no-wa error karena dikira ngurangin, harus pakai bracket kontak["no-wa"]
// 4. hapus password pakai undefined masih nyisa, harus delete
// 5. for in di array keluar index, harusnya for of biar keluar Kopi Teh Roti
// 6. for of di object error, harusnya for in
// 7. Object.key typo, yang bener Object.keys
// Yang error: no 3 (ReferenceError), no 6 (TypeError not iterable), no 7 (Object.key is not a function). Sisanya gak error tapi hasilnya salah.
// Beda undefined vs delete: kalau = undefined propertinya masih ada tapi isinya kosong, kalau delete beneran hilang. Cek pakai "kataSandi" in akun -> kalau undefined masih true, kalau delete jadi false.

// ================== LANGKAH 3: KASIR SENDIRI ==================
const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Es Teh", kategori: "minuman", harga: 7500, stok: 20 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 8 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 22000, stok: 5 },
    { nama: "Jus Jeruk", kategori: "minuman", harga: 12000, stok: 12 },
  ],
  keranjang: [],

  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) return item.harga;
    }
    return 0;
  },

  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        if (item.stok >= jumlah) {
          this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
          item.stok -= jumlah;
          return true;
        } else {
          return false; // stok gak cukup
        }
      }
    }
    return false; // menu gak ketemu
  },

  hitungSubtotal() {
    let total = 0;
    for (let ker of this.keranjang) {
      total += this.cariHarga(ker.nama) * ker.jumlah;
    }
    return total;
  },

  hitungDiskon(subtotal) {
    if (subtotal >= 100000) return subtotal * 0.15;
    else if (subtotal >= 50000) return subtotal * 0.10;
    else if (subtotal >= 25000) return subtotal * 0.05;
    else return 0;
  },

  cetakStruk() {
    let subtotal = this.hitungSubtotal();
    let diskon = this.hitungDiskon(subtotal);
    let setelahDiskon = subtotal - diskon;
    let pajak = setelahDiskon * 0.11;
    let total = setelahDiskon + pajak;

    console.log(`\n===== STRUK ${this.nama} =====`);
    console.log(`Kota: ${this.kota}`);
    let no = 1;
    for (let item of this.keranjang) {
      console.log(`${no}. ${item.nama} x${item.jumlah} = Rp${this.cariHarga(item.nama) * item.jumlah}`);
      no++;
    }
    console.log(`Subtotal: Rp${subtotal}`);
    console.log(`Diskon: Rp${diskon}`);
    console.log(`Pajak 11%: Rp${pajak}`);
    console.log(`Total Bayar: Rp${total}`);
    console.log(`============================`);

    this.saldoKas += total;
    this.keranjang = []; // kosongin lagi buat skenario berikutnya
  },

  menuMenipis() {
    let menipis = [];
    for (let m of this.menu) {
      if (m.stok < 5) menipis.push(m.nama);
    }
    return menipis;
  }
};

// Syarat 7: properti dinamis pakai bracket
let propertiWebsite = "website";
kasirKedai[propertiWebsite] = "www.kedaisenja.com";
console.log("website" in kasirKedai); // true
console.log(kasirKedai.website);
delete kasirKedai.website;
console.log("website" in kasirKedai); // false

// Syarat 8: for in
for (let kunci in kasirKedai.jamOperasional) {
  console.log(kunci + ": " + kasirKedai.jamOperasional[kunci]);
}
for (let kunci in kasirKedai.menu[0]) {
  console.log(kunci + ": " + kasirKedai.menu[0][kunci]);
}

// Syarat 9: Object.keys & values
console.log(Object.keys(kasirKedai.jamOperasional));
console.log(Object.values(kasirKedai.jamOperasional));

// Syarat 10: hitung huruf a di nama
let hitungA = 0;
for (let huruf of kasirKedai.nama) {
  if (huruf === "a") hitungA++;
}
console.log(`Huruf 'a' di nama ada: ${hitungA}`);

// Syarat 11: Uji 2 skenario + 2 gagal
// Skenario 1: belanja sedang -> diskon 5%
kasirKedai.tambahKeKeranjang("Kopi Susu", 1);
kasirKedai.tambahKeKeranjang("Es Teh", 2);
kasirKedai.cetakStruk();
// Hasil Skenario 1: Kopi 18000 + Es Teh 15000 = 33000, Diskon 5% = 1650, Pajak 3448.5, Total 34798.5

// Skenario 2: belanja banyak -> diskon 15%
kasirKedai.tambahKeKeranjang("Nasi Goreng", 3);
kasirKedai.tambahKeKeranjang("Roti Bakar", 2);
kasirKedai.tambahKeKeranjang("Kopi Susu", 2);
kasirKedai.cetakStruk();
// Hasil Skenario 2: Nasi 66000 + Roti 30000 + Kopi 36000 = 132000, Diskon 15% = 19800, Pajak 12342, Total 124542

// 2 kasus gagal
console.log(kasirKedai.tambahKeKeranjang("Sate Ayam", 1)); // false karena menu gak ada
console.log(kasirKedai.tambahKeKeranjang("Nasi Goreng", 100)); // false karena stok gak cukup

console.log(kasirKedai.menuMenipis());
// Hasil menipis: ['Nasi Goreng'] karena stok sisa 2 setelah dibeli, beda sama sebelum skenario karena stok berkurang tiap beli

// ===== JAWABAN PERTANYAAN LANGKAH 3 BAHASAKU =====
// 1. Dot vs Bracket: dot = kasirKedai.nama langsung, bracket = kasirKedai["nama"] atau kasirKedai[variabel]. Bracket wajib kalau nama propertinya ada tanda hubung kayak "no-wa" atau kalau namanya disimpan di variabel kayak propertiWebsite tadi.
// 2. Harus this.saldoKas karena di dalam object. Kalau cuma saldoKas dia nyari variabel di luar. Percobaan: coba ganti jadi saldoKas += jumlah -> error ReferenceError: saldoKas is not defined
// 3. for...of buat array/string yang isinya list, for...in buat object yang kunci. Di kodaku for...of aku pakai di this.menu, for...in aku pakai di jamOperasional. Kalau ditukar error karena object gak bisa for...of dan array kalau for...in malah keluar index.
// 4. for...of di object error karena object gak iterable. Pesan error: TypeError: kasirKedai is not iterable. Array sama string bisa karena mereka memang list.
// 5. Object.keys ngambil kunci doang ['buka','tutup'], Object.values ngambil isinya ['08:00','21:00']
// 6. cariHarga sama hitungSubtotal butuh return biar nilainya bisa dipake buat ngitung total. cetakStruk boleh gak pakai return karena dia cuma ngeprint. Kalau hitungSubtotal cuma console.log nanti hasilnya undefined jadi total jadi NaN.