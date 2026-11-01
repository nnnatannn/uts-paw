import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Detail.css'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()

  const buku = items.find((item) => String(item.id) === String(id))

  if (loading) return <p>Memuat rincian buku...</p>

  if (!buku) {
    return (
      <section className="halaman-detail">
        <h1>Buku tidak ditemukan</h1>
        <p>Buku dengan ID tersebut tidak ada dalam koleksi Anda.</p>
        <Link to="/koleksi" className="tautan-kembali">
          Kembali ke daftar koleksi
        </Link>
      </section>
    )
  }

  const handleHapus = () => {
    const yakin = window.confirm(`Apakah Anda yakin ingin menghapus buku "${buku.judul}"?`)
    if (yakin) {
      hapus(buku.id)
      navigate('/koleksi')
    }
  }

  return (
    <section className="halaman-detail">
      <h1>{buku.judul}</h1>
      <dl className="daftar-rincian">
        <dt>Kategori</dt>
        <dd>{buku.kategori}</dd>

        <dt>Penulis</dt>
        <dd>{buku.penulis}</dd>

        <dt>Tahun Terbit</dt>
        <dd>{buku.tahunTerbit}</dd>

        <dt>Status</dt>
        <dd>
          <span className="badge-detail-status">{buku.status}</span>
        </dd>
      </dl>

      <div className="aksi-detail">
        <button type="button" onClick={handleHapus} className="tombol-hapus">
          Hapus
        </button>
        <Link to="/koleksi" className="tautan-kembali">
          Kembali ke Koleksi
        </Link>
      </div>
    </section>
  )
}

