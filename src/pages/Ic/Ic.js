import Footer from '../../Componentes/Footer/Footer'
import Menu from '../../Componentes/Menu/Menu'
import Img from '../../imagens/coracao3.svg'
import "./ic.styles.css"

const Ic = () => {
    return (
        <>
            <Menu />
            <div className='ic-container'>
           

            <div >
                
                <h2>O que é insuficiência cardíaca?</h2>
                <p>
                    A insuficiência cardíaca ocorre quando o coração se torna menos eficaz no bombeamento de sangue para o corpo. O termo "insuficiência cardíaca" pode soar bastante assustador, por isso pode ser útil pensar nisso como: “meu coração não está funcionando como deveria e precisa de auxílio para ajudar a funcionar melhor."
                    Muitas pessoas com insuficiência cardíaca podem ter uma boa qualidade de vida e viver muitos anos com pouca ou nenhum limitação, você pode ajudar muito o seu tratamento tomando seus medicamentos e fazendo mudanças no seu estilo de vida. Para algumas pessoas, outros tipos de tratamento podem ajudar, como dispositivos eletrônicos (marcapasso) ou até mesmo o transplante de coração.
                </p>
                <h3>  Possíveis causas de insuficiência cardíaca?
                Há muitas razões pelas quais a insuficiência cardíaca pode acontecer.
                    as causas mais comuns são:</h3>
                <ul>
                    
                    <li>-Ataque cardíaco ou infarto agudo do miocárdio; </li>
                    <li>-Pressão alta não controlada por muitos anos;</li>
                    <li>-Cardiomiopatia (uma doença do músculo cardíaco);</li>
                    <li>-Mal ou doença de chagas, transmitida pelo inseto barbeiro;</li>
                    <li>-Uso abusivo e prolongado de bebidas alcoólicas;</li>
                    <li>-Uma infecção viral que afeta o músculo cardíaco;</li>
                    <li>-Problemas cardíacos congênitos (problemas no coração que nascem com você);</li>
                    <li>-Um ritmo cardíaco anormal (arritmia);</li>
                    <li>-Algumas doenças pulmonares;</li>
                    <li>-Alguns tipos de tratamento contra o câncer (quimioterapia);</li>
                    <li>-Em alguns casos, a insuficiência cardíaca é de causa desconhecida;</li>

                </ul>

            </div>
            <img className='tresboneco' src={Img} alt=' 3 bonecos com o coração na mão.' />
            </div>
            <Footer/>
        </>
    )
}
export default Ic