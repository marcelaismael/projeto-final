import { Link } from "react-router-dom"
import './menu.styles.css'

 const Menu = () => {
  return(
      
          <ul className="navbar">
 <li>
                  <Link className="link" to='/'><i>Inicio</i></Link>
              </li>

              <li>
                  <Link className="link" to='/ic'><i>Ic</i></Link>
              </li>

              <li>
                  <Link className="link" to='/diagnostico'><i>Diagnóstico</i></Link>
              </li>

              <li>
                  <Link className="link" to='/dicas'><i>Dicas</i></Link>
              </li>

              <li>
                  <Link className="link" to='/autora'><i>Autora</i></Link>
              </li>
              
          </ul>
      



  )
}
export default Menu