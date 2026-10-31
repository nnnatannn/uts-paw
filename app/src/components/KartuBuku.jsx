import { Link } from 'react-router-dom'

export default function KartuBuku({ buku }) {
  const { id, judul, kategori, penulis, tahunTerbit, status } = buku

  return (
    <article className="kartu-buku">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p className="kategori-buku">{kategori}</p>
      <p className="detail-singkat">
        {penulis} · {tahunTerbit}
      </p>
      <span className="badge-status">{status}</span>
    </article>
  )
}

