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
  name: string
  position: string
  company?: string
  testimonial: string
  rating: number
}

export const slider: TestimonialType[] = [
  {
    image: tes2,
    name: 'Abhishek Nirman',
    position: 'Owner',
    company: 'Dwaparyug Foundation',
    testimonial: "Partnering with AJPR World has transformed our IT infrastructure. Their tailored solutions help streamline our operations, improve cybersecurity, and drive efficiency across the board. We've experienced fewer disruptions and faster response times.",
    rating: 5
  },
  {
    image: tes3,
    name: 'Tanishk Kaur',
    position: 'Owner',
    company: 'Tarot Tanishk',
    testimonial: "The level of expertise and professionalism shown by AJPR World is exceptional. They understood our unique challenges and delivered solutions that exceeded our expectations. Our productivity has increased by 40%.",
    rating: 5
  },
  // {
  //   image: tes4,
  //   name: 'Pankaj Sammal',
  //   position: 'Owner',
  //   company: 'Pankaj Sammal Arts',
  //   testimonial: "AJPR World's comprehensive approach to IT management has been game-changing for us. Their proactive monitoring and swift problem resolution have minimized downtime and kept our operations running smoothly 24/7.",
  //   rating: 4
  // },
  // {
  //   image: tes5,
  //   name: '',
  //   position: 'Operations Manager',
  //   company: 'DataFlow Systems',
  //   testimonial: "Working with AJPR World has been one of the best decisions we've made. Their cloud migration strategy saved us 30% on infrastructure costs while improving our system performance dramatically.",
  //   rating: 5
  // },
  // {
  //   image: tes2,
  //   name: 'David Thompson',
  //   position: 'Founder',
  //   company: 'StartupHub',
  //   testimonial: "As a growing startup, we needed scalable IT solutions. AJPR World provided exactly what we needed - flexible, cost-effective services that grow with our business. Their support team is always available.",
  //   rating: 5
  // },
]

export const slider2: TestimonialType[] = [
  ...slider,
  ...slider,
  ...slider, // Extended for more thumbnails
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

  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <li key={i}>
          <Link href="">
            <FaStar style={{ color: i <= rating ? '#ffc107' : '#e0e0e0' }} />
          </Link>
        </li>
      )
    }
    return stars
  }

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
                    <Image src={logo1} alt="Company Logo" />
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
                <Image src={tes1} alt="Testimonial main image" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="slider-galeria">
                <Slider ref={sliderRef2} asNavFor={nav1} {...settings2}>
                  {slider.map((item, idx) => (
                    <div key={idx} className="testimonial-slider-content-area">
                      <div className="testimonial-author-area">
                        <ul className="m-0 p-0 d-inline-flex gap-1">
                          {renderStars(item.rating)}
                        </ul>
                        <div className="space16" />
                        <Image src={quito1} alt="Quote icon" className="quito1" />
                        <Image src={elements18} alt="Design element" className="elements18" />
                        <p>{item.testimonial}</p>
                      </div>
                      <div className="space60" />
                      <div className="testimonial-man-info-area">
                        <div className="man-images-text">
                          <div className="mans-img">
                            <Image src={item.image} alt={item.name} />
                          </div>
                          <div className="man-text">
                            <Link href="/team">{item.name}</Link>
                            <div className="space12" />
                            <p>{item.position}</p>
                            {item.company && (
                              <>
                                <div className="space8" />
                                <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: '500' }}>
                                  {item.company}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                        {/* <Image src={elements17} alt="Design element" /> */}
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
                      <Image src={item.image} alt={`${item.name} thumbnail`} />
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