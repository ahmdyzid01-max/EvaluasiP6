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
Jawaban :
1. parseInt memotong jadi bulat, parseFloat jadi desimal, Number ubah semua. ubahKeAngka harus hapus titik karena parseInt("150.000") hasilnya 150.
2. toFixed mengembalikan teks. Bukti: typeof (5).toFixed(1) adalah string, jadi (5).toFixed(1) + 1 hasilnya "5.01".
3. replace hanya ganti pertama, replaceAll ganti semua. Di kode ini pakai replace dengan regex /\\s+/g.
4. String itu immutable, jadi toUpperCase bikin string baru dan variabel asli tidak berubah.
5. Function declaration: function bersihkanNama. Function expression: const ubahKeAngka = function. Arrow function: const ambilPersenVoucher = (kode) =>.
*/

// Bagian 3: Mesin Kasir
const kasir = {
  menu: menu,
  saldoKas: 0,
  riwayat: [],
  pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

  cariMenu(nama) {
    for (const m of this.menu) {
      if (m.nama === nama) return m;
    }
    return null;
  },

  hitungSubtotal(pesanan) {
    let subtotal = 0;
    const itemValid = [];
    const itemTidakValid = [];
    for (const item of pesanan) {
      const m = this.cariMenu(item.menu);
      if (!m) {
        itemTidakValid.push({ menu: item.menu, alasan: "Menu tidak ada" });
        continue;
      }
      if (!item.jumlah || item.jumlah <= 0) {
        itemTidakValid.push({ menu: item.menu, alasan: "Jumlah tidak valid" });
        continue;
      }
      if (m.stok < item.jumlah) {
        itemTidakValid.push({ menu: item.menu, alasan: "Stok tidak cukup" });
        continue;
      }
      subtotal += m.harga * item.jumlah;
      itemValid.push({ menu: m.nama, jumlah: item.jumlah, harga: m.harga });
    }
    return { subtotal, itemValid, itemTidakValid };
  },

  hitungPromoHari(hari) {
    switch (hari) {
      case "jumat":
        return 3000;
      case "sabtu":
      case "minggu":
        return 5000;
      default:
        return 0;
    }
  },

  hitungDiskon(subtotal, persenVoucher) {
    let persenSubtotal = 0;
    if (subtotal >= 100000) persenSubtotal = 15;
    else if (subtotal >= 50000) persenSubtotal = 10;
    else if (subtotal >= 25000) persenSubtotal = 5;
    const persenDipakai = Math.max(persenSubtotal, persenVoucher);
    return Math.round((subtotal * persenDipakai) / 100);
  },

  hitungPajak(nilai, tarif = 0.11) {
    return Math.round(nilai * tarif);
  },

  hitungKembalianPecahan(kembalian) {
    if (kembalian < 0) return null;
    const hasil = {};
    let sisa = kembalian;
    for (const p of this.pecahan) {
      let count = 0;
      while (sisa >= p) {
        sisa -= p;
        count++;
      }
      if (count > 0) hasil[p] = count;
    }
    hasil.sisa = sisa;
    return hasil;
  },

  prosesTransaksi(trx) {
    if (!trx.pelanggan) {
      const hasil = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Nama pelanggan kosong" };
      this.riwayat.push(hasil);
      return hasil;
    }
    if (!trx.pesanan.length) {
      const hasil = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Pesanan kosong" };
      this.riwayat.push(hasil);
      return hasil;
    }
    const { subtotal, itemValid, itemTidakValid } = this.hitungSubtotal(trx.pesanan);
    if (itemValid.length === 0) {
      const hasil = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Tidak ada item valid" };
      this.riwayat.push(hasil);
      return hasil;
    }
    const promoHari = this.hitungPromoHari(trx.hari);
    const diskon = this.hitungDiskon(subtotal, trx.persenVoucher);
    const nilaiSetelahDiskon = Math.max(0, subtotal - diskon - promoHari);
    const pajak = this.hitungPajak(nilaiSetelahDiskon);
    const total = nilaiSetelahDiskon + pajak;
    const kembalian = trx.uangBayar - total;
    const status = kembalian >= 0 ? "LUNAS" : "KURANG";
    let pecahanKembalian = null;
    if (status === "LUNAS") {
      for (const iv of itemValid) {
        const m = this.cariMenu(iv.menu);
        m.stok -= iv.jumlah;
      }
      this.saldoKas += total;
      pecahanKembalian = this.hitungKembalianPecahan(kembalian);
    }
    const hasil = {
      kode: trx.kode, pelanggan: trx.pelanggan, status, subtotal, promoHari, diskon,
      pajak, total, uangBayar: trx.uangBayar, kembalian, pecahanKembalian, itemValid, itemTidakValid
    };
    this.riwayat.push(hasil);
    return hasil;
  },

  cetakStruk(hasil) {
    if (hasil.status === "DITOLAK") {
      console.log(`--- STRUK ${hasil.kode} ---\nPelanggan: ${hasil.pelanggan}\nStatus: DITOLAK - ${hasil.alasan}\n`);
      return;
    }
    let str = `--- STRUK ${hasil.kode} ---\nPelanggan: ${hasil.pelanggan}\n`;
    hasil.itemValid.forEach((it, i) => {
      str += `${i + 1}. ${it.menu} x${it.jumlah} - ${formatRupiah(it.harga * it.jumlah)}\n`;
    });
    if (hasil.itemTidakValid.length > 0) {
      str += "Item tidak valid:\n";
      for (const it of hasil.itemTidakValid) str += `- ${it.menu}: ${it.alasan}\n`;
    }
    str += `Subtotal: ${formatRupiah(hasil.subtotal)}\nPromo Hari: ${formatRupiah(hasil.promoHari)}\nDiskon: ${formatRupiah(hasil.diskon)}\nPajak: ${formatRupiah(hasil.pajak)}\nTotal: ${formatRupiah(hasil.total)}\nUang Bayar: ${formatRupiah(hasil.uangBayar)}\nKembalian: ${formatRupiah(hasil.kembalian)}\nStatus: ${hasil.status}\n`;
    if (hasil.pecahanKembalian) str += `Pecahan: ${JSON.stringify(hasil.pecahanKembalian)}\n`;
    console.log(str);
  }
};

const TARGET_KAS = 500000;
for (const trx of transaksiBersih) {
  const hasil = kasir.prosesTransaksi(trx);
  kasir.cetakStruk(hasil);
  if (kasir.saldoKas >= TARGET_KAS) {
    console.log("Target kas tercapai");
    break;
  }
}

/*
Jawaban:
1. this.menu merujuk ke property menu di dalam object kasir. this menunjuk ke object yang memanggil method.
2. switch cocok karena banyak kondisi hari yang tetap. Fall-through sabtu dan minggu sengaja tanpa break agar keduanya 5000.
3. !trx.pesanan.length true jika length 0. Nilai Falsy: 0, "", null.
4. break keluar loop, continue loncat ke iterasi berikutnya. Di hitungSubtotal pakai continue, di loop TARGET_KAS pakai break.
5. Karena butuh info item valid, item tidak valid, dan subtotal sekaligus untuk struk dan stok.
6. while di dalam for...of untuk mengurangi sisa terus sampai pecahan habis.
*/

// Bagian 4: Laporan Harian
function hitungTotalPendapatan(riwayat) {
  let total = 0;
  for (const h of riwayat) {
    if (h.status === "LUNAS") {
      total += h.total;
    }
  }
  return total;
}

function hitungTransaksiByStatus(riwayat) {
  const hasil = { LUNAS: 0, KURANG: 0, DITOLAK: 0 };
  for (const h of riwayat) {
    if (hasil[h.status] !== undefined) {
      hasil[h.status]++;
    }
  }
  return hasil;
}

function cariMenuTerlaris(riwayat) {
  const hitung = {};
  for (const h of riwayat) {
    if (h.status !== "LUNAS") continue;
    for (const item of h.itemValid) {
      if (!hitung[item.menu]) {
        hitung[item.menu] = 0;
      }
      hitung[item.menu] += item.jumlah;
    }
  }
  let terlaris = null;
  let jumlahMax = 0;
  for (const nama in hitung) {
    if (hitung[nama] > jumlahMax) {
      jumlahMax = hitung[nama];
      terlaris = nama;
    }
  }
  return { nama: terlaris, jumlah: jumlahMax, semua: hitung };
}

function cetakLaporanHarian() {
  const totalPendapatan = hitungTotalPendapatan(kasir.riwayat);
  const byStatus = hitungTransaksiByStatus(kasir.riwayat);
  const terlaris = cariMenuTerlaris(kasir.riwayat);
  const totalTransaksi = kasir.riwayat.length;
  const rataRata = totalTransaksi > 0 ? Math.round(totalPendapatan / byStatus.LUNAS) : 0;

  console.log("===== LAPORAN HARIAN =====");
  console.log(`Total Transaksi: ${totalTransaksi}`);
  console.log(`LUNAS: ${byStatus.LUNAS}, KURANG: ${byStatus.KURANG}, DITOLAK: ${byStatus.DITOLAK}`);
  console.log(`Total Pendapatan: ${formatRupiah(totalPendapatan)}`);
  console.log(`Rata-rata Transaksi LUNAS: ${formatRupiah(rataRata)}`);
  console.log(`Menu Terlaris: ${terlaris.nama} (${terlaris.jumlah} porsi)`);
  console.log(`Saldo Kas Akhir: ${formatRupiah(kasir.saldoKas)}`);
  console.log("Semua penjualan menu:", JSON.stringify(terlaris.semua));
}

cetakLaporanHarian();

/*
Jawaban:
1. for...of untuk array (riwayat, itemValid), for...in untuk object (hitung).
2. for...of langsung ambil value, lebih aman untuk array.
3. continue dipakai untuk skip transaksi yang tidak LUNAS saat hitung menu terlaris.
4. Object hitung dipakai untuk menampung jumlah per menu, key nya nama menu.
5. rataRata dihitung dari totalPendapatan dibagi jumlah LUNAS agar tidak termasuk yang gagal.
6. Laporan dibuat dengan template literal agar struk rapi dan mudah dibaca.
*/