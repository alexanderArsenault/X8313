import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matricesActions from '../../actions/matricesActions';
import ReactDataGrid from 'react-data-grid';

class RaceCard extends Component {
    render(){
        if (this.props.activeRace === ''){
            return (
                <p>No Race Selected</p>
            )
        } else {
            return (
                <div> {this.props.activeRace.race_id} </div>
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

