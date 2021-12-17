import './header.styles.css'
import LogoImage from '../../imagens/bike.svg'

const Header = (props) => {
 return (
    <div className="Tratamento">
      <h1>{props.children}</h1>
      <img className='bicicleta' src={LogoImage} alt='bike' />
    </div>
  )
}

export default Header