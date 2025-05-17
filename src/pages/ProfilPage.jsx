import NavbarComponents from "../components/NavbarComponents";
import { Container, Row, Col, Card, Table, Accordion } from "react-bootstrap";
import React from "react";
// import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/img/herokepsek.png";
import VisiImage from "../assets/img/berita/berita-1.jpeg";

const ProfilPage = () => {
  // let navigate = useNavigate();

  return (
    <div className="profil">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="4" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" className="w-100" />
            </Col>
            <Col lg="8">
              <h1 className="mb-4 fw-semibold">
                Selamat Datang di <br />
                SMA NEGERI 11 SEMARANG
              </h1>
              <p className="mb-4">
                Kami berkomitmen untuk memberikan pendidikan terbaik melalui
                lingkungan belajar yang kondusif, tenaga pendidik profesional,
                serta program-program unggulan yang mendorong potensi siswa
                secara akademik maupun non-akademik.
              </p>
              {/* <button
                className="btn btn-outline-danger btn-lg rounded-4 me-2 mb-xs-0 mb-2"
                onClick={() => navigate("/profil")}
              >
                Selengkapnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button> */}
            </Col>
          </Row>
        </Container>
      </header>

      {/* section visi misi */}
      <div className="visimisi py-3">
        <Container>
          <Row className="px-3">
            <Col
              className="d-flex align-items-start justify-content-center rounded-3 color-red m-0 "
              md={5}
            >
              <img
                src={VisiImage}
                alt=""
                className="d-block rounded-4 m-2 p-2 w-100 object-fit-cover "
                height="350"
              />
            </Col>
            <Col className="justify-content-center">
              <Row>
                <h1 className=" fw-semibold pt-2 mb-3">Visi Sekolah</h1>
              </Row>
              <Row>
                <p className=" mb-3 fs-5">
                  Mewujudkan sekolah yang Religius, Cerdas, Terampil, dan
                  Berwawasan Lingkungan.
                </p>
              </Row>
              <Row>
                <h1 className="fw-semibold mb-3">Misi Sekolah</h1>
              </Row>
              <Row className="d-flex align-items-center">
                <ul className="list-unstyled">
                  <li>Meningkatkan iman, taqwa, dan akhlak mulia.</li>
                  <li>Meningkatkan budaya berprestasi dan mutu lulusan.</li>
                  <li>
                    Mengembangkan ilmu pengetahuan, teknologi, dan budaya.
                  </li>
                  <li>Mengembangkan sekolah Adiwiyata.</li>
                </ul>
                {/* <p className="">
              1. Meningkatkan iman, taqwa, dan akhlak mulia. <br/>2. Meningkatkan
              budaya berprestasi dan mutu lulusan. <br/>3. Mengembangkan ilmu
              pengetahuan, teknologi, dan budaya.<br/> 4. Mengembangkan sekolah
              Adiwiyata.
            </p> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* section sejarah */}
      <div className="sejarah py-3">
        <Container>
          <Row>
            <h1 className="text-center fw-semibold py-2 mb-3">
              Sejarah Sekolah
            </h1>
          </Row>
          <Row>
            <p>
              SMA Negeri 11 Semarang didirikan berdasarkan Surat Keputusan No.
              0605/0/1985 tanggal 22 November 1985 dan mulai beroperasi pada
              Tahun Pelajaran 1985/1986 dengan menumpang di SMP Negeri 8
              Semarang sambil menunggu penyelesaian gedung baru. Sekolah ini
              dipimpin pertama kali oleh Bapak Widayat Soekanto, diikuti oleh
              Dra. Endang Soelastri yang dikenal sebagai “Srikandi SMA 11”, yang
              berhasil mencanangkan program 4K (Keindahan, Kebersihan, Keasrian,
              dan Kerindangan) serta memindahkan seluruh kegiatan ke gedung baru
              di Jalan Lamper Tengah pada 10 Maret 1987 — momen yang kemudian
              diperingati sebagai hari lahir SMA Negeri 11 Semarang.
              Kepemimpinan sekolah terus berganti dengan tokoh-tokoh penting
              seperti Drs. A. Goenawan Soediyanto, Drs. H. Hudiyono, Drs. T.
              Budhi Prayitno, Drs. Soedjono, Dra. Hj. Sri Nurwati, Drs. Hari
              Waluyo, Drs. Wagino Sunarto, Drs. Yuwana, M.Kom., Drs. Supriyanto,
              M.Pd., hingga kini dipimpin oleh Ibu Rr. Tri Widiyastuti, S.Pd.
              Setiap periode kepemimpinan membawa kemajuan, baik dalam bidang
              akademik, sarana prasarana, maupun prestasi siswa, termasuk
              penghargaan Adiwiyata, kemenangan di ajang Liga Pendidikan
              Indonesia (LIPIO), dan berbagai inovasi pembelajaran. Meskipun
              pada awal berdiri belum memiliki fasilitas memadai seperti jalan
              masuk, listrik, dan lingkungan yang masih berupa rawa, semangat
              dan dedikasi warga sekolah membuat SMA Negeri 11 tumbuh menjadi
              institusi pendidikan yang tangguh, unggul, dan berkarakter, yang
              hingga kini terus berkomitmen mencetak generasi muda yang
              Terampil, Aktif, Nasionalis, Genius, Gembira, Unggul, dan Harmonis
              (TANGGUH).
            </p>
          </Row>
        </Container>
      </div>

      {/* identitas sekolah */}
      <div className="identitas">
        <Container className="my-5">
          <h2 className="text-center fw-bold mb-4">Identitas Sekolah</h2>

          <Table bordered responsive>
            <tbody>
              <tr>
                <th>Nama Sekolah</th>
                <td>SMA NEGERI 11 SEMARANG</td>
              </tr>
              <tr>
                <th>Alamat</th>
                <td>Jl Lamper Tengah Gg XIV RT 01 RW 01</td>
              </tr>
              <tr>
                <th>Kota</th>
                <td>Semarang</td>
              </tr>
              <tr>
                <th>Provinsi</th>
                <td>Jawa Tengah</td>
              </tr>
              <tr>
                <th>Telepon</th>
                <td>024-8413670</td>
              </tr>
              <tr>
                <th>RT / RW</th>
                <td>01 / 01</td>
              </tr>
              <tr>
                <th>Kelurahan</th>
                <td>Lamper Tengah</td>
              </tr>
              <tr>
                <th>Kecamatan</th>
                <td>Semarang Selatan</td>
              </tr>
              <tr>
                <th>Kode Pos</th>
                <td>50248</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>
                  <a
                    href="https://www.sman11-smg.sch.id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.sman11-smg.sch.id
                  </a>
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>sma11_smg@yahoo.co.id</td>
              </tr>
              <tr>
                <th>SK Berdiri</th>
                <td>No - 0601/O/1985 Tanggal 22 Nopember 1985</td>
              </tr>
              <tr>
                <th>NSS</th>
                <td>301036305065</td>
              </tr>
              <tr>
                <th>NIS</th>
                <td>300110</td>
              </tr>
              <tr>
                <th>NPSN</th>
                <td>20328879</td>
              </tr>
              <tr>
                <th>Akreditasi</th>
                <td>
                  A (nilai = 94), tanggal 20 Oktober 2015, masa akreditasi
                  diperpanjang s.d. 31 Desember 2026
                </td>
              </tr>
              <tr>
                <th>Unit Kerja</th>
                <td>Dinas Pendidikan dan Kebudayaan Provinsi Jawa Tengah</td>
              </tr>
              <tr>
                <th>Sub Unit Kerja</th>
                <td>Cabang Dinas Pendidikan Wilayah I</td>
              </tr>
              <tr>
                <th>Sub Sub Unit Kerja</th>
                <td>SMA Negeri 11 Semarang</td>
              </tr>
              <tr>
                <th>Koordinat</th>
                <td>-7.005618221872006, 110.44643306382613</td>
              </tr>
              <tr>
                <th>Denah Sekolah</th>
                <td>
                  <a href="https://drive.google.com/file/d/1Isqp9hUMeZusaT4LqIyk55F3qf5EJDUA/view">Cek Disini</a>
                </td>
              </tr>
              <tr>
                
              </tr>
            </tbody>
          </Table>

          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="fw-semibold">Makna Logo</Accordion.Header>
              <Accordion.Body>
                <ol>
                  <li>
                    Bentuk Segi Lima melambangkan Pancasila dasar negara kita.
                  </li>
                  <li>
                    Latar belakang warna coklat — melambangkan bumi pertiwi,
                    kesetiaan dan kepedulian lingkungan.
                  </li>
                  <li>
                    Tugu Muda sebagai identitas Kota Semarang dan lambang
                    partisipasi membangun bangsa.
                  </li>
                  <li>
                    Dawai dengan 11 senar melambangkan budaya Kota Semarang dan
                    identitas SMAN 11.
                  </li>
                  <li>
                    Padi dan kapas sebagai simbol kesejahteraan dan jiwa
                    kewirausahaan.
                  </li>
                  <li>
                    "Tut Wuri Handayani" — menyelaraskan afeksi, kognisi, dan
                    psikomotorik.
                  </li>
                  <li>
                    "Andhasya Dipo Vidya" — Ilmu pengetahuan adalah cahaya bagi
                    kebodohan.
                  </li>
                  <li>
                    Buku sebagai sumber ilmu yang harus dikembangkan siswa.
                  </li>
                  <li>
                    Angka 11 di atas tugu menggambarkan semangat juang dan
                    pendidikan karakter.
                  </li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      {/* Section Sarpras */}
      <div className="sarpras">
        <Container className="my-5">
          <h2 className="text-center fw-bold mb-2">
            Sarana dan Prasarana Sekolah
          </h2>

          <h4 className="fw-semibold mt-3">Sarana</h4>
          <Row xs={1} md={2} lg={3} className="g-4 mt-1">
            {[
              "36 Ruang Kelas",
              "Ruang Guru",
              "Ruang Tata Usaha",
              "Ruang Kepala Sekolah",
              "Ruang Wakil Kepala Sekolah",
              "Ruang Bendahara",
              "2 Ruang Lab Komputer",
              "Lab IPA (Fisika, Biologi, Kimia)",
              "Perpustakaan (ber-AC)",
              "Masjid",
              "Ruang Agama Non-Islam",
              "Ruang Musik",
              "UKS",
              "10 Kantin Sekolah",
              "Ruang Koperasi Siswa",
              "Ruang Serbaguna",
              "Ruang Praktek KWU (Kewirausahaan)",
              "Ruang Paskibra",
              "Ruang OSIS",
              "Ruang PMR",
              "24 Kamar Mandi",
              "Pos Satpam",
              "Hall",
              "Ruang Komposting",
              "Bank Sampah",
              "2 Lapangan Bola Voli",
              "Lapangan Bola Basket",
              "Lapangan Upacara / Sepak Bola",
              "Tempat Parkir",
            ].map((item, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Text>{item}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <h4 className="fw-semibold mt-5">Prasarana Sekolah</h4>
          <Row xs={1} md={2} lg={3} className="g-4 mt-2">
            {[
              "Tempat Sampah (3 pasang: Organik, Anorganik, B3)",
              "Wastafel di depan kelas",
              "Hotspot Area",
              "Air Siap Minum",
              "TOGA (Tanaman Obat Keluarga)",
              "Kolam Lele",
              "Becak Sampah",
              "Fasilitas Ramah Lingkungan",
              "Taman di beberapa tempat",
            ].map((item, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-sm bg-light">
                  <Card.Body>
                    <Card.Text>{item}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default ProfilPage;
