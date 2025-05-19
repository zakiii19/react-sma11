// import React from 'react'
// import NavbarComponents from '../components/NavbarComponents'

// function KegiatanPage() {
//   return (
//     <div>
//       KegiatanPage
//       </div>
//   )
// }

// export default KegiatanPage

// import React from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
// import KelasImage1 from "public/images/vite.svg";

// const ekstrakurikuler = [
//   { gambar: {KelasImage1}, nama: "Pramuka", deskripsi: "Melatih kemandirian, kepemimpinan dan kedisiplinan siswa." },
//   { gambar: {KelasImage1},nama: "Paskibra", deskripsi: "Membentuk karakter dan kekompakan dalam baris-berbaris." },
//   { gambar: {KelasImage1},nama: "PMR", deskripsi: "Pelatihan dasar pertolongan pertama dan kegiatan sosial." },
//   {gambar: {KelasImage1}, nama: "Tari", deskripsi: "Menumbuhkan kecintaan terhadap seni budaya tari daerah." },
//   {gambar: {KelasImage1}, nama: "Rebana", deskripsi: "Membentuk kepekaan seni musik Islami." },
//   {gambar: {KelasImage1}, nama: "Dance", deskripsi: "Mengekspresikan kreativitas melalui seni tari modern." },
//   {gambar: {KelasImage1}, nama: "BTQ", deskripsi: "Meningkatkan kemampuan membaca dan menulis Al-Qur'an." },
//   {gambar: {KelasImage1}, nama: "Sepak Bola", deskripsi: "Melatih fisik dan kerjasama tim melalui olahraga." },
//   {gambar: {KelasImage1}, nama: "Bola Volly", deskripsi: "Meningkatkan daya tahan tubuh dan kekompakan tim." },
//   {gambar: {KelasImage1}, nama: "Bola Basket", deskripsi: "Menumbuhkan semangat sportifitas dalam olahraga." },
//   {gambar: {KelasImage1}, nama: "Pemrograman Web", deskripsi: "Belajar coding dan pembuatan website modern." },
//   {gambar: {KelasImage1}, nama: "Futsal", deskripsi: "Olahraga bola mini yang mengutamakan teknik bermain." },
//   {gambar: {KelasImage1}, nama: "NJK", deskripsi: "Belajar bahasa dan budaya Jepang dengan menyenangkan." },
//   {gambar: {KelasImage1}, nama: "ECC", deskripsi: "English Conversation Club untuk melatih bahasa Inggris." },
//   {gambar: {KelasImage1}, nama: "Band", deskripsi: "Menyalurkan bakat bermusik dalam band sekolah." },
//   {gambar: {KelasImage1}, nama: "Cheerleader", deskripsi: "Mengembangkan semangat dan kekompakan tim." },
//   {gambar: {KelasImage1}, nama: "KIR", deskripsi: "Karya ilmiah remaja untuk siswa yang cinta sains." },
//   {gambar: {KelasImage1}, nama: "Paduan Suara", deskripsi: "Belajar teknik vokal dan harmonisasi suara." },
//   {gambar: {KelasImage1}, nama: "CSF", deskripsi: "Persekutuan Katolik untuk pembinaan rohani siswa." },
//   {gambar: {KelasImage1}, nama: "Chinematografi", deskripsi: "Belajar membuat film pendek dan video kreatif." },
//   {gambar: {KelasImage1}, nama: "Taekwondo", deskripsi: "Seni bela diri yang melatih disiplin dan ketahanan." },
//   {gambar: {KelasImage1}, nama: "Seni Rupa", deskripsi: "Menyalurkan bakat menggambar dan melukis." },
//   {gambar: {KelasImage1}, nama: "FCC", deskripsi: "French Culture Club untuk belajar bahasa Perancis." },
//   { gambar: {KelasImage1},nama: "FKPK", deskripsi: "Forum Kerohanian Kristen sebagai pembinaan iman." },
//   { gambar: {KelasImage1},nama: "KkPS", deskripsi: "Kegiatan keagamaan dan sosial berbasis keislaman." },
//   {gambar: {KelasImage1},nama: "Soffball", deskripsi: "Olahraga pukul bola yang menyenangkan dan seru." },
// ];

// const Kegiatan = () => {
//   return (
//     <Container className="pt-5 mb-5">
//       <h2 className="text-center mb-4">Kegiatan Ekstrakurikuler</h2>
//       <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//         {ekstrakurikuler.map((ekstra, index) => (
//           <Col key={index}>
//             <Card className="h-100 shadow-sm border-0">
//               <Card.Img
//                 variant="top"
//                 src={ekstra.gambar}
//                 alt={ekstra.nama}
//               />
//               <Card.Body>
//                 <Card.Title>{ekstra.nama}</Card.Title>
//                 <Card.Text>{ekstra.deskripsi}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Kegiatan;

import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import HeroComponent from "../components/HeroComponent";

const ekstrakurikuler = [
  {
    nama: "Pramuka",
    deskripsi: "Melatih kemandirian, kepemimpinan dan kedisiplinan siswa.",
  },
  {
    nama: "Paskibra",
    deskripsi: "Membentuk karakter dan kekompakan dalam baris-berbaris.",
  },
  {
    nama: "PMR",
    deskripsi: "Pelatihan dasar pertolongan pertama dan kegiatan sosial.",
  },
  {
    nama: "Tari",
    deskripsi: "Menyalurkan bakat seni tari tradisional dan modern.",
  },
  {
    nama: "Rebana",
    deskripsi: "Mengenal musik Islami dan seni budaya daerah.",
  },
  { nama: "Dance", deskripsi: "Ekspresi diri melalui gerakan tari modern." },
  {
    nama: "BTQ",
    deskripsi: "Baca Tulis Al-Quran untuk membentuk karakter religius.",
  },
  {
    nama: "Sepak Bola",
    deskripsi: "Melatih fisik, strategi dan kerjasama tim.",
  },
  {
    nama: "Bola Volly",
    deskripsi: "Olahraga populer yang meningkatkan kebugaran dan kekompakan.",
  },
  {
    nama: "Bola Basket",
    deskripsi: "Mengembangkan kecepatan, kelincahan, dan kekompakan tim.",
  },
  {
    nama: "Pemrograman Web",
    deskripsi: "Mengenal dunia coding dan pengembangan website.",
  },
  {
    nama: "Futsal",
    deskripsi: "Olahraga dalam ruangan yang seru dan menantang.",
  },
  {
    nama: "NJK (Bahasa Jepang)",
    deskripsi: "Belajar budaya dan bahasa Jepang dengan menyenangkan.",
  },
  {
    nama: "ECC (Bahasa Inggris)",
    deskripsi: "Meningkatkan kemampuan bahasa Inggris siswa.",
  },
  {
    nama: "Ekstra Band",
    deskripsi: "Wadah bagi siswa yang memiliki minat bermusik.",
  },
  {
    nama: "Cheerleader",
    deskripsi: "Kombinasi tari dan olahraga yang penuh semangat.",
  },
  {
    nama: "KIR",
    deskripsi: "Karya Ilmiah Remaja untuk mengembangkan daya pikir.",
  },
  {
    nama: "Paduan Suara",
    deskripsi: "Mengasah kemampuan vokal dan musikalitas.",
  },
  {
    nama: "CSF",
    deskripsi: "Komunitas Siswa Katolik yang aktif dan inklusif.",
  },
  {
    nama: "Chinematografi",
    deskripsi: "Belajar produksi video dan storytelling visual.",
  },
  {
    nama: "Taekwondo",
    deskripsi: "Beladiri yang menekankan disiplin dan kekuatan fisik.",
  },
  {
    nama: "Seni Rupa",
    deskripsi: "Mengembangkan kreativitas dalam seni visual.",
  },
  {
    nama: "FCC",
    deskripsi: "French Culture Club – belajar budaya dan bahasa Prancis.",
  },
  { nama: "FKPK", deskripsi: "Forum Kerohanian untuk pengembangan spiritual." },
  { nama: "KkPS", deskripsi: "Kelompok kegiatan sosial siswa." },
  { nama: "Soffball", deskripsi: "Olahraga beregu dengan bola dan tongkat." },
];

const Kegiatan = () => {
  return (
    <>
      <HeroComponent
        title="Kegiatan Sekolah"
        description="Dokumentasi kegiatan menarik dan inspiratif yang dilakukan di lingkungan SMA Negeri 11 Semarang."
      />
      <Container className="my-5">
        <h2 className="text-center mb-4">Kegiatan Ekstrakurikuler</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {ekstrakurikuler.map((ekstra, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">{ekstra.nama}</Card.Title>
                  <Card.Text>{ekstra.deskripsi}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Kegiatan;
