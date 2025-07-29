import hero1 from '@/assets/img/all-images/bg/hero-bg1.png'
import elements1 from '@/assets/img/elements/elements1.png'
import elements16 from '@/assets/img/elements/elements16.png'
import elements4 from '@/assets/img/elements/elements4.png'
import elements5 from '@/assets/img/elements/elements5.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa6'

const Hero = () => {
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
                <h1 className='m-0'>Contact Us</h1>
                <div className="space28" />
                <Link href="/">
                  Home <FaAngleRight className="fa-solid" /> <span>Contact Us</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
