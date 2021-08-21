/** Crie uma classe que modele uma bomba de combustível e permita definir a capacidade 
da bomba, o preço do combustível por litro e permita encher a bomba (sempre encher 
completamente) e consultar sua quantidade de combustível. 
    É necessário também que seja permitido abastecer por quantidade de litros (retornando o valor a ser pago). 
    Deve ser permitido também alterar o valor do preço por litro. 
    Deve ser tratada a situação de não haver combustível suficiente na bomba para um determinado abastecimento. 
    A bomba não deve aceitar preço zero ou negativo. */

    class BombaCombustivel {
        constructor(valorGasolina, capacidade, qtdGasolina) {
            this.valorGasolina = valorGasolina;
            this.capacidade = capacidade;
            this.qtdGasolina = qtdGasolina;
        }
    
        encheBomba(qtdGasolina){
            if (qtdGasolina <= 0){
                return "Quantidade de gasolina deve ser maior que Zero!";
            } else if (this.capacidade - this.qtdGasolina >= qtdGasolina ){
                this.qtdGasolina += qtdGasolina;
                return `${qtdGasolina} L de Gasolina adicionada.`;
            } else {
                return "Você quer adicionar mais gasolina que eu consigo guardar!";
            }
        }
    
        abastecerCarro(qtdGasolina){
            if (qtdGasolina <= this.qtdGasolina){
                this.qtdGasolina -= qtdGasolina;
                return `Valor a Pagar R$ ${qtdGasolina * this.valorGasolina}`;
            }
    
            return `Não temos essa quantidade de gasolina! \nQuantidade atual: ${this.getQtdGasolina()}`;
        }
    
        getQtdGasolina(){
            return `${this.qtdGasolina} Litro(s)`;
        }
    
        ajustarValor(novoValor){
            if (novoValor > 0){
                this.valorGasolina = novoValor;
            } else {
                console.log("Valor nao permitido!");
            }
        }
    }
    
    bombaA = new BombaCombustivel(5.50, 500, 300);
    console.log(bombaA.getQtdGasolina());
    
    bombaA.encheBomba(100);
    console.log(bombaA.getQtdGasolina());
    
    console.log(bombaA.abastecerCarro(100));
    console.log(bombaA.getQtdGasolina());
    
    console.log(bombaA.abastecerCarro(500));
    bombaA.ajustarValor(-10);
    bombaA.ajustarValor(7);