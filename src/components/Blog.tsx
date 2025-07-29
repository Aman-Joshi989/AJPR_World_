import blog1 from '@/assets/img/all-images/blog/blog-img1.png'
import blog2 from '@/assets/img/all-images/blog/blog-img2.png'
import calender1 from '@/assets/img/icons/calender1.svg'
import logo from '@/assets/img/icons/sub-logo1.svg'
import user1 from '@/assets/img/icons/user1.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

export type BlogType = {
  image: StaticImageData
  description: string
  aos: string
}

export const blog: BlogType[] = [
  { image: blog1, description: 'Revolutionize Your Business Operations with Advanced IT Solution Technology', aos: 'fade-left' },
  { image: blog2, description: 'Transform Your Business Operations with Tailored IT Solutions Designed', aos: 'fade-right' },
]

const Blog = () => {
  return (
    <>
      <div className="vl-blog-1-area sp1">
        <Container>
          <Row>
            <Col lg={4} className="m-auto">
              <div className="vl-blog-1-section-box heading2 text-center space-margin60">
                <h5 className="vl-section-subtitle">
                  <span>
                    <Image src={logo} alt="" />
                  </span>
                  our blog
                </h5>
                <div className="space20" />
                <h2 className="vl-section-title text-anime-style-3">Stay Updated with the Latest in IT Solutions</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {blog.map((item, idx) => (
              <Col lg={6} md={6} key={idx} data-aos="fade-left" data-aos-duration={900}>
                <div className="vl-blog-1-item">
                  <div className="vl-blog-1-thumb image-anime">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="vl-blog-1-content">
                    <div className="vl-blog-meta">
                      <ul className='p-0 m-0'>
                        <li>
                          <Link href="">
                            <Image src={calender1} alt="" /> 26 January 2025 <span> | </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <Image src={user1} alt="" /> Alex Roy
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space20" />
                    <h4 className="vl-blog-1-title">
                      <Link href="/blog-detail">Revolutionize Your Business Operations with Advanced IT Solution Technology</Link>
                    </h4>
                    <div className="space16" />
                    <p>Fuel your business success with our custom IT services. We design solutions that are tailored to your an specific needs.</p>
                    <div className="vl-blog-1-icon">
                      <Link href="/blog-detail">
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            <Col lg={12}>
              <div className="space18" />
              <div className="btn-area1 text-center">
                <Link href="/blog" className="vl-btn2">
                  Read More Blog And News <FaArrowRight className="fa-solid" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
