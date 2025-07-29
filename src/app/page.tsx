import Footer from '@/components/layout/Footer/Footer'
import TopBar from '@/components/layout/TopBar'
import { Metadata } from 'next'
import logo from '@/assets/img/logo/fav-logo1.png'
import About from '@/components/About'
import Blog from '@/components/Blog'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import Serviece from '@/components/Serviece'
import Solutions from '@/components/Solutions'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import Work from '@/components/Work'

export const metadata: Metadata = {
  title: 'AJPR World- Technology & It Solutions Services',
  icons: {
    icon: logo.src,
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
    </>
  )
}

export default page
