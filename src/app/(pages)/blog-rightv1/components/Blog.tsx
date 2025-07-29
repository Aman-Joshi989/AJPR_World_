import blog10 from '@/assets/img/all-images/blog/blog-img10.png'
import blog11 from '@/assets/img/all-images/blog/blog-img11.png'
import blog12 from '@/assets/img/all-images/blog/blog-img12.png'
import blog13 from '@/assets/img/all-images/blog/blog-img13.png'
import blog8 from '@/assets/img/all-images/blog/blog-img8.png'
import blog9 from '@/assets/img/all-images/blog/blog-img9.png'
import calender3 from '@/assets/img/icons/calender3.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import Pagination from '../../components/Pagination'
import Sidebar from './Sidebar'

const blog = [
  { image: blog8, date: '4 August 2024', description: 'Scalable IT solutions tailored to meet a unique business needs' },
  { image: blog9, date: '5 August 2024', description: 'Unlock the full potential Best your business with tailored IT' },
  { image: blog10, date: '6 August 2024', description: 'Optimize your operations with tailored IT services that grow' },
  { image: blog11, date: '4 August 2024', description: 'Unlock the Future of Your IT &amp; Business With Best Innovative' },
  { image: blog12, date: '5 August 2024', description: 'Transform Your Operations An with Technology Experience' },
  { image: blog13, date: '6 August 2024', description: 'Empowering Your Business And Through Technology Tailored IT' },
]

const Blog = () => {
  return (
    <>
      <div className="vl-blog-v1-area sp1">
        <Container>
          <Row>
            <Col lg={8}>
              <Row>
                {blog.map((item, idx) => (
                  <Col lg={6} md={6} key={idx}>
                    <div className="vl-blog-1-item">
                      <div className="vl-blog-1-thumb image-anime">
                        <Image src={item.image} alt="" />
                      </div>
                      <div className="vl-blog-1-content">
                        <div className="vl-blog-meta">
                          <ul className='p-0 m-0'>
                            <li>
                              <Link href="">
                                <Image src={calender3} alt="" /> {item.date}
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="space16" />
                        <h4 className="vl-blog-1-title">
                          <Link href="/blog-detail">{item.description}</Link>
                        </h4>
                        <div className="space20" />
                        <Link href="/blog-detail" className="readmore">
                          Learn More <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </Col>
                ))}
                <Pagination />
              </Row>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
