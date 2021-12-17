import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio/Inicio'
import Ic from '../pages/Ic/Ic'
import Autora from '../pages/Autora/Autora'
import Dicas from '../pages/Dicas/Dicas'
import Diagnostico from '../pages/Diagnostico/Diagnostico'

function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/ic"  component={Ic}/>
                <Route path="/autora" component={Autora}/>
                <Route path="/dicas" component={Dicas}/>
                <Route path="/diagnostico" component={Diagnostico}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Rotas