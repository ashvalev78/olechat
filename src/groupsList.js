import React, { Component } from 'react'

var groupsList = [
    {
        name: "Китайцы"
    },
    {
        name: "Русские"
    },
    {
        name: "Американцы"
    }
];


class Group extends Component {
    render() {
        return(
            <a className = "group" href="#">
                {this.props.name}
            </a>
        );
    }
}

function GetGroupsList() {
    return groupsList.map(function(item, index) {
        return <Group name = {item.name} key = {index} />;
    });
}

class GroupList extends Component {
    render() {
        return(
            <div className = "groups__list">
                <h2 className = "groups__heading">беседы</h2>
                {GetGroupsList()} 
            </div>
        );
    }
}

export default GroupList;