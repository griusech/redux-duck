import axios from 'axios';

// Constates
const dataInicial = {
    array: [],
    offset: 0
}


// Types
const OBTENER_POKE_EXITO = 'OBTENER_POKE_EXITO';
const SIGUIENTE_POKE_EXITO = 'SIGUIENTE_POKE_EXITO';

// Reducer
export default function pokeReducer(state = dataInicial, action) {
    switch(action.type) {
        case OBTENER_POKE_EXITO:
            return {
                ...state,
                array: action.payload
            }
        case SIGUIENTE_POKE_EXITO:
            return {
                ...state,
                array: action.payload.array, 
                offset: action.payload.offset
            }


            default:
                return state
    }
}


// Accion Obtener Pokemon
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    const { offset } = getState().pokemones;

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
        dispatch({
            type: OBTENER_POKE_EXITO,
            payload: res.data.results
        })

    } catch (error) {
        console.log(error)
    }
}

// Accion Siguiente Pagina
export const SiguientePaginaPoke = (numero) => async (dispatch, getState) => {

    const { offset } = getState().pokemones;
    const siguiente = offset + numero

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${siguiente}`)
        dispatch({
            type: SIGUIENTE_POKE_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}


