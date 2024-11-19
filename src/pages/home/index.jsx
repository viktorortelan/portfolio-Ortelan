import './index.scss';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default function Home() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [statusEnvio, setStatusEnvio] = useState('');

    const secao1Ref = useRef(null);
    const secao2Ref = useRef(null);
    const secao3Ref = useRef(null);
    const secao4Ref = useRef(null);

   
    const rolarParaSecao1 = () => {
        secao1Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

   
    const rolarParaSecao2 = () => {
        secao2Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    
    const rolarParaSecao3 = () => {
        secao3Ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    const rolarParaSecao4 = () => {
        secao3Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const enviarEmail = (e) => {
        e.preventDefault();
        
        if (!nome || !email || !mensagem) {
            toast.error('Preencha todos os campos antes de enviar.');
            return;
          }
 
            emailjs
            .send('service_tbyp8rg', 'template_tgnjn9d',  {
                name: nome,  
                email: email, 
                message: mensagem        
              }, '-wQMmw4ZnM8XRpUwL')
            .then(
                (response) => {
                toast.success('Email enviado com sucesso:', response.status, response.text);
                },
                (error) => {
                toast.error('Erro ao enviar email:', error);
                }
            );
    };


    return (
        <div className="Portfolio">
            <div className="cabecalho" ref={secao1Ref}>
                <div className="esquerda">
                    <h1>VICTOR <span>ORTELAN();</span></h1>
                </div>
                <div className="menu">
                    <button onClick={rolarParaSecao1}>HOME</button> 
                    <button onClick={rolarParaSecao2}>SKILLS</button> 
                    <button onClick={rolarParaSecao3}>SOBRE MIM</button> 
                    <button onClick={rolarParaSecao4}>CONTATOS</button>
                </div>
                <div className="direita">
                <a 
                href="https://github.com/viktorortelan" 
                target="_blank" 
                rel="noopener noreferrer">
                <img src="/assets/images/git.png" alt="GitHub" />
            </a>
            <a 
                href="https://www.linkedin.com/in/joaovictorortelandonascimento/" 
                target="_blank" 
                rel="noopener noreferrer">
                <img src="/assets/images/bxl-linkedin 1.png" alt="LinkedIn" />
            </a>
            <a 
                href="https://www.instagram.com/viktorortelan/profilecard/?igsh=MTE4bWFyNjVkN2ZzZA%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer">
                <img src="/assets/images/bxl-instagram 1.png" alt="Instagram" />
            </a>
                </div>
            </div>

            <div className="seccao1" > 
                <div className="card">
                    <div className="esquerda">
                        <h1>Hello World, eu sou o </h1>
                        <h1 id='nome'>Viktor</h1>
                        <h1 id='cinza'>Full Stack Developer.</h1>
                        <h1>Bem vindo ao meu Portfolio</h1>
                    </div>
                    <img src="/assets/images/viktor.jpg" alt="" />
                </div>
            </div>

            <div className="seccao2" ref={secao2Ref}> 
                <div className="protecao">
                    <h1>-SKILLS</h1>
                    <div className="carde1">
                        <div className="card">
                            <img src="/assets/images/bxl-html5 1.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-css3 1.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-react 1.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-sass 1.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-nodejs 1.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/bxl-javascript 1.png" alt="" />
                        </div>
                    </div>
                    <div className="carde2">
                        <div className="card">
                            <img src="/assets/images/server.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/workbe.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/aws.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/giit.png" alt="" />
                        </div>
                        <div className="card">
                            <img src="/assets/images/git.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="seccao3" ref={secao3Ref}> 
                <div className="protecao">
                    <h1>-SOBRE MIM</h1>
                    <div className="cartao">
                        <div className="esquerda">
                            <img src="/assets/images/viktor.jpg" alt="" />
                        </div>
                        <div className="direita">
                            <p>Olá, sou Victor Ortelan, desenvolvedor full stack com experiência em tecnologias como JavaScript, HTML, CSS, React, Node.js, Git, AWS, e MySQL. Tenho habilidades tanto no front-end quanto no back-end, e já participei de um projeto para uma startup, onde desenvolvi soluções práticas e eficientes para o negócio</p>
                            <p>Atualmente, estou expandindo meus conhecimentos e começando a estudar Java para aprimorar ainda mais minhas habilidades. Gosto de enfrentar desafios e estou sempre buscando novas maneiras de inovar e agregar valor aos projetos em que atuo.</p>
                            <p>Com uma abordagem focada em entregar resultados de qualidade e usabilidade, estou sempre aberto a aprender novas tecnologias e a colaborar em equipes que buscam o sucesso. Além disso, faço uso de ferramentas como MySQL Workbench para gerenciamento de banco de dados.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="seccao4" ref={secao4Ref}>
                <div className="protecao">
                    <h1>VICTOR <span>ORTELAN();</span></h1>
                    <div className="infos">
                        <div className="paginas">
                            <button onClick={rolarParaSecao1}>HOME</button> 
                            <button onClick={rolarParaSecao2}>SKILLS</button> 
                            <button onClick={rolarParaSecao3}>SOBRE MIM</button> 
                            <button onClick={rolarParaSecao4}>CONTATOS</button>
                        </div>

                        <div className="redes">
                        <a 
                            href="https://github.com/viktorortelan" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <p>GitHub</p>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/joaovictorortelandonascimento/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                             <p>Linkedin</p>
                        </a>
                        <a 
                            href="https://www.instagram.com/viktorortelan/profilecard/?igsh=MTE4bWFyNjVkN2ZzZA%3D%3D" 
                            target="_blank" 
                            rel="noopener noreferrer">
                             <p>Instagram</p>
                        </a>
                        </div>

                        <div className="contatos">
                            <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)}/>
                            <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="text" placeholder='Mensagem'  value={mensagem} onChange={e => setMensagem(e.target.value)}/>
                            <button onClick={enviarEmail}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
