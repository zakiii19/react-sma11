import { Container, Row, Col, Card } from "react-bootstrap";
// import HeroImage from "../assets/img/hero.png";
import { beritaTerbaru, dataSwiperGaleri } from "../data/index";
import { useNavigate } from "react-router-dom";
// import SliderComponent from "../components/SliderComponent";
import CalendarComponent from "../components/CalendarComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function HomePage() {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="9">
              <h1 className="mb-4">
                Selamat Datang di <br />
                SMA NEGERI 11 SEMARANG
              </h1>
              <p className="mb-4 fw-semibold">
                Mendidik siswa menjadi pribadi TANGGUH: Terampil, Aktif,
                Nasionalis, Genius, Gembira, Unggul, dan Harmonis.
              </p>
              <button
                className="btn btn-success btn-lg rounded-4 me-2 mb-xs-0 mb-2"
                onClick={() => navigate("/profil")}
              >
                Selengkapnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
            {/* <Col lg="3" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col> */}
          </Row>
        </Container>
      </header>

      {/* section berita terbaru */}
      <div className="beritanw py-5 w-100 ">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-semibold mb-3">Berita Terbaru</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={6}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper mb-3"
            >
              {beritaTerbaru.map((berita) => {
                return (
                  <SwiperSlide key={berita.id} className="rounded-top">
                    <Container className="containerslide p-0 rounded-top">
                      <img
                        src={berita.image}
                        alt="unsplash.com"
                        className="w-100 mb-4 rounded-top "
                      />
                      <div className="mb-4 px-3">
                        <h5>{berita.title}</h5>
                      </div>
                      <div className="mb-2 px-3 pb-5">
                        <button className="btn btn-success rounded-4">
                          {berita.more}
                        </button>
                      </div>
                    </Container>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
          <Row>
            <Col className="text-center py-3">
              <button
                className="btn btn-success rounded-4 btn-lg"
                onClick={() => navigate("/berita")}
              >
                Berita lainnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* video profile */}
      <div className="section-video w-100 py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-semibold mb-5">Profil Sekolah</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="ratio ratio-16x9">
                <iframe
                  className="rounded-4"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/s_NJDixMgjA?si=ETPsE1hYS8fSSy-Dautoplay=1&mute=1"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* galeri section */}
      <div className="py-5 galeri w-100 ">
        <Container>
          <Row className="mb-3">
            <Col>
              <h1 className="text-center fw-semibold ">Galeri Foto</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiperGaleri.map((data) => {
                return (
                  <SwiperSlide>
                    <Container className="containergaleri p-0  rounded-3 ">
                      <img
                        src={data.image}
                        className=" w-100 p-0  rounded-3 "
                      ></img>
                    </Container>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
          <Row>
            <Col className="text-center mt-3">
              <button
                className="btn btn-success rounded-4 btn-lg"
                onClick={() => navigate("/galeri")}
              >
                Foto lainnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* section kalender dan pengumuman */}
      <div className="kalpeng w-100">
        <Container>
          <Row className="py-5 gap-3">
            <Col className=" " md={3}>
              <Row className="my-3">
                <h3 className="text-center fw-semibold ">Agenda</h3>
              </Row>
              <Row>
                <Container className="p-0">
                  <CalendarComponent />
                </Container>
              </Row>
            </Col>
            <Col className="">
              <Row className="my-3">
                <h3 className="text-center fw-semibold">Artikel Terbaru</h3>
              </Row>
              <Row>
                <Container className="p-0 ">
                  <Card className="mb-2">
                    {/* <Card.Header>Quote</Card.Header> */}
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <h5 className="mb-3">
                          Kelulusan SMA Negeri 11 Semarang
                        </h5>
                        <footer className="blockquote-footer">
                          Semarang, 16 Mei 2025{" "}
                          <cite title="Source Title">admin</cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                  <Card className="mb-2">
                    {/* <Card.Header>Quote</Card.Header> */}
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <h5 className="mb-3">
                          Hari Pendidikan Nasional
                        </h5>
                        <footer className="blockquote-footer">
                          Semarang, 2 Mei 2025{" "}
                          <cite title="Source Title">admin</cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                  <Card>
                    {/* <Card.Header>Quote</Card.Header> */}
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <h5 className="mb-3">
                          Hari Raya Iul Fitri 1444 H
                        </h5>
                        <footer className="blockquote-footer">
                          April 2025{" "}
                          <cite title="Source Title">admin</cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Container>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <CalendarComponent/> */}
      {/* <SliderComponent/> */}
    </div>
  );
}
