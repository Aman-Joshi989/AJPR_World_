import case1 from '@/assets/img/all-images/case/case-img1.png'
import case10 from '@/assets/img/all-images/case/case-img10.png'
import case11 from '@/assets/img/all-images/case/case-img11.png'
import case2 from '@/assets/img/all-images/case/case-img2.png'
import case3 from '@/assets/img/all-images/case/case-img3.png'
import case9 from '@/assets/img/all-images/case/case-img9.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import Pagination from '../../components/Pagination'

const detail = [
  { image: case1, company: '#CloudFlex Solution', title: 'Upgrading IT for Financial Secure' },
  { image: case2, company: '#CloudFlex Solution', title: 'Scaling IT for EcoSolutions' },
  { image: case3, company: '#CloudFlex Solution', title: 'Optimizing IT For Solutions' },
  { image: case9, company: '#CloudFlex Solution', title: 'Stories: IT Solutions At Work' },
  { image: case10, company: '#ProvenITResults', title: 'IT Solutions Driving Success' },
  { image: case11, company: '#TechDrivenSuccess', title: 'Real Solutions, Real Impact' },
]

const Blog = () => {
  return (
    <>
      <div className="case-inner-area sp1">
        <Container>
          <Row>
            {detail.map((item, idx) => (
              <Col lg={6} md={6} key={idx}>
                <div className="case-slider-boxarea">
                  <div className="img1 image-anime">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <p>{item.company}</p>
                    <div className="space16" />
                    <Link href="/case-detail">{item.title}</Link>
                    <div className="arrow">
                      <Link href="/case-detail">
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            
            <Pagination />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
