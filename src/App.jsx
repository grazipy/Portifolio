import {
  differentials,
  profile,
  projects,
  technologies,
} from './data/portfolioData';
import SectionTitle from './components/SectionTitle';
import ThreeHeroCanvas from './components/ThreeHeroCanvas';

function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Pular para conteúdo principal
      </a>
      <div className="app-shell">
        <header className="topbar">
          <a href="#home" className="brand">
            {profile.name}
          </a>
          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#projetos">Projetos</a>
            <a href="#experiencia">Diferenciais</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <main>
          <section id="home" className="hero section">
            <div className="hero-text">
              <p className="eyebrow">Portfólio Profissional</p>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <p className="headline">“{profile.headline}”</p>
              <div className="cta-group">
                <a href={profile.contacts.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.contacts.curriculum}>Currículo</a>
                <a href="#contato">Contato</a>
              </div>
            </div>
            <ThreeHeroCanvas />
          </section>

          <section id="sobre" className="section">
            <SectionTitle
              eyebrow="Sobre mim"
              title="Engenharia e tecnologia aplicadas"
              subtitle="Atuação prática em software, automação e integração industrial"
            />
            <p className="about-text">{profile.about}</p>
          </section>

          <section id="tecnologias" className="section">
            <SectionTitle
              eyebrow="Tecnologias"
              title="Stack multidisciplinar"
              subtitle="Ferramentas e linguagens utilizadas em projetos de engenharia e software"
            />
            <div className="grid tech-grid">
              {technologies.map((group) => (
                <article className="card" key={group.category}>
                  <h3>{group.category}</h3>
                  <ul className="badge-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="projetos" className="section">
            <SectionTitle
              eyebrow="Projetos"
              title="Soluções de impacto"
              subtitle="Projetos com foco em automação, integração de sistemas e produtividade"
            />
            <div className="grid project-grid">
              {projects.map((project) => (
                <article className="card project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.bulletPoints && (
                    <ul className="project-bullets">
                      {project.bulletPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <p className="highlight">Destaque: {project.highlight}</p>
                  <ul className="badge-list compact">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="experiencia" className="section">
            <SectionTitle
              eyebrow="Experiência & diferenciais"
              title="Visão completa do ciclo industrial e digital"
              subtitle={profile.diferencial}
            />
            <div className="pillars">
              {differentials.map((item) => (
                <div key={item} className="pillar">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="contato" className="section">
            <SectionTitle
              eyebrow="Contato"
              title="Vamos construir a próxima solução"
              subtitle="Canal aberto para oportunidades em software, engenharia e automação"
            />
            <div className="contact-card">
              <a href={profile.contacts.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.contacts.email}>E-mail</a>
              <a href="mailto:graziele.nogueira.dev@gmail.com?subject=Contato%20via%20Portf%C3%B3lio">
                Botão de contato
              </a>
              <p className="whatsapp-note">Estrutura pronta para adicionar WhatsApp futuramente.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
