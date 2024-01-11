import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../mockup/assets/13.png';
import img2 from '../mockup/assets/14.png';
import img3 from '../mockup/assets/15.png';
import img4 from '../mockup/assets/16.png';
import img5 from '../mockup/assets/17.png';
import img6 from '../mockup/assets/18.png';

const Releases = () => {
  return (
    <div>
      <h4 className='px-4'>New Releases</h4>
      <Container fluid className="mb-4 no-gutters text-center px-5">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img1} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img2} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img3} alt="movie picture" />
          </Col>                                                    
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img4} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img5} alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src={img6} alt="movie picture" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Releases;