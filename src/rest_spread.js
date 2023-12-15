function somar ()
{
    let soma = 0;
    for (let i = 0; i < arguments.length; i++)
    {
        soma += arguments[i];
    }
    return soma;
}
console.log(somar(10,20,30,40,50))

function somarRest(...numeros)
{
    const soma = numeros.reduce((total, numeroAtual) =>
    {
        total += numeroAtual;
        return total;
        
    }, 0)
    return soma;
}
console.log(somarRest(5,10,15,20,25))

const numbers = [2,4,6,8,10]
console.log(...numbers)

const timesSP = ['corinthians', 'são paulo', 'palmeiras', 'santos']
const timesRJ = ['flamengo','botafogo','fluminense','vasco']
const timesBR = timesSP.concat(timesRJ);
const timesBR2 = [...timesSP, ...timesRJ];
console.log(timesBR);
console.log(timesBR2);

const carroJulia =
{
    modelo: 'gol',
    marca: 'vw',
    motor: '1.6'
}
const carroAna =
{
    ...carroJulia,
    motor: '2.0'
}
console.log('Carro da Ana:', carroAna);

const {motor: motorAna} = carroAna;
const {motor: motorJulia} = carroJulia;
console.log(motorAna);
console.log(motorJulia);

const [item1, item2, item3, item4, ...outrosTimes] = timesBR;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);
console.log(outrosTimes);