import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matricesActions from '../../actions/matricesActions';

class RaceMatrix extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [],
        };
    }

    componentDidMount(){
        this.setState({
            columns: this.updateColumns(),
        });
    }

    render(){
        return (
            <div>
                <div> Race: {this.props.activeRace.race_id} </div>
                <table>
                    {this.renderHeaders()}
                    {this.renderRows()}
                </table>
            </div>
        )
    }

    renderHeaders(){
        return (
            <tr className="matrix__row">
                {
                this.updateColumns().map( item => {
                    return (
                        <th className="matrix__row-item">{item.title}</th>
                    )
                })
                }
            </tr>
        )
    }

    renderRows(){
        return this.props.activeRace.risk_matrix.map( item => {
            return (
                <tr className="matrix__row">
                    <td className="matrix__row-item">{item.horse}</td>
                    <td className="matrix__row-item">{item.place1}</td>
                    <td className="matrix__row-item">{item.place2}</td>
                    <td className="matrix__row-item">{item.place3}</td>
                    <td className="matrix__row-item">{item.place4}</td>
                </tr>
            )
        });
    }

    updateColumns(){
        let reducedRows = this.props.activeRace.risk_matrix.slice(0,4);
        let placementrows = reducedRows.map((entry, index) => {
            return { title: parseInt(index + 1) }
        });
        return [{key: 'horse', title: 'Horse'}, ...placementrows]
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
)(RaceMatrix);