# LibReg

Aplikasi pendaftaran anggota perpustakaan untuk tugas Pemrograman Web, menggunakan HTML, Bootstrap 5, CSS, JavaScript, dan localStorage.

- Website: [https://libreg.boysteven.com](https://libreg.boysteven.com)
- Repository: [Boyeep/LibReg](https://github.com/Boyeep/LibReg)
- [Jawaban tugas](docs/jawaban-libreg.html)
- [Blog proyek](docs/blog-libreg.html)
- [Desain Figma](https://www.figma.com/design/1gZ8II5oG4kGifJy9WiUPQ/Untitled?node-id=323-734)

## Tampilan dan fitur

LibReg memakai navbar putih, hero lebar dengan teks di kiri dan foto perpustakaan di kanan, serta empat layanan dalam satu baris datar. Form desktop memiliki panel informasi di kiri dan isian dua kolom di kanan. Halaman Data Anggota menggunakan sidebar dan tabel tanpa kartu statistik. Menu utama terdiri dari Beranda, Tentang, Layanan, Data Anggota, Pendaftaran, dan Login.

Form memeriksa kolom wajib, email, nomor telepon, dan keunikan NIM/NIP. Petugas dapat mencari anggota, membuka detail, mengedit, serta menghapus data dengan konfirmasi. Tersedia filter jenis dan program studi, urutan, paginasi lima baris, dan kartu anggota yang dapat dicetak. Pada ponsel, formulir menjadi satu kolom dengan tombol tetap di bawah; sidebar petugas dapat dibuka melalui tombol menu. Antarmuka menggunakan copy layanan perpustakaan tanpa keterangan tugas atau panel percobaan; tombol pemuat data contoh sudah dihapus.

## Menjalankan di komputer

Buka `index.html`, atau jalankan server lokal dari folder repo:

```powershell
git clone https://github.com/Boyeep/LibReg.git
cd LibReg
python -m http.server 4173
```

Buka http://localhost:4173. Tidak ada proses build. Bootstrap, gambar, dan ikon tersedia lokal.

## Akun demo petugas

- Email: `petugas@libreg.demo`
- Password: `library123`

Login hanya simulasi antarmuka, tanpa autentikasi server.

## Halaman

| Berkas | Isi |
|---|---|
| `index.html` | Beranda, layanan, statistik contoh, fasilitas, dan kontak |
| `tentang.html` | Profil, visi, dan misi |
| `layanan.html` | Layanan dan jam buka |
| `pendaftaran.html` | Form pendaftaran dan hasil penyimpanan |
| `login.html` | Login petugas simulasi |
| `anggota.html` | Pencarian, detail, edit, dan hapus anggota |
| `docs/jawaban-libreg.html` | Jawaban soal 1 sampai 4 |
| `docs/blog-libreg.html` | Artikel penjelasan pembuatan proyek |

## Penyimpanan data

Data berada pada localStorage browser, bukan database server. Data hanya tersedia pada browser dan alamat situs yang sama. Penyimpanan localhost terpisah dari domain produksi. Menghapus data situs akan menghapus data anggota.

Key `libraryreg.members.v1` dan `libraryreg.staff.demo` dipertahankan dari versi awal untuk menjaga data dan sesi yang sudah ada. Nama aplikasi pada antarmuka adalah LibReg.

## Dokumentasi

Dua artikel HTML disimpan pada folder `docs/` agar ikut tersedia di repo. Screenshot pada folder `screenshots/` mengikuti tampilan terbaru. Salinan artikel untuk folder tugas juga tersedia di folder induk proyek.

Perubahan pada checkout lokal belum memperbarui domain sampai dikirim ke repo dan diproses oleh hosting yang sudah terhubung. Proyek ini tidak memakai hosting Sites.

## Aset

- Bootstrap lokal dengan lisensi MIT pada `assets/vendor/`.
- Foto rak buku dari [Unsplash](https://images.unsplash.com/photo-1507842217343-583bb7270b66), disimpan pada `assets/images/library.jpg`.
- Foto ruang baca dari aset pada file Figma yang diberikan pengguna, disimpan pada `assets/images/library-interior.png`.
- Font Inter lokal dengan lisensi OFL pada `assets/fonts/`.
- Logo dan ikon SVG di dalam kode.

Profil, kontak, jam layanan, statistik, dan data contoh merupakan ilustrasi tugas.
