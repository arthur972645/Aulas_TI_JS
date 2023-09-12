let gabarito = [], resposta = []
let alunosSala, percAp
let pontos= 0, totalAprovado= 0

//[a,b,c,d,e]
//[a,c,c,e,d]
for(let i = 0; i < 10; ){
    gabarito[i] = prompt(`Digite o gabarito da questão ${i+1}`)
}
document.write(`${gabarito} <br>`)
alunosSala = Number(prompt("Digite o número de aluno"));
pontos = 0;
for(let j = 0; j < 4; j++){
    resposta[j] = prompt(`Digite a resposta da questão${j + 1}° do aluno`)
    if(gabarito[j] === resposta[j]){
        pontos++;
    }
    if (pontos >= 6){
        totalAprovado++;
    }
    document.write(`A nota do aluno ${num} foi ${pontos.toFixed}`)
}
percAp = totalAprovado * 100 / alunosSala
document.write(`O percentual de aprovados ${percAp}%`)

