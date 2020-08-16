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
        <div>
            Lista de pokemones
            <button onClick={() => dispatch( obtenerPokemonesAccion() )}>Mostrar Pokemones</button>
            <button onClick={() => dispatch( SiguientePaginaPoke(20) )}>Siguiente </button>
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

