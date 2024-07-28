let alunos = [];

alunos.push({nome: "Marcos Tadeu", nota: "8"});
alunos.push({nome: "Jonas Gomes", nota: "4"});
alunos.push({nome: "Adriana Mello", nota: "6"});
alunos.push({nome: "André Ricardo", nota: "3"});
alunos.push({nome: "Luana Andrade", nota: "9"});

function filtraNotas(alunos){
    return alunos.filter(aluno => aluno.nota >= '6');
}

let alunosAprovados = filtraNotas(alunos);
console.log(alunosAprovados);