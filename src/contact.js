import React from 'react';

function Сontact(props) {
    return (
        <a className = "contact" href="#">
            <div className = 'contact__wrapper'>
                <div className = "contact__info">
                    <img className = "contact__avatar" src = {props.img} alt = ""/>
                    <div className = "contact__name">{props.name} {props.surname}</div>
                </div>
                <div className = "contact__phone">{props.phone}</div>
            </div>
        </a>
    );
}

export default Сontact;