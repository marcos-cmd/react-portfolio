import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import me from '../assets/images/me.png';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={5}>
                        <Image src={me} className="img-me" roundedCircle />
                    </Col>
                    <Col md={5}>
                        <Content>
                            <p>I am a student affairs professional currently working at California College of the Arts.</p>
                            <p>I supervise art & design students in paraprofessional leadership roles. Working with these talented students has ignited a personal passion for continuing my growth & development. The pandemic offered me quite a bit of free time while I have spent most of 2020 quarantined in San Francisco. What better time to learn new skills?</p>
                            <p>After learning the basics of coding, I decided to invest in myself and gain a deeper understanding. I leaped into a Full-Stack Web Development Bootcamp through UC Berkeley.</p>
                            <p>I am approaching my graduation date, and I am happy to say that I feel comfortable coding HTML, CSS, & JavaScript. Also, I have learned some helpful JavaScript libraries as well, including Node, React & Redux.</p>
                        </Content>
                    </Col>
                </Row>
            </Container>
            <Hero />
            <Hero />

        </div>
    );
}

export default AboutPage;
