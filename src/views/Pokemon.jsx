import { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { useNavigate } from 'react-router-dom'

const Pokemon = () => {
  const { nombresPokemon, seleccionPokemon, handleSelectorPokemon, mayuscula } = useContext(PokeContext)
  const navigate = useNavigate()
  const detalle = () => {
    if (seleccionPokemon) {
      navigate(`/pokemon/${seleccionPokemon}`)
    } else {
      window.alert('Debes seleccionar algún Pokemon')
    }
  }
  return (
    <>
      <div className='pokemon'>
        <h1>Selecciona un Pokémon</h1>
        <section className='seccionPoke'>
          <select className='selectorPokemon' value={seleccionPokemon} onChange={({ target }) => handleSelectorPokemon(target.value)}>
            <option value='' disabled>Pokémones</option>
            {nombresPokemon.map(({ name }) => (
              <option key={name} value={name}>{mayuscula(name)}</option>
            ))}
          </select>
          <article>
            <button className='btn btn-primary' onClick={detalle}><strong>Ver Detalle</strong></button>
          </article>
        </section>
      </div>
    </>
  )
}

export default Pokemon