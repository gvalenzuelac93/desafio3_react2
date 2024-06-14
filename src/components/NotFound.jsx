import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <Container className='text-center col-12 pt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src='notfound.png' alt='404' width='650px' />
        <button className='btn btn-primary' onClick={handleClick}><strong>Volver al Home</strong></button>
      </Container>
    </>
  )
}

export default NotFound