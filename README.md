# LibraryReg

Aplikasi pendaftaran anggota perpustakaan untuk tugas Pemrograman Web. Dibuat dengan HTML, Bootstrap 5, CSS, JavaScript, dan localStorage.

Versi ini **dikerjakan secara lokal dan tidak dipublikasikan**. Tampilan memakai komponen Bootstrap sederhana dengan navbar biru, form dua kolom pada desktop, dan tabel anggota.

## Membuka website

Buka `index.html` di browser. Untuk penyimpanan antarhalaman yang lebih konsisten, jalankan server lokal:

```powershell
cd PWEB-LibraryReg
python -m http.server 4173
```

Kemudian buka http://localhost:4173. Tidak perlu build atau CDN. Bootstrap, gambar, dan ikon sudah tersedia di folder `assets/`.

## Akun petugas simulasi

- Email: `petugas@libraryreg.demo`
- Password: `library123`

Login ini hanya simulasi tampilan, belum menggunakan autentikasi server.

## Halaman dan fitur

| Halaman | Isi |
|---|---|
| `index.html` | Beranda, layanan, statistik contoh, fasilitas, dan kontak |
| `tentang.html` | Profil singkat, visi, dan misi |
| `layanan.html` | Informasi layanan dan jam buka |
| `pendaftaran.html` | Form anggota, validasi, dan hasil pendaftaran |
| `login.html` | Login petugas simulasi |
| `anggota.html` | Tabel, pencarian, filter, detail, edit, dan hapus anggota |

NIM/NIP harus unik. Data disimpan di localStorage dengan key `libraryreg.members.v1`, sedangkan sesi demo menggunakan sessionStorage. Data tetap ada setelah reload pada alamat/browser yang sama. Data tidak dibagikan ke perangkat lain dan bisa hilang jika data situs dihapus.

Tombol **Muat data contoh** menyediakan data fiktif untuk mencoba tabel. Cetak kartu anggota tersedia setelah pendaftaran atau pada detail anggota.

## Dua artikel HTML

Berkas berikut berada di folder induk proyek, mengikuti penomoran blog sebelumnya:

1. [Jawaban tugas LibraryReg](../blog-7-jawaban-libraryreg.html): jawaban soal 1–4, ruang lingkup, rancangan halaman/menu, dan desain.
2. [Blog proyek LibraryReg](../blog-8-project-libraryreg.html): penjelasan pembuatan website, struktur berkas, formulir, dan localStorage.

Artikel menggunakan gambar dari `screenshots/`. Jika dipindahkan ke platform blog, unggah gambar terlebih dahulu lalu sesuaikan alamat `src`.

```powershell
npm ci
# Jalankan server lokal di terminal lain terlebih dahulu.
```

## Sumber aset

- Bootstrap lokal pada `assets/vendor/`, dengan lisensi MIT yang disertakan.
- Foto rak buku dari [Unsplash](https://images.unsplash.com/photo-1507842217343-583bb7270b66), tersimpan pada `assets/images/library.jpg`.
- Ikon dan logo menggunakan SVG di dalam proyek.

Profil, kontak, jam layanan, statistik, serta data contoh adalah ilustrasi tugas.
