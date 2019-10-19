// Na versao do ECMAScript 2015 surgiu o conceito de class, porem por baixo dos panos é uma funçao.
class Lancamento{
    // funcao constructor sera chamada a cada instancia(new), ou seja, para cada nova instacia ela sera chamada.
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome 
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes 
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())






