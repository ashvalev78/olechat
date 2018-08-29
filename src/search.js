import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.showInput = this.showInput.bind(this);
        this.setCursor = this.setCursor.bind(this);
    }

    setCursor() {
        let input = document.getElementsByClassName('search__input')[0];

        input.focus();
        input.select();
    }

    showInput() {
        let input = document.getElementsByClassName('search__input')[0];
        input.classList.toggle('show');
        input.classList.toggle('hide');
        input.value = "";
        if (input.classList.contains('show')) {
            this.setCursor();
        }
    }

    render() {
        return(
            <div className = "search">
                <input className = "search__input hide"/>
                <div onClick = {this.showInput} className = "search__icon"></div>
            </div>
        );
    }
}

export default Search;