import Link from 'next/link'
import { Col } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const Pagination = () => {
  return (
    <>
      <Col lg={12}>
        <div className="space30" />
        <div className="pagination-area">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" href="" aria-label="Previous">
                  <FaAngleLeft />
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link active" href="">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">
                  ...
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="">
                  12
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link m-0" href="" aria-label="Next">
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Col>
    </>
  )
}

export default Pagination
