var dados = []
if (!JSON.parse(localStorage.getItem("__dados__") === null)) {
    dados = JSON.parse(localStorage.getItem("__dados__"))
}

function ApagaRegistro(id) {
    let result = confirm("Deseja realmente excluir este registro?");
    if (result) {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].ID == id) {
                dados.splice(i, 1);
            }
        }
        PopulaTabela();
    }
}

function EditaRegistro(id) {
    $("#modalRegistro").modal("show");

    dados.forEach(function (item) {
        if (item.ID == id) {
            $("#hdID").val(item.ID);
            $("#txtSabor").val(item.Sabor);
            $("#txtTamanho").val(item.Tamanho);
            $("#txtValor").val(item.Valor);
            $("#txtPagamento").val(item.Pagamento);
        }
    })
}

function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados));

        $("#tblDados tbody").html("");

        dados.forEach(function (item) {

            $("#tblDados tbody").append(
                `<tr>
                    <td>${item.ID}</td>
                    <td>${item.Sabor}</td>
                    <td>${item.Tamanho}</td>
                    <td>${item.Valor}</td>
                    <td>${item.Pagamento}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick="EditaRegistro(${item.ID});">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" onclick="ApagaRegistro(${item.ID});">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>`
            );
        });
    }
}

$(function () {

    $("#btnSalvar").click(function () {
        let Id = $("#hdID").val();
        let Sabor = $("#txtSabor").val();
        let Tamanho = $("#txtTamanho").val();
        let Valor = $("#txtValor").val();
        let Pagamento = $("#txtPagamento").val();

        if (!Id || Id == "0") {
            let registro = {
                'Sabor': Sabor,
                'Tamanho': Tamanho,
                'Valor': Valor,
                'Pagamento': Pagamento,
                'ID': dados.length + 1
            };

            dados.push(registro);
        } else {
            dados.forEach(function (item) {

                if (item.ID == Id) {
                    item.Sabor = Sabor;
                    item.Tamanho = Tamanho;
                    item.Valor = Valor;
                    item.Pagamento = Pagamento;
                }
            })
        }

        alert("Pedido salvo com sucesso!");
        $("#modalRegistro").modal("hide");


        $("#hdID").val("0");
        $("#txtSabor").val("");
        $("#txtTamanho").val("");
        $("#txtValor").val("");
        $("#txtPagamento").val("");

        PopulaTabela()
    })
})