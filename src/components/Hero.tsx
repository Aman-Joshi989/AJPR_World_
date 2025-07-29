import bg1 from '@/assets/img/all-images/bg/hero-bg1.png'
import bgimg1 from '@/assets/img/all-images/bg/img-bg1.png'
import hero1 from '@/assets/img/all-images/hero/hero-img1.png'
import element1 from '@/assets/img/elements/elements1.png'
import element2 from '@/assets/img/elements/elements2.png'
import element3 from '@/assets/img/elements/elements3.png'
import element4 from '@/assets/img/elements/elements4.png'
import element5 from '@/assets/img/elements/elements5.png'
import element6 from '@/assets/img/elements/elements6.png'
import sublogo from '@/assets/img/icons/sub-logo1.svg'
import GlightBox from '@/components/GlightBox'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
      <div className="hero1-section-area" style={{ backgroundImage: `url(${bg1.src})` }}>
        <Image src={element6} alt="" className="elements6" />
        <Image src={element5} alt="" className="elements5" />
        <Image src={element4} alt="" className="elements4 img-fluid" width={1229} />
        <Container>
          <GlightBox>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="hero1-header heading1">
                  <h5 data-aos="fade-left" className='m-0' data-aos-duration={800}>
                    <span>
                      <Image src={sublogo} alt="" />
                    </span>
                    Create your Dream Project With Us
                  </h5>
                  <div className="space16" />
                  <h1 className="text-anime-style-3 m-0">Advanced IT Solutions For Modern Businesses</h1>
                  <div className="space16" />
                  <p data-aos="fade-left" data-aos-duration={900}>
                    We specialize in providing innovative scalable IT solutions tailored to meet the unique needs of your business, from comprehensive
                  </p>
                  <div className="space32" />
                  <div className="btn-area1" data-aos="fade-left" data-aos-duration={1000}>
                    <Link href="/service" className="vl-btn1">
                      Explore Our Solutions <FaArrowRight className="fa-solid fa-arrow-right" />
                    </Link>
                    {/* <Link href="htvls://www.youtube.com/watch?v=Y8XpQpW5OVY" className="glightbox popup-youtube">
                      <span>
                        <FaPlay className="fa-solid" />
                      </span>
                      Play Video
                    </Link> */}
                  </div>
                </div>
              </Col>
              <Col lg={1} />
              <Col lg={5}>
                <div className="hero-images-area">
                  <div className="img1">
                    <Image src={hero1} alt="" />
                  </div>
                  <div className="image-bg1">
                    <Image src={bgimg1} alt="" />
                  </div>
                  <div className="elements">
                    <Image src={element3} alt="" className="elements3 aniamtion-key-1" />
                    <Image src={element2} alt="" className="elements2 aniamtion-key-2" />
                    <Image src={element1} alt="" className="elements1 keyframe5" />
                  </div>
                </div>
              </Col>
            </Row>
          </GlightBox>
        </Container>
      </div>
    </>
  )
}

export default Hero
