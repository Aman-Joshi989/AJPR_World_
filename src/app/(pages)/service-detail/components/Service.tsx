'use client'
import ser2 from '@/assets/img/all-images/service/service-img2.png'
import img3 from '@/assets/img/all-images/service/service-img3.png'
import img4 from '@/assets/img/all-images/service/service-img4.png'
import check1 from '@/assets/img/icons/check1.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Faq from './Faq'

const Service = () => {
  return (
    <>
      <div className="service-sidebar-area sp1">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="service2-widget-sidebar p-0" >
                <div className="img1 image-anime">
                  <Image src={ser2} alt="" width={856} height={489} className='img-fluid' />
                </div>
                <div className="space32" />
                <h3>Cyber Security Solution</h3>
                <div className="space20" />
                <p>
                  In today’s rapidly evolving digital landscape, the security of your business data is more critical than ever. Our Cyber Security
                  Solutions offer a multi-layered approach best to protecting you business from cyber threats, including malware, phishing,
                  ransomware.
                </p>
                <div className="space14" />
                <Row>
                  <Col lg={6} md={6}>
                    <ul className="list p-0">
                      <li>
                        <Image src={check1} alt="" />
                        Incident Response &amp; Recovery
                      </li>
                      <li>
                        <Image src={check1} alt="" />
                        Compliance Risk Management
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} md={6}>
                    <ul className="list p-0">
                      <li>
                        <Image src={check1} alt="" />
                        Secure Access Controls
                      </li>
                      <li>
                        <Image src={check1} alt="" />
                        Vulnerability Assessments
                      </li>
                    </ul>
                  </Col>
                </Row>
                <div className="space32" />
                <div className="pera-box">
                  <h4>Safeguard Your Business With Advanced Cybersecurity</h4>
                  <div className="space12" />
                  <p>
                    In an era where cyber threats are becoming increasingly sophisticated, protecting your business has never been more crucial. Our
                    Cyber Security Solution on comprehensive suite of services designed to defend against a wide range of cyber attacks, from data.
                  </p>
                </div>
                <div className="space18" />
                <Row>
                  <Col lg={6} md={6}>
                    <div className="space30" />
                    <div className="img1 image-anime">
                      <Image src={img3} alt="" width={416} className='img-fluid' />
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="space30" />
                    <div className="img1 image-anime">
                      <Image src={img4} alt="" width={416} className='img-fluid' />
                    </div>
                  </Col>
                </Row>
                <div className="space32" />
                <h3>Our AJPR World Approach</h3>
                <div className="space20" />
                <p>
                  In an era where cyber threats are becoming increasingly sophisticated, protecting your business has never been more crucial. Our
                  Cyber Security Solution offers a comprehen suite of services designed to defend against a wide range of cyber attacks, from data
                  breaches to ransomware. We employ state-of-the-art technologies and strategies to safeguard your sensitive information and IT
                  infrastructure. Our proactive approach.
                </p>
                <div className="space48" />
                <h3>Frequently Asked Question</h3>
                <div className="space20" />
                <p>
                  Our IT solutions are designed to streamline your business operations, enhance security, and provide scalable infrastructure to
                  support growth. Whether you're looking to best.
                </p>
                <div className="faq-widget-area">
                  <Faq />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
