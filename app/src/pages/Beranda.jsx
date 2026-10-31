import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const daftarKategori = [...new Set(items.map((buku) => buku.kategori))]

  return (
    <section>
      <h1>Rak Buku Pribadi</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan buku...</p>
      ) : (
        <p>
          Tersimpan {items.length} buku dalam {daftarKategori.length} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat semua koleksi buku</Link>
    </section>
  )
}

