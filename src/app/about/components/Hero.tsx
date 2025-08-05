import hero1 from '@/assets/img/all-images/bg/hero-bg1.png'
import elements1 from '@/assets/img/elements/elements1.png'
import elements16 from '@/assets/img/elements/elements16.png'
import elements4 from '@/assets/img/elements/elements4.png'
import elements5 from '@/assets/img/elements/elements5.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <div
      className="inner-page-hero-area"
      style={{
        backgroundImage: `url(${hero1.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <Image src={elements5} alt="Decorative Element 5" className="elements5" />
      <Image src={elements4} alt="Decorative Element 4" className="elements4 img-fluid" width={641} height={419} />
      <Image src={elements1} alt="Decorative Element 1" className="elements1 keyframe5" />
      <Image src={elements16} alt="Decorative Element 16" className="elements16" />
      <Container>
        <Row className="justify-content-center">
          <Col lg={9} className="text-center">
            <div className="inner-header heading1">
              <h1 className='m-0' style={{ color: "#ffc107" }}>Get to know us a bit better</h1>
              <div className="space28" />
              <p>
                Since 2025, AJPR World has been a passionate digital solutions partner for businesses and creators worldwide.
                We’re known for our creative thinking, reliable delivery, and strong client focus. These values are rooted
                in our culture and drive our mission to make a meaningful impact.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
