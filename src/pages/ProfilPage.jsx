import NavbarComponents from "../components/NavbarComponents";
import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";
// import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/img/hero.png";

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
              <h1 className="mb-4 fw-bold">
                Selamat Datang di <br />
                SMA NEGERI 11 SEMARANG
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                velit ullam amet hic quo cupiditate eligendi nostrum earum quae
                consectetur! Minus itaque iure quia aliquam voluptatem impedit
                hic animi veritatis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio aliquam consectetur vel, voluptas
                impedit, vero pariatur voluptates eligendi sunt quam, facere
                eveniet omnis deserunt commodi maiores nesciunt fugiat cumque
                amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae id, voluptatum quod, sint doloribus perferendis
                alias in cumque minima eaque dolorem corrupti ipsa commodi
                delectus dolores enim quam ut incidunt?
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
      <div className="visimisi">
        <Container>
          <Row>
            <h1 className="text-center fw-bold mb-3">Visi Sekolah</h1>
          </Row>
          <Row>
            <p className="text-center mb-3 fs-5">
              Mewujudkan sekolah yang Religius, Cerdas, Terampil, dan Berwawasan
              Lingkungan.
            </p>
          </Row>
          <Row>
            <h1 className="text-center fw-bold mb-3">Misi Sekolah</h1>
          </Row>
          <Row className="d-flex align-items-center">
            <ul>
              <li>Meningkatkan iman, taqwa, dan akhlak mulia.</li>
              <li>Meningkatkan budaya berprestasi dan mutu lulusan.</li>
              <li>Mengembangkan ilmu pengetahuan, teknologi, dan budaya.</li>
              <li>Mengembangkan sekolah Adiwiyata.</li>
            </ul>
            {/* <p className="">
              1. Meningkatkan iman, taqwa, dan akhlak mulia. <br/>2. Meningkatkan
              budaya berprestasi dan mutu lulusan. <br/>3. Mengembangkan ilmu
              pengetahuan, teknologi, dan budaya.<br/> 4. Mengembangkan sekolah
              Adiwiyata.
            </p> */}
          </Row>
        </Container>
      </div>

      {/* section sejarah */}
      <div className="sejarah">
        <Container>
          <Row>
            <h1 className="text-center fw-bold mb-3">Sejarah Sekolah</h1>
          </Row>
          <Row className="">
            <p className="text-justify">
              Berdasarkan Surat Keputusan No. 0605/0/1985 tanggal 22 Nopember
              1085 tentang Unit Gedung Baru (UGB), dibuka SMA Negeri 11 Semarang
              pada Tahun Pelajaran 1985/1986. Sambil menunggu penyelesaian
              pembangunan gedung, SMA Negeri 11 Semarang untuk sementara
              menggunakan gedung SMP Negeri 8 Semarang sebagai tempat kegiatan
              belajar mengajar berlangsung siang hari. Sebagai pengampu adalah
              Bapak Widayat Soekanto yang sementara itu masih menjabat sebagai
              Kepala SMA Negeri 1 Semarang. Pada tahun pertama SMA Negeri 11
              Semarang menerima sejumlah 144 siswa yang terdiri dari 3 rombongan
              belajar yaitu IA, IB, dan IC. Untuk pengajar sebagian besar dari
              SMA Negeri 1 Semarang, baik Guru Tetap (GT) dan Guru Tidak Tetap
              (GTT). Pada bulan Agustus 1986, Kepemimpinan SMA Negeri 11
              Semarang diserahterimakan dari Drs. Soekanto kepada Dra. Endang
              Soelastri yang sebelumnya menjabat sebagai Kepala SMA Negeri 13
              Semarang. Dengan telah selesainya pembangunan gedung SMA Negeri 11
              yang terletak di jalan Lamper Tengah tepat pada hari Selasa, 10
              Maret 1987 semua kegiatan SMA Negeri 11 Semarang menempati gedung
              baru. Peristiwa kepindahan/boyongan inilah yang dijadikan sebagai
              peringatan “MOMENTUM SEJARAH LAHIRNYA SMA NEGERI 11 SEMARANG”.
              Walaupun belum memiliki fasilitas yang memadai antara lain : Belum
              ada jalan masuk, Listrik belum menyala, Saat turun hujan,
              jalan/lingkungan jadi becek, Tanah di lingkungan sekitar masih
              menyerupai rawa-rawa. Tetapi hal-hal di atas tidak menjadi
              penghalang, mengajak Bapak/Ibu Guru dan siswa-siswi untuk bisa
              menerima kondisi tersebut serta melaksanakan kegiatan belajar
              mengajar meskipun harus berlangsung pagi dan siang hari. Berkat
              beliau yang mendapat julukan ‘SRIKANDI SMA NEGERI 11’ sekolah
              semakin hari semakin menampakkan diri dan semakin dewasa serta
              pandai. Hal ini ditandai dengan keberhasilan mencanangkan 4 K
              (Keindahan, Kebersihan, Keasrian, Kerindangan) sehingga sangat
              mendukung sebutan Semarang sebagai Kota ATLAS. Karena prestasi
              yang semakin baik, tanggal 1 Oktober 1992 beliau dipercaya untuk
              menjadi Kepala SMA Negeri 1 Semarang. Sebagai pengganti beliau,
              diterbitkan SK Kepala Sekolah baru yang berasal dari guru SMA
              Negeri 5 Semarang yaitu Drs. A. Goenawan Soediyanto. Prestasi
              maupun program-program yang dicanangkan oleh pendahulunya
              dilanjutkan dengan dedikasi tinggi dan penuh tanggung jawab. Hal
              ini tampak jelas pada perjalanan prestasi SMA Negeri 11 Semarang
              dalam event-event berbagai lomba dan peringkat sekolah yang sangat
              kompetitif. Perjalanan karir memang tidak dapat diduga. Pada bulan
              Maret 1998, Drs. Goenawan Soediyanto ditunjuk oleh Depdiknas
              Provinsi Jateng untuk menjadi Kepala SMA Negeri 2 Semarang.
              Bersamaan dengan itu, tanggung jawab kepemimpinan dilanjutkan oleh
              Drs. H. Hudiyono yang sebelumnya menjabat sebagai Kepala SMA
              Negeri 13 Semarang. Di bawah kepemimpinan beliau, dimunculkan satu
              fenomena baru yang belum pernah diterapkan di SMA Negeri 11
              Semarang, yaitu pemilihan Wakil Kepala Sekolah yang dilakukan
              secara langsung dari arus bawah. Belum begitu lama memimpin,
              beliau jatuh sakit hingga meninggal pada tanggal 20 Februari 2000.
              Untuk menghindari kevakuman/kekosongan kepemimpinan, maka Kandep
              Dikbud Kota Semarang mengeluarkan nota tugas Drs. H. Sudibyo Atmo
              Prawiro yang masih menjabat Kepala SMA Negeri 2 Semarang sebagai
              Pejabat YMT di SMA Negeri 11 Semarang. Pada tanggal 23 September
              2000, Kepala SMA Negeri 11 Semarang diserahterimakan dari Pejabat
              Sementara (YMT) Drs. H. Sudibyo Atmo Prawiro kepada Drs. T. Budhi
              Prayitno yang sebelumnya menjabat sebagai Kepala SMA Negeri 5
              Semarang. Banyak kiprah dan keberhasilan dalam kepemimpinan
              beliau. Kepemimpinan dialihkan kepada Kepala Sekolah yang baru
              sehubungan dengan telah memasuki masa pension. Sementara menunggu
              kepala sekolah yang definitive ditunjuk Bapak Drs. Sentot Widodo
              yang masih menjabat sebagai Kepala SMA Negeri 15 Semarang sebagai
              Pejabat YMT. Kurang dari 2 bulan, tampuk kepemimpinan diserahkan
              kepada Drs. Soedjono selaku Kepala Sekolah efinitive yang
              sebelumnya sebagai Kepala SMA Negeri 16 Semarang. Seperti
              pendahulunya, kesuksesan sebagai seorang pemimpin semakin
              terlihat, baik dalam peningkatan akademis maupun pembangunan
              fisik. Sebagai pemimpin yang memiliki antusias dan penuh inovasi
              beliau mendapat kepercayaan dari Walikota Semarang untuk
              melanjutkan kepemimpinan di SMA Negeri 3 Semarang. Tanggal 15
              Nopember 2005 kepemimpinan diserahkan dari Drs. Soedjono kepada
              Kepala Sekolah yang baru Dra. Hj. Sri Nurwati, M.Pd. yang
              sebelumnya menjabat sebagai Kepala SMA Negeri 9 Semarang. Selama
              tujuh tahun kepemimpinan Beliau, prestasi SMAN 11 Semarang semakin
              mencuat, ditandai dengan predikat SMAN 11 Semarang sebagai Sekolah
              Adiwiyata (Tk. Kota dan Tk. Propinsi), serta kemenangan tim LIPIO
              di ajang sepak bola pelajar (Liga Pendidikan Indonesia) hingga
              maju ke tingkat Nasional. Kepemimpinan Dra. Hj. Sri Nurwati, M.Pd.
              berakhir pada 31 Agustus 2013 karena memasuki batas usia pensiun.
              Selanjutnya kepemimpinan SMAN 11 Semarang dilanjutkan oleh Drs.
              Hari Waluyo, MM sebagai Pelaksana Tugas (Plt) karena Beliau juga
              masih memimpin di SMA Negeri 2 Semarang. Masa kepemimpinan beliau
              hanya 1 tahun yaitu TMT 1 Februari 2013 sampai dengan 28 Januari
              2014. Selanjutnya tongkat kepemimpinan dilanjutkan oleh Drs.
              Wagino Sunarto, MM. Beliau sebelumnya sebagai Kepala Sekolah di
              SMA Negeri 14 Semarang. Menengok perjalanan karir beliau, sebelum
              menjadi Kepala SMAN 14 Semarang beliau merupakan guru PKn di SMAN
              11 Semarang. Masa kepemimpinan beliau hanya 1 1/2 tahun yaitu TMT
              1 Februari 2014 sampai dengan 31 Agustus 2016. Sejak 1 September
              2016 kepemimpinan dilanjutkan oleh Drs. Yuwana, M.Kom. sampai
              dengan sekarang. Selain sebagai Kepala Sekolah, beliau juga
              sebagai guru, mengajar Ekonomi/ Akuntansi. Sebelumnya sebagai guru
              dan Kepala Sekolah di SMA Negeri 13 Semarang. Mulai Januari 2018
              sampai dengan 28 Februari 2022 SMA Negeri 11 Semarang dipimpin
              oleh Drs. Supriyanto, M.Pd. yang sebelumnya sebagai KS SMA Negeri
              10 Semarang. Untuk mengisi kekosongan Kepala Sekolah maka Bapak
              Soleh, S.Pd., M.Pd. mendapat tugas sebagai Plt. Kepala SMA 11
              Semarang sampai dengan 11 Juli 2022. Sejak 12 Juli 2022
              kepemimpinan Kepala Sekolah dilanjutkan oleh Ibu Rr. Tri
              Widiyastuti, S.Pd. sampai dengan Sekarang
            </p>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default ProfilPage;
