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

// ============================================================
// RF03, RF04 e RF05 – PROCESSAMENTO E LISTAGEM (USANDO FOREACH)
// ============================================================

vagas.forEach(vaga => {
  // 1. Filtrar as habilidades que o candidato tem e que a vaga pede
  const habilidadesEncontradas = vaga.requisitos.filter(req => 
    candidato.habilidades.includes(req)
  );

  // 2. Filtrar as habilidades que a vaga pede, mas o candidato NÃO tem
  const habilidadesFaltantes = vaga.requisitos.filter(req => 
    !candidato.habilidades.includes(req)
  );

  // 3. Aplicar a fórmula matemática do professor
  const porcentagem = (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

  // 4. RF04: Definir a classificação com base nas porcentagens oficiais
  let classificacao = "";
  if (porcentagem >= 80) {
    classificacao = "Alta compatibilidade";
  } else if (porcentagem >= 50) {
    classificacao = "Média compatibilidade";
  } else {
    classificacao = "Baixa compatibilidade";
  }

  // 5. Exibir o resultado geral no console
  console.log("-------------------------------------");
  console.log(`Empresa: ${vaga.empresa}`);
  console.log(`Cargo: ${vaga.cargo}`);
  console.log(`Compatibilidade: ${porcentagem.toFixed(0)}%`);
  console.log(`Habilidades encontradas: ${habilidadesEncontradas.join(", ") || "Nenhuma"}`);
  console.log(`Classificação: ${classificacao}`);

  // 6. RF05: Listar as habilidades faltantes em tópicos, conforme o PDF
  console.log(`\nPara a vaga da ${vaga.empresa}, faltam:`);
  if (habilidadesFaltantes.length === 0) {
    console.log(" - Nenhuma! Você preenche todos os requisitos.");
  } else {
    habilidadesFaltantes.forEach(habilidade => {
      console.log(` - ${habilidade}`);
    });
  }
}); // <-- Fecha o forEach das vagas perfeitamente!

// ============================================================
// RF06 – ENCONTRAR A VAGA COM MAIOR COMPATIBILIDADE (USANDO FOR...OF)
// ============================================================

let maiorPorcentagem = -1;
let vagaMaisCompativel = null;

// Olha o "for...of" aqui cumprindo a exigência exigida!
for (const vaga of vagas) {
  const habilidadesEncontradas = vaga.requisitos.filter(req => 
    candidato.habilidades.includes(req)
  );
  const porcentagem = (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

  if (porcentagem > maiorPorcentagem) {
    maiorPorcentagem = porcentagem;
    vagaMaisCompativel = vaga;
  }
} // <-- Fecha o for...of perfeitamente!

// PAINEL FINAL – EXIBIÇÃO DA VAGA MAIS COMPATÍVEL
console.log("\n=====================================");
if (vagaMaisCompativel) {
  console.log("Vaga mais compatível:");
  console.log(`${vagaMaisCompativel.empresa} - ${vagaMaisCompativel.cargo}`);
  console.log(`Compatibilidade: ${maiorPorcentagem.toFixed(0)}%`);
} else {
  console.log("Nenhuma vaga encontrada.");
}
console.log("=====================================\n");