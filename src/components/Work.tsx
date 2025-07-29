'use client'
import hero1 from '@/assets/img/all-images/bg/hero-bg1.png'
import case1 from '@/assets/img/all-images/case/case-img1.png'
import case2 from '@/assets/img/all-images/case/case-img2.png'
import case3 from '@/assets/img/all-images/case/case-img3.png'
import case4 from '@/assets/img/all-images/case/case-img4.png'
import element1 from '@/assets/img/elements/elements1.png'
import element12 from '@/assets/img/elements/elements12.png'
import element13 from '@/assets/img/elements/elements13.png'
import element14 from '@/assets/img/elements/elements14.png'
import element15 from '@/assets/img/elements/elements15.png'
import element16 from '@/assets/img/elements/elements16.png'
import logo from '@/assets/img/icons/sub-logo1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6'
import Slider from 'react-slick'

export const study = [
  { image: case1, title: '#CloudFlex Solution', description: 'Upgrading IT for Financial Secure' },
  { image: case2, title: '#CloudFlex Solution', description: 'Scaling IT for EcoSolutions' },
  { image: case3, title: '#CloudFlex Solution', description: 'Optimizing IT For Solutions' },
]

const Work = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div
        className="work-others-section"
        style={{
          backgroundImage: `url(${hero1.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Image src={element16} alt="" className="elements16" />
        <Image src={element1} alt="" className="elements1 keyframe5" />
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="work-header heading1 text-center space-margin60">
                <h5>
                  <span>
                    <Image src={logo} alt="" />
                  </span>
                  How It's Work
                </h5>
                <div className="space24" />
                <h2 className="text-anime-style-3">Expert IT Services Designed To Elevate Your Business</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="case1-section-area sp1">
        <div className="case-works-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="others-widget-area">
                  <Row className="align-items-center">
                    <Col lg={4}>
                      <div className="card-boxarea box1" data-aos="zoom-in" data-aos-duration={800}>
                        <div className="div text-end">
                          <h3>01</h3>
                        </div>
                        <div className="content-area">
                          <Link href="/service-detail">Discovery Consultation</Link>
                          <div className="space14" />
                          <p>With our intuitive interface and robust features, you buy, sell.</p>
                        </div>
                      </div>
                      <div className="space30" />
                      <div className="card-boxarea box2" data-aos="zoom-in" data-aos-duration={900}>
                        <div className="content-area">
                          <Link href="/service-detail">Customized IT Strategy</Link>
                          <div className="space14" />
                          <p>Plus, our commitment to the security means that PayCoin.</p>
                        </div>
                        <div className="div text-end">
                          <h3>02</h3>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="images" data-aos="zoom-in" data-aos-duration={1000}>
                        <Image src={element12} alt="" className="elements12" />
                        <Image src={element13} alt="" className="elements13" />
                        <Image src={element14} alt="" className="elements14" />
                        <Image src={element15} alt="" className="elements15" />
                        <div className="img1">
                          <Image src={case4} alt="" />
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="card-boxarea box3" data-aos="zoom-in" data-aos-duration={800}>
                        <div className="div">
                          <h3>03</h3>
                        </div>
                        <div className="content-area2">
                          <Link href="/service-detail">Quality Assurance</Link>
                          <div className="space14" />
                          <p>Trusted partner in the world of crypto trading Join us today.</p>
                        </div>
                      </div>
                      <div className="space30" />
                      <div className="card-boxarea box4" data-aos="zoom-in" data-aos-duration={1000}>
                        <div className="content-area2">
                          <Link href="/service-detail">24/7 Support</Link>
                          <div className="space14" />
                          <p>Resources designed to help navigate best the dynamic</p>
                        </div>
                        <div className="div">
                          <h3>04</h3>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col lg={5}>
              <div className="case-header heading2 space-margin60">
                <h5>
                  <span>
                    <Image src={logo} alt="" />
                  </span>
                  Case Studies
                </h5>
                <div className="space24" />
                <h2 className="text-anime-style-3">Our Latest Case Studies</h2>
              </div>
            </Col>
          </Row>
          <Col lg={12}>
            <div className="case-slider-widget owl-carousel">
              <Slider ref={sliderRef} {...settings}>
                {study.map((item, idx) => (
                  <div key={idx} className="case-slider-boxarea">
                    <div className="img1 image-anime">
                      <Image src={item.image} alt="" height={413} className='img-fluid' />
                    </div>
                    <div className="content-area">
                      <p>{item.title}</p>
                      <div className="space16" />
                      <Link href="">{item.description}</Link>
                      <div className="arrow">
                        <Link href="">
                          <FaArrowRight className="fa-solid" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="owl-nav">
                <button className="owl-prev" onClick={() => sliderRef.current?.slickPrev()}>
                  <FaAngleLeft className="fa-solid" />
                </button>
                <button className="owl-next" onClick={() => sliderRef.current?.slickNext()}>
                  <FaAngleRight className="fa-solid" />
                </button>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </>
  )
}

export default Work
