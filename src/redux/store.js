import { createReducer, combineReducer, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Importo el reducer
import pokeReducer from './pokesDucks'

const rootReducer = combineReducer({
    pokemones: pokeRecuer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ))
    return store;
}