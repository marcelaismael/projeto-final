import { TiSocialGithub, TiSocialLinkedin } from 'react-icons/ti'
import Footer from '../../Componentes/Footer/Footer'
import Menu from '../../Componentes/Menu/Menu'
import Img from '../../imagens/caminhando.svg'
import './autora.styles.css'

const Autora = () => {
  return (
    <>
      <Menu />
      <div className='container-autora'>
        <div className='texto-autora' >
        <h1>Autora</h1>
        <div className="texto"></div>
        <h3> Sobre mim...</h3>
          <p>
            Olá, meu nome é Marcela, tenho 35 anos e esse é o meu primeiro contato com tecnologia, e que contanto!
            Participar de um curso oferecido pela Reprograma é viver um misto de emoções, realizações e sonhos.
            Nunca imaginei entrar em um mundo tão cheio de oportunidades, dando o primeiro passo num local virtual tão cheio de empatia e sororidade.
            Espero ter oportunidade de crescimento nesse mundo tão cruel que faz mulher ter medo de sair na rua, medo de usar a roupa que tem e gosta, que faz a gente ter medo de dizer quem ama e quem é.
            Meu lugar é um lugar de oportunidades e sonhos.

            Falei no meu projeto sobre cardiopatia pois um dia ela me paralizou, hoje me sinto capaz de realizar tarefas que um dia já não fazia, hoje me sinto completamente capaz de ter um trabalho e realizar funções que um dia eu pensei ser imporssível.
            Obrigada vida, Obrigada Deus, obrigada família, obrigada Reprograma.

          </p>


          

        </div>
        <div className='caminhando'> <img src={Img} alt='caminhando' /> </div>

      
      </div>
      <div className="redes-sociais">
          <p className="siga">Siga-me nas redes sociais:</p>
          <p>e-mail: marcela.ismsilva@outlook.com</p>
          <div>
            <a href="https://github.com/marcelaismael" target="_blank" rel="noreferrer">
              <TiSocialGithub size={40} color="rgb(56, 56, 56)" />
            </a>
            <a href="https://linkedin.com/in/marcelaismael" target="_blank" rel="noreferrer">
              <TiSocialLinkedin size={40} color="rgb(56, 56, 56) " />
            </a>
          </div>
        </div>
      <Footer />
    </>
  )
}
export default Autora