
//mostrar o nome e a nota do aluno em um console.log() organizado
//mostrar apenas os alunos que aprovados nas materias (nota 6 ou maior e presença maior ou igual a 75)
//mostrar apenas os alunos que reprovados nas materias (nota menor que 6 e presença menor a 75)
//Mostrar os 3 alunos que tiveram MAIOR NOTA
//Mostrar os 3 alunos que tiveram MENOR NOTA
//DEVE SER FEITA UMA FUNÇÃO PARA CADA QUESTÃO FEITA ACIMA
//Usar functions
//Usar array
//Usar objetos
//Usar loops
//Usar condicionais

let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 74,
                nota: 0
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 0
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

function criarPilha(let tamanhoDaPilha = (chamadaDeAlunos.materias.length)/2) { // Verifico se tem valor,senão, use 10
    // Criar uma array com o tamanho que pediram
    return [...new Array(tamanhoDaPilha)] // Desestruturação
}

function inserir(){
    for(let a=0; a<chamadaDeAlunos.length;a++){
        for(let z=0; z<chamadaDeAlunos.length;z++){
        for(let f=0; f<chamadaDeAlunos[a].materias.length; f++){

tamanhoDaPilha[z] = ((chamadaDeAlunos[a].materias.nota[0])+(chamadaDeAlunos[a].materias.nota[1]))/2
        }
    }
}
} 



function nomeNota(){
for(let a=0; a<chamadaDeAlunos.length;a++){
 for(let f=0; f<chamadaDeAlunos[a].materias.length; f++)
    console.log("Nome:"+chamadaDeAlunos[a].nome +"/n"+ "Nota:"+chamadaDeAlunos[a].materias[f].nota);

}
}

function reprovados(){

        for(let c=0; c<chamadaDeAlunos.length; c++) {
        for(let d=0; d<chamadaDeAlunos[c].materias.length; d++) {
       

    if(chamadaDeAlunos[c].materias[d].nota<6 && chamadaDeAlunos[c].materias[d].presenca<75){
        console.log("reprovado");
    }
  
}
    }
}

function aprovados(){

    for(let c=0; c<chamadaDeAlunos.length; c++) {
    for(let d=0; d<chamadaDeAlunos[c].materias.length; d++) {
   

if(chamadaDeAlunos[c].materias[d].nota>6 && chamadaDeAlunos[c].materias[d].presenca>75){
    console.log("aprovado");
}

}
}
}

function melhores(){
  var melhor = Math.max(tamanhoDaPilha);

}







console.log(nomeNota());
console.log(aprovados());
console.log(reprovados());

console.log(melhores());

