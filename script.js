var amar = document.getElementById('item1') //Opções de compra
var azul = document.getElementById('item2')
var verm = document.getElementById('item3')
var reset = document.getElementById('final') //Botões da parte de compra
var resul = document.getElementById('total')

var compra = document.getElementById('comprar') //Botões do header
var login = document.getElementById('login')
var telacompra = document.getElementById('conteudo1') //ids das telas (compra e login)
var telalogin = document.getElementById('conteudo2')


amar.addEventListener('click', function () {
  adicionarValor(20);
});
azul.addEventListener('click', function () {
  adicionarValor(15);
});
verm.addEventListener('click', function () {
  adicionarValor(10);
});
reset.addEventListener('click', function () {
  resetarValor()
});

function adicionarValor(valor) {
  var valorAtual = parseInt(resul.textContent) || 0; //atribui o valor inicial 0
  resul.textContent = valorAtual + valor + '$'; //soma o valor clicado com o valor atual
}

function resetarValor() {
  resul.textContent = 0 + "$";
}

compra.addEventListener('click', function () {
  telacompra.style.display = 'flex';
  telalogin.style.display = 'none';
});

login.addEventListener('click', function () {
  telalogin.style.display = 'flex';
  telacompra.style.display = 'none';
});

function dados() {
  alert("Roubei seus dados, valeu (mentira)");
}