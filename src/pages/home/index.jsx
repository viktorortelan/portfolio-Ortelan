import './index.scss';
import { Link } from 'react-router-dom';

export default function Home () {

    return(
        <div className="Portfolio">
            <div className="cabecalho">
                <div className="esquerda">
                    <h1>VICTOR <span>ORTELAN();</span></h1>
                </div>
                <div className="menu">
                    <button>HOME</button>
                    <button>SKILLS</button>
                    <button>PROJETOS</button>
                    <button>SOBRE MIM</button>
                    <button>CONTATOS</button>
                </div>
                <div className="direita">
                    <Link to='/'><img src="/assets/images/git.png" alt="" /></Link>
                    <Link to='/'><img src="/assets/images/bxl-linkedin 1.png" alt="" /></Link>
                    <Link to='/'><img src="/assets/images/bxl-instagram 1.png" alt="" /></Link>
                </div>
            </div>

            <div className="seccao1">
                <div className="card">
                <div className="esquerda">
                    <h1>Hello World, eu sou o </h1>
                    <h1 id='nome'>Victor</h1>
                    <h1 id='cinza'>Full Stack Developer.</h1>
                    <h1>Bem vindo ao meu Portfolio</h1>
                </div>
                <img src="/assets/images/viktor.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}