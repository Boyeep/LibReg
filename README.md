# LibReg

Aplikasi pendaftaran anggota perpustakaan untuk tugas Pemrograman Web, menggunakan HTML, Bootstrap 5, CSS, JavaScript, dan localStorage.

- Website: [https://libreg.boysteven.com](https://libreg.boysteven.com)
- Repository: [Boyeep/LibReg](https://github.com/Boyeep/LibReg)
- [Jawaban tugas](docs/jawaban-libreg.html)
- [Blog proyek](docs/blog-libreg.html)

## Tampilan dan fitur

LibReg memakai navbar putih dengan identitas biru, hero dengan foto perpustakaan, kartu layanan berikon, serta form dan tabel yang responsif. Menu utama terdiri dari Beranda, Tentang, Layanan, Daftar Anggota, Pendaftaran, dan Login Petugas.

Form memeriksa kolom wajib, email, nomor telepon, dan keunikan NIM/NIP. Petugas dapat mencari anggota, membuka detail, mengedit, serta menghapus data dengan konfirmasi. Tersedia filter, urutan, paginasi, data contoh fiktif, dan kartu anggota simulasi yang dapat dicetak.

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
- Logo dan ikon SVG di dalam kode.

Profil, kontak, jam layanan, statistik, dan data contoh merupakan ilustrasi tugas.
