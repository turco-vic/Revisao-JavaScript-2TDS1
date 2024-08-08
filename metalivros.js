let livrosLidos = ["É assim que acaba", "É assim que começa", "É assim que termina", "O meio é assim"];
let metaLivros = 7;
let livrosFaltando = metaLivros - livrosLidos.length
for (let i = 0;i < livrosLidos.length; i++) {
    console.log (livrosLidos[i]);
}

if (livrosLidos.length < metaLivros) {
    console.log ("Falta")
}