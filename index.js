/*
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

function rankeador(qtdeVitorias, qtdeDerrotas) {
    return qtdeVitorias - qtdeDerrotas;
  }
  
  let ranking = rankeador(300, 220); 
  let nivel;

  if (ranking <= 10) {
    nivel = "Ferro"
} else if (ranking > 11 && ranking <= 20) {
    nivel = "Bronze"
} else if (ranking > 21 && ranking <= 50) {
    nivel = "Prata"
} else if (ranking > 51 && ranking <= 80) {
    nivel = "Ouro"
} else if (ranking > 81 && ranking <= 90) {
    nivel = "Platina"
} else if (ranking > 91 && ranking <= 100) {
    nivel = "Ascendente"
} else if (ranking > 101) {
    nivel = "Radiante"
}

console.log("Seu ranking é: " + nivel + ", com " + ranking + " pontos.");