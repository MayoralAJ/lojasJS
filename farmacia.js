// cria referência do botão calcular
let btCalcular = document.getElementById('btCalcular');
// registra o evento click associado ao botão
btCalcular.addEventListener('click', calcularPreco);

function calcularPreco() {
    let inMedicamento = document.getElementById('inMedicamento');
    let inPreco = document.getElementById('inPreco');
    let outValor = document.getElementById('outValor');
    
    let medicamento = inMedicamento.value;
    let preco = Number(inPreco.value);
    
    // calcula o valor total de duas unidades
    let total = 2 * preco;
    
    // calcula o valor da promoção (removendo os centavos)
    let promocao = Math.floor(total);
    
    // exibe o resultado na página
    outValor.innerHTML = `Promoção de ${medicamento}: Leve 2 por apenas R$ ${promocao.toFixed(2)}`;
}
