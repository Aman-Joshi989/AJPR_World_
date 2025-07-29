'use client'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap'

const tabContent = [
  { id: 'pills-home-tab', title: 'All' },
  { id: 'pills-profile-tab', title: 'Cyber Security' },
  { id: 'pills-contact-tab', title: 'Help Desk Solution' },
  { id: 'pills-contact1-tab', title: 'Software Development' },
  { id: 'pills-contact2-tab', title: 'Cloud Solution' },
  { id: 'pills-contact3-tab', title: 'Data Protection' },
]

const faq = [
  {
    question: 'What types of IT solutions do you offer?',
    answer:
      'We implement robust data backup and recovery solutions best protect your data and ensure business continuity in case of IT unexpected events. We provide regular updates and status .',
  },
  {
    question: 'What is your policy on data backup and recovery?',
    answer:
      'We implement robust data backup and recovery solutions best protect your data and ensure business continuity in case of IT unexpected events. We provide regular updates and status .',
  },
  {
    question: 'How can IT solutions benefit my business?',
    answer:
      'We implement robust data backup and recovery solutions best protect your data and ensure business continuity in case of IT unexpected events. We provide regular updates and status .',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We implement robust data backup and recovery solutions best protect your data and ensure business continuity in case of IT unexpected events. We provide regular updates and status .',
  },
  {
    question: 'What is the process for onboarding new client?',
    answer:
      'We implement robust data backup and recovery solutions best protect your data and ensure business continuity in case of IT unexpected events. We provide regular updates and status .',
  },
]

const Faq = () => {
  return (
    <>
      <div className="faq-inner-section-area sp1">
        <Container>
          <TabContainer defaultActiveKey="All">
            <Row>
              <Col lg={7} className="m-auto">
                <div className="heading2 text-center space-margin60">
                  <h2>Frequently Asked Question</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="faq-widget-area">
                  <Nav as={'ul'} variant="pills" id="pills-tab" role="tablist">
                    {(tabContent || []).map((item, idx) => {
                      return (
                        <NavItem as={'li'} key={idx} role="presentation">
                          <NavLink
                            as={'button'}
                            id={item.id}
                            eventKey={item.title}
                            data-bs-toggle="pill"
                            type="button"
                            role="tab"
                            aria-selected="true">
                            {item.title}
                          </NavLink>
                        </NavItem>
                      )
                    })}
                  </Nav>
                  <div className="space48" />
                  <TabContent id="pills-tabContent">
                    {(tabContent || []).map((item, idx) => {
                      return (
                        <TabPane key={idx} eventKey={item.title} id={item.id} className="fade">
                          <div className="faq-section-area">
                            <Row>
                              <Col lg={6}>
                                <div className="accordian-area">
                                  <Accordion defaultActiveKey={'1'} id="accordionExample">
                                    {faq.map((item, idx) => (
                                      <AccordionItem key={idx} eventKey={`${idx + 1}`} style={{ marginBottom: '20px' }}>
                                        <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                                        <AccordionBody>
                                          <p> {item.answer}</p>
                                        </AccordionBody>
                                      </AccordionItem>
                                    ))}
                                    <div className="space20" />
                                  </Accordion>
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="accordian-area">
                                  <Accordion id="accordionExample2">
                                    {faq.map((item, idx) => (
                                      <AccordionItem key={idx} eventKey={`${idx + 1}`} style={{ marginBottom: '20px' }}>
                                        <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
                                        <AccordionBody>
                                          <p> {item.answer}</p>
                                        </AccordionBody>
                                      </AccordionItem>
                                    ))}
                                    <div className="space20" />
                                  </Accordion>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </TabPane>
                      )
                    })}
                  </TabContent>
                </div>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </div>
    </>
  )
}

export default Faq
