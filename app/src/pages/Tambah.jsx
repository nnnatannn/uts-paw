import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const NILAI_AWAL = {
  judul: '',
  kategori: 'Novel',
  penulis: '',
  tahunTerbit: new Date().getFullYear(),
  status: 'dimiliki',
}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(NILAI_AWAL)
  const [galat, setGalat] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((sebelumnya) => ({
      ...sebelumnya,
      [name]: value,
    }))
    if (name === 'judul' && value.trim()) {
      setGalat('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.judul.trim()) {
      setGalat('Judul wajib diisi, tidak boleh kosong.')
      return
    }

    tambah({
      ...form,
      judul: form.judul.trim(),
      penulis: form.penulis.trim() || 'Anonim',
      tahunTerbit: Number(form.tahunTerbit) || new Date().getFullYear(),
    })

    navigate('/koleksi')
  }

  return (
    <section className="halaman-tambah">
      <h1>Tambah Buku Baru</h1>
      <form onSubmit={handleSubmit} className="formulir-tambah" noValidate>
        <label htmlFor="judul">Judul</label>
        <input
          id="judul"
          name="judul"
          type="text"
          placeholder="Masukkan judul buku..."
          value={form.judul}
          onChange={handleChange}
        />
        {galat && <p role="alert" className="pesan-error">{galat}</p>}

        <label htmlFor="kategori">Kategori</label>
        <select
          id="kategori"
          name="kategori"
          value={form.kategori}
          onChange={handleChange}
        >
          <option value="Novel">Novel</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Sejarah">Sejarah</option>
          <option value="Komik">Komik</option>
        </select>

        <label htmlFor="penulis">Penulis</label>
        <input
          id="penulis"
          name="penulis"
          type="text"
          placeholder="Nama penulis..."
          value={form.penulis}
          onChange={handleChange}
        />

        <label htmlFor="tahunTerbit">Tahun Terbit</label>
        <input
          id="tahunTerbit"
          name="tahunTerbit"
          type="number"
          placeholder="Tahun terbit..."
          value={form.tahunTerbit}
          onChange={handleChange}
        />

        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="dimiliki">dimiliki</option>
          <option value="sedang dibaca">sedang dibaca</option>
          <option value="ingin dibeli">ingin dibeli</option>
        </select>

        <button type="submit" className="tombol-simpan">
          Simpan
        </button>
      </form>
    </section>
  )
}

