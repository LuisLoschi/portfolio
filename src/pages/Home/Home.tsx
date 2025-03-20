import { Container, Text, SocialMedia } from "./styles"

import { Button } from "../../components/Button";
import { Nav } from "../../components/Nav";

//Icons
import { FaLinkedinIn, FaInstagram, FaGithub  } from "react-icons/fa";

function Home()  {

    return (
      <>
        <Nav />
        <section id="home">
          <Container>
            <Text>
                <h2><span>Olá,</span> eu sou</h2>
                <h1>LUIS LOSCHI</h1>
                <p>Sou desenvolvedor com habilidades voltadas para criação de Websites, Automação de processos, Bussiness Inteligence e muito mais!</p>
              
                <Button title="Contato" />

                <SocialMedia>
                  <div className="social-icons">
                    <span><a href="https://www.linkedin.com/in/luis-loschi/" target="_blank"><FaLinkedinIn  /></a></span>
                    <span><a href="#" target="_blank"><FaInstagram /></a></span>
                    <span><a href="#" target="_blank"><FaGithub /></a></span>
                  </div>
                </SocialMedia>
              </Text>

            <div className="image-container">
              <img src="https://img.freepik.com/vetores-premium/icone-perfil-simples-cor-branco-icone_1076610-50204.jpg?semt=ais_hybrid" alt="Foto de Luis Loschi" />
            </div> 
          
          </Container>
        </section>
      </>
    )
  }
  
  export default Home
  