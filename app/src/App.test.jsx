import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DUMMY_BUKU = [
  {
    id: '1',
    judul: 'Laskar Pelangi',
    kategori: 'Novel',
    penulis: 'Andrea Hirata',
    tahunTerbit: 2005,
    status: 'dimiliki',
  },
  {
    id: '2',
    judul: 'Clean Code',
    kategori: 'Teknologi',
    penulis: 'Robert C. Martin',
    tahunTerbit: 2008,
    status: 'sedang dibaca',
  },
]

beforeEach(() => {
  localStorage.clear()
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => new Response(JSON.stringify(DUMMY_BUKU), { status: 200 })),
  )
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

function renderApp(ruteAwal = '/') {
  const user = userEvent.setup()
  render(
    <MemoryRouter initialEntries={[ruteAwal]}>
      <App />
    </MemoryRouter>,
  )
  return user
}

test('1. beranda menampilkan judul utama h1', async () => {
  renderApp('/')
  expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument()
})

test('2. halaman koleksi menampilkan daftar buku dari fetch', async () => {
  renderApp('/koleksi')
  expect(await screen.findByText('Laskar Pelangi')).toBeInTheDocument()
  expect(screen.getByText('Clean Code')).toBeInTheDocument()
})

test('3. form tambah buku menolak judul kosong dan menampilkan alert', async () => {
  const user = renderApp('/tambah')
  const tombolSimpan = await screen.findByRole('button', { name: /simpan/i })
  await user.click(tombolSimpan)
  expect(screen.getByRole('alert')).toHaveTextContent(/judul/i)
})

test('4. halaman statistik menampilkan tabel data', async () => {
  renderApp('/statistik')
  expect(await screen.findByRole('table')).toBeInTheDocument()
})

test('5. rute tidak dikenal menampilkan halaman 404', async () => {
  renderApp('/halaman-acak-yang-tidak-ada')
  expect(await screen.findByRole('heading', { name: '404' })).toBeInTheDocument()
})
