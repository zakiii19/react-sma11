// import React from 'react'
// import NavbarComponents from '../components/NavbarComponents'

// function PrestasiPage() {
//   return (
//     <div>
//       PrestasiPage</div>
//   )
// }

// export default PrestasiPage

// import { useState } from "react";
// import { Dropdown, SplitButton, Table, Container } from "react-bootstrap";

// const data = {
//   Kota: [
//     {
//       no: 1,
//       nama: "FARAH OKTAVIA RAMADHANI",
//       juara: "1",
//       kategori: "POPDA Sepatu Roda - Nomor 200 M",
//       lokasi: "Semarang",
//       pelaksanaan: "23-25 September 2021",
//     },
//   ],
//   Provinsi: [
//     {
//       no: 1,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 2,
//       nama: "WINGGA TSYAFINNA",
//       juara: "Juara 1",
//       kategori: "Piala Walikota Surakarta Tinju Amatir Kelas 51 Kg 2019",
//       lokasi: "Surakarta",
//       pelaksanaan: "20 Juli 2019",
//     },
//   ],
//   Nasional: [
//     {
//       no: 1,
//       nama: "VEBY ALVERIN PUTRI",
//       juara: "Juara 2",
//       kategori: "Kategori Speed Pelajar Putri",
//       lokasi: "Sulawesi Barat",
//       pelaksanaan: "29 Maret - 2 April 2019",
//     },
//   ],
//   Internasional: [
//     {
//       no: 1,
//       nama: "EKA AMALIA PUTRI",
//       juara: "Juara 1",
//       kategori: "2 Nd Indonesia International Weightlifting Championship Youth And Junior 55 Kg Youth Women",
//       lokasi: "Semarang",
//       pelaksanaan: "29 Agustus - 5 September 2019",
//     },
//   ],
// };

// export default function PrestasiSiswa() {
//   const [selectedLevel, setSelectedLevel] = useState("Kota");

//   const renderTableRows = () => {
//     return data[selectedLevel].map((item, index) => (
//       <tr key={index}>
//         <td>{item.no}</td>
//         <td>{item.nama}</td>
//         <td>{item.juara}</td>
//         <td>{item.kategori}</td>
//         <td>{item.lokasi}</td>
//         <td>{item.pelaksanaan}</td>
//       </tr>
//     ));
//   };

//   return (
//     <Container className="mt-4">
//       <h3 className="mb-3">Prestasi Siswa</h3>
//       <SplitButton
//         id="split-button-level"
//         variant="primary"
//         title={`Tingkat: ${selectedLevel}`}
//         onClick={() => {}}
//         className="mb-3"
//       >
//         <Dropdown.Item onClick={() => setSelectedLevel("Kota")}>Tingkat Kota</Dropdown.Item>
//         <Dropdown.Item onClick={() => setSelectedLevel("Provinsi")}>Tingkat Provinsi</Dropdown.Item>
//         <Dropdown.Item onClick={() => setSelectedLevel("Nasional")}>Tingkat Nasional</Dropdown.Item>
//         <Dropdown.Item onClick={() => setSelectedLevel("Internasional")}>Tingkat Internasional</Dropdown.Item>
//       </SplitButton>

//       <Table striped bordered hover responsive>
//         <thead className="table-dark">
//           <tr>
//             <th>NO</th>
//             <th>NAMA SISWA</th>
//             <th>JUARA</th>
//             <th>KATEGORI</th>
//             <th>LOKASI LOMBA</th>
//             <th>PELAKSANAAN</th>
//           </tr>
//         </thead>
//         <tbody>{renderTableRows()}</tbody>
//       </Table>
//     </Container>
//   );
// }

// import React, { useState } from "react";
// import {
//   Table,
//   Dropdown,
//   DropdownButton,
//   SplitButton,
//   Pagination,
// } from "react-bootstrap";

// // Contoh data prestasi (hanya sebagian kecil untuk ringkas)
// const data = {
//   Kota: [
//     {
//       no: 1,
//       nama: "FARAH OKTAVIA RAMADHANI",
//       juara: "1",
//       kategori: "POPDA Sepatu Roda - Nomor 200 M",
//       lokasi: "Semarang",
//       pelaksanaan: "23-25 September 2021",
//     },
//   ],
//   Provinsi: [
//     {
//       no: 2,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 3,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 4,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 5,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 6,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 7,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 1,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 1,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 1,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 1,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 1,
//       nama: "VEBY ALVERINE PUTRI",
//       juara: "Juara 1",
//       kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
//       lokasi: "Semarang",
//       pelaksanaan: "15 Juli 2019",
//     },
//     {
//       no: 2,
//       nama: "WINGGA TSYAFINNA",
//       juara: "Juara 1",
//       kategori: "Tinju Amatir Kelas 51 Kg",
//       lokasi: "Surakarta",
//       pelaksanaan: "20 Juli 2019",
//     },
//     // Tambahkan hingga 15+ data untuk uji pagination
//   ],
//   Nasional: [
//     {
//       no: 1,
//       nama: "VEBY ALVERIN PUTRI",
//       juara: "Juara 2",
//       kategori: "Speed Pelajar Putri",
//       lokasi: "Sulawesi Barat",
//       pelaksanaan: "29 Maret - 2 April 2019",
//     },
//   ],
//   Internasional: [
//     {
//       no: 1,
//       nama: "EKA AMALIA PUTRI",
//       juara: "Juara 1",
//       kategori: "Weightlifting 55 Kg Youth Women",
//       lokasi: "Semarang",
//       pelaksanaan: "29 Agustus - 5 September 2019",
//     },
//   ],
// };

// export default function PrestasiTable() {
//   const [tingkat, setTingkat] = useState("Provinsi");
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 10;

//   const prestasi = data[tingkat] || [];

//   const totalPages = Math.ceil(prestasi.length / itemsPerPage);
//   const currentPageData = prestasi.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   const handlePageChange = (number) => setPage(number);
//   const handleSelectTingkat = (selected) => {
//     setTingkat(selected);
//     setPage(1); // reset ke halaman pertama saat ganti tingkat
//   };

//   return (
//     <div className="p-4">
//       <h4 className="mb-3">Prestasi Tingkat {tingkat}</h4>

//       <SplitButton
//         title={`Tingkat: ${tingkat}`}
//         variant="primary"
//         onClick={() => {}}
//         className="mb-3"
//       >
//         {Object.keys(data).map((key) => (
//           <Dropdown.Item key={key} onClick={() => handleSelectTingkat(key)}>
//             {key}
//           </Dropdown.Item>
//         ))}
//       </SplitButton>

//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Nama Siswa</th>
//             <th>Juara</th>
//             <th>Kategori</th>
//             <th>Lokasi Lomba</th>
//             <th>Pelaksanaan</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentPageData.map((row, idx) => (
//             <tr key={idx}>
//               <td>{row.no}</td>
//               <td>{row.nama}</td>
//               <td>{row.juara}</td>
//               <td>{row.kategori}</td>
//               <td>{row.lokasi}</td>
//               <td>{row.pelaksanaan}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {totalPages > 1 && (
//         <Pagination>
//           {[...Array(totalPages).keys()].map((num) => (
//             <Pagination.Item
//               key={num + 1}
//               active={num + 1 === page}
//               onClick={() => handlePageChange(num + 1)}
//             >
//               {num + 1}
//             </Pagination.Item>
//           ))}
//         </Pagination>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Container,
  Table,
  Dropdown,
  SplitButton,
  ButtonGroup,
  Pagination,
} from "react-bootstrap";
import HeroComponent from "../components/HeroComponent";


const dataPrestasi = {
  sekolah: [
    {
      no: 1,
      keterangan:
        "SEKOLAH ADIWIYATA, SMAN 11 Adiwiyata Nasional proses menjadi Adiwiyata Mandiri",
      pelaksanaan: "dari Tahun 2013",
    },
    {
      no: 2,
      keterangan:
        "FINALIS LOMBA CERDAS CERMAT HARI OEANG TINGKAT PROVINSI JAWA TENGAH",
      pelaksanaan: "24 Oktober 2019",
    },
  ],
  guru: [
    {
      no: 1,
      nama: "Drs. Wagino",
      jabatan: "Kepala Sekolah",
      bidang: "Seleksi Guru SMA",
      prestasi: "Guru Berprestasi",
      tahun: 2008,
      keterangan: "Rangking 2",
      bukti: "Surat Keterangan",
    },
    // ... tambahkan data lainnya di sini
  ],
  karyawan: [
    {
      no: 1,
      nama: "Kepundansari",
      bidang: "Senam",
      prestasi: "Juara II",
      tahun: 2015,
      keterangan: "POR Guru SMA Kota Semarang",
      bukti: "Piagam Penghargaan",
    },
    // ... tambahkan data lainnya di sini
  ],
  siswa: {
    Kabupaten: [],
    Provinsi: [],
    Nasional: [],
  },
};

const ITEMS_PER_PAGE = 10;

const Prestasi = () => {
  const [kategori, setKategori] = useState("sekolah");
  const [tingkatan, setTingkatan] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => setCurrentPage(page);

  const paginate = (data) => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(start, start + ITEMS_PER_PAGE);
  };

  const renderPagination = (totalItems) => {
    const pages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (pages <= 1) return null;
    return (
      <Pagination>
        {[...Array(pages).keys()].map((p) => (
          <Pagination.Item
            key={p + 1}
            active={p + 1 === currentPage}
            onClick={() => handlePageChange(p + 1)}
          >
            {p + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    );
  };

  const renderTable = () => {
    let data = [];
    if (kategori === "sekolah") {
      data = dataPrestasi.sekolah;
      return (
        <>
          <Table striped bordered>
            <thead>
              <tr>
                <th>NO</th>
                <th>KETERANGAN</th>
                <th>PELAKSANAAN</th>
              </tr>
            </thead>
            <tbody>
              {paginate(data).map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.keterangan}</td>
                  <td>{item.pelaksanaan}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {renderPagination(data.length)}
        </>
      );
    } else if (kategori === "guru") {
      data = dataPrestasi.guru;
      return (
        <>
          <Table striped bordered>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAMA</th>
                <th>JABATAN</th>
                <th>BIDANG</th>
                <th>PRESTASI</th>
                <th>TAHUN</th>
                <th>KETERANGAN</th>
                <th>BUKTI</th>
              </tr>
            </thead>
            <tbody>
              {paginate(data).map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.nama}</td>
                  <td>{item.jabatan}</td>
                  <td>{item.bidang}</td>
                  <td>{item.prestasi}</td>
                  <td>{item.tahun}</td>
                  <td>{item.keterangan}</td>
                  <td>{item.bukti}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {renderPagination(data.length)}
        </>
      );
    } else if (kategori === "karyawan") {
      data = dataPrestasi.karyawan;
      return (
        <>
          <Table striped bordered>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAMA</th>
                <th>BIDANG</th>
                <th>PRESTASI</th>
                <th>TAHUN</th>
                <th>KETERANGAN</th>
                <th>BUKTI</th>
              </tr>
            </thead>
            <tbody>
              {paginate(data).map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.nama}</td>
                  <td>{item.bidang}</td>
                  <td>{item.prestasi}</td>
                  <td>{item.tahun}</td>
                  <td>{item.keterangan}</td>
                  <td>{item.bukti}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {renderPagination(data.length)}
        </>
      );
    } else if (kategori === "siswa" && tingkatan) {
      data = dataPrestasi.siswa[tingkatan] || [];
      return (
        <>
          <Table striped bordered>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAMA</th>
                <th>KELAS</th>
                <th>PRESTASI</th>
                <th>TINGKAT</th>
                <th>TAHUN</th>
              </tr>
            </thead>
            <tbody>
              {paginate(data).map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.kelas}</td>
                  <td>{item.prestasi}</td>
                  <td>{item.tingkat}</td>
                  <td>{item.tahun}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {renderPagination(data.length)}
        </>
      );
    }
    return null;
  };

  return (
    <>
      <HeroComponent
        title="Prestasi Sekolah"
        description="Raih prestasi bersama kami! Lihat pencapaian siswa dan sekolah di berbagai bidang."
      />
      <Container className="my-4">
        <h2 className="mb-4">Daftar Prestasi</h2>

        <div className="d-flex mb-3 gap-2">
          <SplitButton
            title={`Prestasi ${
              kategori.charAt(0).toUpperCase() + kategori.slice(1)
            }`}
            variant="primary"
            onClick={() => setKategori(kategori)}
            as={ButtonGroup}
          >
            <Dropdown.Item
              onClick={() => {
                setKategori("sekolah");
                setCurrentPage(1);
              }}
            >
              Sekolah
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setKategori("guru");
                setCurrentPage(1);
              }}
            >
              Guru
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setKategori("karyawan");
                setCurrentPage(1);
              }}
            >
              Karyawan
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setKategori("siswa");
                setCurrentPage(1);
              }}
            >
              Siswa
            </Dropdown.Item>
          </SplitButton>

          {kategori === "siswa" && (
            <Dropdown
              onSelect={(e) => {
                setTingkatan(e);
                setCurrentPage(1);
              }}
            >
              <Dropdown.Toggle variant="secondary">
                {tingkatan || "Pilih Tingkatan"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Kabupaten">Kabupaten</Dropdown.Item>
                <Dropdown.Item eventKey="Provinsi">Provinsi</Dropdown.Item>
                <Dropdown.Item eventKey="Nasional">Nasional</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>

        {renderTable()}
      </Container>
    </>
  );
};

export default Prestasi;
