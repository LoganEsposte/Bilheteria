// Basic data

let Cash 
let PromotionValue = 30;
let NumberOfTickets = 5;
let GeneralValue = 7;

// Daily Entry of Promotion

let InputPromotion // valores em função de quantidades de bilhetes
let OutputPromotion 

// Daily Entry of General

let InputGeneral 
let OutputGeneral 

// Daily Closing

let Money
let CreditCard
let Additional

// Business Rules

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
