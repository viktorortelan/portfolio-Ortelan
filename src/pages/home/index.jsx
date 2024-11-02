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

            <div className="seccao2">
                <div className="protecao">
                    <h1>-SKILLS</h1>
                    <div className="carde1">
                        <div className="card">
                            <img src="/assets/images/bxl-html5 1.png" alt="" />
                            <h1>HTML</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-css3 1.png" alt="" />
                            <h1>CSS</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-react 1.png" alt="" />
                            <h1>REACT-JS</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-sass 1.png" alt="" />
                            <h1>SASS</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-nodejs 1.png" alt="" />
                            <h1>NODE-JS</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-javascript 1.png" alt="" />
                            <h1>JAVASCRIPT</h1>
                        </div>
                    </div>
                    <div className="carde2">
                        <div className="card">
                            <img src="/assets/images/server.png" alt="" />
                            <h1>SQL SERVER</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/workbe.png" alt="" />
                            <h1>SQL WORCKBENCH</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/aws.png" alt="" />
                            <h1>AWS</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/giit.png" alt="" />
                            <h1>GIT</h1>
                        </div>
                        <div className="card">
                            <img src="/assets/images/git.png" alt="" />
                            <h1>GITHUB</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="seccao3">
                <div className="protecao">
                    <h1>-PROJETOS</h1>
                    <div className="cartao">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}