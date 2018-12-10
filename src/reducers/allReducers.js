import {combineReducers} from 'redux';
import matrices from './matricesReducer';
import track from './trackReducer';
import race from './raceReducer';

const rootReducer = combineReducers({
  matrices,
  track,
  race,
});

export default rootReducer;