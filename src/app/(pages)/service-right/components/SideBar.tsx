import Link from 'next/link'
import { Col, Form } from 'react-bootstrap'
import { FaAngleRight, FaArrowRight, FaMagnifyingGlass } from 'react-icons/fa6'

const link = [
  { url: ' ', title: 'Cyber Security Solution' },
  { url: ' ', title: 'Scalable Cloud Solution' },
  { url: ' ', title: ' Data Protection Services' },
  { url: ' ', title: ' Optimization Management' },
  { url: ' ', title: ' HelpDesk 360 Solutions' },
  { url: ' ', title: ' Software Development' },
  { url: ' ', title: 'Custom App Development' },
  { url: ' ', title: 'It Infrastructure Networking' },
  { url: ' ', title: 'Business Consulting' },
]

const SideBar = () => {
  return (
    <>
      <Col lg={4}>
        <div className="service-widget-sidebar">
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
            <h3>Our Service</h3>
            <div className="space10" />
            <ul className='p-0'>
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
          <div className="contact-boxarea">
            <h3>Get A Free Quote</h3>
            <div className="space8" />
            <div className="input-area">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-area">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-area">
              <input type="number" placeholder="Phone Number" />
            </div>
            <div className="input-area">
              <textarea placeholder="Your Message" />
            </div>
            <div className="space4" />
            <div className="input-area text-end">
              <button type="submit" className="vl-btn2">
                Submit Now
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </Col>
    </>
  )
}

export default SideBar
