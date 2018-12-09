import initialState from './initialState';
import {FETCH_MATRICES, RECEIVE_MATRICES} from '../actions/allActions';

export default function matrices(state = initialState.matrices, action) {
  let newState;

  switch (action.type) {
    case FETCH_MATRICES:
      console.log('FETCH_MATRICES Action')
      return action;

    case RECEIVE_MATRICES:
      newState = action.matrices;
      console.log('RECEIVE_MATRICES Action')
      return newState;
      
    default:
      return state;
  }
}
