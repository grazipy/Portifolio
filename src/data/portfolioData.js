export const profile = {
  name: 'Graziele Nogueira Gomes',
  githubUser: 'grazipy',
  role: 'Projetista mecânica | Desenvolvedora | Estudante de Engenharia da Computação',
  headline:
    'Integro engenharia e programação para criar soluções eficientes, automatizadas e escaláveis.',
  about:
    'Tenho formação técnica em mecânica e automação, e atuo no desenvolvimento de soluções que conectam engenharia e tecnologia. Trabalho com programação, modelagem, integração de sistemas, automação de processos e desenvolvimento de aplicações. Atualmente desenvolvo projetos voltados à automação, monitoramento industrial, aplicações mobile e soluções inteligentes para ambientes corporativos e industriais.',
  diferencial:
    'Meu diferencial está na capacidade de unir visão técnica de engenharia com desenvolvimento de software, criando soluções práticas para problemas reais em processos industriais, documentação técnica, automação e integração de sistemas.',
  contacts: {
    github: 'https://github.com/grazipy',
    linkedin: 'https://www.linkedin.com/in/graziele-nogueira-gomes/',
    email: 'mailto:graziele.nogueira.dev@gmail.com',
    curriculum: '#',
  },
};

export const technologies = [
  {
    category: 'Programação',
    items: ['C#', 'C++', 'JavaScript', 'Python', 'Node.js', 'SQL'],
  },
  {
    category: 'Frontend / Mobile',
    items: ['React', 'React Native', 'Expo', 'HTML', 'CSS'],
  },
  {
    category: 'Engenharia / CAD / Automação',
    items: [
      'SolidWorks',
      'Desenho técnico',
      'Automação de processos',
      'Integração CAD + software',
      'IoT industrial',
    ],
  },
  {
    category: 'Outros',
    items: ['Git/GitHub', 'PostgreSQL', 'APIs REST', 'Geração de PDF', 'Excel automação', 'CMake'],
  },
];

export const projects = [
  {
    title: 'Sistema IoT para Monitoramento de Barramentos',
    description:
      'Sistema de monitoramento industrial de baixo custo para barramentos elétricos, com coleta de dados em tempo real para apoio à manutenção preditiva. O projeto envolve leitura de variáveis como temperatura, corrente, vibração e umidade, além de integração com backend e aplicativo mobile.',
    technologies: ['ESP32', 'Node.js', 'PostgreSQL', 'React Native', 'APIs REST'],
    highlight: 'Projeto de TCC com integração entre hardware, software e aplicação mobile.',
  },
  {
    title: 'Surg’App – Gestão de Documentos Empresariais',
    description:
      'Aplicativo mobile desenvolvido para controle e organização de documentos internos, com login de usuários, upload e visualização de PDFs, além de integração com backend e banco de dados.',
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
    highlight: 'Aplicação real com foco em documentação e fluxo interno empresarial.',
  },
  {
    title: 'Automação SolidWorks + C#',
    description:
      'Conjunto de automações desenvolvidas para otimizar processos de engenharia e produção por meio da integração entre software e documentação técnica.',
    bulletPoints: [
      'Conversão em massa de desenhos do SolidWorks para PDF',
      'Aplicação para impressão de PDFs em massa',
      'Ferramenta que copia itens de uma pasta com base em códigos lidos de Excel',
      'Sistema de geração automática de ordens de produção a partir de medidas inseridas, incluindo desenhos de fabricação automaticamente',
    ],
    technologies: ['C#', 'SolidWorks API', 'automação de arquivos', 'Excel', 'geração de PDF'],
    highlight:
      'Projeto com aplicação direta na rotina industrial, aumentando produtividade e padronização.',
  },
  {
    title: 'Plugin para Archicad em C++',
    description:
      'Desenvolvimento de plugin nativo em C++ para Archicad, com foco na leitura de propriedades dos elementos do modelo e exportação de dados para API externa, incluindo processamento em lote.',
    technologies: ['C++', 'Archicad API', 'CMake', 'integração com APIs'],
    highlight: 'Projeto técnico avançado com integração em software profissional de engenharia.',
  },
];

export const differentials = [
  'Engenharia',
  'Programação',
  'Automação',
  'Modelagem técnica',
  'Desenvolvimento de soluções aplicadas à indústria',
];
