"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 8
}, {
  nome: 'Bruno',
  nota: 7
}, {
  nome: 'Cristina',
  nota: 9
}, {
  nome: 'Daniel',
  nota: 5
}, {
  nome: 'Eduarda',
  nota: 6
}, {
  nome: 'Fábio',
  nota: 9
}, {
  nome: 'Gabriela',
  nota: 7
}, {
  nome: 'Henrique',
  nota: 8
}, {
  nome: 'Isabela',
  nota: 4
}, {
  nome: 'João',
  nota: 6
}];
var alunosAprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
}).map(function (aluno) {
  return {
    nome: aluno.nome,
    nota: aluno.nota
  };
});
console.log('*** Lista dos alunos aprovados ***', alunosAprovados);