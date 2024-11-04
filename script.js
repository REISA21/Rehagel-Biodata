document.addEventListener("DOMContentLoaded", function () {
  const earth = document.querySelector(".earth");
  let isStopped = false;

  // Fungsi untuk menghentikan atau melanjutkan animasi rotasi bumi
  function toggleRotation() {
    if (isStopped) {
      earth.style.animationPlayState = "running"; // Melanjutkan animasi
      isStopped = false;
    } else {
      earth.style.animationPlayState = "paused"; // Menghentikan animasi
      isStopped = true;
    }
  }

  // Menambahkan event listener untuk klik mouse pada elemen bumi
  earth.addEventListener("click", function () {
    toggleRotation(); // Panggil fungsi untuk menghentikan atau melanjutkan rotasi
  });
});
