import {combineReducers} from 'redux' 
import eventReducer from '../../features/events/eventReducer'
import testReducer from '../../features/sandbox/testReducer'
/*Turns an object whose values are different reducer functions, into a single reducer function. It will call every child reducer, and gather their
results into a single state object, whose keys correspond to the keys of the passed reducer functions */

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
});

export default rootReducer