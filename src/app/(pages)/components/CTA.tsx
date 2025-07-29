import bg1 from '@/assets/img/all-images/bg/hero-bg2.png'
import cta1 from '@/assets/img/all-images/cta/cta-img1.png'
import element7 from '@/assets/img/elements/elements7.png'
import check1 from '@/assets/img/icons/check5.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const CTA = () => {
  return (
    <>
      <div
        className="cta1-section-area sp1"
        style={{ backgroundImage: `url(${bg1.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container>
          <Row>
            <Col lg={5}>
              <div className="cta-header heading1">
                <h2 data-aos="fade-left" data-aos-duration={700}>
                  Transform Your IT Today-Speak with Our Experts!
                </h2>
                <div className="space16" />
                <p data-aos="fade-left" data-aos-duration={800}>
                  Ready to take your business to the next level with cutting-edge IT solutions? Our team is here to help you transform.
                </p>
                <div className="space24" />
                <form data-aos="fade-left" data-aos-duration={900}>
                  <input type="text" placeholder="Email Address" />
                  <button type="submit" className="vl-btn1">
                    Subscribe <FaArrowRight className="fa-solid" />
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={3} />
            <Col lg={4}>
              <div className="cta-images">
                <Image src={element7} alt="" className="elements7 keyframe5" />
                <div className="img1">
                  <Image src={cta1} alt="" />
                </div>
                <ul className="aniamtion-key-1">
                  <li>
                    <Link href="">
                      <Image src={check1} alt="" />
                      IT Solution Services
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Image src={check1} alt="" />
                      Cyber Security Services
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Image src={check1} alt="" />
                      Software Development
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CTA
