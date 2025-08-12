// Mengambil elemen hamburger menu (ikon tiga garis di pojok kanan atas)
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);

// Mengambil elemen daftar menu (ul) di dalam navigasi
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");

// Mengambil semua tautan (a) di dalam setiap item menu (li)
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);

// Mengambil elemen header yang memiliki class 'container'
const header = document.querySelector(".header.container");

// Event klik pada hamburger menu → buka/tutup menu di mode mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // Ubah ikon hamburger jadi X atau sebaliknya
  mobile_menu.classList.toggle("active"); // Tampilkan atau sembunyikan menu
});

// Event scroll halaman → ubah warna background header saat scroll ke bawah
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY; // Posisi scroll vertikal
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c"; // Warna gelap jika scroll > 250px
  } else {
    header.style.backgroundColor = "transparent"; // Transparan jika scroll < 250px
  }
});

// Event klik pada setiap item menu → tutup menu otomatis di mode mobile
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // Kembalikan ikon hamburger
    mobile_menu.classList.toggle("active"); // Sembunyikan menu
  });
});
