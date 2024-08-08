let armas = ["Meu nome é Fint Grace", "Ataque 1: socoesmagador", "Ataque 2: raiolazer", "Ataque 3: tirovulconico"];

let ataques = [];

ataques.push(armas[0]);
ataques.push(armas[2]);
ataques.push(armas[1]);
ataques.push(armas[3]);

for(let i = 0; i < ataques.length; i++) {
    if (i == 0 && ataques[i] == armas[1]) {
            console.log(armas[0], "Esses são meus ataques;");
    }
        console.log(ataques[i]);
}
 