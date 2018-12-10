import initialState from './initialState';
import { SET_TRACK } from '../actions/allActions';

export default function track(state = initialState.activeTrack, action) {
  let newState;

  switch (action.type) {
    case SET_TRACK:
      console.log('SET_TRACK Action')
      newState = action.activeTrack;
      return newState;

    default:
      return state;
  }
}
