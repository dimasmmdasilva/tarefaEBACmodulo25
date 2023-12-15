let meuMap = new Map();
meuMap.set("nome", "dimas");
meuMap.set("stack", "html, css, javascript");
console.log(meuMap);

const nome = meuMap.get("nome");
console.log(nome);

console.log(meuMap.size)
console.log(meuMap.has("nome"))

for (let chave of meuMap.keys())
{
    console.log(chave);
};

for (let valor of meuMap.values())
{
    console.log(valor);
};

for (let entrada of meuMap.entries())
{
    console.log(entrada);
};

for (let [chave, valor] of meuMap.entries())
{
    console.log(`${chave}: ${valor}`);
};

meuMap.delete("stack");
console.log(meuMap);

const cpfs = new Set();
cpfs.add(222222222)
cpfs.add(999999999)
cpfs.add(555555555)
cpfs.add(333333333)
console.log(cpfs);
console.log(cpfs.keys())
console.log(cpfs.values())
cpfs.forEach((valor) =>
{
    console.log(valor);
})

const array = ['José Marinho', 'Eduardo Capixaba', 'Geraldo Carlos', 'Gabriela Mamadura', 'Geraldo Carlos']
const arraySet = new Set([...array])
const arraySemDuplicados = [...arraySet]
console.log(arraySet)
console.log(arraySemDuplicados)