// RF09 e RF11 uso de this e return

class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

// RF10 – Usar Herança

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade); // mãe
    this.nivel = nivel; // filha
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

// RF13 – Usar Closure (Valor interno)

function criarContadorDeAnalises() {
  let total = 0;
  return function() {
    total++;
    return total;
  };
}
const contador = criarContadorDeAnalises();


// RF01

const candidato = {
  nome: "Aurora",
  habilidades: ["HTML", "CSS", "JavaScript"],
  experienciaMeses: 3
};

// RF02 - Lista de vagas
const vagas = [
  new VagaFrontEnd("TechStart", "Desenvolvedor Front-End Júnior", ["JavaScript", "GitHub", "Lógica de Programação"], 2800, "Remoto", "Júnior"),
  new VagaFrontEnd("CodeLab", "Estágio Front-End", ["JavaScript", "Kanban", "GitHub", "CSS"], 1800, "Híbrido", "Júnior"),
  new VagaFrontEnd("WebSolutions", "Programador JavaScript Júnior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial", "Júnior")
];


// RF12 – Callback (Funções com parâmetro)

function finalizarAnalise(nomeCandidato, callback) {
  console.log("\nProcessamento de dados finalizado.");
  callback(nomeCandidato);
}

function exibirMensagemFinal(nome) {
  console.log(`> ${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`);
}


// RF14 – Usar Promise

function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas); // Entrega a lista de vagas após 1 segundo
    }, 1000);
  });
}

// RF14 – Async/await - função que roda o sistema

async function iniciarSistema() {
  console.log("Carregando vagas do servidor... Por favor, aguarde.");
  
  // O 'await' faz o código esperar o carregamento simulado terminar
  const vagasCarregadas = await buscarVagasSimuladas();
  
  console.log("\n-----------------------------------------");
  console.log(`CANDIDATA: ${candidato.nome}`);
  console.log(`Total de vagas carregadas no sistema: ${vagasCarregadas.length}`);
  console.log("-------------------------------------------\n");

  let maiorPorcentagem = -1;
  let vagaMaisCompativel = null;
  const todasHabilidadesFaltantes = new Set();

  // RF03, RF04 e RF05 - Processamento das vagas
  vagasCarregadas.forEach(vaga => {
    contador(); // RF13: Closure contando cada vaga processada

    const habilidadesEncontradas = vaga.requisitos.filter(req => //RF08 – Usar métodos de array (filter)
      candidato.habilidades.includes(req)
    );

    const habilidadesFaltantes = vaga.requisitos.filter(req => 
      !candidato.habilidades.includes(req)
    );

    vaga.requisitos.forEach(req => {
      if (!candidato.habilidades.includes(req)) {
        todasHabilidadesFaltantes.add(req);
      }
    });

    const porcentagem = (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

    let classificacao = "";
    if (porcentagem >= 80) {
      classificacao = "Alta compatibilidade";
    } else if (porcentagem >= 50) {
      classificacao = "Média compatibilidade";
    } else {
      classificacao = "Baixa compatibilidade";
    }

    console.log("---------------------------------------");
    console.log(`Vaga analisada: ${vaga.exibirResumo()}`);
    console.log(`${vaga.exibirNivel()}`); 
    console.log(`Compatibilidade: ${porcentagem.toFixed(0)}%`);
    console.log(`Habilidades encontradas: ${habilidadesEncontradas.join(", ") || "Nenhuma"}`);
    console.log(`Classificação: ${classificacao}`);

    console.log(`\nPara a vaga da ${vaga.empresa}, faltam:`);
    if (habilidadesFaltantes.length === 0) {
      console.log(" - Nenhuma! Você preenche todos os requisitos.");
    } else {
      habilidadesFaltantes.forEach(habilidade => {
        console.log(` - ${habilidade}`);
      });
    }
  });

  // RF06 - Encontrar a mais compatível usando FOR...OF
  for (const vaga of vagasCarregadas) {
    const habilidadesEncontradas = vaga.requisitos.filter(req => 
      candidato.habilidades.includes(req)
    );
    const porcentagem = (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

    if (porcentagem > maiorPorcentagem) {
      maiorPorcentagem = porcentagem;
      vagaMaisCompativel = vaga;
    }
  }

  // Painel final - vaga mais compativel 
  console.log("\n----------------------------------------");
  if (vagaMaisCompativel) {
    console.log("Vaga mais compatível encontrada:");
    console.log(`${vagaMaisCompativel.exibirResumo()} (${vagaMaisCompativel.exibirNivel()})`);
    console.log(`Compatibilidade Máxima: ${maiorPorcentagem.toFixed(0)}%`);
  }
  console.log("------------------------------------------");

  // RF07 e RF08 – Recomendação de estudo e uso de array maps e every
  console.log("\n----------------------------------------");
  console.log("Recomendação de estudo:");

  const atendeTudo = vagasCarregadas.every(vaga => 
    vaga.requisitos.every(req => candidato.habilidades.includes(req))
  );

  if (atendeTudo) {
    console.log("Parabéns! Você já possui todas as habilidades necessárias para as vagas analisadas.");
  } else {
    const arrayFaltantes = Array.from(todasHabilidadesFaltantes);
    const listaParaEstudo = arrayFaltantes
      .map(habilidade => habilidade.toUpperCase())
      .join(", ");

    console.log(`Priorize estudar ${listaParaEstudo}, pois esses conteúdos aparecem nas vagas analisadas.`);
  }
  console.log("-------------------------------------------");

  // RF13 Contou cada vaga no forEach
  const totalVagasProcessadas = contador() - 1; 
  console.log(`[Sistema] Total de análises de vagas computadas: ${totalVagasProcessadas}`);

  // RF12: Disparando callback no fim do sistema
  finalizarAnalise(candidato.nome, exibirMensagemFinal);
}

// EXECUTA O SISTEMA INTEIRO
iniciarSistema();

// Fim do arquivo - Sistema de Análise de Vagas finalizado com sucesso.