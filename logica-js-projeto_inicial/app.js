//Exercicios JS do curso ~Lógica de Programação~ da Alura 🤩


//Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld() {
    console.log('Olá, mundo!');
}
helloWorld();


//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
saudacao("Giovana");


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function doubleNumber(number = 9876) {
    let dobro = number * 2;
    console.log(`O dobro do número é ${dobro}`);
}
doubleNumber();


//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return media;
}
let resultado = calcularMedia(16, 32, 64);
console.log(`A média dos números é ${resultado}`);



//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
let maior = maiorNumero(840, 1570);
console.log(`O número maior é ${maior}`);



//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function multiplicarNumero(n1) {
    return n1 * n1;
}
let resposta = multiplicarNumero(2472);
console.log(`O resultado da multiplicação é ${resposta}`);



//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
//a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(m = 1.80, kg = 120) {
    let IMC = kg / (m * m);
    console.log(`O IMC de John Doe é ${IMC.toFixed(2)}`);
}
calcularIMC();



//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(n) {
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${n} é ${fatorial}`);
}
calcularFatorial(8);
calcularFatorial(9);



//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
//Para isso, considere a cotação do dólar igual a R$5,50.
function converterDolar(dolar, cotacao) {
    let real = dolar * cotacao;
    console.log(`${dolar} dólares equivale a ${real.toFixed(2)} reais`);
}
converterDolar(98, 5.50);



//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
//utilizando altura e largura que serão dadas como parâmetro.
function areaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`Área: ${area}m² | Perímetro: ${perimetro}m`);
}
areaEPerimetro(5, 3);



//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
//utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularSalaCircular(raio) {
    const PI = 3.14;
    let area = PI * raio ** 2;
    let perimetro = 2 * PI * raio;
    console.log(`Área: ${area.toFixed(2)}m² | Perímetro: ${perimetro.toFixed(2)}m`);
}
calcularSalaCircular(5);



//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuadaNumeroQualquer(numero) {
    console.log(`Tabuada do número ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tabuadaNumeroQualquer(7);



//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = []; 


//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao
//com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);
linguagensDeProgramacao.push( 'Java', 'Ruby', 'GoLang'); //Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
console.log(linguagensDeProgramacao);


//Lista com três nomes
let nomes = ["Creed", "Rob Zombie", "Pearl Jam"];
console.log(nomes[0]); //Crie uma lista com três nomes e exiba no console apenas o primeiro elemento
console.log(nomes[1]); //Crie uma lista com três nomes e exiba no console apenas o segundo elemento
console.log(nomes[2]); //Crie uma lista com três nomes e exiba no console apenas o terceiro elemento
