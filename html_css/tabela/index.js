function dadosTabela()
{
    var dados = []
    dados = document.getElementById('tab').rows

    console.log("O código do produto: ",dados[1].cells[0].innerHTML)
    var txtNome = document.getElementById('txtNome')
    var txtResultado = document.getElementById('txtResultado')
    
    txtResultado.innerHTML = txtNome.value + " - " + dados[2].cells[0].innerHTML
    
}