'use client'
import logo1 from '@/assets/img/logo/logo1.png'
import useScrollEvent from '@/hook/useScrollEvent'
import useToggle from '@/hook/useToggle'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaBarsStaggered } from 'react-icons/fa6'
import MobileMenu from './components/MobileMenu'
import TopMenu from './components/TopMenu'

const TopBar = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen: openMobilMenu, toggle: toggleMobilMenu } = useToggle()
  return (
    <>
      <header className="homepage1-body">
        <div id="vl-header-sticky" className={`vl-header-area vl-transparent-header header-${scrollY > 100 && 'sticky'}`}>
          <Container className="headerfix">
            <Row className="align-items-center row-bg3">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link href="/">
                    <Image src={logo1} alt="" />
                  </Link>
                </div>
              </Col>
              <Col lg={7} className="d-none d-lg-block">
                <div className="vl-main-menu text-center">
                  <nav className="vl-mobile-menu-active">
                    <TopMenu classname="btn-area1" button="vl-btn1" arrow />
                  </nav>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6}>
                <div className="vl-hero-btn d-none d-lg-block text-end">
                  <span className="vl-btn-wrap text-end">
                    <Link href="/contact" className="vl-btn1">
                      Get Started Now <FaArrowRight className="fa-solid" />
                    </Link>
                  </span>
                </div>
                <div className="vl-header-action-item d-block d-lg-none">
                  <button onClick={toggleMobilMenu} type="button" className="vl-offcanvas-toggle">
                    <FaBarsStaggered className="fa-solid" />
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <MobileMenu toggleMobilMenu={toggleMobilMenu} openMobilMenu={openMobilMenu} />
      </header>
    </>
  )
}

export default TopBar
