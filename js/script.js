// js/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("triangleForm");
  const resultContainer = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai alas, tinggi, dan sisi-sisi dari formulir
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);

    // Periksa apakah nilai alas, tinggi, dan sisi-sisi valid (angka)
    if (isNaN(alas) || isNaN(tinggi) || isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
      resultContainer.innerHTML = "Masukkan angka yang valid.";
    } else {
      // Hitung luas segitiga
      const luas = 0.5 * alas * tinggi;

      // Hitung keliling segitiga (sisiA + sisiB + sisiC)
      const keliling = sisiA + sisiB + sisiC;

      // Tampilkan hasil
      resultContainer.innerHTML = `Luas Segitiga: ${luas.toFixed(2)} <br> Keliling Segitiga: ${keliling.toFixed(2)}`;
    }
  });
});
