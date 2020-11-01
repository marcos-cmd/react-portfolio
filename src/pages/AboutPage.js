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
                    <Col>
                        <Content>
                            <p>I am a student affairs professional currently working at California College of the Arts.</p>
                            <p>I supervise art & design students in paraprofessional leadership roles. My time working with these talented students has ignited a personal passion to continue my own growth & development. The pandemic offered me quite a bit of free time while I have spent most of 2020 quarantined in San Francisco. What better time to learn new skills?</p>
                            <p>As I learned more about coding and web development, I took a leap and enrolled in a Full-Stack Web Development Bootcamp through UC Berkeley.</p>
                            <p>I am approaching my graduation date, and I am happy to say that I am feeling quite comfortable coding in HTML, CSS, & JavaScript. I have also learned some helpful JS libraries as well, including Node, React & Redux.</p>
                        </Content>
                    </Col>
                </Row>
            </Container>
            
                
           
        </div>
    );
}

export default AboutPage;
