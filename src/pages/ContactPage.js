import React from 'react';
import Hero from '../components/Hero';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Container fluid>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title className="c-card-title">Send Me an Email</Card.Title>
                        
                        <Button variant="info" size="lg" href="mailto:marcos.joseph.garcia@gmail.com" block><FontAwesomeIcon icon={faEnvelopeOpenText} size="5x" className="card-icon" /></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className="c-card-title">Follow me on Github</Card.Title>
                        
                        <Button variant="info" size="lg" href="https://github.com/marcos-cmd" block><FontAwesomeIcon icon={faGithub} size="5x" className="card-icon" /></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className="c-card-title">Connect with me on LinkedIn</Card.Title>
                        
                        <Button variant="info" size="lg" href="https://www.linkedin.com/in/marcosjgarcia/" block><FontAwesomeIcon icon={faLinkedin} size="5x" className="card-icon" /></Button>
                    </Card.Body>
                </Card>
            </CardDeck>
            </Container>
        </div>
    );
}

export default AboutPage;
