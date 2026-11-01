# Rak Buku Pribadi

Aplikasi web satu halaman (Single Page Application) berbasis React untuk mengelola katalog koleksi buku pribadi. Dibuat untuk memenuhi Ujian Tengah Semester mata kuliah IF25-22014 Pengembangan Aplikasi Web, Program Studi Teknik Informatika, Institut Teknologi Sumatera.

## Identitas Mahasiswa

* **Nama:** Yonatanoel Petra Hutabarat
* **NIM:** 123140100
* **Kelas:** RB
* **Tema:** Rak Buku Pribadi (Digit NIM: 0)
* **URL Deployment:** https://nnnatannn.github.io/uts-paw/

![Tampilan Beranda](docs/Tampilan%20Beranda.png)

## Fitur Aplikasi

1. **Beranda (`/`)**: Menampilkan judul utama, informasi tema, serta ringkasan total buku dan jumlah kategori yang tersimpan dalam bentuk kartu ringkasan interaktif.
   
   ![Tampilan Beranda](docs/Tampilan%20Beranda.png)

2. **Daftar Koleksi (`/koleksi`)**: Menampilkan seluruh data buku hasil `fetch` data awal, dilengkapi fitur pencarian berbasis judul secara langsung dan penyaringan berdasarkan kategori.
   
   ![Tampilan Koleksi](docs/Tampilan%20Koleksi.png)

3. **Detail Buku (`/koleksi/:id`)**: Menampilkan informasi lengkap setiap buku termasuk atribut tema (*Penulis*, *Tahun Terbit*, dan *Status*), disertai aksi penghapusan buku dengan dialog konfirmasi serta penanganan ID yang tidak ditemukan.

4. **Tambah Buku (`/tambah`)**: Formulir terkontrol untuk menambah koleksi buku baru dengan validasi judul (wajib diisi dan menampilkan pesan peringatan), serta menyimpan data secara persisten ke `localStorage`.
   
   ![Tampilan Tambah Buku](docs/Tampilan%20Tambah%20Buku.png)

5. **Statistik Koleksi (`/statistik`)**: Menampilkan rekapitulasi jumlah buku per kategori dalam bentuk tabel HTML yang rapi dan responsif.
   
   ![Tampilan Statistik](docs/Tampilan%20Statistik.png)

6. **Tentang Mahasiswa (`/tentang`)**: Menampilkan informasi profil pembuat dan tautan ke repositori kode sumber.
   
   ![Tampilan Tentang](docs/Tampilan%20Tentang.png)

7. **Halaman 404 (`*`)**: Penanganan rute yang tidak terdaftar dengan pesan ramah pengguna dan tautan kembali ke beranda.

## Cara Menjalankan Secara Lokal

Pastikan Node.js (versi 20 atau lebih baru) telah terpasang di komputer Anda.

1. Buka folder aplikasi:
   ```bash
   cd app
   ```
2. Pasang seluruh dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
4. Buka alamat lokal yang muncul di terminal (biasanya `http://localhost:5173`).

5. Untuk menjalankan pengujian otomatis:
   ```bash
   npm test
   ```

6. Untuk memeriksa skor dan kesesuaian rubrik penilaian:
   ```bash
   npm run cek
   ```

## Konsep React dan Teknologi yang Diterapkan

* **React Functional Components & JSX**: Membagi antarmuka menjadi komponen modular di folder `src/components/` dan `src/pages/`.
* **State Management & Hooks**: Menggunakan `useState` dan `useEffect` untuk siklus hidup komponen dan sinkronisasi data.
* **Context API**: `createContext`, `Provider`, dan `useContext` untuk mendistribusikan data koleksi buku ke seluruh halaman tanpa *prop drilling*.
* **Custom Hooks**:
  * `useLocalStorage`: Mengelola persistensi data buku di browser `localStorage`.
  * `useKoleksi`: Menyediakan akses mudah ke state dan aksi koleksi.
* **React Router v7**: Mengelola navigasi SPA tanpa reload browser menggunakan `Routes`, `Route`, `Link`, `NavLink`, `useParams`, dan `useNavigate`.
* **HTML Semantik & CSS Responsif**: Struktur layout semantik (`header`, `nav`, `main`, `footer`), Flexbox, Grid, dan media query untuk tampilan mobile-friendly.
* **Testing Library & Vitest**: 5 test case unit testing untuk menguji fungsi dan alur antarmuka aplikasi.
