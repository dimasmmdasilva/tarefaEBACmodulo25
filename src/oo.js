// function Pokemon(nomePokemon, tipoPokemon)
// {
//     this.nome = nomePokemon;
//     this.tipo = tipoPokemon;
// }
// const pikachu = new Pokemon("Pikachu", "elétrico")
class Pokemon
{
    nome = ''
    tipo = ''
    hp = 100
    constructor(nomePokemon, tipoPokemon)
    {
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }
    atacar(nomeAtaque)
    {
        console.log(`${this.nome} atacou com ${nomeAtaque}`)
    }
    foiAtacado()
    {
        this.hp -= 10;
    }
    exibeHp()
    {
        console.log(this.hp)
    }
}
class Pikachu extends Pokemon
{
    constructor()
    {
        super('Pikachu', 'elétrico')
    }
    atacar()
    {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}
const PikachuAsh = new Pikachu()
console.log(PikachuAsh.hp)
PikachuAsh.foiAtacado()
console.log(PikachuAsh.hp)
PikachuAsh.atacar()
const pikachu = new Pokemon('Pikachu', 'elétrico');
// pikachu.nome = 'Pikachu'
// pikachu.tipo = 'elétrico'
console.log(pikachu)
pikachu.atacar('choque do trovão')
PikachuAsh.foiAtacado()
PikachuAsh.foiAtacado()
PikachuAsh.foiAtacado()
PikachuAsh.exibeHp()
console.log(PikachuAsh)
console.log(PikachuAsh instanceof Pikachu)