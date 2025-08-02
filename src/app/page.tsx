import { Metadata } from 'next'
import logo from '@/assets/img/logo/fav-logo1.png'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import Serviece from '@/components/Serviece'
import Solutions from '@/components/Solutions'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import Work from '@/components/Work'
import Contact from './contact/components/Contact'

export const metadata: Metadata = {
  title: 'AJPR World - Technology & It Solutions Services',
  keywords: ['', '', '', '', ''],
  icons: {
    icon: "/favicon.ico",
  },
}

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Serviece />
      <Solutions />
      <Work />
      <Testimonial />
      <Team />
      <Blog />
      <Contact />
    </>
  )
}

export default page
