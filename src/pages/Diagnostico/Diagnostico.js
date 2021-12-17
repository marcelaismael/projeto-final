import Footer from '../../Componentes/Footer/Footer'
import Menu from '../../Componentes/Menu/Menu'
import Img from '../../imagens/comendo.svg'
import './diagnostico.styles.css'

const Diagnostico = () => {
    return (
        <>
            <Menu />
            
            <div className='diagnostico' >
            
                <div className='diagnostico-texto'>
                <h1>Diagnóstico</h1>
                <p>
                    O diagnóstico é dado por meio de anamnese e exame físico, podendo ser auxiliado por exames complementares como: Eletrocardiograma, raio-x do tórax e ecocardiograma.

                    Sinais e Sintomas

                    Os principais sinais e Sintomas da insuficiência cardíaca são:

                    - Falta de ar, principalmente quando você está tentando realizar uma atividade, como caminhar, subir escadas ou até tomar banho;
                    - Inchaço (edema) dia tornozelos, pés, pernas ou abdome;
                    - Fadiga (sensação de cansaço incomum);

                    Esses sinais e sintomas podem surgir de repente, ou ocorrer aos poucos, durante semanas ou meses.
                </p>
                </div>
                <div className='comendo'> <img src={Img} alt='comendo' /> </div>
                
            </div>
           
                <Footer />
            
        </>
    )
}
export default Diagnostico