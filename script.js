class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
    }

    atacar(tipoDeAtaque) {
        this.tipoDeAtaque = tipoDeAtaque;
    }
}

let primeiroHeroi = new Heroi("Natsu", 20, "mago");
let segundoHeroi = new Heroi("Naruto", 25, "ninja");

let ataque = "";

switch (primeiroHeroi.tipo) { 
    case "mago":
        ataque = "magia";
        break;
    case "guerreiro":
        ataque = "espada";
        break;
    case "monge":
        ataque = "artes marciais";
        break;
     case "ninja":
        ataque = "shuriken";
        break;
        
}

primeiroHeroi.atacar(ataque);
segundoHeroi.atacar(ataque);

console.log(`O heroi ${primeiroHeroi.nome}, que é um ${primeiroHeroi.tipo}, atacou usando ${primeiroHeroi.tipoDeAtaque}`);
console.log(`O heroi ${segundoHeroi.nome}, que é um ${segundoHeroi.tipo}, atacou usando ${segundoHeroi.tipoDeAtaque}`);
