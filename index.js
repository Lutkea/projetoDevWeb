var dados = []

function ApagaRegistro(id) {
    let _confirm = confirm("Deseja realmente excluir este registro?")

    if (_confirm) {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].ID == id) {
                dados.splice(i, 1)
            }
        }

        PopulaTabela()

    }
}

function EditaRegistro(id) {
    $("#modalRegistro").modal("show")

    dados.forEach(function (item) {
        if (item.ID == id) {
            $("#hdID").val(item.ID)
            $("#txtSabor").val(item.Sabor)
            $("#txtTamanho").val(item.Tamanho)
            $("#txtValor").val(item.Valor)
            $("#txtPagamento").val(item.Pagamento)
        }
    })
}

function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            // template string
            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Sabor}</td>
                <td>${item.Tamanho}</td>
                <td>${item.Valor}</td>
                <td>${item.Pagamento}</td>
                <td><button type="button" class="btn btn-primary onclick="javascript:EditaRegistro(${Item.ID});"><i class="fa fa-edit"></button></td>
                <td><button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});"><i class="fa fa-trash"></button></td>
                </tr>`)
        })
    }
}
$(function () {
    // armazena informações
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela()
    }

    $("#btnSalvar").click(function () {
        // evento click do botão salvar

        let _id = $("#hdID").val()
        let Sabor = $("#txtSabor").val()
        let Tamanho = $("#txtTamanho").val()
        let Valor = $("#txtValor").val()
        let Pagamento = $("#txtPagamento").val()

        if (!_id || _id == "0") {
            let registro = {}
            registro.Sabor = Sabor
            registro.Tamanho = Tamanho
            registro.Valor = Valor
            registro.Pagamento = Pagamento

            registro.ID = dados.length + 1
            
            dados.push(registro)
        }
        else {
            dados.forEach(function (item) {
                if (item.ID == id) {
                    item.Sabor = Sabor
                    item.Tamanho = Tamanho
                    item.Valor = Valor
                    item.Pagamento = Pagamento
                }
            })
        }

        alert("Pedido salvo com sucesso!")
        $("#modalRegistro").modal("hide")

        // limpa campos
        $("#hdID").val("0")
        $("#txtSabor").val("")
        $("#txtTamanho").val("")
        $("#txtValor").val("")
        $("#txtPagamento").val("")

        PopulaTabela()
    })
})