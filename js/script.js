// SECCIÓN INICIO


let nombre; 
let input= document.getElementById("nombre");
let boton= document.getElementById("inicia");
let elegir= document.getElementById("elige");
let hola= document.getElementById("bienvenida");

boton.addEventListener ("click",function(){ 
  nombre= input.value;
  hola.innerHTML += nombre;
  elegir.style.display="block";
  input.style.display = "none";

  document.getElementById("inicio").classList.add("oculto");
  document.getElementById("elige").classList.remove("oculto");

});

// DECLARAR FUNCIONES HIDDEN Y SHOW

const hideSection = (id) => {
  console.log(id)
  // document.getElementById("id").classList.add("oculto");
  document.getElementById("elige").style.display = 'none'

}

const showSection = (id) => {
  document.getElementById(id).classList.remove("oculto");
}


// MOSTRAR SECCIÓN ARTE

const preguntasArte = document.getElementById("preguntas_arte");

preguntasArte.addEventListener("click",artes);

function artes(){
  hideSection("elige");
  showSection("arte");
}









// PREGUNTAS ARTE

const resultadosArte = document.getElementById("botonArte");

function checkArte(){

	let preguntaArte1 = document.triviaArte.preguntaArte1.value;
	let preguntaArte2 = document.triviaArte.preguntaArte2.value;
	let preguntaArte3 = document.triviaArte.preguntaArte3.value;
	let correct = 0;


	if (preguntaArte1 == "Leonardo Da Vinci") {
		correct++;
}
	if (preguntaArte2 == "Picasso") {
		correct++;
}	
	if (preguntaArte3 == "Vincent van Gogh") {
		correct++;
	}


	let imagenes = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	let mensajes = ["¡Eres un genio!", "¡Casi lo lo logras!", "Sigue participando"];
	let score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
  }
  
  document.getElementById("enviadoArte").showSection;

	document.getElementById("mensaje").innerHTML = messages[score];
	document.getElementById("correctas").innerHTML = "You got " + correct + " correct.";
	document.getElementById("imagen").src = pictures[score];

	
	}