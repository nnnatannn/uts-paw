import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom'
import { KoleksiProvider } from './context/KoleksiProvider.jsx'
import Layout from './components/Layout.jsx'
import useKoleksi from './hooks/useKoleksi.js'
import Beranda from './pages/Beranda.jsx'
import Tentang from './pages/Tentang.jsx'
import TidakDitemukan from './pages/TidakDitemukan.jsx'

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
