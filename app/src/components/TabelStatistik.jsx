export default function TabelStatistik({ perKategori, total }) {
  return (
    <div className="tabel-kontainer">
      <table className="tabel-statistik">
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Jumlah Buku</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(perKategori).map(([kategori, jumlah]) => (
            <tr key={kategori}>
              <td>{kategori}</td>
              <td>{jumlah}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total Koleksi</th>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

