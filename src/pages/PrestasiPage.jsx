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

import React, { useState } from "react";
import {
  Table,
  Dropdown,
  DropdownButton,
  SplitButton,
  Pagination,
} from "react-bootstrap";

// Contoh data prestasi (hanya sebagian kecil untuk ringkas)
const data = {
  Kota: [
    {
      no: 1,
      nama: "FARAH OKTAVIA RAMADHANI",
      juara: "1",
      kategori: "POPDA Sepatu Roda - Nomor 200 M",
      lokasi: "Semarang",
      pelaksanaan: "23-25 September 2021",
    },
  ],
  Provinsi: [
    {
      no: 2,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 3,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 4,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 5,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 6,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 7,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 1,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 1,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 1,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 1,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 1,
      nama: "VEBY ALVERINE PUTRI",
      juara: "Juara 1",
      kategori: "Kejuaraan Provinsi Panjat Tebing Ku 2019",
      lokasi: "Semarang",
      pelaksanaan: "15 Juli 2019",
    },
    {
      no: 2,
      nama: "WINGGA TSYAFINNA",
      juara: "Juara 1",
      kategori: "Tinju Amatir Kelas 51 Kg",
      lokasi: "Surakarta",
      pelaksanaan: "20 Juli 2019",
    },
    // Tambahkan hingga 15+ data untuk uji pagination
  ],
  Nasional: [
    {
      no: 1,
      nama: "VEBY ALVERIN PUTRI",
      juara: "Juara 2",
      kategori: "Speed Pelajar Putri",
      lokasi: "Sulawesi Barat",
      pelaksanaan: "29 Maret - 2 April 2019",
    },
  ],
  Internasional: [
    {
      no: 1,
      nama: "EKA AMALIA PUTRI",
      juara: "Juara 1",
      kategori: "Weightlifting 55 Kg Youth Women",
      lokasi: "Semarang",
      pelaksanaan: "29 Agustus - 5 September 2019",
    },
  ],
};

export default function PrestasiTable() {
  const [tingkat, setTingkat] = useState("Provinsi");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const prestasi = data[tingkat] || [];

  const totalPages = Math.ceil(prestasi.length / itemsPerPage);
  const currentPageData = prestasi.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (number) => setPage(number);
  const handleSelectTingkat = (selected) => {
    setTingkat(selected);
    setPage(1); // reset ke halaman pertama saat ganti tingkat
  };

  return (
    <div className="p-4">
      <h4 className="mb-3">Prestasi Tingkat {tingkat}</h4>

      <SplitButton
        title={`Tingkat: ${tingkat}`}
        variant="primary"
        onClick={() => {}}
        className="mb-3"
      >
        {Object.keys(data).map((key) => (
          <Dropdown.Item key={key} onClick={() => handleSelectTingkat(key)}>
            {key}
          </Dropdown.Item>
        ))}
      </SplitButton>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Siswa</th>
            <th>Juara</th>
            <th>Kategori</th>
            <th>Lokasi Lomba</th>
            <th>Pelaksanaan</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.no}</td>
              <td>{row.nama}</td>
              <td>{row.juara}</td>
              <td>{row.kategori}</td>
              <td>{row.lokasi}</td>
              <td>{row.pelaksanaan}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {totalPages > 1 && (
        <Pagination>
          {[...Array(totalPages).keys()].map((num) => (
            <Pagination.Item
              key={num + 1}
              active={num + 1 === page}
              onClick={() => handlePageChange(num + 1)}
            >
              {num + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </div>
  );
}
