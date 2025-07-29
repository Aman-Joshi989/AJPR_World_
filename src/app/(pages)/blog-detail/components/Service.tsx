import blog25 from '@/assets/img/all-images/blog/blog-img25.png'
import blog26 from '@/assets/img/all-images/blog/blog-img26.png'
import blog27 from '@/assets/img/all-images/blog/blog-img27.png'
import blog28 from '@/assets/img/all-images/blog/blog-img28.png'
import tes4 from '@/assets/img/all-images/testimonial/testimonial-img4.png'
import tes5 from '@/assets/img/all-images/testimonial/testimonial-img5.png'
import calender1 from '@/assets/img/icons/calender1.svg'
import comments1 from '@/assets/img/icons/comments1.svg'
import GlightBox from '@/components/GlightBox'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaFacebookF, FaInstagram, FaPlay, FaReply, FaYoutube } from 'react-icons/fa6'

const Service = () => {
  return (
    <>
      <div className="vl-blog-details-section sp1">
        <Container>
          <GlightBox>
            <Row>
              <Col lg={8} className="m-auto">
                <div className="blog-others-sidebar p-0">
                  <div className="img1">
                    <Image src={blog25} alt="" width={856} height={489} className='img-fluid' />
                  </div>
                  <div className="space32" />
                  <ul className="list-author p-0">
                    <li>
                      <Link href="">#BestTechSolution</Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src={calender1} alt="" /> 4 August 2024 <span> | </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <Image src={comments1} alt="" /> 2 Comments
                      </Link>
                    </li>
                  </ul>
                  <div className="space24" />
                  <h2>Unlock the Full Potential Your Company through Innovative Technology Expert</h2>
                  <div className="space20" />
                  <p>
                    Unlocking the full potential company requires more than just the latest technology; it necessitates comprehensive strategy backed
                    by expert support. At AJPR World, we are of understand that each business is unique, with distinct challenges an company goals.
                  </p>
                  <div className="space18" />
                  <p>
                    In today’s fast-paced business environment, the ability to adapt and innovate crucial for success. At AJPR World, we specialize in
                    providing comprehensive technology solutions that align with your strategic objectives. Our team of experts works closely with
                    you.
                  </p>
                  <div className="space18" />
                  <Row>
                    <Col lg={6} md={6}>
                      <div className="space30" />
                      <div className="img1 image-anime">
                        <Image src={blog26} alt="" />
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="space30" />
                      <div className="img1 image-anime">
                        <Image src={blog27} alt="" />
                      </div>
                    </Col>
                  </Row>
                  <div className="space32" />
                  <h3>Maximize Efficiency Security with IT Solutions</h3>
                  <div className="space16" />
                  <p>
                    The flexibility and scalability of modern IT infrastructure allow organizations to adapt to changing market demands quickly,
                    ensuring they remain agile responsive. By leveraging data-driven insights, companies can make informed decisions that best drive
                    growth.
                  </p>
                  <div className="space16" />
                  <p>
                    IT solutions encompass a wide range of services and technologies designed to meet the unique needs of businesses. These solutions
                    can include cloud computing, cybersecurity measures, data analytics, and comprehensive IT management services, by integrating.
                  </p>
                  <div className="space48" />
                  <div className="images">
                    <div className="img1 image-anime">
                      <Image src={blog28} alt="" />
                    </div>
                    <div className="play">
                      <Link href="htvls://www.youtube.com/watch?v=Y8XpQpW5OVY" className="glightbox popup-youtube">
                        <FaPlay className="fa-solid" />
                      </Link>
                    </div>
                  </div>
                  <div className="space32" />
                  <h3>Maintaining Regulatory Compliance</h3>
                  <div className="space16" />
                  <p>
                    Implementing IT solutions brings numerous benefits that can significantly enhance the business performance. First and foremost,
                    these solutions streamline operations best automating repetitive tasks and improving overall efficiency, allowing employees.
                  </p>
                  <div className="space40" />
                  <div className="tags-social">
                    <div className="tags">
                      <ul className="p-0">
                        <li>Tags:</li>
                        <li>
                          <Link href="">#TechSolution</Link>
                        </li>
                        <li>
                          <Link href="" className="m-0">
                            #BussinessIT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="social">
                      <ul>
                        <li>Social:</li>
                        <li>
                          <Link href="">
                            <FaFacebookF className="fa-brands " />
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <FaInstagram className="fa-brands" />
                          </Link>
                        </li>
                        <li>
                          <Link href="" className="m-0">
                            <FaYoutube className="fa-brands" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space60" />
                  <h3>Blog Comments (2)</h3>
                  <div className="space32" />
                  <div className="comments-boxarea">
                    <div className="comments-boxes">
                      <div className="comments-auhtor-box">
                        <div className="img3">
                          <Image src={tes5} alt="" />
                        </div>
                        <div className="content">
                          <Link href="" className="date">
                            <Image src={calender1} alt="" /> 8 December 2024
                          </Link>
                          <Link href="/pages/team" className="name">
                            Mr. Ana Ritchie
                          </Link>
                        </div>
                      </div>
                      <Link href="" className="reply">
                        <FaReply className="fa-solid" /> Reply
                      </Link>
                    </div>
                    <div className="space16" />
                    <p>
                      “I found this article incredibly enlightening, especially the emphasis on the best transformative power of IT solutions in
                      today’s business environment. As the IT manager for a mid-sized company, I've witnessed firsthand how in investing.”
                    </p>
                  </div>
                  <div className="space30" />
                  <div className="comments-boxarea box2">
                    <div className="comments-boxes">
                      <div className="comments-auhtor-box">
                        <div className="img3">
                          <Image src={tes4} alt="" />
                        </div>
                        <div className="content">
                          <Link href="" className="date">
                            <Image src={calender1} alt="" /> 12 May 2024
                          </Link>
                          <Link href="/pages/team" className="name">
                            Matthew Kuhnemann
                          </Link>
                        </div>
                      </div>
                      <Link href="" className="reply">
                        <FaReply /> Reply
                      </Link>
                    </div>
                    <div className="space16" />
                    <p>
                      One concern I have, however, is ensuring that our IT team remains up-to-date with the rapid technological advancements.
                      Continuous training and professional development are crucial, but they require additional time.
                    </p>
                  </div>
                  <div className="space48" />
                  <h3>Leave A Reply Now</h3>
                  <div className="space32" />
                  <div className="contact-boxarea">
                    <h3>Send Us A Message</h3>
                    <div className="space8" />
                    <Row>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area">
                          <textarea placeholder="Your Message" />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="space4" />
                        <div className="input-area">
                          <button type="submit" className="vl-btn2">
                            Leave A Reply
                            <FaArrowRight />
                          </button>
                        </div>
                      </Col>
                    </Row>
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

export default Service
