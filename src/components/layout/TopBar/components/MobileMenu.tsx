import demo1 from '@/assets/img/all-images/demo/demo-img1.png'
import demo2 from '@/assets/img/all-images/demo/demo-img2.png'
import demo3 from '@/assets/img/all-images/demo/demo-img3.png'
import demo4 from '@/assets/img/all-images/demo/demo-img4.png'
import demo5 from '@/assets/img/all-images/demo/demo-img5.png'
import logo from '@/assets/img/logo/logo1.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import {
  FaChevronDown,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaRegEnvelope,
  FaXmark,
  FaXTwitter,
} from 'react-icons/fa6'

type MenuType = {
  openMobilMenu: boolean
  toggleMobilMenu: () => void
}

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  // { path: '/case', label: 'Case' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

const MenuItem = ({ item }: any) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const hasSubItems = item.links || item.children

  return (
    <li className="nav-item has-dropdown">
      <div className="d-flex justify-content-between align-items-center text-white cursor-pointer" onClick={hasSubItems ? toggle : undefined}>
        <Link href="">{item.title || item.label}</Link>
        <div className="vl-mega-menu"></div>
        {hasSubItems && <button className="vl-menu-close">{open ? <FaChevronDown /> : <FaChevronRight />}</button>}
      </div>

      <Collapse in={open}>
        <ul className="list-unstyled ms-4">
          {item.links?.map((link: any, idx: number) => (
            <li key={idx} className="nav-item">
              {link.img ? (
                <div className="vl-home-thumb">
                  <div className="img1 mb-2">
                    <Image src={link.img} alt={link.label} className="img-fluid" />
                  </div>
                  <Link href={link.path} className="d-block mb-2 ">
                    {link.label}
                  </Link>
                  <div className="btn-area1 d-flex flex-column gap-1 align-items-center">
                    <Link href={`/multi${link.path}`} className="vl-btn1 p-0">
                      <span className="vl-btn1">Multi Page</span>
                    </Link>
                    <div className="space16" />
                    <Link href={`/single${link.path}`} className="vl-btn1 p-0">
                      <span className="vl-btn1">One Page</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link href={link.path} className="nav-link">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          {item.children?.map((child: any, idx: number) => <MenuItem key={idx} item={child} />)}
        </ul>
      </Collapse>
    </li>
  )
}

const MobileMenu = ({ openMobilMenu, toggleMobilMenu }: MenuType) => {
  return (
    <>
      <div className={`vl-offcanvas ${openMobilMenu ? 'vl-offcanvas-open' : ''}`}>
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
            <div className="vl-offcanvas-logo">
              <Link href="/multi/home-1" className="header1-logo-white">
                <Image src={logo} alt="logo" className="img-fluid" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button onClick={toggleMobilMenu} className="vl-offcanvas-close-toggle">
                <FaXmark />
              </button>
            </div>
          </div>

          <div className="vl-offcanvas-menu d-lg-none mb-40">
            <nav>
              <ul className="gap-1 p-0 fw-medium">
                {menuItems.map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))}
              </ul>
            </nav>
          </div>
          <div className="space20" />
          <div className="vl-offcanvas-info">
            <h3 className="vl-offcanvas-sm-title">Contact Us</h3>
            <div className="space20" />
            <span>
              <Link href="">
                <FaRegEnvelope className="fa-regular" /> contact@ajprworld.com
              </Link>
            </span>
            <span>
              <Link href="">
                <FaPhone className="fa-solid" /> +91 9220970755
              </Link>
            </span>
            <span>
              <Link href="">
                <FaLocationDot className="fa-solid" /> Haldwani, Uttarakhand
              </Link>
            </span>
          </div>

          <div className="space20" />
          <div className="vl-offcanvas-social">
            <h4 className="vl-offcanvas-sm-title">Follow Us</h4>
            <div className="space20" />
            {/* <Link href="">
              <FaFacebookF />
            </Link>
            &nbsp;
            <Link href="">
              <FaInstagram />
            </Link>
            &nbsp; */}
            <Link href="">
              <FaLinkedinIn />
            </Link>
            &nbsp;
            <Link href="">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className={`vl-offcanvas-overlay ${openMobilMenu ? 'vl-offcanvas-overlay-open' : ''}`} />
    </>
  )
}

export default MobileMenu
