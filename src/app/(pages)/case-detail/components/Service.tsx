import case12 from '@/assets/img/all-images/case/case-img12.png'
import check1 from '@/assets/img/icons/check1.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Service = () => {
  return (
    <>
      <div className="case-single-section-area sp1">
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="case-sider-widget-area p-0">
                <div className="img1 image-anime">
                  <Image src={case12} alt="" width={856} height={489}  className='img-fluid'/>
                </div>
                <div className="space32" />
                <h3>Optimizing IT For Solutions</h3>
                <div className="space20" />
                <p>
                  Our case studies showcase the tangible impact of our IT solutions on businesses across various industries. From streamlining
                  operations to enhancing security driving growth, these success stories highlight how tailored technology solutions can solve
                  real-world.
                </p>
                <div className="space20" />
                <p>
                  Implementing effective IT solutions brings a myriad of benefits that can transform the way your business operates. By streamlining
                  processes and enhancing efficiency, these solutions help reduce operational costs while improving overall productivity, advanced.
                </p>
                <div className="space50" />
                <h3>Why Your Business Needs IT Solutions Now</h3>
                <div className="space20" />
                <p>
                  Investing in IT solutions is crucial for businesses aiming thrive in a competitive solution landscape. These solutions not only
                  streamline operations and enhance efficiency but significantly reduce costs, enabling companies to allocate resources more
                  effectively.
                </p>
                <div className="space12" />
                <Row>
                  <Col lg={4} md={6}>
                    <ul className="list p-0">
                      <li>
                        <Image src={check1} alt="" />
                        Increased Efficiency
                      </li>
                      <li>
                        <Image src={check1} alt="" />
                        Access To Expertise
                      </li>
                    </ul>
                  </Col>
                  <Col lg={4} md={6}>
                    <ul className="list p-0">
                      <li>
                        <Image src={check1} alt="" />
                        Enhanced Security
                      </li>
                      <li>
                        <Image src={check1} alt="" />
                        Custom It Solutions
                      </li>
                    </ul>
                  </Col>
                  <Col lg={4} md={6}>
                    <ul className="list p-0">
                      <li>
                        <Image src={check1} alt="" />
                        Business Continuity
                      </li>
                      <li>
                        <Image src={check1} alt="" />
                        Seamless Integration
                      </li>
                    </ul>
                  </Col>
                </Row>
                <div className="space50" />
                <h3>Maximize Efficiency Security with IT Solutions</h3>
                <div className="space20" />
                <p>
                  The flexibility and scalability of modern IT infrastructure allow organizations to adapt to changing market demands quickly,
                  ensuring they remain agile responsive. By leveraging data-driven insights, companies can make informed decisions that best drive
                  growth.
                </p>
                <div className="space28" />
                <div className="bg-progress">
                  <div className="progress-bar">
                    <label>
                      It Solution <span>98%</span>
                    </label>
                    <div className="progress">
                      <div className="progress-inner" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div className="progress-bar">
                    <label>
                      Cyber Security <span>99%</span>
                    </label>
                    <div className="progress">
                      <div className="progress-inner" style={{ width: '99%' }} />
                    </div>
                  </div>
                  <div className="progress-bar">
                    <label>
                      Cloud Solution <span>99%</span>
                    </label>
                    <div className="progress">
                      <div className="progress-inner" style={{ width: '99%' }} />
                    </div>
                  </div>
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
