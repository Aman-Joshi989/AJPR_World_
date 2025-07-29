import img2 from '@/assets/img/all-images/others/others-img2.png'
import mail2 from '@/assets/img/icons/mail2.svg'
import phn2 from '@/assets/img/icons/phn2.svg'
import logo1 from '@/assets/img/icons/sub-logo1.svg'
import time2 from '@/assets/img/icons/time2.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const social = [
  { image: mail2, title: 'Our Email', description: 'ajprworld@gmail.com' },
  { image: phn2, title: 'Phone', description: '+91 9220970755' },
  { image: time2, title: 'Schedule', description: 'Sunday-Fri: 9 AM – 6 PM' },
]

const Contact = () => {
  return (
    <>
      <div className="contact-inner-area sp1">
        <Container>
          <Row>
            <Col lg={10} className="m-auto">
              <div className="heading2 text-center">
                <h5>
                  <span>
                    <Image src={logo1} alt="" />
                  </span>
                  Have Questions? Reach Out!
                </h5>
                <div className="space20" />
                <h2>Let's Discuss Your IT Needs</h2>
              </div>
              <div className="space40" />
              <Row>
                {social.map((item, idx) => (
                  <Col key={idx} lg={4} md={6}>
                    <div className="widget-contactbox">
                      <div className="icons">
                        <Image src={item.image} alt="" />
                      </div>
                      <div className="content">
                        <h4>{item.title}</h4>
                        <Link href="mailto:ajprworld@gmail.com">{item.description}</Link>
                      </div>
                    </div>
                    <div className="space30 d-lg-none d-block" />
                  </Col>
                ))}
              </Row>
              <div className="space60" />
              <Row>
                <Col lg={6}>
                  <div className="img1 image-anime">
                    <Image src={img2} alt="" width={526} height={575} className='img-fluid' />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="contact-author-boxarea">
                    <h3>Get In Touch Now</h3>
                    <div className="space8" />
                    <Row>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="First Name*" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="Last Name*" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="number" placeholder="Phone Number*" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="email" placeholder="Email Address*" />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area">
                          <input type="text" placeholder="Service Type*" />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area">
                          <textarea placeholder="Your Message" />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="space32" />
                        <div className="input-area">
                          <button type="submit" className="vl-btn2">
                            Get Started Now <FaArrowRight />
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contact
