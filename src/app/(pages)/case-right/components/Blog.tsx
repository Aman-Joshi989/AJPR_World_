import bg1 from '@/assets/img/all-images/bg/service-bg1.png'
import case1 from '@/assets/img/all-images/case/case-img1.png'
import case2 from '@/assets/img/all-images/case/case-img2.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const detail = [
  { image: case1, company: '#CloudFlex Solution', title: 'Upgrading IT for Financial Secure' },
  { image: case2, company: '#CloudFlex Solution', title: 'Scaling IT for EcoSolutions' },
]

const Blog = () => {
  return (
    <>
      <div
        className="case-inner-area sp2"
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="heading2 space-margin60 text-center">
                <h2>View More Case Studies</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {detail.map((item, idx) => (
              <Col lg={6} md={6} key={idx}>
                <div className="case-slider-boxarea">
                  <div className="img1 image-anime">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <p>{item.company}</p>
                    <div className="space16" />
                    <Link href="/case-detail">{item.title}</Link>
                    <div className="arrow">
                      <Link href="/case-detail">
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
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
