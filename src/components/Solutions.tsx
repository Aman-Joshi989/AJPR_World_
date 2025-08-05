import work1 from '@/assets/img/all-images/work/work-img1.png'
import work2 from '@/assets/img/all-images/work/work-img2.png'
import element10 from '@/assets/img/elements/elements10.png'
import element11 from '@/assets/img/elements/elements11.png'
import sublogo from '@/assets/img/icons/sub-logo1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Solutions = () => {
  return (
    <>
      <div className="work1-section-area sp1">
        <Image src={element11} alt="" className="elements9" />
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="solution-header heading2">
                <h5>
                  <span>
                    <Image src={sublogo} alt="" />
                  </span>
                  best it solution
                </h5>
                <div className="space24" />
                <h2 className="text-anime-style-3">End-to-End IT Solutions for Growing Businesses</h2>
                <div className="space16" />
                <p data-aos="fade-left" data-aos-duration={800}>
                  We provide comprehensive, end-to-end IT solutions of designed to support businesses at stage of growing.
                </p>
                <div className="space24" />
                <div className="bg-progress" data-aos="fade-left" data-aos-duration={900}>
                  <div className="progress-bar">
                    <label>
                      Business Intelligence<span>98%</span>
                    </label>
                    <div className="progress">
                      <div className="progress-inner" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div className="progress-bar">
                    <label>
                      Digital Strategy and Design<span>99%</span>
                    </label>
                    <div className="progress">
                      <div className="progress-inner" style={{ width: '99%' }} />
                    </div>
                  </div>
                  <div className="progress-bar">
                    <label>
                      Cloud and Infrastructure<span>99%</span>
                    </label>
                    <div className="progress">
                      <div className="progress-inner" style={{ width: '99%' }} />
                    </div>
                  </div>
                </div>
                <div className="space32" />
                <div className="btn-area1" data-aos="fade-left" data-aos-duration={1000}>
                  <Link href="/service" className="vl-btn2">
                    Discover Our Solutions <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={2} />
            <Col lg={5}>
              <div className="soultions-images">
                <Image src={element10} alt="" className="elements10" />
                <div className="img1 image-anime">
                  <Image src={work1} alt="" width={526} className='img-fluid' />
                </div>
                <div className="img2 image-anime">
                  <Image src={work2} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Solutions
