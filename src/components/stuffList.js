import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matricesActions from '../actions/matricesActions';
import PropTypes from 'prop-types';
import React from 'react';

class stuffList extends React.Component {
    componentWillMount() {
        this.props.matricesActions.fetchMatrices();
    }

    renderData(item, index) {
        return <div key={item.index}>{item.track_title}</div>;
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
                    {
                        this.props.matrices.map((item, index) => {
                            return (
                                this.renderData(item, index)
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