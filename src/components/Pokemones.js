import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

//Importo la funcion del POkeDuks
import { obtenerPokemonesAccion } from '../redux/pokeDuks'
import { SiguientePaginaPoke } from '../redux/pokeDuks';

const Pokemones = () => {
    
    // Importo la accion del pokeDuks
    const dispatch = useDispatch()
    
    const pokemones = useSelector(store => store.pokemones.array)

    return (
        <div className="container">

        <div className="p-3 mb-2 bg-info text-white text-center">
            <h4>Lista de pokemones</h4>
        </div>

            <button className="btn btn-success m-2" onClick={() => dispatch( obtenerPokemonesAccion() )}>Mostrar Pokemones</button>
            <button className="btn btn-success m-2"onClick={() => dispatch( SiguientePaginaPoke(20) )}>Siguiente </button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones

