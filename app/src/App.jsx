import { Route, Routes, useParams, useNavigate } from 'react-router-dom'
import { KoleksiProvider } from './context/KoleksiProvider.jsx'
import Layout from './components/Layout.jsx'
import Beranda from './pages/Beranda.jsx'
import Koleksi from './pages/Koleksi.jsx'
import Tentang from './pages/Tentang.jsx'
import TidakDitemukan from './pages/TidakDitemukan.jsx'

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
