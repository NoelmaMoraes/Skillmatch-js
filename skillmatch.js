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
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
    salario: 3000,
    modalidade: "Presencial"
  }
];

console.log(`Total de vagas carregadas no sistema: ${vagas.length}`);


// RF03 – CALCULAR COMPATIBILIDADE COM CADA VAGA
vagas.forEach(vaga => {
  // Filtra as habilidades do candidato e da vaga
  const habilidadesEncontradas = vaga.requisitos.filter(req => 
    candidato.habilidades.includes(req)
  );

  // Filtra as habilidades que a vaga pede, mas o candidato NÃO tem
  const habilidadesFaltantes = vaga.requisitos.filter(req => 
    !candidato.habilidades.includes(req)
  );

  // Fórmula matemática
  const porcentagem = (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

  // Definir a classificação com base na porcentagem
let classificacao = "";
  if (porcentagem >= 80) {
    classificacao = "Alta compatibilidade"; // De 80% a 100%
  } else if (porcentagem >= 50) {
    classificacao = "Média compatibilidade"; // De 50% a 79%
  } else {
    classificacao = "Baixa compatibilidade"; // De 0% a 49%
  }

  // Resultado que vai aparecer
  console.log("--------------------------------====================");
  console.log(`Empresa: ${vaga.empresa}`);
  console.log(`Cargo: ${vaga.cargo}`);
  console.log(`Compatibilidade: ${porcentagem.toFixed(0)}%`);
  console.log(`Habilidades encontradas: ${habilidadesEncontradas.join(", ") || "Nenhuma"}`);
  console.log(`Habilidades faltantes: ${habilidadesFaltantes.join(", ") || "Nenhuma"}`);
  console.log(`Classificação: ${classificacao}`); 
});