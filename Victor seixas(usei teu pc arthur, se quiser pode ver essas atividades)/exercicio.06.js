let vetor = []
let aux

for(let i = 0; i < 4; i++){
    vetor[i] = Number(prompt('Digite um valor para o índice'))
}
document.write(`Array antes da ordenação ${vetor}<br>`)
//[2,7,8,0]
//a = 4, b = 9, a e b a = 9 b = 4 aux
for(let i = 0; i <4; i++){
    ///algoritmo sequencial
    for(let j = 0; j < 4; j++){
        if(veto[j] < vetor[j=1]){
            aux = vetor[j]
            vetor[j] = vetor[j+1]
            vetor[j+1] = aux
        }
    }
}