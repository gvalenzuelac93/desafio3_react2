import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Pokemon, PokeDetalle } from './views'
import PokeContextProvider from './context/PokeContext'
import Navegacion from './components/Navegacion'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <Router>
      <>
      <Navegacion />
        <PokeContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='/pokemon/:name' element={<PokeDetalle />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </PokeContextProvider>
      </>
    </Router>
  )
}

export default App