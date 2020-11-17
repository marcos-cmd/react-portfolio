import React from 'react';
import Hero from '../components/Hero';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Container fluid>
                <CardDeck>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title className="c-card-title">Send Me an Email</Card.Title>
                            <Button variant="info" size="lg" href="mailto:marcos.joseph.garcia@gmail.com" block><FontAwesomeIcon icon={faEnvelopeOpenText} size="5x" className="card-icon" /></Button>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title className="c-card-title">Follow me on Github</Card.Title>
                            <Button variant="info" size="lg" target='_blank' href="https://github.com/marcos-cmd" block><FontAwesomeIcon icon={faGithub} size="5x" className="card-icon" /></Button>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title className="c-card-title">Connect with me on LinkedIn</Card.Title>
                            <Button variant="info" size="lg" target='_blank' href="https://www.linkedin.com/in/marcosjgarcia/" block><FontAwesomeIcon icon={faLinkedin} size="5x" className="card-icon" /></Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck className="lowerDeck">
                    <Card border="light">
                        <Card.Body>
                            <Card.Title className="c-card-title">View my Resume</Card.Title>

                            <Button variant="info" size="lg" href="mailto:marcos.joseph.garcia@gmail.com" block><FontAwesomeIcon icon={faFileDownload} size="5x" className="card-icon" /></Button>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                It is true that the more one learns the less one knows.
                        </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    James Baldwin in <cite target='_blank' href="https://www.theparisreview.org/interviews/2994/the-art-of-fiction-no-78-james-baldwin">The Paris Review</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title className="c-card-title">Follow me on Medium</Card.Title>
                            <Button variant="info" size="lg" target='_blank' href="https://medium.com/@marcos-cmd" block><FontAwesomeIcon icon={faMedium} size="5x" className="card-icon" /></Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            <Hero />
        </div>
    );
}

export default AboutPage;
