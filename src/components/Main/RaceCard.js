import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matricesActions from '../../actions/matricesActions';

import RaceMatrix from './RaceMatrix';

class RaceCard extends Component {;

    render(){
        if (this.props.activeRace === ''){
            return (
                <p>No Race Selected</p>
            )
        } else {
            return (
                <RaceMatrix />
            )
        }
    }
} 

function mapStateToProps(state) {
    return {
        activeRace: state.race,
    };
}

function mapDispatchToProps(dispatch) {
    return {
       matricesActions: bindActionCreators(matricesActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceCard);