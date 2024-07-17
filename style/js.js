window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 50) { // Misalkan Anda ingin navbar berubah setelah discroll sejauh 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

$('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500); // Durasi animasi dalam milidetik
    }
  });
  
  document.getElementById("kontak").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit standar

    // Menampilkan notifikasi bahwa pesan telah terkirim
    alert("Pesan berhasil terkirim!");

    // Di sini Anda dapat menambahkan logika pengiriman form ke server jika dibutuhkan
    // Contoh: kirimFormKeServer();

    // Hapus komentar di bawah jika ingin mereset form setelah terkirim
     this.reset();
  });

// Mendapatkan tombol toggle dan aside
const toggleButton = document.getElementById('toggleAside');
const profileAside = document.getElementById('profile');

// Menambahkan event listener untuk toggle button
toggleButton.addEventListener('click', function() {
    profileAside.classList.toggle('hide-aside');
});

// Menutup aside saat pengguna mengklik di luar aside
document.addEventListener('click', function(event) {
    // Periksa apakah yang diklik bukan bagian dari aside atau toggle button
    if (!profileAside.contains(event.target) && event.target !== toggleButton) {
        profileAside.classList.add('hide-aside'); // Menutup aside dengan menambahkan kelas hide-aside
    }
});


/// JavaScript untuk menangani tampilan menu saat di layar kecil
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');

menuToggle.addEventListener('click', function() {
    menuList.classList.toggle("hidden");
});


