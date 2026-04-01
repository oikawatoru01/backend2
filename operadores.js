const idade = 18;
const maiorDeIdade = idade >=18;
const possuiCNH = true;

//Operador E
const podeDirigir = maiorDeIdade && possuiCNH;
console.log("Pode Dirigir? " + podeDirigir);

//Operador OU
const podeViajarSozinho = maiorDeIdade || possuiCNH;
console.log ("Pode viajar sozinho? + podeViajarSozinho");

//Operador NOT
const precisaDeAcompanhante = !maiorDeIdade;
console.log ("Precisa de Acompanhante? + precisaDeAcompanhante");

//DENTRO DO TERMINAL
git add operadores.js  
