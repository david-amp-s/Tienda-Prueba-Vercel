import Header from './components/Header'
import ModalCarrito from './components/ModalCarrito'
import SliderLimpieza from './components/SliderLimpieza'
import './styles/app.css' 
import "./styles/index.css"

function App() {

  return (
    <>
      <div className='contenedor_tienda'>
        <Header />
          <div className='contenedor_productos'>
            <SliderLimpieza/>
          </div>
      </div>

      <ModalCarrito/>
    </>
  )
}

export default App
