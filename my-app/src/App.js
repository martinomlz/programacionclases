import './App.css'
import Caja from './componentes/caja'
import Cajados from './componentes/Cajados'
import Cajatres from './componentes/Cajatres'

function App() {

  return (
    <>
      <h1>Kakaroto el ultimo 10</h1>
    <div className='container'>

      <Caja />

      <Cajados />

      <Cajatres />


  
    </div>
    </>
  )
}

export default App