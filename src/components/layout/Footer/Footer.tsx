import email from '@/assets/img/icons/email1.svg'
import global from '@/assets/img/icons/global1.svg'
import location1 from '@/assets/img/icons/location1.svg'
import phn1 from '@/assets/img/icons/phn1.svg'
import logo from '@/assets/img/logo/logo2.png'
import { currentYear } from '@/components/CurrentYear'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

export type LinkType = {
  url: string
  name: string
}

const icons = [
  { url: 'https://www.linkedin.com/company/ajpr-world', icon: FaLinkedinIn },
  { url: '', icon: FaInstagram },
]

export const link: LinkType[] = [
  { url: '/about', name: 'About Us' },
  { url: '/service', name: 'It Solution' },
  { url: '/blog', name: 'Our Blog' },
  { url: '', name: 'Pricing Plan' },
  { url: '/contact', name: 'Contact Us' },
]

export const service: LinkType[] = [
  { url: '', name: 'Cyber Security Solution' },
  { url: '', name: 'Scalable Cloud Solutions' },
  { url: '', name: 'Data Protection Services' },
  { url: '', name: 'Optimization Management' },
  { url: '', name: 'Software Development' },
]

const Footer = () => {
  return (
    <>
      <div className="vl-footer1-section-area sp8">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-logo1">
                <Image src={logo} alt="" />
                <div className="space16" />
                <p>We provide expert best services technology to meet your unique needs. Whether you’re looking.</p>
                <div className="space24" />
                <ul className="p-0 m-0">
                  {icons.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={idx}>
                        <Link href={item.url}>
                          <Icon className="fa-brands" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6}>
              <div className="space30 d-md-none d-block" />
              <div className="vl-footer-widget">
                <h3>Quick Links</h3>
                <ul className="p-0 m-0">
                  {link.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="vl-footer-widget">
                <div className="space30 d-lg-none d-block" />
                <h3>Our Services</h3>
                <ul className="p-0 m-0">
                  {service.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="vl-footer-widget">
                <div className="space30 d-lg-none d-block" />
                <h3>Contact Us</h3>
                <ul className="p-0 m-0">
                  <li>
                    <Link href="tel:+91 9220970755">
                      <Image src={phn1} alt="" />
                      +91 9220970755
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Image src={location1} alt="" />
                      Haldwani, Uttarakhand
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:ajprworld@gmail.com">
                      <Image src={email} alt="" />
                      ajprworld@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Image src={global} alt="" />
                      support@ajprworld.com
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="space60" />
          <Row>
            <Col lg={12}>
              <div className="vl-copyright-area">
                <p>© Copyright {currentYear} - AJPR World. All Right Reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
