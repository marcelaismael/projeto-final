import Footer from '../../Componentes/Footer/Footer'
import Menu from '../../Componentes/Menu/Menu'
import Img from '../../imagens/time.svg'
import './inicio.styles.css'

const Inicio = () => {
    return (
        <>
            <Menu />
            <div className='inicio-container'>
          
            <div className='Inicio-texto'>
                <h1> Sim, eu sou time REPROGRAMA!
                </h1>
            </div>
            <img className='time' src={Img} alt='o time' />
            </div>
            <Footer />
        </>
    )
}
export default Inicio