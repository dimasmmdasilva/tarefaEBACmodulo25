const redesSociais = ['Facebook', 'Instagram', 'WhatsApp']

for (let i = 0; i < redesSociais.length; i++)
    {
        console.log(`Eu tenho um perfil na rede social: ${redesSociais[i]}`)
    }

redesSociais.forEach(function(nomeRedeSocial, indice)
{
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeRedeSocial}`)
})

const alunos = ['Ivan', 'Kleber', 'Lucas', 'Bruno'];

const aluno2 = alunos.map(function(itemAtual)
{
    itemAtual =
    {
        nome: itemAtual,
        curso: 'Front-End'
    }
    return itemAtual;
})

console.log(aluno2)

const paula = aluno2.find(function(item)
{
    return item.nome == 'Paula' // true of false
})

console.log(paula)

const indicePaula = aluno2.findIndex(function(item)
{
    return item.nome == 'Paula' // true of false
})

console.log(indicePaula)

// every
aluno2.push
({
    nome: 'Diogo',
    curso: 'Back-End'
})

const todosFrontEnd = aluno2.every(function(item)
{
    return item.curso === 'Front-End'
})

console.log(todosFrontEnd);

const todosBackEnd = aluno2.some(function(item)
{
    return item.curso === 'Back-End' && item.curso === 'Front-End'
})

function filtraBackEnd(aluno)
{
    return aluno.curso === 'Back-End';
}

console.log(todosBackEnd);

const apenasBackEnd = aluno2.filter(filtraBackEnd)

console.log(apenasBackEnd);

const numeros = [10, 20, 30, 10]
const soma = numeros.reduce(function(acumulador, itemAtual)
{
    acumulador += itemAtual;
    return acumulador;
}, 0)
console.log(soma);

let somaFor = 0;
for (let i = 0; i < numeros.length; i++)
{
    somaFor += numeros[i];
}
console.log(somaFor);

const nomeTodosAlunos = aluno2.reduce(function(acumulador, itemAtual)
{
    acumulador += `$(itemAtual.nome) `;
    return acumulador;
}, '')
console.log(nomeTodosAlunos)