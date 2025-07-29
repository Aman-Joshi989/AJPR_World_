import bg1 from '@/assets/img/all-images/bg/service-bg1.png'
import icon1 from '@/assets/img/icons/service-icon1.svg'
import icon2 from '@/assets/img/icons/service-icon2.svg'
import icon3 from '@/assets/img/icons/service-icon3.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const detail = [
  { image: icon1, title: 'Cyber Security Solution', number: 1 },
  { image: icon2, title: 'Scalable Cloud Solutions', number: 2 },
  { image: icon3, title: 'Data Protection Services', number: 3 },
]

const Blog = () => {
  return (
    <>
      <div
        className="service1-section-area sp2"
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="heading2 text-center space-margin60">
                <h2>View More Services</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {detail.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in" data-aos-duration={800 + idx * 100}>
                <div className="service1-boxarea">
                  <div className="icons">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="arrow">
                    <Link href="/service-detail">
                      <FaArrowRight />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="/service-detail">{item.title}</Link>
                  <div className="space16" />
                  <p>Our advanced cybersecurity solution designed to protect against ever- an evolving threats, approach ensures.</p>
                  <div className="space24" />
                  <h5>0{item.number}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
