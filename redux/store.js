import {createStore, combineReducers} from 'redux';
import FiveReducer from './reducers/fivereducer';
import Tworeducer from './reducers/tworeducer';

const rootReducer = combineReducers({
    two: Tworeducer,
    five:FiveReducer
})

export const store =createStore(rootReducer);