import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Marcos Garcia',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Marcos J. Garcia',
        subTitle: 'Hi there! ',
        text: 'I am a student affairs professional currently working at California College of the Arts. This site will document my journey learning the world of web development. It will showcase the projects I work on and offer opportunities for you to connect with me.'
      },
      about: {
        title: 'About Me'
      },
      Contact: {
        title: 'Connect with Me'
      },
    }
  }
  render() {
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Marcos Garcia</Navbar.Brand>

             <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>

               </Nav>
             </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          {/* <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
