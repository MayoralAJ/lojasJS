// cria referência do botão calcular
let btCalcular = document.getElementById('btCalcular');
// registra o evento click associado ao botão
btCalcular.addEventListener('click', calcularValor);

function calcularValor() {
    let inValor15Minutos = document.getElementById('inValor15Minutos');
    let inTempoUso = document.getElementById('inTempoUso');
    let outValor = document.getElementById('outValor');
    
    let valor15Minutos = Number(inValor15Minutos.value);
    let tempoUso = Number(inTempoUso.value);
    
    // calcula o número de blocos de 15 minutos (arredondando para cima)
    let blocos15Minutos = Math.ceil(tempoUso / 15);
    
    // calcula o valor total a pagar
    let valorPagar = blocos15Minutos * valor15Minutos;
    
    // exibe o resultado na página
    outValor.innerHTML = `Valor a ser pago: R$ ${valorPagar.toFixed(2)}`;
}
