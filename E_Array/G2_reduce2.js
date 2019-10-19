const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const todosAlunosBolsistas = alunos.map(aluno => aluno.bolsista).reduce((acumulado, atual) => acumulado && atual)
console.log(todosAlunosBolsistas)

// Desafio 2: Algum aluno é bolsista?
const algumAlunoBolsista = alunos.map(aluno => aluno.bolsista).reduce((acumulado, atual) => acumulado || atual)
console.log(algumAlunoBolsista)

// const alunosBolsistas = alunos.filter(aluno => aluno.bolsista)
// console.log(alunosBolsistas)
// console.log(alunosBolsistas.length == alunos.length ? 'true' : 'false')
// console.log(alunosBolsistas.length > 0 ? 'true' : 'false')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                