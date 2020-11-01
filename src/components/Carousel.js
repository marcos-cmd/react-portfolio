import React from 'react';
import trivia from '../assets/images/trivia_game.png';
import weather from '../assets/images/weather_dashboard.png';
import password from '../assets/images/password_generator.png';
import takenote from '../assets/images/take_the_note.png';
import employee from '../assets/images/template_engine.png';

import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Trivia Game',
                    subTitle: 'My first Group Project using JavaScript',
                    imgSrc: trivia,
                    link: 'https://github.com/marcos-cmd/Project1-Trivia-App',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Weather Dashboard',
                    subTitle: 'Check the Weather in your favorite city',
                    imgSrc: weather,
                    link: 'https://github.com/marcos-cmd/weather-dashboard',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Password Generator',
                    subTitle: 'Create a password using letters, numbers, and symbols',
                    imgSrc: password,
                    link: 'https://github.com/marcos-cmd/Password-Generator',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Take the Note',
                    subTitle: 'Write a note and save it for later using this application',
                    imgSrc: takenote,
                    link: 'https://github.com/marcos-cmd/Take-the-Note',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Employee Tracker',
                    subTitle: 'Use this command line application to keep track of your employees',
                    imgSrc: employee,
                    link: 'https://github.com/marcos-cmd/12-employee-tracker',
                    selected: false
                },
            ]
        }    
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
    
        items[id].selected = items[id].selected ? false : true;
    
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }
    
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    
    render() {
        return(
            <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
            </Container>
        );
    }
}

export default Carousel;
