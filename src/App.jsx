// Develop by Mario Coldor 
// #russiaisaterroriststate 
import React, { useState, useEffect } from 'react';
import './App.css';
// 1. IMPORTAÇÕES DO SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importação dos estilos nativos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Dicionário completo com os textos em Português e Inglês
const translations = {
  pt: {
    navAbout: "Sobre",
    navSkills: "Habilidades",
    navPortfolio: "Portfólio",
    navResume: "Currículo",
    navContact: "Contato",
    heroTitle: "Olá, eu sou o ",
    heroSubtitle: "Desenvolvedor de Software & Analista de Sistemas",
    heroBtn: "Ver Meus Projetos",
    aboutTitle: "Sobre Mim / Histórico",
    aboutP1: "Sou um profissional em transição consolidada para a área de Tecnologia da Informação, unindo uma sólida bagagem em Engenharia e Gestão de Projetos com mais de 20 anos de experiência na resolução de problemas complexos, liderança e gestão.",
    aboutP2: "Sempre tive forte afinidade com a tecnologia, tendo atuado diretamente no desenvolvimento de sistemas internos de CRM utilizando Visual Basic (VB), arquitetura de bancos de dados relacionais e construção de interfaces web. Minha transição é impulsionada pela graduação atual em Análise e Desenvolvimento de Sistemas e por certificações contínuas em arquitetura e infraestrutura de computação em nuvem (Google Cloud Platform).",
    skillsTitle: "Habilidades Técnicas",
    skillsCat1: "Backend & Dados",
    skillsCat2: "Frontend & Cloud",
    skillsCat3: "Metodologias & Negócios",
    skillsCat4: "Habilidades destacadas",
    portfolioTitle: "Meu Portfólio",
    portfolioSubtitle: "Aqui estão alguns dos projetos técnicos que desenvolvi ou gerenciei:",
    proj1Title: "Sistema de Gestão CRM Interno - LEGUMINA",
    proj1Desc: "Desenvolvimento e manutenção completa de um sistema de CRM corporativo utilizando Visual Basic e arquitetura de dados MySQL para controle de faturamento, cadastros de clientes e outros processos operacionais. Criação de site institucional da empresa e configuração de e-mails",
    proj2Title: "Infraestrutura Ágil em Nuvem - GOOGLE PLATFORM",
    proj2Desc: "Implementação e configuração de ambientes de desenvolvimento, redes seguras e balanceamento de carga utilizando a infraestrutura do Google Cloud Platform.",
    proj3Title: "Aplicações Interativas & Web - GITHUB",
    proj3Desc: "Estruturação de portais institucionais e landing pages focadas em performance, semântica moderna de tags (HTML5/CSS3) e otimização para mecanismos de busca (SEO).",
    contactTitle: "Contato",
    proj4Title: "Otimização e SEO de site - SANGATI BERGA",
    proj4Desc: "Avaliação e reestruturação de site da empresa, incluindo mais produtos e links relacionados a produtos complementares, sugeridos ao perfil do cliente.",
    contactSubtitle: "Estou em busca de novos desafios. Vamos conversar sobre tecnologia ou oportunidades de projetos?",
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
    heroSubtitle: "Software Developer & Systems Analyst",
    heroBtn: "View My Projects",
    aboutTitle: "About Me / History",
    aboutP1: "I am a professional in a consolidated transition to the Information Technology field, combining a solid background in Engineering and Project Management with over 20 years of experience in complex problem solving, leadership, and management.",
    aboutP2: "I have always had a strong affinity for technology, having worked directly in the development of internal CRM systems using Visual Basic (VB), relational database architecture, and web interface construction. My transition is driven by my current degree in Systems Analysis and Development and ongoing certifications in cloud computing architecture and infrastructure (Google Cloud Platform).",
    skillsTitle: "Technical Skills",
    skillsCat1: "Backend & Data",
    skillsCat2: "Frontend & Cloud",
    skillsCat3: "Methodologies & Business",
    skillsCat4: "Highlighted Skills",
    portfolioTitle: "My Portfolio",
    portfolioSubtitle: "Here are some of the technical projects I have developed or managed:",
    proj1Title: "Internal CRM Management System - LEGUMINA",
    proj1Desc: "Complete development and maintenance of a corporate CRM system using Visual Basic and MySQL data architecture for invoicing control, customer registration, and other operational processes. Creation of the company's institutional website and email configuration.",
    proj2Title: "Agile Cloud Infrastructure - GOOGLE PLATFORM",
    proj2Desc: "Implementation and configuration of development environments, secure networks, and load balancing using the Google Cloud Platform infrastructure.",
    proj3Title: "Interactive & Web Applications - GITHUB",
    proj3Desc: "Structuring institutional portals and landing pages focused on performance, modern tag semantics (HTML5/CSS3), and Search Engine Optimization (SEO).",
    proj4Title: "Website Optimization and SEO - SANGATI BERGA",
    proj4Desc: "Evaluation and restructuring of the company's website, expanding the product catalog and integrating smart links for complementary products tailored to the customer profile.",
    contactTitle: "Contact",
    contactSubtitle: "I am looking for new challenges. Let's talk about technology or project opportunities?",
    cardLocation: "Location",
    cardSocial: "Professional Networks",
    cardPhone: "Phone",
    footerText: "Developed with React, HTML5, and CSS3."
  }
};

export default function App() {
  // Estado para controlar o idioma atual (puxa do localStorage se houver)
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

  return (
    <div>
      {/* Menu de Navegação Fixo */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <span className="logo-main">Mario Antonio</span>
            <span className="logo-sub">Coldor</span>
          </a>
          <ul className="nav-menu">
            <li><a href="#sobre">{t.navAbout}</a></li>
            <li><a href="#habilidades">{t.navSkills}</a></li>
            <li><a href="#portfolio">{t.navPortfolio}</a></li>
            <li><a href="/curriculo.html" target="_blank" rel="noopener noreferrer">  {t.navResume}</a></li>
            <li><a href="#contato">{t.navContact}</a></li>
            <li>
              <button id="language-toggle" className="btn-lang" onClick={toggleLanguage}>
                {lang === "pt" ? "EN" : "PT"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Seção de Boas-Vindas (Hero Section) */}
      <header className="hero">
        <div className="hero-content">
          <h1>{t.heroTitle}<span>Mario</span></h1>
          <p>{t.heroSubtitle}</p>
          <a href="#portfolio" className="btn-primary">{t.heroBtn}</a>
        </div>
      </header>

      {/* Seção Sobre / Histórico */}
      <section id="sobre" className="section-container">
        <h2>{t.aboutTitle}</h2>
        <div className="about-content">
          <p>{t.aboutP1}</p>
          <p>
            {t.aboutP2}
            {/* O botão isolado em sua própria linha ou bloco */}
            <div style={{ marginTop: '20px' }}>
              <a href="/curriculo.html" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', marginLeft: '10px' }}>
                {t.navResume}
              </a>
            </div>
          </p>
        </div>
      </section>

      {/* Seção de Habilidades */}
      <section id="habilidades" className="section-container bg-light">
        <h2>{t.skillsTitle}</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3>{t.skillsCat1}</h3>
            <ul className="skills-buttons-list">
              <li>SQL / MySQL</li>
              <li>Java & C++</li>
              <li>PHP</li>
              <li>VBA / Visual Basic</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>{t.skillsCat2}</h3>
            <ul className="skills-buttons-list">
              <li>HTML5 & CSS3</li>
              <li>JavaScript</li>
              <li>Google Cloud Platform</li>
              <li>Infraestrutura e Redes</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>{t.skillsCat3}</h3>
            <ul className="skills-buttons-list">
              <li>Resolução de Problemas (PDCA)</li>
              <li>Tráfego WEB (SEO Google)</li>
              <li>Gerenciamento de Projetos</li>
              <li>Gestão de Equipes</li>
              <li>Normatização ISO 9000</li>
            </ul>
          </div>
          <div className="skills-category highlight-box">
            <h3>{t.skillsCat4}</h3>
            <ul className="skills-buttons-list text-center">
              <li>Trabalho em equipe</li>
              <li>Comunicação</li>
              <li>Adaptabilidade</li>
              <li>Negociação</li>
              <li>Resolução de problemas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção do Portfólio (Projetos) */}
      <section id="portfolio" className="section-container">
        <h2>{t.portfolioTitle}</h2>
        <p className="section-subtitle">{t.portfolioSubtitle}</p>
        
        {/* Container do Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Módulos ativos
          spaceBetween={30}                            // Espaço de 30px entre os cards
          navigation={true}                            // Setas de navegação nas laterais
          pagination={{ clickable: true }}             // Pontinhos de paginação embaixo
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Passa sozinho a cada 5s
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
                <span className="badge">GCP</span> <span className="badge">Cloud Compute</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Projeto 3 */}
          <SwiperSlide>
            <div className="portfolio-card">
              <div className="card-body">
                <h3>{t.proj3Title}</h3>
                <p>{t.proj3Desc}</p>
                <span className="badge">HTML5</span> <span className="badge">CSS3</span> <span className="badge">SEO</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Projeto 4 (O novo projeto agora entra em uma aba própria na mesma linha!) */}
          <SwiperSlide>
            <div className="portfolio-card">
              <div className="card-body">
                <h3>{t.proj4Title}</h3>
                <p>{t.proj4Desc}</p>
                <span className="badge">HTML5</span> <span className="badge">SEO</span> <span className="badge">UX</span>
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