// RF01 – Criar o perfil do candidato
const candidato = {
  nome: "Ana",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban", "HTML", "CSS"],
  experienciaMeses: 3
};

console.log("Perfil criado para:", candidato.nome);

// RF02 – Criar uma lista de vagas
const vagas = [
  {
    id: 1,
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
    salario: 2800,
    modalidade: "Remoto"
  },
  {
    id: 2,
    empresa: "CodeLab",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1800,
    modalidade: "Híbrido"
  },
  {
    id: 3,
    empresa: "WebSolutions",
    cargo: "Programador JavaScript Júnior",
    requisitos: ["JavaScript", "HTML", "CSS", "Lógica de Programação"],
    salario: 3000,
    modalidade: "Presencial"
  }
];

console.log(`Total de vagas carregadas no sistema: ${vagas.length}`);