import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { beritaTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import SliderComponent from "../components/SliderComponent";
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
            <Col lg="6">
              <h1 className="mb-4">
                Selamat Datang di <br />
                SMA NEGERI 11 SEMARANG
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                velit ullam amet hic quo cupiditate eligendi nostrum earum quae
                consectetur! Minus itaque iure quia aliquam voluptatem impedit
                hic animi veritatis!
              </p>
              <button
                className="btn btn-outline-danger btn-lg rounded-4 me-2 mb-xs-0 mb-2"
                onClick={() => navigate("/berita")}
              >
                Berita Lainnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* section berita terbaru */}
      <div className="beritanw w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold ">Berita Terbaru</h1>
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
                  slidesPerView: 4,
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
              {beritaTerbaru.map((berita) => {
                return (
                  <SwiperSlide key={berita.id} className="rounded-top">
                    <Container className="p-0 rounded-top">
                      <img
                        src={berita.image}
                        alt="unsplash.com"
                        className="w-100 mb-5 rounded-top"
                      />
                      <div className="mb-5 px-3">
                        <h5>{berita.title}</h5>
                      </div>
                      <div className="mb-2 px-3 pb-5">
                        <button className="btn btn-primary rounded-1">
                          {berita.more}
                        </button>
                      </div>
                    </Container>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      <div className="berita w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold ">Berita Terbaru</h1>
            </Col>
          </Row>
          <Row>
            {beritaTerbaru.map((berita) => {
              return (
                <Col key={berita.id}>
                  <img
                    src={berita.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="mb-5 px-3">
                    <h5>{berita.title}</h5>
                  </div>
                  <div className="mb-2 px-3 pb-3">
                    <button className="btn btn-primary rounded-1">
                      {berita.more}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center py-5">
              <button
                className="btn btn-success rounded-5 btn-lg"
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
      <div className="section-video w-100 min-vh-100">
        <Container className="mt-4">
          <Row>
            <Col>
              <h1 className="text-center fw-bold py-5">Profil Sekolah</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8}>
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
      <div className="galeri w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold ">Galeri Foto</h1>
            </Col>
          </Row>
          <Row>
            {/* belum ganti
            {beritaTerbaru.map((berita) => {
              return (
                <Col key={berita.id}>
                  <img
                    src={berita.image}
                    alt="unsplash.com"
                    className="mb-5 mt-5 rounded-3"
                  />
                </Col>
              );
            })} */}
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
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide>
                    <img src={data.image} className="mb-5 mt-5 rounded-3"></img>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => navigate("/galeri")}
              >
                Foto lainnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <CalendarComponent/> */}
      {/* <SliderComponent/> */}
    </div>
  );
}
