import Pagination from '@/app/(pages)/components/Pagination'
import tes2 from '@/assets/img/all-images/testimonial/testimonial-img2.png'
import tes3 from '@/assets/img/all-images/testimonial/testimonial-img3.png'
import tes4 from '@/assets/img/all-images/testimonial/testimonial-img4.png'
import tes5 from '@/assets/img/all-images/testimonial/testimonial-img5.png'
import tes7 from '@/assets/img/all-images/testimonial/testimonial-img7.png'
import tes8 from '@/assets/img/all-images/testimonial/testimonial-img8.png'
import tes9 from '@/assets/img/all-images/testimonial/testimonial-img9.png'
import element40 from '@/assets/img/elements/elements40.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'

const about = [
  {
    image: tes2,
    name: 'Sheldon Jackson',
    role: 'Shop Store Owner',
    description:
      'Working with has been a game- Best changer for our business. Their IT and support team is always responsive, an their expertise has helped us stream our operations, We no longer worry.',
  },
  {
    image: tes8,
    name: 'Alex Robertson',
    role: 'Shop Store Owner',
    description:
      'Our network security has never been stronger. Their proactive monitoring and customized security solutions on have given us peace of mind. Our data is safe, and our compliance has Tech.',
  },
  {
    image: tes7,
    name: 'Henry Gayle',
    role: 'Shop Store Owner',
    description:
      'Has provided us on with top-notch IT services. Their solutions are tailored to our business, &amp; their ongoing support is secondto none. We’ve seen significant improvements in our productivity and.',
  },
  {
    image: tes9,
    name: 'Patricia Sanders',
    role: 'Rainbow Bay Crafts',
    description:
      'Thanks to the IT solutions provided by AJPR World, we have seen a remarkable improvement in our operational best efficiency. Our processes are now a streamlined, and our teams can best.',
  },
  {
    image: tes2,
    name: 'Rodger Struck',
    role: 'Rhodes Furniture',
    description:
      "The cybersecurity measures Solution implemented by AJPR World have given us peace of mind. We feel confident that our data is secure, & we've experience zero breaches since partnering AJPR World.",
  },
  {
    image: tes3,
    name: 'Eddie Lake',
    role: 'Finast Company',
    description:
      'Migrating to the cloud was seamless with AJPR World. Their best team guided us through every step now our employees can work from anywhere, IT boosting our team productivity significantly.',
  },
  {
    image: tes4,
    name: 'Ricky Smith',
    role: "Tam's Stationers",
    description:
      'Working with AJPR World has been solution transformative experience for our best organization. Before their involvement, we faced significant challenges with our outdated IT infrastructure.',
  },
  {
    image: tes5,
    name: 'Lorri Warf',
    role: 'Seamans Furniture',
    description:
      "Partnering with AJPR World has been one of the best decisions we've made. We are comprehensive cybersecurity on solutions provided us with the best assurance we needed to protect.",
  },
  {
    image: tes9,
    name: 'Bradley Lawlor',
    role: 'Mostow Co.',
    description:
      'AJPR World has completely transformed the way we operate as a business. Their custom IT solutions have streamlined our processes, enabling us collaborate effectively across teams, regardless.',
  },
]

const Blog = () => {
  return (
    <>
      <div className="testimonial-inner-section sp1">
        <Container>
          <Row>
            {about.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="testimonial-review-box">
                  <div className="man-text">
                    <div className="man">
                      <Image src={item.image} alt="" />
                    </div>
                    <div className="text">
                      <Link href="/team">{item.name}</Link>
                      <div className="space12" />
                      <p>{item.role}</p>
                    </div>
                  </div>
                  <div className="space24" />
                  <p>“{item.description}”</p>
                  <div className="space24" />
                  <div className="logo-area">
                    <Image src={element40} alt="" />
                    <ul className="p-0 d-inline-flex gap-1 m-0">
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                    </ul>
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
