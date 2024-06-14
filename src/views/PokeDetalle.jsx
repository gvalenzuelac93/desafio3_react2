import { useParams } from 'react-router-dom'
import CardPoke from '../components/Card'
import { useContext, useEffect } from 'react'
import { PokeContext } from '../context/PokeContext'

const PokeDetalle = () => {
  const { name } = useParams()
  const { obtenerDatos } = useContext(PokeContext)
  useEffect(() => {
    obtenerDatos(name)
  }, [name, obtenerDatos])
  return (
    <>
      <div className='detalles'><CardPoke /></div>
    </>
  )
}

export default PokeDetalle