'use client'
import tes1 from '@/assets/img/all-images/testimonial/testimonial-img1.png'
import tes2 from '@/assets/img/all-images/testimonial/testimonial-img2.png'
import tes3 from '@/assets/img/all-images/testimonial/testimonial-img3.png'
import tes4 from '@/assets/img/all-images/testimonial/testimonial-img4.png'
import tes5 from '@/assets/img/all-images/testimonial/testimonial-img5.png'
import elements17 from '@/assets/img/elements/elements17.png'
import elements18 from '@/assets/img/elements/elements18.png'
import quito1 from '@/assets/img/icons/quito1.svg'
import logo1 from '@/assets/img/icons/sub-logo1.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'

export type TestimonialType = {
  image: StaticImageData
  name?: string
  position?: string
}

export const slider: TestimonialType[] = [
  { image: tes2, name: 'Ben Stokes', position: 'Owner Taxfirm' },
  { image: tes3, name: 'Ben Stokes', position: 'Owner Taxfirm' },
  { image: tes4, name: 'Ben Stokes', position: 'Owner Taxfirm' },
  { image: tes5, name: 'Ben Stokes', position: 'Owner Taxfirm' },
  { image: tes2, name: 'Ben Stokes', position: 'Owner Taxfirm' },
]

export const slider2: TestimonialType[] = [
  { image: tes2 },
  { image: tes3 },
  { image: tes4 },
  { image: tes5 },
  { image: tes2 },
  { image: tes2 },
  { image: tes3 },
  { image: tes4 },
  { image: tes5 },
  { image: tes2 },
  { image: tes2 },
  { image: tes3 },
  { image: tes4 },
  { image: tes5 },
]

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(0)
  const [nav1, setNav1] = useState<Slider>()
  const [nav2, setNav2] = useState<Slider>()
  const sliderRef1 = useRef<Slider | null>(null)
  const sliderRef2 = useRef<Slider | null>(null)

  useEffect(() => {
    setNav1(sliderRef1.current!)
    setNav2(sliderRef2.current!)
  }, [])

  const settings1 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setPreviousIndex(oldIndex)
      setActiveIndex(newIndex)
    },
  }

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="testimonial1-section-area sp1">
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="testimonial-header text-center heading2 space-margin60">
                <h5>
                  <span>
                    <Image src={logo1} alt="" />
                  </span>
                  Testimonials
                </h5>
                <div className="space20" />
                <h2 className="text-anime-style-3">Experience the Difference Through Our Clients' Eyes</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              <div className="img1 image-anime">
                <Image src={tes1} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="slider-galeria">
                <Slider ref={sliderRef2} asNavFor={nav1} {...settings2}>
                  {slider.map((item, idx) => (
                    <div key={idx} className="testimonial-slider-content-area">
                      <div className="testimonial-author-area">
                        <ul className="m-0 p-0 d-inline-flex gap-1">
                          <li>
                            <Link href="">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <FaStar />
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <FaStar />
                            </Link>
                          </li>
                        </ul>
                        <div className="space16" />
                        <Image src={quito1} alt="" className="quito1" />
                        <Image src={elements18} alt="" className="elements18" />
                        <p>
                          Partnering with AJPR World has transformed our IT Solution Their tailored solutions help streamline our operations, improve
                          cybersecurity, and drive efficiency across the board. We've experienced fewer disruptions, faster an.”
                        </p>
                      </div>
                      <div className="space60" />
                      <div className="testimonial-man-info-area">
                        <div className="man-images-text">
                          <div className="mans-img">
                            <Image src={item.image} alt="" />
                          </div>
                          <div className="man-text">
                            <Link href="/team">{item.name}</Link>
                            <div className="space12" />
                            <p>{item.position}</p>
                          </div>
                        </div>
                        <Image src={elements17} alt="" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
            <Col lg={1}>
              <div className="slider-galeria-thumbs text-center d-lg-block d-none">
                <Slider ref={sliderRef1} asNavFor={nav2} {...settings1}>
                  {slider2.map((item, idx) => (
                    <div
                      key={idx}
                      className={`testimonial3-sliders-img ${idx === activeIndex ? 'active-thumb' : idx === previousIndex ? 'previous-thumb' : ''}`}>
                      <Image src={item.image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Testimonial
