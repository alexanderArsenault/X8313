import {combineReducers} from 'redux';
import matrices from './matricesReducer';

const rootReducer = combineReducers({
  matrices
});

export default rootReducer;