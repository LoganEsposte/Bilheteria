function Save(){
    let n1 = document.querySelector('input#Caixa');
    Cash = Number.parceInt(Caixa.Value);
    PromotionValue = document.querySelector('input#ValorPromocao');
    let n2 = Number.parseInt(ValorPromocao.Value);
    GeneralValue = document.querySelector('input#ValorGeral');
    let n3 = Number.parceInt(ValorGeral.Value);
    
    console.log(Cash);
    console.log(PromotionValue);
    console.log(GeneralValue);
    //pegar os dados dos inputs e salvar nas variaveis vvv
    //mudar os inputs para disabled
    //apresentar os valores salvos
}

function Edith(){
    //apagar dados das variaveis
    //mudar os inputs (tirar disabled)
}


// Basic data

let Cash;
let PromotionValue;
const NumberOfTickets = 5;
let GeneralValue;

// Daily Entry of Promotion

let InputPromotion; // valores em função de quantidades de bilhetes
let OutputPromotion;

// Daily Entry of General

let InputGeneral;
let OutputGeneral;

// Daily Closing

let Money;
let CreditCard;
let Additional;



// Business Rules
function interromperEExecucao(){

let FullPromotion = (InputPromotion - OutputPromotion) * (PromotionValue / NumberOfTickets);
let FullGeneral = (InputGeneral - OutputGeneral) * GeneralValue;

let Subtotal = FullGeneral + FullPromotion;

let DailyTotal = Subtotal + Additional; 

console.log(FullPromotion) // Imprime o valor total de bilhetes de promoções do dia
console.log(FullGeneral) // Imprime o valor total de bilhetes gerais do dia
console.log(Subtotal) // Imprime a soma do total de promoções e geral

console.log(Money) // Imprime o fechamento em dinheiro
console.log(CreditCard) // Imprime o fechamento de Cartão
console.log(Additional) // Imprime o total de Adicionais

console.log(DailyTotal) // IImprime o Total do dia

}