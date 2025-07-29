import bg1 from '@/assets/img/all-images/bg/service-bg1.png'
import icon1 from '@/assets/img/icons/service-icon1.svg'
import icon2 from '@/assets/img/icons/service-icon2.svg'
import icon3 from '@/assets/img/icons/service-icon3.svg'
import icon4 from '@/assets/img/icons/service-icon4.svg'
import icon5 from '@/assets/img/icons/service-icon5.svg'
import icon6 from '@/assets/img/icons/service-icon6.svg'
import sublogo from '@/assets/img/icons/sub-logo1.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

export type ServiceType = {
  image: StaticImageData
  title: string
  description: string
  number: number
}

export const business: ServiceType[] = [
  {
    image: icon1,
    title: 'Cyber Security Solution',
    description: 'Our advanced cybersecurity solution is designed to protect against ever-evolving threats — our approach ensures reliability and peace of mind.',
    number: 1,
  },
  {
    image: icon2,
    title: 'Scalable Cloud Solutions',
    description: 'Our cloud solutions scale with your business needs — built for flexibility, security, and high performance.',
    number: 2,
  },
  {
    image: icon3,
    title: 'Data Protection Services',
    description: 'Our data services ensure your critical information is secure, backed up, and always accessible.',
    number: 3,
  },
  {
    image: icon4,
    title: 'Optimization Management',
    description: 'We fine-tune your IT systems to enhance speed, reduce cost, and boost performance end-to-end.',
    number: 4,
  },
  {
    image: icon5,
    title: 'HelpDesk 360 Solutions',
    description: 'Get round-the-clock IT support with fast response times, expert help, and zero downtime.',
    number: 5,
  },
  {
    image: icon6,
    title: 'Software Development',
    description: 'From idea to execution, we deliver custom-built software that powers your digital growth.',
    number: 6,
  },
]

const Serviece = () => {
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
            <Col lg={6} className="m-auto">
              <div className="service-header text-center heading2 space-margin60">
                <h5>
                  <span>
                    <Image src={sublogo} alt="" />
                  </span>
                  Our Services
                </h5>
                <div className="space24" />
                <h2 className="text-anime-style-3">
                  Expert IT Services Designed <br className="d-lg-block d-none" /> To Elevate Your Business
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            {business.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in" data-aos-duration={800}>
                <div className="service1-boxarea">
                  <div className="icons">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="arrow">
                    <Link href="/service-detail">
                      <FaArrowRight className="fa-solid" />
                    </Link>
                  </div>
                  <div className="space24" />
                  <Link href="/service-detail">{item.title}</Link>
                  <div className="space16" />
                  <p>{item.description}</p>
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

export default Serviece
