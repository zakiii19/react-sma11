import React, { useState } from "react";
import { teachers } from "../data/index";
import { Table, Pagination, Container, Card } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";

const TeacherTableComponents = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(teachers.length / itemsPerPage);
  const currentTeachers = teachers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* <Container className='ttable py-lg-5 '>
      <h3 className='pt-3 pb-1 fw-semibold'>Daftar Guru</h3>
      <Table striped borderless hover responsive >
        <thead>
          <tr>
            <th>NO.</th>
            <th>NAMA GURU</th>
            <th>STATUS</th>
            <th>MAPEL</th>
          </tr>
        </thead>
        <tbody>
          {currentTeachers.map((t) => (
              <tr key={t.no}>
              <td>{t.no}</td>
              <td>{t.name}</td>
              <td>{t.status}</td>
              <td>{t.subject}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination size='sm' className='justify-content-center pt-2 pb-3'>
        {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
              </Container> */}
      <Container className='ttable pt-lg-5'>
        <Card className="mt-lg-3 mb-4 shadow-sm rounded-4">
          <Card.Header className=" bg-success text-white d-flex align-items-center rounded-top-4">
            <PersonFill className="me-2" />
            <h5 className="mb-0">Daftar Guru</h5>
          </Card.Header>
          <Card.Body>
            <Table striped borderless hover responsive className="mb-3">
              <thead className="table-success">
                <tr>
                  <th>NO.</th>
                  <th>NAMA GURU</th>
                  <th>STATUS</th>
                  <th>MAPEL</th>
                </tr>
              </thead>
              <tbody>
                {currentTeachers.map((t) => (
                  <tr key={t.no}>
                    <td>{t.no}</td>
                    <td>{t.name}</td>
                    <td>{t.status}</td>
                    <td>{t.subject}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-center ">
              <Pagination size="sm" >
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

export default TeacherTableComponents;
