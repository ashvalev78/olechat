

import React, { Component } from 'react';

class Сontact extends Component {
    render () {
        return (
            <a className = "contact" href="#">
                <div className = 'contact__wrapper'>
                    <img className = "contact__avatar" src = {this.props.img} />
                    <div className = "contact__name">{this.props.name} {this.props.surname}</div>
                </div>
            </a>
        );
    }
} 

// class Contact extends Component {
//     render () {
//         return (
//             <div className = "contact">
//                 <img className = "contact__avatar"/>
//                 <div className = "contact__name">Контакт</div>
//             </div>
//         );
//     }
// }

export default Сontact;