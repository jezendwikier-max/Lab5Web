document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// Meminta nama pengguna
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}

// Fungsi operasi dasar matematika
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// Pilihan menu menggunakan switch-case
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}

// Fungsi untuk memeriksa bilangan genap/ganjil
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// Fungsi untuk mengubah warna latar belakang halaman
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// Logika kalkulator total pesanan menu
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}