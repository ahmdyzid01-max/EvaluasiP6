//- Bagian 5: Latihan Logika

function hitungFaktorial(n) {
  if (n < 0) return null;
  let hasil = 1;
  for (let i = 2; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}

function cekPalindrom(teks) {
  if (teks === "") return false;
  const bersih = teks.toLowerCase().trim();
  if (bersih === "") return false;
  let kiri = 0;
  let kanan = bersih.length - 1;
  while (kiri < kanan) {
    if (bersih[kiri] !== bersih[kanan]) return false;
    kiri++;
    kanan--;
  }
  return true;
}

function hitungVokal(teks) {
  const vokal = "aiueo";
  let count = 0;
  for (const char of teks.toLowerCase()) {
    if (vokal.includes(char)) count++;
  }
  return count;
}

function cariTerbesar(daftar) {
  if (daftar.length === 0) return null;
  let nilaiMax = daftar[0];
  let indeksMax = 0;
  for (let i = 1; i < daftar.length; i++) {
    if (daftar[i] > nilaiMax) {
      nilaiMax = daftar[i];
      indeksMax = i;
    }
  }
  return { nilai: nilaiMax, indeks: indeksMax };
}

function hapusDuplikat(daftar) {
  const hasil = [];
  for (const item of daftar) {
    if (!hasil.includes(item)) {
      hasil.push(item);
    }
  }
  return hasil;
}

function cekBilanganPrima(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// --- Pemanggilan + Cetak ---
console.log("=== hitungFaktorial ===");
console.log("5 ->", hitungFaktorial(5));
console.log("0 ->", hitungFaktorial(0));
console.log("1 ->", hitungFaktorial(1));
console.log("-3 ->", hitungFaktorial(-3));

console.log("=== cekPalindrom ===");
console.log('"Katak" ->', cekPalindrom("Katak"));
console.log('" Malam " ->', cekPalindrom(" Malam "));
console.log('"Kopi" ->', cekPalindrom("Kopi"));
console.log('"" ->', cekPalindrom(""));

console.log("=== hitungVokal ===");
console.log('"Kedai Senja" ->', hitungVokal("Kedai Senja"));
console.log('"RHYTHM" ->', hitungVokal("RHYTHM"));
console.log('"Aiueo" ->', hitungVokal("Aiueo"));

console.log("=== cariTerbesar ===");
console.log("[12,45,7,45,30] ->", cariTerbesar([12, 45, 7, 45, 30]));
console.log("[3] ->", cariTerbesar([3]));
console.log("[] ->", cariTerbesar([]));

console.log("=== hapusDuplikat ===");
const arr1 = [1, 2, 2, 3, 1];
console.log("[1,2,2,3,1] ->", hapusDuplikat(arr1), "| asli tetap:", JSON.stringify(arr1));
const arr2 = ["a", "b", "a"];
console.log('["a","b","a"] ->', hapusDuplikat(arr2), "| asli tetap:", JSON.stringify(arr2));
const arr3 = [];
console.log("[] ->", hapusDuplikat(arr3), "| asli tetap:", JSON.stringify(arr3));

console.log("=== cekBilanganPrima ===");
console.log("2 ->", cekBilanganPrima(2));
console.log("17 ->", cekBilanganPrima(17));
console.log("15 ->", cekBilanganPrima(15));
console.log("1 ->", cekBilanganPrima(1));
console.log("0 ->", cekBilanganPrima(0));

