// Develop by Mario Coldor 
// #russiaisaterroriststate 
import React, { useState, useEffect } from 'react';
import './App.css';
//  IMPORTAÇÕES DO SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importação dos estilos nativos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Dicionário completo com os textos em Português e Inglês
const translations = {
  pt: {
// CATEGORIAS DO MENU
    navAbout: "Sobre",
    navSkills: "Habilidades",
    navPortfolio: "Portfólio",
    navResume: "Currículo",
    navContact: "Contato",
// CATEGORIAS DE BOAS VINDAS
    heroTitle: "Olá, eu sou o ",
    heroSubtitle: "Desenvolvedor de Software | Analista de Sistemas | Full Stack (React/PHP/SQL) | Cloud (GCP) | Ex-Engenheiro",
    heroBtn: "Ver Meus Projetos",
// CATEGORIAS SEÇÃO SOBRE
    aboutTitle: "Sobre Mim / Histórico",
    aboutP1: "Sou um profissional em transição consolidada para a área de Tecnologia da Informação, unindo uma sólida bagagem em Engenharia e Gestão de Projetos com mais de 20 anos de experiência na liderança de equipes, melhoria contínua e resolução de problemas complexos através do método PDCA. Minha afinidade com a tecnologia é de longa data: sempre atuei diretamente no desenvolvimento de sistemas internos de CRM utilizando Visual Basic (VB), modelagem de arquitetura de bancos de dados relacionais e construção de interfaces web.",
    aboutP2: "Atualmente, amplio essa atuação técnica através da graduação em Análise e Desenvolvimento de Sistemas e por certificações contínuas em arquitetura e infraestrutura de computação em nuvem (Google Cloud Platform), com foco em ambientes escaláveis e redes seguras. Com histórico consolidado nos mercados de varejo corporativo e B2B, combino proficiência técnica sênior com visão analítica para arquitetar soluções que geram eficiência operacional e real crescimento de negócios.",
// CATEGORIAS DE HABILIDADES
    skillsTitle: "Minhas Habilidades",
    skillsCat1: "Backend & Dados",
    skillsCat1A: "SQL / MySQL",
    skillsCat1B: "Java & C++",
    skillsCat1C: "PHP",
    skillsCat1D: "VBA / Visual Basic",
    skillsCat2: "Frontend & Cloud",
    skillsCat2A: "HTML5 & CSS3",
    skillsCat2B: "JavaScript",
    skillsCat2C: "Google Cloud Platform",
    skillsCat2D: "Infraestrutura e Redes",
    skillsCat3: "Metodologias & Gestão",
    skillsCat3A: "Resolução de Problemas (PDCA)",
    skillsCat3B: "Tráfego WEB (SEO Google)",
    skillsCat3C: "Gerenciamento de Projetos",
    skillsCat3D: "Gestão de Equipes",
    skillsCat3E: "Normatização ISO 9000",
    skillsCat4: "Habilidades Destacadas",
    skillsCat4A: "Trabalho em equipe",
    skillsCat4B: "Comunicação",
    skillsCat4C: "Negociação",
    skillsCat4D: "Resolução de conflitos",
    skillsCat5: "Infraestrutura & Hardware",
    skillsCat5A: "Montagem e diagnóstico",
    skillsCat5B: "Redes locais (LAN/WLAN)",
    skillsCat5C: "Dimensionamento de hardware",
    skillsCat5D: "Substituição de componentes",
// CATEGORIAS DE PORTIFÓLIO
    portfolioTitle: "Meu Portfólio",
    portfolioSubtitle: "Aqui estão alguns dos projetos técnicos que desenvolvi ou gerenciei:",
    proj1Title: "Sistema de Gestão CRM Interno - LEGUMINA",
    proj1Desc: "Desenvolvimento e manutenção completa de um sistema de CRM corporativo utilizando Visual Basic e arquitetura de dados MySQL para controle de faturamento, cadastros de clientes e outros processos operacionais. Criação de site institucional da empresa e configuração de e-mails",
    proj2Title: "Estatísticas do Processo Industrial - VICUNHA TEXTIL",
    proj2Desc: "Criação de banco de dados e interface para importação, cadastro e consultas dos dados de metrologia no laboratório. Utilizando as estatísticas do processo para monitoramento, identificação de melhorias e de correções.",
    proj3Title: "Otimização e SEO de site - SANGATI BERGA",
    proj3Desc: "Avaliação e reestruturação de site da empresa, incluindo mais produtos e links relacionados a produtos complementares, sugeridos ao perfil do cliente.",
    proj4Title: "Aplicações Interativas & Web - GITHUB",
    proj4Desc: "Estruturação de portais institucionais e landing pages focadas em performance, semântica moderna de tags (HTML5/CSS3) e otimização para mecanismos de busca (SEO).",
    proj5Title: "Infraestrutura Ágil em Nuvem - GOOGLE PLATFORM",
    proj5Desc: "Implementação e configuração de ambientes de desenvolvimento, redes seguras e balanceamento de carga utilizando a infraestrutura do laboratório Google Cloud Platform.",
    proj6Title: "MarioPlay PRO - Hub de Jogos com React",
    proj6Desc: "Desenvolvimento e implantação de um portal moderno de jogos web, migrando componentes interativos como Bingo e Jogo da Forca para Next.js para praticar habilidades avançadas em React, roteamento e arquitetura frontend responsiva.",
// CATEGORIAS DE CONTATO
    contactTitle: "Contato",
    contactSubtitle: "Vamos conversar sobre tecnologia ou oportunidades de projetos?",
    cardLocation: "Localização",
    cardSocial: "Redes Profissionais",
    cardPhone: "Telefone",
    footerText: "Desenvolvido com React, HTML5 e CSS3."
  },
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navResume: "Resume",
    navContact: "Contact",
    heroTitle: "Hi, I am ",
    heroSubtitle: "Software Developer | Systems Analyst | Full Stack (React/PHP/SQL) | Cloud (GCP) | Former Engineer",
    heroBtn: "View My Projects",
    aboutTitle: "About Me / History",
    aboutP1: "I am a professional successfully transitioning into Information Technology, blending a solid background in Engineering and Project Management with over 20 years of experience in leading multi-disciplinary teams, continuous improvement, and complex problem-solving through the PDCA method. My affinity for technology runs deep: I have long been directly involved in developing internal corporate CRM systems using Visual Basic (VB), modeling relational database architectures, and building web interfaces.",
    aboutP2: "Currently, I am expanding my technical capabilities through a degree in Systems Analysis and Development and continuous certifications in cloud architecture and infrastructure (Google Cloud Platform), focusing on scalable environments and secure networks. With a proven track record in B2B and retail corporate environments, I combine senior-level technical proficiency with an analytical mindset to architect solutions that drive operational efficiency and real business growth.",
// SKILLS CATEGORIES ENGLISH
    skillsTitle: "My Skills",
    skillsCat1: "Backend & Data",
    skillsCat1A: "SQL / MySQL",
    skillsCat1B: "Java & C++",
    skillsCat1C: "PHP",
    skillsCat1D: "VBA / Visual Basic",
    skillsCat2: "Frontend & Cloud",
    skillsCat2A: "HTML5 & CSS3",
    skillsCat2B: "JavaScript",
    skillsCat2C: "Google Cloud Platform",
    skillsCat2D: "Infrastructure & Networks",
    skillsCat3: "Methodologies & Management",
    skillsCat3A: "Problem Solving (PDCA Method)",
    skillsCat3B: "Web Traffic (Google SEO)",
    skillsCat3C: "Project Management",
    skillsCat3D: "Team Leadership",
    skillsCat3E: "ISO 9000 Compliance",
    skillsCat4: "Core Skills",
    skillsCat4A: "Teamwork",
    skillsCat4B: "Communication",
    skillsCat4C: "Negotiation",
    skillsCat4D: "Conflict Resolution",
    skillsCat5: "Physical Infrastructure & Hardware",
    skillsCat5A: "Assembly & Diagnostics",
    skillsCat5B: "Local Networks (LAN/WLAN)",
    skillsCat5C: "Hardware Sizing",
    skillsCat5D: "Component Replacement",
// CATEGORIAS DE PORTIFÓLIO EM INGLÊS
    portfolioTitle: "My Portfolio",
    portfolioSubtitle: "Here are some of the technical projects I have developed or managed:",
    proj1Title: "Internal CRM Management System - LEGUMINA",
    proj1Desc: "Complete development and maintenance of a corporate CRM system using Visual Basic and MySQL data architecture for invoicing control, customer registration, and other operational processes. Deployment of the institutional website and enterprise email configuration.",
    proj2Title: "Industrial Process Statistics - VICUNHA TEXTIL",
    proj2Desc: "Creation of a database and interface for laboratory metrology data importing, registration, and querying. Utilizing process statistics for monitoring, continuous improvement, and corrective action identification.",
    proj3Title: "Website Optimization & SEO - SANGATI BERGA",
    proj3Desc: "Evaluation and restructuring of the company's website, expanding the product catalog and integrating smart links for complementary products tailored to the customer profile.",
    proj4Title: "Interactive & Web Applications - GITHUB",
    proj4Desc: "Structuring institutional portals and landing pages focused on high performance, modern tag semantics (HTML5/CSS3), and Search Engine Optimization (SEO).",
    proj5Title: "Agile Cloud Infrastructure - GOOGLE PLATFORM",
    proj5Desc: "Implementation and configuration of development environments, secure networks, and load balancing using the Google Cloud Platform infrastructure laboratory.",
    proj6Title: "MarioPlay PRO - React Gaming Hub",
    proj6Desc: "Development and deployment of a modern web gaming hub, migrating interactive components like Bingo and Hangman to Next.js to practice advanced React skills, routing, and responsive frontend architecture.",
// Seção contato
    contactTitle: "Contact",
    contactSubtitle: "Let's talk about technology or project opportunities?",
    cardLocation: "Location",
    cardSocial: "Professional Networks",
    cardPhone: "Phone",
    footerText: "Developed with React, HTML5, and CSS3."
  }
};

export default function App() {
  // Estado para controlar o idioma atual 
  const [lang, setLang] = useState(localStorage.getItem("preferredLanguage") || "pt");

  // Atualiza o localStorage sempre que o idioma mudar
  useEffect(() => {
    localStorage.setItem("preferredLanguage", lang);
  }, [lang]);

  // Função para alternar o idioma
  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "pt" ? "en" : "pt"));
  };

  // Atalho para acessar as traduções do idioma atual
  const t = translations[lang];

  // Criar o estado para controlar se o menu está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState(false);

  // Função auxiliar para fechar o menu ao clicar em um link
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
    {/* Menu de Navegação Fixo com Menu Hambúrguer */}
      <header className="navbar-header">
        <nav className="navbar-container">
          {/* Logo Blindada */}
          <a href="#" className="nav-logo" onClick={closeMenu}>
            <span className="logo-main">Mario Antonio</span>
            <span className="logo-sub">Coldor</span>
          </a>

          {/* O Botão Hambúrguer (Aparece só no celular) */}
          <button 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Lista de Links - Ganha a classe 'active' se o menu estiver aberto */}
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#sobre" onClick={closeMenu}>{t.navAbout}</a></li>
            <li><a href="#habilidades" onClick={closeMenu}>{t.navSkills}</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>{t.navPortfolio}</a></li>
            <li>
              <a href="/curriculo.html" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                {t.navResume}
              </a>
            </li>
            <li><a href="#contato" onClick={closeMenu}>{t.navContact}</a></li>
            <li>
              <button id="language-toggle" className="btn-lang" onClick={() => { toggleLanguage(); closeMenu(); }}>
                {lang === "pt" ? (
                  <>
                    <span role="img" aria-label="English" style={{ marginRight: '5px' }}>🇺🇸</span> EN
                  </>
                ) : (
                  <>
                    <span role="img" aria-label="Português" style={{ marginRight: '5px' }}>🇧🇷</span> PT
                  </>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Seção de Boas-Vindas (Hero Section) */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t.heroTitle}<span>Mario</span></h1>
          <p>{t.heroSubtitle}</p>
          <a href="#portfolio" className="btn-primary">{t.heroBtn}</a>
        </div>
      </section>

      {/* Seção Sobre / Histórico */}
      <section id="sobre" className="section-container">
        <h2>{t.aboutTitle}</h2>
        <div className="about-content">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}
            <div style={{ marginTop: '20px' }}>
              <a href="/curriculo.html" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', marginLeft: '10px' }}>
                {t.navResume}
              </a>
            </div>
          </p>
        </div>
      </section>
      {/*-------------------------------------------------------------------------*/}

      {/* Seção de Habilidades */}
      <section id="habilidades" className="section-container bg-light">
        <h2>{t.skillsTitle}</h2>
        <div className="skills-grid">
          {/*------------------------------------------- */}
          <div className="skills-category">
            <h3>{t.skillsCat1}</h3>
            <ul className="skills-buttons-list">
              <li>{t.skillsCat1A}</li>
              <li>{t.skillsCat1B}</li>
              <li>{t.skillsCat1C}</li>
              <li>{t.skillsCat1D}</li>
            </ul>
          </div>
          {/*------------------------------------------- */}
          <div className="skills-category">
            <h3>{t.skillsCat2}</h3>
            <ul className="skills-buttons-list">
              <li>{t.skillsCat2A}</li>
              <li>{t.skillsCat2B}</li>
              <li>{t.skillsCat2C}</li>
              <li>{t.skillsCat2D}</li>
            </ul>
          </div>
          {/*------------------------------------------- */}
          <div className="skills-category">
            <h3>{t.skillsCat3}</h3>
            <ul className="skills-buttons-list">
              <li>{t.skillsCat3A}</li>
              <li>{t.skillsCat3B}</li>
              <li>{t.skillsCat3C}</li>
              <li>{t.skillsCat3D}</li>
              <li>{t.skillsCat3E}</li>
            </ul>
          </div>
          {/*------------------------------------------- */}          
          <div className="skills-category">
            <h3>{t.skillsCat4}</h3>
            <ul className="skills-buttons-list text-center">
              <li>{t.skillsCat4A}</li>
              <li>{t.skillsCat4B}</li>
              <li>{t.skillsCat4C}</li>
              <li>{t.skillsCat4D}</li>
            </ul>
          </div>
          {/*------------------------------------------- */}
          <div className="skills-category">
            <h3>{t.skillsCat5}</h3>
            <ul className="skills-buttons-list text-center">
              <li>{t.skillsCat5A}</li>
              <li>{t.skillsCat5B}</li>
              <li>{t.skillsCat5C}</li>
              <li>{t.skillsCat5D}</li>
            </ul>      
          </div>
          {/*------------------------------------------- */}          
        </div>
      </section>

      {/* Seção do Portfólio (Realizações) */}
      <section id="portfolio" className="section-container">
        <h2>{t.portfolioTitle}</h2>
        <p className="section-subtitle">{t.portfolioSubtitle}</p>
        
        {/* Container do Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Módulos ativos
          spaceBetween={30}                            // Espaço de 30px entre os cards
          navigation={true}                            // Setas de navegação nas laterais
          pagination={{ clickable: true }}             // Pontinhos de paginação embaixo
          autoplay={{ delay: 15000, disableOnInteraction: false }} // Passa sozinho a cada 5s
          className="portfolio-swiper"
          breakpoints={{
            // Configurações de responsividade (Mobile / Tablet / PC)
            320: { slidesPerView: 1 },  // Em celulares exibe 1 card por vez
            768: { slidesPerView: 2 },  // Em tablets exibe 2 cards por vez
            1024: { slidesPerView: 3 }  // No PC exibe os 3 cards lado a lado na linha
          }}
        >
          {/* Projeto 1 */}
          <SwiperSlide>
            <div className="portfolio-card">
              <div className="card-body">
                <h3>{t.proj1Title}</h3>
                <p>{t.proj1Desc}</p>
                <p><a href="https://www.legumina.com.br" target="_blank" rel="noopener noreferrer" className="btn-primary">www.legumina.com.br</a></p>
                <span className="badge">VBA</span> <span className="badge">MySQL</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Projeto 2 */}
          <SwiperSlide>
            <div className="portfolio-card">
              <div className="card-body">
                <h3>{t.proj2Title}</h3>
                <p>{t.proj2Desc}</p>
                <span className="badge">VBA</span> <span className="badge">MySQL</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Projeto 3 */}
          <SwiperSlide>
            <div className="portfolio-card">
              <div className="card-body">
                <h3>{t.proj3Title}</h3>
                <p>{t.proj3Desc}</p>
                <p><a href="https://www.sangatiberga.com.br" target="_blank" rel="noopener noreferrer" className="btn-primary">www.sangatiberga.com.br</a></p>
                <span className="badge">HTML5</span> <span className="badge">CSS3</span> <span className="badge">SEO</span> <span className="badge">Sketchup</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Projeto 4 */}
          <SwiperSlide>
            <div className="portfolio-card">
              <div className="card-body">
                <h3>{t.proj4Title}</h3>
                <p>{t.proj4Desc}</p>
                <p><a href="https://github.com/Mlaantonio" target="_blank" rel="noopener noreferrer" className="btn-primary">github.com</a></p>
                <span className="badge">HTML5</span> <span className="badge">SEO</span> <span className="badge">UX</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Projeto 5 */}
          <SwiperSlide>
            <div className="portfolio-card">
              <div className="card-body">
                <h3>{t.proj5Title}</h3>
                <p>{t.proj5Desc}</p>
                <p><a href="https://www.credly.com/users/mario-luis-alves-antonio" target="_blank" rel="noopener noreferrer" className="btn-primary">credly.com</a></p>
                <span className="badge">GoogleCloud</span> <span className="badge">GCP</span> <span className="badge">CloudComputing</span> <span className="badge">DevOps</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Projeto 6 */}
          <SwiperSlide>
            <div className="portfolio-card">
              <div className="card-body">
                <h3>{t.proj6Title}</h3>
                <p>{t.proj6Desc}</p>
                <p><a href="https://marioplay.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">marioplay.vercel.app</a></p>
                <span className="badge">React</span> <span className="badge">Next.js</span> <span className="badge">MongoDB</span> <span className="badge">NoSQL</span> <span className="badge">Backend Integration</span>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="section-container bg-light">
        <h2>{t.contactTitle}</h2>
        <p className="section-subtitle">{t.contactSubtitle}</p>
        <div className="contact-cards">
          <div className="contact-card">
            <h3>{t.cardLocation}</h3>
            <p><a href="https://maps.app.goo.gl/SxFx98keFcSTh9N96" target="_blank" rel="noopener noreferrer">Fortaleza - Ceará, Brasil</a></p>
          </div>
          <div className="contact-card">
            <h3>E-mail</h3>
            <p><a href="mailto:mlantonio@msn.com">mlantonio@msn.com</a></p>
          </div>
          <div className="contact-card">
            <h3>{t.cardSocial}</h3>
            <p>
              <a href="https://www.linkedin.com/in/mlaantonio" target="_blank" rel="noopener noreferrer">LinkedIn</a> | {' '}
              <a href="https://github.com/Mlaantonio" target="_blank" rel="noopener noreferrer">GitHub</a> | {' '}
              <a href="https://www.instagram.com/mariocoldor" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>{t.cardPhone}</h3>
            <p>
              <a href="https://wa.me/5585997128493" target="_blank" rel="noopener noreferrer">Whatsapp</a> | {' '}
              <a href="tel:+5585997128493" target="_blank" rel="noopener noreferrer">Celular</a>
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <p>© 2026 Mario Luís Alves Antonio. {t.footerText}</p>
      </footer>
    </div>
  );
}