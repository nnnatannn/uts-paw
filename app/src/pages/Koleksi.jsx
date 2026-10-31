import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KotakPencarian from '../components/KotakPencarian.jsx'
import KartuBuku from '../components/KartuBuku.jsx'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kategori, setKategori] = useState('Semua')

  if (loading) return <p>Memuat data koleksi buku...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const daftarKategori = ['Semua', ...new Set(items.map((buku) => buku.kategori))]
  const hasilSaring = items.filter((buku) => {
    const cocokJudul = buku.judul.toLowerCase().includes(cari.toLowerCase())
    const cocokKategori = kategori === 'Semua' || buku.kategori === kategori
    return cocokJudul && cocokKategori
  })

  return (
    <section>
      <h1>Daftar Koleksi Buku</h1>
      <div className="alat-saring">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <select
          aria-label="Filter kategori"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        >
          {daftarKategori.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      {hasilSaring.length === 0 ? (
        <p>Tidak ada buku yang cocok dengan pencarian.</p>
      ) : (
        <div className="daftar-kartu-buku">
          {hasilSaring.map((buku) => (
            <KartuBuku key={buku.id} buku={buku} />
          ))}
        </div>
      )}
    </section>
  )
}

