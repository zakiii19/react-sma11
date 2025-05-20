import React, { useState } from "react";
import { Table, Pagination,Container, Card } from "react-bootstrap";
import { PeopleFill } from "react-bootstrap-icons";
import { staffs } from "../data/index";

const StaffTableComponents = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(staffs.length / itemsPerPage);
  const currentStaffs = staffs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Container className="stable pt-lg-1 pb-lg-5 ">
        <Card className="mb-4 shadow-sm rounded-4">
          <Card.Header className="top-table text-white d-flex align-items-center rounded-top-4">
            <PeopleFill className="me-2" />
            <h5 className="mb-0">Data Staf TU</h5>
          </Card.Header>
          <Card.Body>
            <Table striped borderless hover responsive className="mb-3">
              <thead className="table-success">
                <tr>
                  <th>NO.</th>
                  <th>NAMA KARYAWAN</th>
                  <th>STATUS</th>
                  <th>TUGAS</th>
                </tr>
              </thead>
              <tbody>
                {currentStaffs.map((s) => (
                  <tr key={s.no}>
                    <td>{s.no}</td>
                    <td>{s.name}</td>
                    <td>{s.status}</td>
                    <td>{s.task}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-center">
              <Pagination size="sm">
                {[...Array(totalPages)].map((_, i) => (
                  <Pagination.Item
                    key={i}
                    active={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default StaffTableComponents;
