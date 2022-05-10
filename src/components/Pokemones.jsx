import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {obtenerPokemonesAccion, siguientePokemonAccion,anteriorPokemosAccion,unPokeDetalleAccion} from '../redux/pokeDucks'
import Detalle from './Detalle'

const Pokemones = () => {
  
const dispatch = useDispatch()

const pokemones = useSelector(store => store.pokemones.results)
const next = useSelector(store =>store.pokemones.next)
const previous = useSelector(store =>store.pokemones.previous)
//console.log(pokemones)

  return (
    <div className='row'>
      <div className="col-md-6">
       
       <h4>Lista de pokemones</h4>
        <br />

        <div className='d-flex justify-content-between'>
        {
          pokemones.length === 0 && 
          <button onClick={() => dispatch(obtenerPokemonesAccion())} className ="btn btn-dark" >Get poke</button>
        }

        {
          next && 
          <button onClick={()=> dispatch(siguientePokemonAccion())} className='btn btn-warning'>Siguiente</button>

        }

        {
          previous && 
        <button onClick={()=> dispatch(anteriorPokemosAccion())} className='btn btn-danger'>Atras</button>
        }
        


        </div>


        <ul className="list-group mt-3">
          {
            pokemones.map(item => (
              <li key={item.name} className='list-group-item text-uppercase'>
                {item.name}
                <button 
                className="btn btn-dark btn-sm float-right "
                onClick={() => dispatch(unPokeDetalleAccion(item.url)) }
                >
                Info
                </button>
                </li>
            ))
          }
        </ul>
        </div>
        <div className="col-md-6">
          <h4>Detalle Pokemon</h4>
          <Detalle />
        </div>
        
    </div>
  )
}

export default Pokemones