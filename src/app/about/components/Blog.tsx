import img13 from '@/assets/img/all-images/about/about-img13.png'
import img14 from '@/assets/img/all-images/about/about-img14.png'
import img15 from '@/assets/img/all-images/about/about-img15.png'
import elements27 from '@/assets/img/elements/elements27.png'
import icon2 from '@/assets/img/icons/service-icon2.svg'
import icon5 from '@/assets/img/icons/service-icon5.svg'
import logo1 from '@/assets/img/icons/sub-logo1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Blog = () => {
  return (
    <>
      <div className="about6-section-area-widget sp1">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="about6-header heading2">
                <h5>
                  <span>
                    <Image src={logo1} alt="" />
                  </span>
                  our mission/vision
                </h5>
                <div className="space18" />
                <h2 className="text-anime-style-3">Driving Innovation: Our Mission/Vision at AJPR World</h2>
                <div className="space16" />
                <p data-aos="fade-left" data-aos-duration={900}>
                  At the of innovation, our cutting-edge IT solutions are designed transform your business AJPR World operations.
                </p>
                <div className="space24" />
                <div className="about-boxarea" data-aos="fade-left" data-aos-duration={1000}>
                  <div className="icons">
                    <Image src={icon2} alt="" />
                  </div>
                  <div className="content-area">
                    <Link href="/service-detail">Network Infrastructure Solutions</Link>
                    <div className="space16" />
                    <p>In today’s fast-paced world, technology is the backbone of success. Our comprehensive IT.</p>
                  </div>
                </div>
                <div className="space24" />
                <div className="about-boxarea" data-aos="fade-left" data-aos-duration={1100}>
                  <div className="icons">
                    <Image src={icon5} alt="" />
                  </div>
                  <div className="content-area">
                    <Link href="/service-detail">Performance Tailored IT Services</Link>
                    <div className="space16" />
                    <p>Our tailored IT services are crafted to meet your unique business needs, ensuring that.</p>
                  </div>
                </div>
                <div className="space32" />
                <div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
                  <Link href="/contact" className="vl-btn2">
                    See How We Can Help
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={1} />
            <Col lg={6}>
              <div className="images-area">
                <Image src={elements27} alt="" className="elements27" />
                <div className="img1 image-anime">
                  <Image src={img13} alt="" />
                </div>
                <Row>
                  <Col lg={6} md={6}>
                    <div className="img1 image-anime">
                      <div className="space30" />
                      <Image src={img14} alt="" />
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="img1 image-anime">
                      <div className="space30" />
                      <Image src={img15} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
