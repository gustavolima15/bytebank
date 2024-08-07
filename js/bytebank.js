let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;


const elementoFormulario = document.querySelector(".block-nova-transacao form");

elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if(elementoFormulario.checkVisibility()) {
        console.log('foi')
        alert("Por favor preencha todos os campos da transação");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector('#data');

    let inputTransacao = inputTipoTransacao.value;
    let valor = inputData.value;
    let data = inputData.value;

    if (tipoTransacao == "Depósito") {
        saldo += valor;

    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valors;
    }
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();
});