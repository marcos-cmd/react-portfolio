import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { init } from 'ityped';

import './HomePage.css';


function HomePage(props) {

    useEffect(() => {
        const type = document.querySelector('#type')
        // init(type, { showCursor: false, typeSpeed: 100, backSpeed: 45, strings: [':-)', 'Hello There!', 'Welcome to my site!', 'Learn about who I am...', 'Send me a message...', 'Check out my work!'] })
        init(type, { showCursor: false, typeSpeed: 100, backSpeed: 45, strings: ["You're looking at the website of a...", "Designer", "Developer", "Educator", "and Clown 🤡", "How does that make you feel?", "Let me know 😜", "Why are you still here?", "Check out my portfolio!"] })

    });
       
    
    return(
       <div>
            <Hero title={props.title}  text={props.text} />
                    <div class="subtitle" id="type"></div>
            <Hero />
            <Hero />
            <Hero />
            <Hero />
        </div>
    );

}

export default HomePage;

