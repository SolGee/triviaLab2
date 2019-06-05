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
  input.classList.add("oculto");

  document.getElementById("inicio").classList.add("oculto");
  document.getElementById("elige").classList.add("show");

  document.getElementById("elige").classList.remove("oculto");

});

// DECLARAR FUNCIONES HIDDEN Y SHOW

const hideSection = (id) => {
  console.log(id)
  // document.getElementById("id").classList.add("oculto");
  document.getElementById(id).style.display = 'none'

}

const showSection = (id) => {
  //document.getElementById(id).classList.remove("oculto");
  document.getElementById(id).style.display = 'block'
}


// MOSTRAR SECCIÓN ARTE

const preguntasArte = document.getElementById("preguntas_arte");

preguntasArte.addEventListener("click",artes);

function artes(){
  hideSection("elige");
  showSection("arte");
}


// MOSTRAR SECCIÓN CIENCIA

const preguntasCiencia = document.getElementById("preguntas_ciencia");

preguntasCiencia.addEventListener("click",ciencia);

function ciencia(){
  hideSection("elige");
  showSection("ciencia");
}



// RESULTADOS PREGUNTAS ARTE

const resultadosArte = document.getElementById("botonArte");



function resultArt(){
  hideSection("arte");
  showSection("enviadoArte");
}

resultadosArte.addEventListener("click", resultArt)



// SCORE ARTES

function checkArte(){

  let formulario = document.forms.namedItem("trivia");
  console.log(formulario.preguntaArte.value);

  let preguntaArte1 = formulario.preguntaArte.value;
  
	let preguntaArte2 = formulario.preguntaArte2.value;
	let preguntaArte3 = formulario.preguntaArte3.value;
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


	let pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	let messages = ["¡Eres un genio!", "¡Casi lo logras!", "Sigue participando"];
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
	document.getElementById("correctas").innerHTML = "Tuviste " + correct + " correctas.";
	document.getElementById("imagen").src = pictures[score];

	
  }
  

// SCORE CIENCIA

function checkCiencia(){

  let formularioCiencia = document.forms.namedItem("trivia");
 
  let preguntaCiencia1 = formularioCiencia.preguntaCiencia.value;
  
	let preguntaCiencia2 = formularioCiencia.preguntaCiencia2.value;
	let preguntaCiencia3 = formularioCiencia.preguntaCiencia3.value;
  let correct = 0;

	if (preguntaCiencia1 == "H2O") {
		correct++;
}
	if (preguntaCiencia2 == "Branquias") {
		correct++;
}	
	if (preguntaCiencia3 == "Electrones") {
		correct++;
	}


	let pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	let messages = ["¡Eres un genio!", "¡Casi lo logras!", "Sigue participando"];
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
  
  document.getElementById("enviadoCiencia").showSection;

	document.getElementById("mensaje").innerHTML = messages[score];
	document.getElementById("correctas").innerHTML = "Tuviste " + correct + " correctas.";
	document.getElementById("imagen").src = pictures[score];

	
	}