import {createStore, applyMiddleware, compose} from 'redux';
import Reducers from '../Reducers/Reducers';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

export default Store;
