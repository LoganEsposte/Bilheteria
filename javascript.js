/* 
variaveis iniciais 
*/

var caixa, valorPromocao, valoGeral;
let valorIndPromo;
var salvo = false;

/*
função salvar :
    verifica se os valores inseridos são maiores que 0;
    não deixa salvar sem os valores todos preenchidos;
    atribiu nas variaveis;
    modifica o value do input com os valores das variaveis;
    desabilita o input;
    muda a variavel de controle "salvo" para true.
*/

function salvar() {
    let n1 = parseInt(document.querySelector(`input#Caixa`).value);
    let n2 = parseInt(document.querySelector(`input#ValorPromocao`).value);
    let n3 = parseInt(document.querySelector(`input#ValorGeral`).value);
    if (n1 > 0 && n2 > 0 && n3 > 0) {
        salvo = true;
        if (n1 > 0) {
            caixa = n1;
            document.querySelector(`input#Caixa`).value = caixa;
            document.querySelector(`input#Caixa`).disabled = true;
        }
        else {
            console.log(`valor invalido n1`)
        }
        if (n2 > 0) {
            valorPromocao = n2;
            document.querySelector(`input#ValorPromocao`).value = valorPromocao;
            document.querySelector(`input#ValorPromocao`).disabled = true;
        }
        else {
            console.log(`valor invalido n2`)
        }
        if (n3 > 0) {
            valoGeral = n3;
            document.querySelector(`input#ValorGeral`).value = valoGeral;
            document.querySelector(`input#ValorGeral`).disabled = true;
        } 
        else {
            console.log(`valor invalido n3`)
        }
        valorIndPromo  = valorPromocao / 5;
        console.log(valorIndPromo);
    }
}

/*
função editar :
    testa se a variavel de controle "salvo" é true, que diz que os valores foram salvos;
    remove os valores das variaveis;
    reabilita os inputs;
    modifica "salvo" para false.
*/

function editar() {
    if (salvo == true) {
        salvo = false;
        valorIndPromo = null;

        document.querySelector(`input#Caixa`).value = null;
        document.querySelector(`input#Caixa`).disabled = false;

        document.querySelector(`input#ValorPromocao`).value = null;
        document.querySelector(`input#ValorPromocao`).disabled = false;

        document.querySelector(`input#ValorGeral`).value = null;
        document.querySelector(`input#ValorGeral`).disabled = false;

    }
    else{
        console.log(`não está salvo`)
    }
}

/*
variaveis secundárias :
    necessarias para os calculos de fato.
*/

let entradaPromo, saidaPromo, entradaGeral, saidaGeral, adicional, fechamentoCartao;

/*
variaveis finais :
    guardam os valores calculados, apresentandos finais.
*/

let totalPromocao, totalGeral, subTotal, totalCartao, totalAdicional, totalDinheiro, fechamentoTotal;

/*
função fechar : 
    pega os dados nos inputs e testa se são maiores que 0;
    atribui nas variaveis secundárias;
    calcula o fechamento;
    atribui nas variaveis finais;
    apresenta os dados.
*/

function fechar(){
    if(salvo == true){
        let f1 = parseInt(document.querySelector(`input#EntradaPromo`).value);
        let f2 = parseInt(document.querySelector(`input#SaidaPromo`).value);
        let f3 = parseInt(document.querySelector(`input#EntradaGeral`).value);
        let f4 = parseInt(document.querySelector(`input#SaidaGeral`).value);
        let f5 = parseInt(document.querySelector(`input#Adicional`).value);
        let f6 = parseInt(document.querySelector(`input#FechamentoCartao`).value);
        
        if (f1 > 0 && f2 > 0 && f3 > 0 && f4 > 0 && f5 > 0 && f6 > 0){
            entradaPromo = f1;
            saidaPromo = f2;
            entradaGeral = f3;
            saidaGeral = f4;
            adicional = f5;
            fechamentoCartao = f6;

            /*calculos*/

            totalPromocao = (entradaPromo - saidaPromo) * valorIndPromo;
            totalGeral =  (entradaGeral - saidaGeral) * valoGeral;
            subTotal = totalPromocao + totalGeral;
            totalCartao = fechamentoCartao;
            totalAdicional =  adicional;
            totalDinheiro = subTotal + adicional - fechamentoCartao;
            fechamentoTotal = subTotal + adicional

            document.querySelector(`input#TotalPromo`).value = totalPromocao;
            document.querySelector(`input#TotalGeral`).value = totalGeral;
            document.querySelector(`input#SubTotal`).value = subTotal;
            document.querySelector(`input#TotalCartao`).value = totalCartao;
            document.querySelector(`input#TotalAdicional`).value = totalAdicional;
            document.querySelector(`input#TotalRS`).value = totalDinheiro;
            document.querySelector(`input#Fechamento`).value = fechamentoTotal;
        }
    }
    else{
        console.log(`ainda não salvou`)
    }
}