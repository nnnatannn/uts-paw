export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      type="search"
      placeholder="Cari judul buku..."
      aria-label="Cari judul"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  )
}

