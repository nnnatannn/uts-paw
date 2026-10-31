import mahasiswa from '../../mahasiswa.json'

const REPO_URL = 'https://github.com/nnnatannn/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa

  return (
    <section>
      <h1>Tentang Aplikasi</h1>
      <dl>
        <dt>Nama Lengkap</dt>
        <dd>{nama}</dd>
        <dt>NIM</dt>
        <dd>{nim}</dd>
        <dt>Kelas</dt>
        <dd>{kelas}</dd>
        <dt>Tema</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Repositori GitHub: <a href={REPO_URL}>{REPO_URL}</a>
      </p>
    </section>
  )
}

