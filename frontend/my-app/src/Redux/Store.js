import { applyMiddleware, combineReducers,legacy_createStore} from 'redux';
import { reducer as PatientReducer } from './PatientReducer/reducer';
import {reducer as AuthReducer} from './AuthReducer/reducer';
import {thunk} from 'redux-thunk';

const combineStore = combineReducers({PatientReducer,AuthReducer});
export const store = legacy_createStore(combineStore,applyMiddleware(thunk));