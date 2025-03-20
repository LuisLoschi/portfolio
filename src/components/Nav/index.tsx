import { useEffect, useState } from "react";

import { NavContainer, Logo, Links } from "./styles";
import { Container } from "../../styles/global";


export function Nav() {
    const [isSrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "home";
    
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
    
                // Verifica se o scroll está dentro da seção
                if (window.scrollY >= sectionTop - window.innerHeight / 3 && window.scrollY < sectionTop + sectionHeight - window.innerHeight / 3) {
                    currentSection = section.getAttribute("id") || "home";
                }
            });
    
            setActiveSection(currentSection);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <NavContainer className={isSrolled ? 'scrolled' : ''}>
            <Container>
                <Logo>
                    <a href="#home"><span>My</span>Portfolio</a>
                </Logo>
                <Links>
                    <ul>
                        <li className={activeSection === "home" ? "active" : ""}>
                            <a href="#home">Início</a>
                        </li>
                        <li className={activeSection === "sobre" ? "active" : ""}>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li className={activeSection === "trabalhos" ? "active" : ""}>
                            <a href="#trabalhos">Trabalhos</a>
                        </li>
                        <li className={activeSection === "contato" ? "active" : ""}>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </Links>
            </Container>
        </NavContainer>
    );
}

