import React, { Component } from 'react';

class TrackTab extends Component {
    render(){
        return (
            <div onClick={this.props.onClick}>
                <h3>{this.props.track.track_symbol} - {this.props.track.track_title}</h3>
            </div>
        )
    }
}

export default TrackTab