function clicarCadastro(cadastroCliente) {
	cadastroCliente = document.getElementById('cliente');

	if (cadastroCliente.style.display === 'none') {

		cadastroCliente.style.display = 'block';

	}

	else {

		cadastroCliente.style.display = 'none';
	}

}

function clicarProdutos(cadastroProdutos) {
	cadastroProdutos = document.getElementById('produtos');

	if (cadastroProdutos.style.display === 'none') {

		cadastroProdutos.style.display = 'block';

	}

	else {

		cadastroProdutos.style.display = 'none';
	}

}

function cadastrarCliente(nome, email, telefone, endereco, comentarios, registroCliente, dadosCliente) {

	nome = document.getElementById('nome');
	email = document.getElementById('email');
	telefone = document.getElementById('telefone');
	endereco = document.getElementById('endereco');
	comentarios = document.getElementById('comentarios');
	dadosCliente = JSON.parse(localStorage.getItem("dadosCliente"))

	if (dadosCliente == null) {
		localStorage.setItem("dadosCliente", "[]");
		dadosCliente = "[]";
	}

	registroCliente = {

		nome: nome.value,
		email: email.value,
		telefone: telefone.value,
		endereco: endereco.value,
		comentarios: comentarios.value
	}

	dadosCliente.push(registroCliente);
	localStorage.setItem("dadosCliente", JSON.stringify(dadosCliente));

}

function cadastrarProdutos(nomeProduto, quantidade, tipo, enderecoDeEntrega,
	comentariosProdutos, dadosProdutos, registroProdutos) {

	nomeProduto = document.getElementById('nomeProduto');
	quantidade = document.getElementById('quantidade');
	tipo = document.getElementById('tipo');
	enderecoDeEntrega = document.getElementById('enderecoDeEntrega');
	comentariosProdutos = document.getElementById('comentariosProdutos');
	dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'))

	if (dadosProdutos == null) {

		localStorage.setItem("dadosProdutos", "[]");
		dadosProdutos = "[]";

	}

	registroProdutos = {

		nomeProduto: nomeProduto.value,
		quantidade: quantidade.value,
		tipo: tipo.value,
		enderecoDeEntrega: enderecoDeEntrega.value,
		comentariosProdutos: comentariosProdutos.value,

	}


	dadosProdutos.push(registroProdutos);
	localStorage.setItem("dadosProdutos", JSON.stringify(dadosProdutos));
}

