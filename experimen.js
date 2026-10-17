//- Bagian 7: Tebak, Eksperimen, dan Jelaskan
console.log("===== 7.1 POTONGAN A =====");
// Tebakan: 9 | Asli:
console.log("  Hai Kawan  ".trim().length); // 9
// Tebakan: KOPI | Asli:
console.log("Kopi Susu".toUpperCase().slice(0, 4)); // KOPI
// Tebakan: 3 | Asli:
console.log("a,b,c".split(",").length); // 3
// Tebakan: bonana | Asli:
console.log("banana".replace("a", "o")); // bonana
// Tebakan: bonono | Asli:
console.log("banana".replaceAll("a", "o")); // bonono
// Tebakan: 42 | Asli:
console.log(parseInt("42px")); // 42
// Tebakan: NaN | Asli:
console.log(Number("42px")); // NaN
// Tebakan: 3 | Asli:
console.log(parseInt("3.99")); // 3
// Tebakan: string | Asli:
console.log(typeof (3.14159).toFixed(2)); // string
// Tebakan: 0.30 | Asli:
console.log((0.1 + 0.2).toFixed(2)); // 0.30
// Tebakan: 1010 | Asli:
console.log("10" + 5 * 2); // 1010
// Tebakan: true | Asli:
console.log(!0 && !""); // true

console.log("===== 7.1 POTONGAN B =====");
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan); // [20, 30]
console.log(hapus); // [20, 30]
console.log(angka); // [10, 40]

function ganda(n) {
  return n * 2;
}
function cetak(n) {
  console.log(n * 2);
}
console.log(ganda(4) + ganda(1)); // 10
console.log(cetak(4)); // 8 lalu undefined

const toko = {
  nama: "Senja",
  stok: 5,
  jual(n) {
    this.stok -= n;
    return this.stok;
  },
};
toko.jual(2);
console.log(toko.jual(1)); // 2
console.log("stok" in toko); // true
for (let k in toko) {
  console.log(k); // nama, stok, jual
}

console.log("===== 7.1 POTONGAN C =====");
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 5) {
    break;
  }
  hasil += i;
}
console.log(hasil); // 134

let n = 3;
let kali = 1;
while (n > 0) {
  kali *= n;
  n--;
}
console.log(kali); // 6

let x = 0;
do {
  x += 5;
} while (x < 3);
console.log(x); // 5

for (let huruf of "ABC") {
  console.log(huruf + huruf.toLowerCase()); // Aa, Bb, Cc
}

console.log("===== 7.2 EKSPERIMEN =====");
// 1. Function declaration vs expression
sayHai(); // bisa dipanggil sebelum definisi
function sayHai() { console.log("hai dari declaration"); }
// sayBye(); // ERROR: Cannot access 'sayBye' before initialization
const sayBye = function() { console.log("bye"); };
sayBye();

// 2. slice vs splice
let arr = [1,2,3,4];
let s = arr.slice(1,3);
console.log("slice:", s, "asli:", arr); // asli tetap [1,2,3,4]
let sp = arr.splice(1,2);
console.log("splice:", sp, "asli:", arr); // asli jadi [1,4]

// 3. for...in vs for...of
let buah = ["apel","mangga"];
for (let i in buah) console.log("for-in:", i, typeof i); // "0", "1" teks
for (let v of buah) console.log("for-of:", v); // apel, mangga

// 4. toFixed menghasilkan teks
console.log((5).toFixed(1) + 1); // "5.01" bukan 6.1
console.log(typeof (5).toFixed(1)); // string

// 5. Falsy vs Truthy
let falsyValues = [false, 0, "", null, undefined, NaN];
for (const v of falsyValues) {
  if (v) console.log("MASUK (harusnya tidak):", v);
  else console.log("TIDAK MASUK (benar):", String(v));
}
let truthyValues = ["0", [], {}];
for (const v of truthyValues) {
  if (v) console.log("MASUK (benar):", JSON.stringify(v));
  else console.log("TIDAK MASUK (harusnya masuk):", v);
}

