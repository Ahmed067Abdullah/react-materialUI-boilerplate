import { combineReducers } from 'redux';
import sample1Reducer from '../containers/sample1/Sample1.reducer';

export default combineReducers({
  sample1: sample1Reducer
});

