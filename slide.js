  var imagens = ["Bou.jpg","lupa.png","icone.png"];
var imgAtual = 0;
	
function trocaImg(){
	imgAtual = (imgAtual + 1) %3;
	document.getElementById("topImg").src = imagens[imgAtual];
}
setInterval(trocaImg, 4000);

