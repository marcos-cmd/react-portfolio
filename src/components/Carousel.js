import React from 'react';
import trivia from '../assets/images/trivia_game.png';
import weather from '../assets/images/weather_dashboard.png';
import password from '../assets/images/password_generator.png';
import takenote from '../assets/images/take_the_note.png';
import employee from '../assets/images/template_engine.png';
import directory from '../assets/images/directory.png';
import search from '../assets/images/saved.png';
import workout from '../assets/images/dashboard.png';
import roaming from '../assets/images/roaming.png';
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
                    title: 'Roaming Rona',
                    subTitle: 'Final group project for bootcamp. We created an application that tracks Covid-19. My main contributions were backend features and data visualizations.',
                    imgSrc: roaming,
                    code: 'https://github.com/marcos-cmd/roaming-rona-fork',
                    deploy: 'https://roaming-rona-fork.herokuapp.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Trivia Game',
                    subTitle: 'My first Group Project using JavaScript',
                    imgSrc: trivia,
                    code: 'https://github.com/marcos-cmd/Project1-Trivia-App',
                    deploy: 'https://marcos-cmd.github.io/Project1-Trivia-App/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather Dashboard',
                    subTitle: 'Check the Weather in your favorite city',
                    imgSrc: weather,
                    code: 'https://github.com/marcos-cmd/weather-dashboard',
                    deploy: 'https://marcos-cmd.github.io/weather-dashboard/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Password Generator',
                    subTitle: 'Create a password using letters, numbers, and symbols',
                    imgSrc: password,
                    code: 'https://github.com/marcos-cmd/Password-Generator',
                    deploy: 'https://marcos-cmd.github.io/Password-Generator/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Take the Note',
                    subTitle: 'Write a note and save it for later using this application',
                    imgSrc: takenote,
                    code: 'https://github.com/marcos-cmd/Take-the-Note',
                    deploy: 'https://take-the-note.herokuapp.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Employee Tracker',
                    subTitle: 'Use this command line application to keep track of your employees',
                    imgSrc: employee,
                    code: 'https://github.com/marcos-cmd/Employee-tracker',
                    deploy: 'https://github.com/marcos-cmd/12-employee-tracker#preview-application',
                    selected: false
                },
                {
                    id: 6,
                    title: 'React Google Books Search',
                    subTitle: 'Use this react application to search for books and save them to your "read later" list',
                    imgSrc: search,
                    code: 'https://github.com/marcos-cmd/React-google-books-search',
                    deploy: 'https://mysterious-journey-20132.herokuapp.com/',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Workout Tracker',
                    subTitle: 'This application tracks workouts using a Mongo database with a Mongoose schema and handles routes with Express',
                    imgSrc: workout,
                    code: 'https://github.com/marcos-cmd/Workout-tracker',
                    deploy: 'https://warm-plateau-27217.herokuapp.com/',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Employee Directory',
                    subTitle: 'This react application breaks the UI into components, manages component state, and responds to user events',
                    imgSrc: directory,
                    code: 'https://github.com/marcos-cmd/Employee-directory',
                    deploy: 'https://marcos-cmd.github.io/Employee-directory/',
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
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
