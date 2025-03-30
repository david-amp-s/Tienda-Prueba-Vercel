import Card from './components/Card'
import Header from './components/Header'
import './styles/app.css' 
import "./styles/index.css"

function App() {

  return (
    <>
      <div className='contenedor_tienda'>
        <Header />
          <div className='contenedor_productos'>
            <div className='contenedor_limpieza'>
              <p>limpieza</p>
              <Card/>
            </div>
            <div className='contenedor_decoracion'>
              <p>decoracion</p>
              <Card/>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
