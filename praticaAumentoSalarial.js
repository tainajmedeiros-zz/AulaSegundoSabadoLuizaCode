// As Organizações Tabajara resolveram dar um aumento de salário aos seus
// colaboradores e lhe contrataram para desenvolver o programa que calculará os
// reajustes. Faça um programa que recebe o salário de um colaborador e calcule
// reajuste segundo o seguinte critério, baseado no salário atual:
//  Salários até R$ 280,00 (incluindo): aumento de 20%
//  Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
//  Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
//  Salários de R$ 1500,00 em diante: aumento de 5%
// Após o aumento ser calculado, deverá ser informado: o salário antes do
// reajuste; o percentual de aumento aplicado; o valor do aumento; o novo
// salário, após o aumento.

function reajusteSalarial(salarioAtual) {
    let percentual; 

    if(salarioAtual <= 280){
        percentual = 0.2;
    } else if(salarioAtual <= 700) {
        percentual = 0.15;
    } else if(salarioAtual <= 1500) {
        percentual = 0.1;
    } else {
        percentual = 0.05;
    }

    let valorAumento = salarioAtual * percentual;
    
    console.log(`Antes do reajuste seu salario era ${salarioAtual}
        e vc teve ${percentual*100}% de aumento que significa ${valorAumento} e agora seu salario após
        reajuste é ${salarioAtual + valorAumento}`)
}


reajusteSalarial(150);
reajusteSalarial(300);
reajusteSalarial(900);
reajusteSalarial(2000);


function reajusteSalarial(salarioAtual){
    let valor, valorTotal
    if(salarioAtual <= 280) {
        valor = salarioAtual * 0.2
        valorTotal = salarioAtual + valor
        return console.log(`Antes do reajuste seu salario era ${salarioAtual}
        e vc teve 20% de aumento que significa ${valor} e agora seu salario após
        reajuste é ${valorTotal}`)
    } else if(salarioAtual > 280 && salarioAtual <= 700) {
        valor = salarioAtual * 0.15
        valorTotal = salarioAtual + valor
        return console.log(`Antes do reajuste seu salario era ${salarioAtual}
        e vc teve 15% de aumento que significa ${valor} e agora seu salario após
        reajuste é ${valorTotal}`)
    } else if(salarioAtual > 700 && salarioAtual <= 1500) {
        valor = salarioAtual * 0.1
        valorTotal = salarioAtual + valor
        return console.log(`Antes do reajuste seu salario era ${salarioAtual}
        e vc teve 10% de aumento que significa ${valor} e agora seu salario após
        reajuste é ${valorTotal}`)
    } else {
        valor = salarioAtual * 0.05
        valorTotal = salarioAtual + valor
        return console.log(`Antes do reajuste seu salario era ${salarioAtual}
        e vc teve 5% de aumento que significa ${valor} e agora seu salario após
        reajuste é ${valorTotal}`)
    }
}

let valorFinal = reajusteSalarial(3456)

