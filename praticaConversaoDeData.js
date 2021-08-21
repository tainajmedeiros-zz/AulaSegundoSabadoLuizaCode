// Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a
// data por extenso. 
// Exemplo:
// Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983”. 


function dataConvert (data) {
    dia = data.substring(0,2)
    mes = parseInt(data.substring(3,5))
    meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    ano = data.substring (6)
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`)   
}
dataConvert('12/12/3212')

function conversorData(data){
    let dataSeparada = data.split('/')

    switch(dataSeparada[1]) {
        case '01':
            dataSeparada[1] = 'janeiro'
            break
        case '02':
            dataSeparada[1] = 'fevereiro'
            break
        case '03':
            dataSeparada[1] = 'março'
            break
        case '04':
            dataSeparada[1] = 'abril'
            break
        case '05':
            dataSeparada[1] = 'maio'
            break
        case '06':
            dataSeparada[1] = 'junho'
            break
        case '07':
            dataSeparada[1] = 'julho'
            break
        case '08':
            dataSeparada[1] = 'agosto'
            break
        case '09':
            dataSeparada[1] = 'setembro'
            break
        case '10':
            dataSeparada[1] = 'outubro'
            break
        case '11':
            dataSeparada[1] = 'novembro'
            break
        default:
            dataSeparada[1] = 'dezembro'
            break
    }
    console.log(`${dataSeparada[0]} de ${dataSeparada[1]} de ${dataSeparada[2]}`)
}

conversorData('12/12/3212')