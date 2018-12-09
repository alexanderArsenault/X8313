import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matricesActions from '../actions/matricesActions';
import PropTypes from 'prop-types';
import React from 'react';

class stuffList extends React.Component {
    componentWillMount() {
        this.props.matricesActions.fetchMatrices();
    }

    renderTracks(track, index) {
        return (
            <div key={index}>
            <h3> {track.track_title} </h3>
                {
                    track.races.map((race) => {
                        return (
                            this.renderRaces(race)
                        );
                    })
                }
            </div>
        )
    }
    
    renderRaces(race) {
        return (
            <div key={race}>{race.race_id}</div>
        )
    }

    render() {
        if(!this.props.matrices){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="">
                <h1>Hello World</h1>
                <h2>
                    Track Titles
                </h2>
                    {
                        this.props.matrices.map((item, index) => {
                            return (
                                this.renderTracks(item, index)
                            );
                        })
                    }
                </div>
            )
        }
    }
}

stuffList.propTypes = {
    matricesActions: PropTypes.object,
    matrices: PropTypes.array
};

function mapStateToProps(state) {
    return {
        matrices: state.matrices
    };
}

function mapDispatchToProps(dispatch) {
    return {
       matricesActions: bindActionCreators(matricesActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(stuffList);