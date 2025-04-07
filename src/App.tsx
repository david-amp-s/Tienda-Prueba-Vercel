import Header from './components/Header'
import SliderLimpieza from './components/SliderLimpieza'
import SliderDecorativo from './components/sliderProductos'
import './styles/app.css' 
import "./styles/index.css"

function App() {

  return (
    <>
      <div className='contenedor_tienda'>
        <Header />
          <div className='contenedor_productos'>
            <SliderLimpieza/>
            <SliderDecorativo/>
          </div>
      </div>
    </>
  )
}

export default App
