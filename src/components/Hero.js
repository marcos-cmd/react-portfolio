import React from 'react';
import { useSpring, animated } from 'react-spring';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    
    const style = useSpring({opacity: 1, from: {opacity: 0}}, {opacity: 0, from: {opacity: 1}}, {opacity: 1, from: {opacity: 0}});

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
            <Row className="justify-content-center py-5" >
                <Col md={8} sm={12}>
                    { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                </Col>
                <Col md={8} sm={12}>
                    { props.subTitle && <animated.h3 style={style} className="display-4 font-weight-light">{props.subTitle}</animated.h3> }
                </Col>
                <Col md={8} sm={12}>
                    { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    );
}
export default Hero;
