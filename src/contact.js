

import React, { Component } from 'react';

class Сontact extends Component {
    render () {
        return (
            <div className = "contact">
                <img className = "contact__avatar"/>
                <div className = "contact__name">{this.props.name} {this.props.surname}</div>
            </div>
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