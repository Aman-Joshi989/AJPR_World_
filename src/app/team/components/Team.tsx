import Pagination from '@/app/(pages)/components/Pagination'
import team10 from '@/assets/img/all-images/team/team-img10.png'
import team11 from '@/assets/img/all-images/team/team-img11.png'
import team12 from '@/assets/img/all-images/team/team-img12.png'
import team13 from '@/assets/img/all-images/team/team-img13.png'
import team14 from '@/assets/img/all-images/team/team-img14.png'
import team15 from '@/assets/img/all-images/team/team-img15.png'
import team16 from '@/assets/img/all-images/team/team-img16.png'
import team8 from '@/assets/img/all-images/team/team-img8.png'
import team9 from '@/assets/img/all-images/team/team-img9.png'
import share from '@/assets/img/icons/share1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa6'

const icons = [
  { url: '', icon: FaLinkedinIn },
]

const member = [
  { iamge: team8, name: 'Aman Joshi', role: 'Data Analyst Specialist' },
  { iamge: team9, name: 'Priyank Rakholia', role: 'Business Development Manager' },
  { iamge: team10, name: 'Jatin Vaishnav', role: 'SDE-3' },
  // { iamge: team11, name: 'SR. Alex Robertson', role: 'Head Of Cybersecurity' },
  // { iamge: team12, name: 'Shelia Abernathy', role: 'Software Development' },
  // { iamge: team13, name: 'Devin Romaguera', role: 'Data Analytics Specialist' },
  // { iamge: team14, name: 'SR. Alex Robertson', role: 'Head Of Cybersecurity' },
  // { iamge: team15, name: 'Shelia Abernathy', role: 'Software Development' },
  // { iamge: team16, name: 'Devin Romaguera', role: 'Data Analytics Specialist' },
]

const Team = () => {
  return (
    <>
      <div className="teaminner-section-area sp2">
        <Container>
          <Row>
            {member.map((item, idx) => (
              <Col key={idx} lg={4} md={6}>
                <div className="team-author-boxarea">
                  <div className="img1 image-anime">
                    <Image src={item.iamge} alt="" />
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
                            <Icon className="fa-brands" />
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Col>
            ))}

            <Pagination />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Team
