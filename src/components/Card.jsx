import { useContext } from 'react'
import { Card, CardBody, CardImg, CardTitle, Row, Col } from 'react-bootstrap'
import { PokeContext } from '../context/PokeContext'
import { useNavigate } from 'react-router-dom'

const CardPoke = () => {
  const { datosPoke } = useContext(PokeContext)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/pokemon')
  }
  return (
    <>
      <section className='pokemonCard'>
        <Card className='Card'>
          <Row className='no-gutters'>
            <Col md={6}>
              <article className='img'>
                <CardImg className='pokemonCardImg' src={datosPoke.src} alt={datosPoke.name} />
              </article>
            </Col>
            <Col md={6}>
              <article className='pokemonDetails'>
                <CardBody className='card_body'>
                  <CardTitle className='text-capitalize'><strong className='text-capitalize'>Name</strong>:{' '}{datosPoke.name}</CardTitle>
                  <ul>
                    <li><strong className='text-capitalize'>Pokemon N°</strong>:{' '}{datosPoke.id}</li>
                    {datosPoke.stats?.map((stat, i) => (
                      <li key={i}>
                        <strong className='text-capitalize'>{stat.name}</strong>:{' '}{stat.base}
                      </li>
                    ))}
                    <li><strong className='text-capitalize'>Types</strong>:{' '}<span className='text-capitalize'>{datosPoke.type1}{' '}{datosPoke.type2}</span></li>
                  </ul>
                </CardBody>
              </article>
            </Col>
          </Row>
        </Card>
      </section>
      <button className='btn btn-primary' onClick={handleClick}><strong>Volver a Selección</strong></button>
    </>
  )
}

export default CardPoke