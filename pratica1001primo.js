//Qual é o 1001º número primo? 
//Faça um programa JavaScript que apresente esse número para o usuário.

let primosEncontrados = 0
let dividendo
let ehPrimo

for(dividendo = 2; primosEncontrados < 10; dividendo++){ 
    ehPrimo = true                                         
    for(let divisor = 2; dividendo > divisor; divisor++){   
        if(dividendo % divisor == 0) {                     
            ehPrimo = false;                               
            break
        }
    }

    if(ehPrimo == true){                              
        primosEncontrados++   
    }
}

console.log(`o 1001 numero primo é ${--dividendo}`)

