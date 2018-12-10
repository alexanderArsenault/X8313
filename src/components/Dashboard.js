import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matricesActions from '../actions/matricesActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import RaceCard from './Main/RaceCard';
import TabList from './General/TabList';
import RaceTab from './Races/RaceTab';
import TrackTab from './Tracks/TrackTab';


class Dashboard extends Component {
    componentWillMount() {
        this.props.matricesActions.fetchMatrices();
    }

    renderTrackTabs() {
        return this.props.matrices.map((track, index) => {
            return (
                <div key={index}>
                    <TrackTab onClick={ () => this.props.matricesActions.setTrack(track)} track={track}/>
                </div>
            );
        })
    }

    renderRaceTabs(){
        if (this.props.activeTrack === ''){
            return (
                <div> No Track Selected </div>
            )
        } else {

            return this.props.activeTrack.races.map((race, index) => {
                return (
                    <div key={index}>
                        <RaceTab onClick={() => this.props.matricesActions.setRace(race)} race={race} key={index}/>
                    </div>
                );
            })
        }
    }

    render() {

        if (!this.props.matrices){ 
            return (
                <div>
                    Loading Data
                </div>
            )
        }

        else {
            return (
                <div>
                    <TabList className="tab-list--tracks">
                        { this.renderTrackTabs() }
                    </TabList>

                    <TabList className="tab-list--races">
                        { this.renderRaceTabs() }
                    </TabList>
                    
                    <RaceCard />
                </div>
            );
        }
    }
}

Dashboard.propTypes = {
    matricesActions: PropTypes.object,
    matrices: PropTypes.array
};

function mapStateToProps(state) {
    return {
        matrices: state.matrices,
        activeTrack: state.track,
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
)(Dashboard);
