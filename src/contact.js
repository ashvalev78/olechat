import React from 'react';

function Сontact(props) {
    return (
        <a className = "contact" href="#">
            <div className = 'contact__wrapper'>
                <img className = "contact__avatar" src = {props.img} alt = ""/>
                <div className = "contact__name">{props.name} {props.surname}</div>
            </div>
        </a>
    );
}

export default Сontact;