import axios from 'axios';

// Constates
const dataInicial = {
    array: []
}


// Types
const OBTENER_POKE_EXITO = 'OBTENER_POKE_EXITO';

// Reducer
export default function pokeReducer(state = dataInicial, action) {
    switch(action.type) {
        case OBTENER_POKE_EXITO:
            return {
                ...state,
                array: action.payload
            }

            default:
                return state
    }
}


// Acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        dispatch({
            type: OBTENER_POKE_EXITO,
            payload: res.data.results
        })

    } catch (error) {
        console.log(error)
    }
}

