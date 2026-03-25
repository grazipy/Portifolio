# Portfólio profissional — Graziele Nogueira Gomes

Site de portfólio moderno e responsivo com foco em **programação, automação industrial, engenharia, CAD e integração de sistemas**, desenvolvido com React + Vite e enriquecido com um elemento visual em Three.js.

## ✨ Visão geral

Este projeto foi construído para apresentar a identidade profissional de **Graziele Nogueira Gomes** de forma elegante e tecnológica:

- Home/Hero com chamada de impacto e CTA para contatos.
- Seções de Sobre, Tecnologias, Projetos, Diferenciais e Contato.
- Layout dark, visual clean e animações sutis.
- Dados centralizados em arquivo mockado para manutenção rápida.
- Estrutura pronta para deploy em GitHub Pages ou Vercel.

## 🧱 Stack

- React 18
- Vite 5
- CSS moderno (sem framework)
- Three.js (elemento 3D leve no Hero)

## 📁 Estrutura

```bash
.
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── components
│   │   ├── SectionTitle.jsx
│   │   └── ThreeHeroCanvas.jsx
│   └── data
│       └── portfolioData.js
└── vite.config.js
```

## 🚀 Como executar localmente

```bash
npm install
npm run dev
```

O Vite exibirá a URL local (geralmente `http://localhost:5173`).

## 🏗️ Build de produção

```bash
npm run build
npm run preview
```

## 🌐 Publicação

### GitHub Pages (github.io)
Este repositório já está preparado para GitHub Pages:

- `vite.config.js` usa `base: '/portifolio/'`.
- O workflow `.github/workflows/deploy.yml` faz build e deploy automático.

Passos no GitHub:
1. Vá em **Settings → Pages**.
2. Em **Build and deployment**, selecione **Source: GitHub Actions**.
3. Faça push na branch `main` e aguarde o workflow finalizar.
4. O site ficará disponível em `https://grazipy.github.io/portifolio/`.

### Vercel
1. Importe o repositório no painel da Vercel.
2. Framework: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

## ✍️ Manutenção de conteúdo

Toda a informação principal está em `src/data/portfolioData.js`:

- dados pessoais;
- links (GitHub, LinkedIn, e-mail, currículo);
- categorias de tecnologias;
- projetos e destaques;
- lista de diferenciais.

Isso facilita substituir textos, links e itens sem alterar componentes visuais.
