import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const DAFTAR_MENU = [
  { path: '/', label: 'Beranda' },
  { path: '/koleksi', label: 'Koleksi' },
  { path: '/tambah', label: 'Tambah Buku' },
  { path: '/statistik', label: 'Statistik' },
  { path: '/tentang', label: 'Tentang' },
]

export default function Layout() {
  return (
    <div id="aplikasi-root" className="kerangka">
      <header id="header-utama" className="kepala">
        <strong className="judul-aplikasi">Rak Buku Pribadi</strong>
        <nav className="menu-navigasi">
          {DAFTAR_MENU.map(({ path, label }) => (
            <NavLink key={path} to={path} end={path === '/'} className="tautan-nav">
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="konten-utama" className="konten-halaman">
        <Outlet />
      </main>
      <footer className="kaki">
        <span>IF25-22014 Pengembangan Aplikasi Web</span>
        <span>Institut Teknologi Sumatera</span>
      </footer>
    </div>
  )
}

