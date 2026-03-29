// =========================
// GERADOR DE 128K HABILIDADES
// =========================

// Ranks
const ranks = ["D","C","B","A","S"];

// Distribuição total (128.000)
const distribution = {
  D: 90000,
  C: 20000,
  B: 10000,
  A: 6000,
  S: 2000
};

// Partes dos nomes
const verbs = [
  "Golpe","Explosão","Impacto","Aura","Pulso","Controle",
  "Corte","Ruptura","Carga","Projeção","Canalização","Ressonância"
];

const types = [
  "Sombrio","Arcano","Divino","Elemental","Temporal",
  "Espiritual","Infernal","Celestial","Etéreo","Físico"
];

const modifiers = [
  "Amplificado","Rápido","Instável","Massivo","Preciso",
  "Contínuo","Fragmentado","Supremo","Raro","Ancestral"
];

// =========================
// GERAR NOME
// =========================
function generateName(id){
  return `${verbs[id % verbs.length]} `
       + `${types[id % types.length]} `
       + `${modifiers[id % modifiers.length]} `
       + `#${id}`;
}

// =========================
// CUSTO POR RANK
// =========================
function getCost(rank){
  switch(rank){
    case "D": return 1;
    case "C": return 2;
    case "B": return 4;
    case "A": return 7;
    case "S": return 10;
  }
}

// =========================
// GERADOR PRINCIPAL
// =========================
function generate128kSkills(){
  let skills = [];
  let id = 0;

  ranks.forEach(rank=>{
    let count = distribution[rank];

    for(let i=0;i<count;i++){
      skills.push({
        id: id,
        name: generateName(id),
        rank: rank,
        cost: getCost(rank)
      });
      id++;
    }
  });

  return skills;
}

// =========================
// EXPORTAÇÃO (IMPORTANTE)
// =========================

// Para usar em outros arquivos JS
if (typeof module !== "undefined") {
  module.exports = { generate128kSkills };
}

// Para usar direto no navegador
window.generate128kSkills = generate128kSkills;