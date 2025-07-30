'use client'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import img2 from '@/assets/img/all-images/others/others-img2.png'
import mail2 from '@/assets/img/icons/mail2.svg'
import phn2 from '@/assets/img/icons/phn2.svg'
import logo1 from '@/assets/img/icons/sub-logo1.svg'
import time2 from '@/assets/img/icons/time2.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const social = [
  { image: mail2, title: 'Our Email', description: 'ajprworld@gmail.com' },
  { image: phn2, title: 'Phone', description: '+91 9220970755' },
  { image: time2, title: 'Schedule', description: 'Sunday-Fri: 9 AM – 6 PM' },
]

// ✅ Yup validation schema
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone must be a number'),
  email: yup.string().email('Invalid email').required('Email is required'),
  service: yup.string().required('Service type is required'),
  message: yup.string().required('Message is required'),
})

const Contact = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    setLoading(true)
    try {
      const res = await fetch('/api/submit-contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        alert('Message sent successfully!')
        reset()
      } else {
        alert('Something went wrong.')
      }
    } catch (error) {
      console.error(error)
      alert('Server error.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-inner-area sp1">
      <Container>
        <Row>
          <Col lg={10} className="m-auto">
            <div className="heading2 text-center">
              <h5>
                <span><Image src={logo1} alt="" /></span>
                Have Questions? Reach Out!
              </h5>
              <div className="space20" />
              <h2>Let's Discuss Your IT Needs</h2>
            </div>
            <div className="space40" />
            <Row>
              {social.map((item, idx) => (
                <Col key={idx} lg={4} md={6}>
                  <div className="widget-contactbox">
                    <div className="icons">
                      <Image src={item.image} alt="" />
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <Link href="mailto:ajprworld@gmail.com">{item.description}</Link>
                    </div>
                  </div>
                  <div className="space30 d-lg-none d-block" />
                </Col>
              ))}
            </Row>
            <div className="space60" />
            <Row>
              <Col lg={6}>
                <div className="img1 image-anime">
                  <Image src={img2} alt="" width={526} height={575} className="img-fluid" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="contact-author-boxarea">
                  <h3>Get In Touch Now</h3>
                  <div className="space8" />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="First Name*" {...register('firstName')} />
                          {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="Last Name*" {...register('lastName')} />
                          {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="Phone Number*" {...register('phone')} />
                          {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="email" placeholder="Email Address*" {...register('email')} />
                          {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area">
                          <select
                            {...register('service')}
                            defaultValue=""
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              marginTop: '20px',
                              border: '1px solid #ccc',
                              borderRadius: '6px',
                              fontSize: '1rem',
                              outline: 'none',
                              backgroundColor: '#fff',
                              color: '#333',
                              appearance: 'none',
                            }}
                          >
                            <option value="" disabled>Select a Service Type*</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Cloud Solutions">Cloud Solutions</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="IT Consulting">IT Consulting</option>
                            <option value="DevOps Services">DevOps Services</option>
                            <option value="Software Testing">Software Testing</option>
                            <option value="Data Analytics">Data Analytics</option>
                            <option value="Inventory Management">Inventory Management</option>
                            <option value="Client Servicing Support">Client Servicing Support</option>
                            <option value="Order Processing">Order Processing</option>
                            <option value="Operation Monitoring">Operation Monitoring</option>
                          </select>
                          {errors.service && (
                            <p style={{ color: 'red', marginTop: '6px', fontSize: '0.875rem' }}>
                              {errors.service.message}
                            </p>
                          )}
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area">
                          <textarea placeholder="Your Message" {...register('message')} />
                          {errors.message && <p className="text-danger">{errors.message.message}</p>}
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="space32" />
                        <div className="input-area">
                          <button type="submit" className="vl-btn2" disabled={loading}>
                            {loading ? 'Sending...' : <>Get Started Now <FaArrowRight /></>}
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
