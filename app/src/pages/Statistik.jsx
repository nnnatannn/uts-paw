import useKoleksi from '../hooks/useKoleksi.js'
import TabelStatistik from '../components/TabelStatistik.jsx'
import './Statistik.css'

export default function Statistik() {
  const { items } = useKoleksi()

  const perKategori = items.reduce((rekap, buku) => {
    const kat = buku.kategori
    return {
      ...rekap,
      [kat]: (rekap[kat] ?? 0) + 1,
    }
  }, {})

  return (
    <section className="halaman-statistik">
      <h1>Statistik Koleksi Buku</h1>
      <p>Berikut adalah ringkasan sebaran buku berdasarkan kategori.</p>
      <TabelStatistik perKategori={perKategori} total={items.length} />
    </section>
  )
}

