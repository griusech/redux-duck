import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

//Importo la funcion del POkeDuks
import { obtenerPokemonesAccion } from '../redux/pokeDuks'

const Pokemones = () => {
    
    // Importo la accion del pokeDuks
    const dispatch = useDispatch()
    
    const pokemones = useSelector(store => store.pokemones.array)

    return (
        <div>
            Lista de pokemones
            <button onClick={() => dispatch( obtenerPokemonesAccion() )}>Mostrar Pokemones</button>
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

