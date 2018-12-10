import initialState from './initialState';
import { SET_RACE } from '../actions/allActions';

export default function race(state = initialState.activeRace, action) {
  let newState;

  switch (action.type) {
    case SET_RACE:
      console.log('SET_RACE Action')
      newState = action.activeRace
      return newState;
      
    default:
      return state;
  }
}
