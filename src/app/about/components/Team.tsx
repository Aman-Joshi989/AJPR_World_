import bg1 from '@/assets/img/all-images/bg/service-bg1.png'
import team1 from '@/assets/img/all-images/team/team-img1.png'
import team2 from '@/assets/img/all-images/team/team-img2.png'
import team3 from '@/assets/img/all-images/team/team-img3.png'
import share from '@/assets/img/icons/share1.svg'
import logo from '@/assets/img/icons/sub-logo1.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

export type MemberType = {
  image: StaticImageData
  name: string
  role: string
}

export type SocialIconType = {
  url: string
  icon: IconType
}

export const icons: SocialIconType[] = [
  { url: '', icon: FaFacebookF },
  { url: '', icon: FaLinkedinIn },
  { url: '', icon: FaInstagram },
  { url: '', icon: FaYoutube },
]

export const member = [
  { image: team1, name: 'Aman Joshi', role: 'Data Analyst Specialist' },
  { image: team2, name: 'Priyank Rakholia', role: 'Business Development Manager' },
  { image: team3, name: 'Jatin Vaishnav', role: 'SDE-3' },
]

const Team = () => {
  return (
    <>
      <div
        className="team1-section-area sp2"
        style={{ backgroundImage: `url(${bg1.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="team-header space-margin60 heading2 text-center">
                <h5>
                  <span>
                    <Image src={logo} alt="" />
                  </span>
                  our best team
                </h5>
                <div className="space20" />
                <h2 className="text-anime-style-3">Meet Our Expert Team</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {member.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in" data-aos-duration={800}>
                <div className="team-author-boxarea">
                  <div className="img1 image-anime">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="content-area">
                    <div className="text">
                      <Link href="/team">{item.name}</Link>
                      <div className="space8" />
                      <p>{item.role}</p>
                    </div>
                    <div className="icons">
                      <Link href="">
                        <Image src={share} alt="" />
                      </Link>
                    </div>
                  </div>
                  <ul>
                    {icons.map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <li key={idx}>
                          <Link href="">
                            <Icon />
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Team
