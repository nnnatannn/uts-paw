import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom'
import { KoleksiProvider } from './context/KoleksiProvider.jsx'
import Layout from './components/Layout.jsx'
import useKoleksi from './hooks/useKoleksi.js'

function Beranda() {
  const { items, loading } = useKoleksi()
  const daftarKategori = [...new Set(items.map((buku) => buku.kategori))]
  const totalBuku = items.reduce((total) => total + 1, 0)

  return (
    <section>
      <h1>Rak Buku Pribadi</h1>
      <p>Selamat datang di aplikasi pengelolaan rak buku koleksi pribadi.</p>
      {loading ? (
        <p>Memuat ringkasan buku...</p>
      ) : (
        <p>
          Tersedia {totalBuku} koleksi buku dalam {daftarKategori.length} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat Koleksi Buku</Link>
    </section>
  )
}

function Koleksi() {
  const { items, loading } = useKoleksi()
  return (
    <section>
      <h1>Daftar Koleksi Buku</h1>
      {loading ? (
        <p>Memuat data buku...</p>
      ) : (
        <ul>
          {items.map((buku) => (
            <li key={buku.id}>
              <Link to={`/koleksi/${buku.id}`}>{buku.judul}</Link> - {buku.kategori}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <section>
      <h1>Detail Buku</h1>
      <p>ID Buku: {id}</p>
      <button type="button" onClick={() => navigate('/koleksi')}>
        Kembali ke Koleksi
      </button>
    </section>
  )
}

function Tambah() {
  return (
    <section>
      <h1>Tambah Buku Baru</h1>
      <p>Formulir tambah buku sedang disiapkan.</p>
    </section>
  )
}

function Statistik() {
  return (
    <section>
      <h1>Statistik Koleksi</h1>
      <p>Tabel statistik sedang disiapkan.</p>
    </section>
  )
}

function Tentang() {
  return (
    <section>
      <h1>Tentang Mahasiswa</h1>
      <p>Informasi mahasiswa sedang disiapkan.</p>
    </section>
  )
}

function TidakDitemukan() {
  return (
    <section>
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
      <Link to="/">Kembali ke Beranda</Link>
    </section>
  )
}

export default function App() {
  return (
    <KoleksiProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/koleksi" element={<Koleksi />} />
          <Route path="/koleksi/:id" element={<Detail />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/statistik" element={<Statistik />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="*" element={<TidakDitemukan />} />
        </Route>
      </Routes>
    </KoleksiProvider>
  )
}
