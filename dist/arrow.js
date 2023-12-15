"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Veja a lista de carros: ";
};
var carros = function carros() {
  return {
    modelo: "Onix",
    fabricante: "Chevrolet"
  };
};
console.log(minhaFuncao());
console.log(carros());
var deslocamento = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};
deslocamento.acelerar();
deslocamento.frear();
console.log(deslocamento.velocidadeAtual);