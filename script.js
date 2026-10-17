/*
Nama: Ahmad Yazid
Tanggal: 17 Oktober 2026
Tujuan: Program Kedai Senja untuk membersihkan data transaksi yang berantakan,
        memproses transaksi kasir, dan membuat laporan harian.
*/

// 2.1 Data
const kedai = {
    nama: "Kedai Senja",
    pemilik: "Ahmad Yazid",
    kota: "Yogyakarta",
    tahunBerdiri: 2020,
    sedangBuka: true,
    nomorWhatsApp: "081234567890",
    website: null,
    jamOperasional: {
        buka: "09:00",
        tutup: "22:00"
    }
};

const menu = [
    { nama: "Kopi Susu", kategori: "Minuman", harga: 18000, stok: 10 },
    { nama: "Nasi Ayam Geprek", kategori: "Makanan", harga: 15000, stok: 8 },
    { nama: "Es Teh Manis", kategori: "Minuman", harga: 7000, stok: 15 },
    { nama: "Mie Goreng Spesial", kategori: "Makanan", harga: 17000, stok: 0 },
    { nama: "Roti Bakar Coklat", kategori: "Camilan", harga: 12000, stok: 5 },
    { nama: "Jus Alpukat", kategori: "Minuman", harga: 15000, stok: 7 },
    { nama: "Ayam Goreng Kampung", kategori: "Makanan", harga: 20000, stok: 4 },
    { nama: "Pisang Goreng Keju", kategori: "Camilan", harga: 13000, stok: 6 }
];

const transaksiMentah = [
    { kode: "trx-001", pelanggan: "  rina WULANDARI ", hari: "Sabtu", uangBayar: "150.000", voucher: " diskon10 ", pesanan: [{ menu: " kopi SUSU", jumlah: "2" }, { menu: "ES teh manis", jumlah: "1" }] },
    { kode: "trx-002", pelanggan: "budi SANTOSO", hari: "  jumat", uangBayar: "30000", voucher: "", pesanan: [{ menu: "Nasi Ayam Geprek", jumlah: "1" }] },
    { kode: "trx-003", pelanggan: "  AGUS  prasetyo ", hari: "Minggu", uangBayar: "20000", voucher: " DISKON5 ", pesanan: [{ menu: "Ayam Goreng Kampung", jumlah: "1" }, { menu: "jus alpukat", jumlah: "1" }] },
    { kode: "trx-004", pelanggan: "   ", hari: "Senin", uangBayar: "50000", voucher: "", pesanan: [{ menu: "Kopi Susu", jumlah: "1" }] },
    { kode: "trx-005", pelanggan: "Siti Rahayu", hari: "sabtu ", uangBayar: "100000", voucher: "diskon20", pesanan: [] },
    { kode: "trx-006", pelanggan: "Andi Wijaya", hari: "Jumat", uangBayar: "100000", voucher: "", pesanan: [{ menu: "Burger Keju", jumlah: "1" }, { menu: "Es Teh Manis", jumlah: "2" }] },
    { kode: "trx-007", pelanggan: "Dewi Lestari", hari: "Rabu", uangBayar: "50000", voucher: "PROMO5", pesanan: [{ menu: "Mie Goreng Spesial", jumlah: "1" }, { menu: "Pisang Goreng Keju", jumlah: "1" }] }
];

// 2.2 Function Pembersih
// function declaration
function bersihkanNama(teks) {
    const bersih = String(teks).trim().replace(/\s+/g, " ");
    if (bersih === "") return "";
    return bersih.split(" ").map(function (kata) {
        return kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase();
    }).join(" ");
}

// function expression
const ubahKeAngka = function (teks) {
    const bersih = String(teks).replace(/[.\s]/g, "");
    const angka = Number(bersih);
    return Number.isNaN(angka) ? 0 : angka;
};

// arrow function
const ambilPersenVoucher = (kode) => {
    const bersih = String(kode).trim().toUpperCase().replace(/\s+/g, "");
    if (bersih.startsWith("DISKON")) {
        const persen = parseInt(bersih.replace("DISKON", ""), 10);
        return Number.isNaN(persen) ? 0 : persen;
    }
    return 0;
};

// function declaration
function formatRupiah(angka) {
    let str = String(Math.round(angka));
    let hasil = "";
    for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
        hasil = str[i] + hasil;
        if (j % 3 === 2 && i !== 0) hasil = "." + hasil;
    }
    return "Rp " + hasil;
}

console.log("=== Uji Function ===");
console.log(`bersihkanNama("  rina   WULANDARI ") → ${bersihkanNama("  rina   WULANDARI ")}`);
console.log(`bersihkanNama("") → "${bersihkanNama("")}"`);
console.log(`bersihkanNama("  AGUS  prasetyo ") → ${bersihkanNama("  AGUS  prasetyo ")}`);
console.log(`ubahKeAngka("150.000") → ${ubahKeAngka("150.000")}`);
console.log(`ubahKeAngka("75000") → ${ubahKeAngka("75000")}`);
console.log(`ubahKeAngka("abc") → ${ubahKeAngka("abc")}`);
console.log(`ambilPersenVoucher(" diskon10 ") → ${ambilPersenVoucher(" diskon10 ")}`);
console.log(`ambilPersenVoucher("PROMO5") → ${ambilPersenVoucher("PROMO5")}`);
console.log(`ambilPersenVoucher("") → ${ambilPersenVoucher("")}`);
console.log(`formatRupiah(1250000) → ${formatRupiah(1250000)}`);
console.log(`formatRupiah(500) → ${formatRupiah(500)}`);
console.log(`formatRupiah(0) → ${formatRupiah(0)}`);

// 2.3 Data Bersih
const transaksiBersih = [];
for (const trx of transaksiMentah) {
    const pesananBersih = [];
    for (const item of trx.pesanan) {
        pesananBersih.push({
            menu: bersihkanNama(item.menu),
            jumlah: ubahKeAngka(item.jumlah)
        });
    }
    transaksiBersih.push({
        kode: String(trx.kode).toUpperCase(),
        pelanggan: bersihkanNama(trx.pelanggan),
        hari: String(trx.hari).trim().toLowerCase().replace(/\s+/g, " "),
        uangBayar: ubahKeAngka(trx.uangBayar),
        persenVoucher: ambilPersenVoucher(trx.voucher),
        pesanan: pesananBersih
    });
}
console.log(transaksiBersih);

/*
Jawaban:
1. parseInt memotong jadi bulat, parseFloat jadi desimal, Number ubah semua. ubahKeAngka harus hapus titik karena parseInt("150.000") hasilnya 150.
2. toFixed mengembalikan teks. Bukti: typeof (5).toFixed(1) adalah string, jadi (5).toFixed(1) + 1 hasilnya "5.01".
3. replace hanya ganti pertama, replaceAll ganti semua. Di kode ini pakai replace dengan regex /\\s+/g.
4. String itu immutable, jadi toUpperCase bikin string baru dan variabel asli tidak berubah.
5. Function declaration: function bersihkanNama. Function expression: const ubahKeAngka = function. Arrow function: const ambilPersenVoucher = (kode) =>.
*/