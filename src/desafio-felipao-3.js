class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    atacar(){
        let ataque = '';

        if(this.tipo === 'mago')
            ataque = 'usando magia';
        else if(this.tipo === 'guerreiro')
            ataque = 'usando espada';
        else if(this.tipo === 'monge')
            ataque = 'usando artes marciais';
        else if(this.tipo === 'ninja')
            ataque = 'usando shuriken';

        console.log(`O {${this.tipo}} atacou usando {${ataque}}`);
    }
}


function main(){
    const hero1 = new Hero('Jose', 17, 'mago');
    const hero2 = new Hero('Jaime', 19, 'guerreiro');
    const hero3 = new Hero('Pedro', 20, 'monge');
    const hero4 = new Hero('Paulo', 21, 'ninja');

    hero1.atacar();
    hero2.atacar();
    hero3.atacar();
    hero4.atacar();
}

main();