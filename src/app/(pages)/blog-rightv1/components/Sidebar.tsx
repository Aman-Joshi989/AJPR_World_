import author1 from '@/assets/img/all-images/others/author-img1.png'
import author2 from '@/assets/img/all-images/others/author-img2.png'
import author3 from '@/assets/img/all-images/others/author-img3.png'
import author4 from '@/assets/img/all-images/others/author-img4.png'
import author5 from '@/assets/img/all-images/others/author-img5.png'
import author6 from '@/assets/img/all-images/others/author-img6.png'
import author7 from '@/assets/img/all-images/others/author-img7.png'
import author8 from '@/assets/img/all-images/others/author-img8.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Form } from 'react-bootstrap'
import { FaAngleRight, FaMagnifyingGlass } from 'react-icons/fa6'

const avatar = [{ image: author1 }, { image: author2 }, { image: author3 }, { image: author4 }]

const avatar2 = [{ image: author5 }, { image: author6 }, { image: author7 }, { image: author8 }]

const link = [
  { title: 'Cyber Security Solution', url: '' },
  { title: 'Scalable Cloud Solution', url: '' },
  { title: 'Data Protection Services', url: '' },
  { title: 'Optimization Management', url: '' },
  { title: 'HelpDesk 360 Solutions', url: '' },
  { title: 'Software Development', url: '' },
  { title: 'Custom App Development', url: '' },
  { title: 'It Infrastructure Networking', url: '' },
  { title: 'Business Consulting', url: '' },
]

const Sidebar = () => {
  return (
    <>
      <Col lg={4}>
        <div className="blog-v1-leftside">
          <div className="search-area">
            <h3>Search</h3>
            <div className="space24" />
            <Form>
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <FaMagnifyingGlass />
              </button>
            </Form>
          </div>
          <div className="space30" />
          <div className="category-list-area">
            <h3>Blog Category</h3>
            <div className="space10" />
            <ul className="p-0">
              {link.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.url}>
                    {item.title}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space30" />
          <div className="tags-area">
            <h3>Popular Tags</h3>
            <div className="space8" />
            <ul className="p-0 m-0">
              <li>
                <Link href="">#TechSolution</Link>
              </li>&nbsp;
              <li>
                <Link href="">#CloudComputing</Link>
              </li>
            </ul>
            <ul className="p-0 m-0">
              <li>
                <Link href="">#ManagedServices</Link>
              </li>&nbsp;
              <li>
                <Link href="">#BusinessIT</Link>
              </li>
            </ul>
            <ul className="p-0 m-0">
              <li>
                <Link href="">#DataSecurity</Link>
              </li>&nbsp;
              <li>
                <Link href="">#TechForBusiness</Link>
              </li>
            </ul>
            <ul className="p-0 m-0">
              <li>
                <Link href="">#TechUpgrades</Link>
              </li>&nbsp;
              <li>
                <Link href="">#ITInfrastructure</Link>
              </li>
            </ul>
          </div>
          <div className="space30" />
          <div className="auhtor-area">
            <h3>Our Author</h3>
            <div className="space24" />
            <ul className="p-0 m-0">
              {avatar.map((item, idx) => (
                <li key={idx}>
                  <Link href="">
                    <Image src={item.image} alt="" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space16" />
            <ul className="p-0 m-0">
              {avatar2.map((item, idx) => (
                <li key={idx}>
                  <Link href="">
                    <Image src={item.image} alt="" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space30 d-lg-none d-block" />
      </Col>
    </>
  )
}

export default Sidebar
