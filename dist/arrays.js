"use strict";

var redesSociais = ['Facebook', 'Instagram', 'WhatsApp'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho um perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeRedeSocial));
});
var alunos = ['Ivan', 'Kleber', 'Lucas', 'Bruno'];
var aluno2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Front-End'
  };
  return itemAtual;
});
console.log(aluno2);
var paula = aluno2.find(function (item) {
  return item.nome == 'Paula'; // true of false
});
console.log(paula);
var indicePaula = aluno2.findIndex(function (item) {
  return item.nome == 'Paula'; // true of false
});
console.log(indicePaula);

// every
aluno2.push({
  nome: 'Diogo',
  curso: 'Back-End'
});
var todosFrontEnd = aluno2.every(function (item) {
  return item.curso === 'Front-End';
});
console.log(todosFrontEnd);
var todosBackEnd = aluno2.some(function (item) {
  return item.curso === 'Back-End' && item.curso === 'Front-End';
});
function filtraBackEnd(aluno) {
  return aluno.curso === 'Back-End';
}
console.log(todosBackEnd);
var apenasBackEnd = aluno2.filter(filtraBackEnd);
console.log(apenasBackEnd);
var numeros = [10, 20, 30, 10];
var soma = numeros.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaFor = 0;
for (var _i = 0; _i < numeros.length; _i++) {
  somaFor += numeros[_i];
}
console.log(somaFor);
var nomeTodosAlunos = aluno2.reduce(function (acumulador, itemAtual) {
  acumulador += "$(itemAtual.nome) ";
  return acumulador;
}, '');
console.log(nomeTodosAlunos);