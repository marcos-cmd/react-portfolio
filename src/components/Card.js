import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props) {
    return (
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} code={props.item.code} deploy={props.item.deploy} /> }
        </div>
    );
}

export default Card;
