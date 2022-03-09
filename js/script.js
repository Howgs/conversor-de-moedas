function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    valorEmDolarNumerico = parseFloat(valor)

    valorEmReal = valorEmDolarNumerico * 5,01;
    console.log(valorEmReal);
    excValorConvertido = document.getElementById("valorConvertido")
    valorConvertido = ("Valor em Real = R$" + valorEmReal)
    excValorConvertido.innerHTML = valorConvertido
}