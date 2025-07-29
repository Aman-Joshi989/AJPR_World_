import bg1 from '@/assets/img/all-images/bg/service-bg1.png'
import blog10 from '@/assets/img/all-images/blog/blog-img10.png'
import blog8 from '@/assets/img/all-images/blog/blog-img8.png'
import blog9 from '@/assets/img/all-images/blog/blog-img9.png'
import calender3 from '@/assets/img/icons/calender3.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const blog = [
  { image: blog8, date: '4 August 2024', title: 'Scalable IT solutions tailored to meet a unique business needs' },
  { image: blog9, date: '5 August 2024', title: 'Unlock the full potential Best your business with tailored IT' },
  { image: blog10, date: '6 August 2024', title: 'Optimize your operations with tailored IT services that grow' },
]

const Blog = () => {
  return (
    <>
      <div
        className="vl-blog-bottom-area sp2"
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="heading2 space-margin60 text-center">
                <h2>View More Our Blog</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {blog.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="vl-blog-1-item">
                  <div className="vl-blog-1-thumb image-anime">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="vl-blog-1-content">
                    <div className="vl-blog-meta">
                      <ul className="p-0 m-0">
                        <li>
                          <Link href="">
                            <Image src={calender3} alt="" />
                            {item.date}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space16" />
                    <h4 className="vl-blog-1-title">
                      <Link href="/blog-detail">{item.title}</Link>
                    </h4>
                    <div className="space20" />
                    <Link href="/blog-detail" className="readmore">
                      Learn More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
