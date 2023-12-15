const minhaFuncao = () => "Veja a lista de carros: ";

const carros = () =>
({
    modelo: "Onix",
    fabricante: "Chevrolet"
})

console.log(minhaFuncao())
console.log(carros())

const deslocamento =
{
    velocidadeAtual: 40,
    acelerar: function()
    {
        console.log(this)
        this.velocidadeAtual +=10;
    },
    frear: () =>
    {
        console.log(this)
        this.velocidadeAtual -=10;
    }
}
deslocamento.acelerar();
deslocamento.frear();
console.log(deslocamento.velocidadeAtual)