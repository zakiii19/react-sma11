import React, { useState } from "react";
import {
  Container,
  Table,
  Dropdown,
  SplitButton,
  ButtonGroup,
  Pagination, Card
} from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import HeroComponent from "../components/HeroComponent";
import { dataPrestasi } from "../data/index";



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
      <div className="d-flex justify-content-center ">
      <Pagination size="sm">
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
      </div>
    );
  };

  const renderTable = () => {
    let data = [];
    if (kategori === "sekolah") {
      data = dataPrestasi.sekolah;
      return (
        <>
        <Card className="mt-lg-3 mb-4 shadow-sm rounded-4">
          <Card.Header className=" top-table text-white d-flex align-items-center rounded-top-4">
            <PersonFill className="me-2" />
            <h5 className="mb-0">Daftar Guru</h5>
          </Card.Header>
          <Card.Body>
          <Table striped borderless>
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
          </Card.Body></Card>
        </>
      );
    } else if (kategori === "guru") {
      data = dataPrestasi.guru;
      return (
        <>
          <Table striped borderless>
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
          <Table striped borderless>
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
          <Table striped borderless>
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
              {paginate(data).map((item, index) => (
                <tr key={index}>
                  <td>{item.no}</td>
                  <td>{item.nama}</td>
                  <td>{item.juara}</td>
                  <td>{item.kategori}</td>
                  <td>{item.lokasi}</td>
                  <td>{item.pelaksanaan}</td>
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
    <div className="w-100 min-vh-75">
      <HeroComponent
        title="Prestasi Sekolah"
        description="Raih prestasi bersama kami! Lihat pencapaian siswa dan sekolah di berbagai bidang."
      />
      <Container className=" my-4">
        <h2 className="mb-4">Daftar Prestasi</h2>

        <div className="d-flex mb-3 gap-2">
          <SplitButton
            title={`Prestasi ${
              kategori.charAt(0).toUpperCase() + kategori.slice(1)
            }`}
            variant="success"
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
                <Dropdown.Item eventKey="Kota">Kota</Dropdown.Item>
                <Dropdown.Item eventKey="Provinsi">Provinsi</Dropdown.Item>
                <Dropdown.Item eventKey="Nasional">Nasional</Dropdown.Item>
                <Dropdown.Item eventKey="Internasional">Interasional</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>

        {renderTable()}
      </Container>
    </div>
  );
};

export default Prestasi;
