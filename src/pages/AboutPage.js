import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import me from '../assets/images/me.png';
import founders from '../assets/images/founders.jpg';
import CCA from '../assets/images/CCA.jpg';
import grad from '../assets/images/union-grad.jpg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
} from '@merc/react-timeline';

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
                        </Content>
                    </Col>
                </Row>
            </Container>
            <Timeline>
                <Events>
                    <TextEvent date="December 2020" text="Graduated from UC Berkeley's Coding BootCamp" />
                    <ImageEvent date="August 2020" src={founders} text="Opened Founders Hall, which has 526 beds, and a dining hall" />
                    <ImageEvent date="June 2019" src={CCA} text="Began working at California College of the Arts" />
                    <ImageEvent date="May 2019" src={grad} text="Graduated from the University of Utah with a Masters of Education in Educational Leadership and Policy"/>
                </Events>
            </Timeline>
            <Hero />

        </div>
    );
}

export default AboutPage;
