let idademinima = 7 
let idadealuno = 9
let primeiroano = 7 
let segundoano = 8 
let terceiroano = 9

if (idadealuno >= idademinima && idadealuno == primeiroano){
    console.log ("Matrícula realizada com sucesso, você está no primeiro ano!")
}else if (idadealuno == segundoano){
    console.log("Matrícula realizada com sucesso, você está no segundo ano!")
}else if (idadealuno == terceiroano){
    console.log("Matrícula realizada com sucesso, você está no terceiro ano!")
}else if (idadealuno > terceiroano){
    console.log ("Matrícula realizada com sucesso!")
}else{
    console.log ("Desculpe, você ainda não pode se matricular!")
}
