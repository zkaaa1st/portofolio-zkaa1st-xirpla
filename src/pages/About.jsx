import zkaa1st from './zkaa1st.jpeg';

export default function About() {
  return (
    <section className="section about">
      <div className="about-card">
          <aside className="about-photo" aria-hidden="true">
          {/* replace src with your photo path */}
          <img src={zkaa1st} alt="Foto Azka Airlangga" style={{ width: 160, height: 'auto', borderRadius: 8 }} />
        </aside>

        <div className="about-content">
          <h2 className="about-title">Hai, saya Azka Airlangga Britianto</h2>
          <p className="about-sub">
            Siswa kelas XI Rekayasa Perangkat Lunak yang gemar membuat antarmuka web menarik dan
            membangun aplikasi fungsional. Saya tertarik pada desain, pengalaman pengguna, dan
            pengembangan front-end.
          </p>

          <div className="biodata">
            <h3 className="biodata-title">Biodata Singkat</h3>
            <ul className="biodata-list">
              <li><strong>Nama:</strong> Azka Airlangga Bristianto</li>
              <li><strong>Kelas:</strong> XI RPL</li>
              <li><strong>Sekolah:</strong> SMK PUSDIKHUBAD CIMAHI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
