import Footer from '../../Componentes/Footer/Footer'
import Menu from '../../Componentes/Menu/Menu'
import Img from '../../imagens/bike.svg'
import './dicas.styles.css'

const Dicas= () => {
    return(
        <>
            <Menu />
           <div className='container-dicas'>
            <h1>Dicas</h1>
            <div className="texto">
            
            <p>
            <h3> Como posso me cuidar? </h3>
                As pessoas podem monitorar os sintomas da IC de forma eficaz e melhorar a qualidade de vida fazendo mudanças em seus estilos de vida.
                <li>Seguem algumas orientações que você pode seguir:</li>
                <li>Pesar-se regurlarmente;</li>
                <li>Observar a quantiade de líquido ingerido diariamente;</li>
                <li>Controle da pressão arterial;</li>
                <li>Reduzir o sal;</li>
                <li>Evitar a ingestão de álcool;</li>
                <li>Manter um peso corporal saudavél;</li>
                <li>Evitar uso de cigarro;</li>
                <li>Manter-se ativo fisicamente;</li>
            </p>
            <img className='bike' src={Img} alt=' bike' />
            </div> 
            </div>
            <Footer/>
        </>
        
    )
} 
export default Dicas