import demo1 from '@/assets/img/all-images/demo/demo-img1.png'
import demo2 from '@/assets/img/all-images/demo/demo-img2.png'
import demo3 from '@/assets/img/all-images/demo/demo-img3.png'
import demo4 from '@/assets/img/all-images/demo/demo-img4.png'
import demo5 from '@/assets/img/all-images/demo/demo-img5.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight, FaArrowRight } from 'react-icons/fa6'

type ClassType = {
  classname?: string

  arrow?: boolean
  button?: string
}

const TopMenu = ({ classname, arrow, button }: ClassType) => {
  return (
    <>
      <ul className='p-0 m-0' >
        <li className=" ">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="has-dropdown">
          <Link href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/service">
            Services
          </Link>
        </li>
        {/* <li>
          <Link href="/case">Case Study</Link>

        </li> */}
        <li>
          <Link href="/blog">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default TopMenu
