

/**membuka popup (modal) dan menampilkan isi sesuai tombol yang ditekan */
/**Ambil data dari tombol
 * const title = button.dataset.title; tittle mengambil judul 
  const img = button.dataset.img; img mengambil gambar
  const desc = button.dataset.desc; desc mengambil deskripdi yang telah di masuukan ke dalam button di bagian html
 */

function openModal(button) {

  const title = button.dataset.title;
  const img = button.dataset.img;
  const desc = button.dataset.desc;

  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-img").src = img;
  document.getElementById("modal-img").alt = title;
  document.getElementById("modal-desc").textContent = desc;

/** "modal-title" Mengisi teks judul di modal
 *"modal-img" Mengganti gambar di modal
 "modal-img" Memberi nama gambar (aksesibilitas)
 "modal-desc" Mengisi deskripsi
*/

  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
  /**Halaman di belakang modal tidak bisa di-scroll
Fokus hanya ke popup */
}

/**Menutup modal jika user klik area luar popup */
function closeModal(event) {
  if (event.target === document.getElementById("modal")) {
    closeModalDirect();   /**Jika yang diklik adalah background gelap Maka modal ditutup */
  }
}

/**Memanggil fungsi penutup utama */
/**Menghapus class open
Modal kembali hilang */
function closeModalDirect() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
  /**Mengembalikan scroll halaman seperti semula */
}

/**Mendengarkan keyboard ssat menekan tombol escape */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModalDirect(); /**menutup modal saat tombol di tekan */
  }
}); 