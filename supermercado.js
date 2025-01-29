// cria referência do botão calcular
let btCalcular = document.getElementById('btCalcular');
// registra o evento click associado ao botão
btCalcular.addEventListener('click', calcularPromocao);

function calcularPromocao() {
    let inProduto = document.getElementById('inProduto');
    let inPreco = document.getElementById('inPreco');
    let outPromocao = document.getElementById('outPromocao');
    
    let produto = inProduto.value;
    let preco = Number(inPreco.value);
    
    // calcula o valor total de três unidades com desconto de 50% em uma delas
    let desconto = preco * 0.5;
    let totalPromocao = 2 * preco + desconto;
    
    // exibe a mensagem de promoção
    outPromocao.innerHTML = `Promoção de ${produto}: Compre 3 por apenas R$ ${totalPromocao.toFixed(2)} (50% de desconto no terceiro item)`;
}
