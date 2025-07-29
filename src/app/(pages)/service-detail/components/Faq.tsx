import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap'

const faq = [
  {
    question: 'How does cloud computing benefit my business?',
    answer:
      "It's recommended to review an update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as the they're available to protect against vulnerabilities, a proactive IT strategy will.",
  },
  {
    question: 'What included in IT Solution infrastructure services?',
    answer:
      "It's recommended to review an update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as the they're available to protect against vulnerabilities, a proactive IT strategy will.",
  },
  {
    question: 'How can IT solutions improve my business security?',
    answer:
      "It's recommended to review an update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as the they're available to protect against vulnerabilities, a proactive IT strategy will.",
  },
  {
    question: 'Can IT solutions help remote work capabilities?',
    answer:
      "It's recommended to review an update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as the they're available to protect against vulnerabilities, a proactive IT strategy will.",
  },
  {
    question: 'How To often should I update my IT systems?',
    answer:
      "It's recommended to review an update your IT systems regularly, at least once a year. However, software and security updates should be applied as soon as the they're available to protect against vulnerabilities, a proactive IT strategy will.",
  },
]

const Faq = () => {
  return (
    <>
      <Accordion defaultActiveKey={'1'} id="accordionExample">
        <div className="space24" />
        {faq.map((item, idx) => (
          <AccordionItem key={idx} eventKey={`${idx + 1}`} style={{ marginBottom: '24px' }}>
            <AccordionHeader as={'h2'}>{item.question}</AccordionHeader>
            <AccordionBody>
              <p>{item.answer}</p>
            </AccordionBody>
          </AccordionItem>
        ))}
        <div className="space24" />
      </Accordion>
    </>
  )
}

export default Faq
