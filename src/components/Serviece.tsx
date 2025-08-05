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
}

export const business: ServiceType[] = [
  {
    image: icon1,
    title: 'Digital Strategy and Design',
    description: 'We help craft digital experiences through strategic planning and user-focused design that drives engagement and growth.',
  },
  {
    image: icon2,
    title: 'Cloud and Infrastructure',
    description: 'Scalable, secure, and high-performance cloud infrastructure solutions tailored to support your evolving business needs.',
  },
  {
    image: icon3,
    title: 'Intelligent Automation',
    description: 'We streamline your operations with AI-driven automation to improve efficiency, reduce costs, and eliminate manual tasks.',
  },
  {
    image: icon4,
    title: 'Application Security',
    description: 'Protect your applications with robust security measures including vulnerability assessments and threat detection.',
  },
  {
    image: icon5,
    title: 'Business Intelligence',
    description: 'Turn raw data into actionable insights with our BI solutions to make informed and impactful business decisions.',
  },
  {
    image: icon6,
    title: 'Custom Application Development',
    description: 'From concept to deployment, we build tailored applications that align with your business goals and user needs.',
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
