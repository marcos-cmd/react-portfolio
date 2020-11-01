import React from 'react';
import { useSpring, animated } from 'react-spring';
import Button from 'react-bootstrap/Button';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <p></p>
            <Button variant="info" href={props.code} target="_blank" rel="noopener noreferrer" block>View Code</Button>
            <Button variant="info" href={props.deploy} target="_blank" rel="noopener noreferrer" block>View Deployed App</Button>
        </animated.div>
    );

}

export default CardInfo;
