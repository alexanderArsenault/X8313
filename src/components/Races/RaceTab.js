import React, { Component } from 'react';

class RaceTab extends Component {
    render(){
        return (
            <div onClick={this.props.onClick}>
                <p>
                    {this.props.race.race_id}
                </p>
            </div>
        )
    }
}

export default RaceTab