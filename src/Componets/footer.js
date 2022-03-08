import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

export default function footer() {
    return (

        <Row className='row'>

            <Col md={5} sm={5}>
                <p className='copyright text-center'>
                    © 2023 by Kutman Eshenkulov. <br />
                    Proudly created with HTML/CSS
                </p>
            </Col>

            <Col md={2} sm={2} className="col-4 text-center">

                <h5>Call</h5>
                <a href="tel:+996500225119"><FontAwesomeIcon icon={faPhone} /></a>

            </Col>

            <Col md={2} sm={2} className="col-4 text-center">

                <h5>Write</h5>
                <a href="mailto:kutman.eshenkulov@alatoo.edu.kg"><FontAwesomeIcon icon={faEnvelope} /></a>

            </Col>

            <Col md={2} sm={2} className="col-4 text-center">

                <h5>Follow</h5>

                <ul className="list-unstyled">

                    <li>
                        <a href="https://www.instagram.com/_.kutman/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.pinterest.com/kutmanesenkulov/_saved/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} /></a>
                        <a href="https://www.facebook.com/kutman.eshenkulov.50/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    </li>

                </ul>

            </Col>

        </Row>

    );
}