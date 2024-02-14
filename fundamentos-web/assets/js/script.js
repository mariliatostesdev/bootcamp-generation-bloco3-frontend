let nome = document.getElementById('name');
let email = document.querySelector('#email');
let nomeOk = false;
let emailOk = false;
let mapa = document.querySelector('#address-map');

function validaNome() {
	let txtNome = document.getElementById('txtNome');
	if (nome.value.length < 3) {
		txtNome.innerHTML = 'Nome inválido';
		txtNome.style.color = 'red';
	} else {
		txtNome.innerHTML = 'Nome válido';
		txtNome.style.color = 'green';
		nomeOk = true;
	}
}

function validaEmail() {
	let txtEmail = document.getElementById('txtEmail');
	if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
		txtEmail.innerHTML = 'Email inválido';
		txtEmail.style.color = 'red';
	} else {
		txtEmail.innerHTML = 'Email válido';
		txtEmail.style.color = 'green';
		emailOk = true;
	}
}

function enviar() {
	if (nomeOk && emailOk) {
		alert('Formulário enviado com sucesso!');
	} else {
		alert('Preencha o formulário corretamente.');
	}
}
