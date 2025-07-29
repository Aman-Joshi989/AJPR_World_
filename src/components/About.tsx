'use client'
import about1 from '@/assets/img/all-images/about/about-img1.png'
import about2 from '@/assets/img/all-images/about/about-img2.png'
import about3 from '@/assets/img/all-images/about/about-img3.png'
import element10 from '@/assets/img/elements/elements10.png'
import element9 from '@/assets/img/elements/elements9.png'
import check1 from '@/assets/img/icons/check1.svg'
import sublogo from '@/assets/img/icons/sub-logo1.svg'
import useAnimation from '@/hook/useAnimation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar'
import { FaArrowRight } from 'react-icons/fa6'

const About = () => {
  const [progressSpeed, setProgressItSolution] = useState(0)
  const [progressSEO, setProgressCyber] = useState(0)

  useEffect(() => {
    useAnimation(96, setProgressItSolution)
    useAnimation(97, setProgressCyber)
  }, [])
  return (
    <>
      <div className="about1-section-area sp1">
        <Image src={element9} alt="" className="elements9" />
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-images-area">
                <Image src={element10} alt="" className="elements10" />
                <Row className="align-items-center">
                  <Col lg={6} md={6}>
                    <div className="img1 image-anime ">
                      <Image src={about1} alt="" />
                    </div>
                    <div className="space30 d-lg-none d-block" />
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="img1 image-anime">
                      <Image src={about2} alt="" />
                    </div>
                    <div className="space30" />
                    <div className="img1 image-anime">
                      <Image src={about3} alt="" />
                    </div>
                  </Col>
                </Row>
                <div className="check-icons aniamtion-key-1">
                  <Image src={check1} alt="" />
                  <p>With 15+ years of experience IT solution help community.</p>
                </div>
              </div>
            </Col>
            <Col lg={1} />
            <Col lg={5}>
              <div className="about-header-area heading2">
                <h5>
                  <span>
                    <Image src={sublogo} alt="" />
                  </span>
                  About AJPR Wol IT Solution
                </h5>
                <div className="space24" />
                <h2 className="text-anime-style-3">Unlock Business Potential with Tailored IT Services</h2>
                <div className="space16" />
                <p data-aos="fade-left" data-aos-duration={800}>
                  At AJPR Wol, we understand that every business unique, which is why we offer customized IT solutions designed to meet.
                </p>
                <div className="space28" />
                <Row data-aos="fade-left" data-aos-duration={900}>
                  <Col lg={6} md={6}>
                    <div className="progresbar">
                      <div className="progressbar">
                        <div className="circle" data-percent={96}>
                          <CircularProgressbar
                            value={progressSpeed}
                            styles={{
                              path: {
                                stroke: '#2e0797',
                              },
                            }}
                          />
                          <canvas width={80} height={80} />
                          <div className="count">{`${progressSpeed}%`}</div>
                        </div>
                      </div>
                      <div className="content-area">
                        <h4>IT Solution</h4>
                        <div className="space8" />
                        <p>Level Is High</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="space28 d-md-none d-block" />
                    <div className="progresbar">
                      <div className="progressbar">
                        <div className="circle" data-percent={97}>
                          <CircularProgressbar
                            value={progressSEO}
                            styles={{
                              path: {
                                stroke: '#2e0797',
                              },
                            }}
                          />
                          <canvas width={80} height={80} />
                          <div className="count">{`${progressSEO}%`}</div>
                        </div>
                      </div>
                      <div className="content-area">
                        <h4>Cyber Solution</h4>
                        <div className="space8" />
                        <p>#1 Best Of Solution</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="space28" />
                <div className="pera-box" data-aos="fade-left" data-aos-duration={1000}>
                  <p>"The right IT solutions don’t just support your business
                    — they transform it. At AJPR WORLD,
                    we believe in building technology that drives change."</p>
                </div>
                <div className="space28" />
                <div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
                  <Link href="/contact" className="vl-btn2">
                    See How We Can Help <FaArrowRight className="fa-solid" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About
