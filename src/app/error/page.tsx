import hero1 from '@/assets/img/all-images/bg/hero-bg1.png'
import error from '@/assets/img/all-images/others/error.png'
import elements1 from '@/assets/img/elements/elements1.png'
import elements16 from '@/assets/img/elements/elements16.png'
import elements4 from '@/assets/img/elements/elements4.png'
import elements5 from '@/assets/img/elements/elements5.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight } from 'react-icons/fa6'

const page = () => {
  return (
    <>
      <div
        className="inner-page-hero-area"
        style={{
          backgroundImage: `url(${hero1.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Image src={elements5} alt="" className="elements5" />
        <Image src={elements4} alt="" className="elements4 img-fluid" width={641} height={419} />
        <Image src={elements1} alt="" className="elements1 keyframe5" />
        <Image src={elements16} alt="" className="elements16" />
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="inner-header text-center heading1">
                <h1 className='m-0'>404 Error</h1>
                <div className="space28" />
                <Link href="/">
                  Home <FaAngleRight className="fa-solid" /> <span>404 Error</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="error-section-area sp1">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="images-conten-area">
                <div className="img1 image-anime">
                  <Image src={error} alt="" />
                </div>
                <div className="space40" />
                <div className="heading2 text-center">
                  <h2>Oops!! Page Not Found</h2>
                  <div className="space24" />
                  <p>
                    While you're here, why not check out some of our top-notch web hosting <br className="d-lg-block d-none" /> services? Whether
                    you're just starting a new website or looking to upgrade <br className="d-lg-block d-none" /> your current hosting, we offer
                    solutions tailored to your needs.
                  </p>
                  <div className="space32" />
                  <div className="btn-area1">
                    <Link href="/" className="vl-btn2">
                      Back To Home Page <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default page
