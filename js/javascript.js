//como el archivo es pequeño los llamo de esta manera, sino seria por ID o clase
let btnCajas = document.querySelector("button");
let tempCajas;
let totalCajas;
let body = document.querySelector("body");

btnCajas.addEventListener("click", () => {
  tempCajas = Number(document.querySelector("input").value);
  totalCajas = new Array(tempCajas);
  crearCaja(tempCajas);
});

let caja = document.createElement("div");
caja.classList.add("tamanioCaja");
caja.classList.add("cajaRoja");

function crearCaja(cant) {
  let aux;
  for (let i = 0; i < cant; i++) {
    totalCajas[i] = caja;
    aux = totalCajas[i];
    body.appendChild(aux);
    console.log(i);
  }
}

function ingresarCajas(cant) {
  body.appendChild(totalCajas[3]);
  //body.appendChild(totalCajas[0]);
}

//podia crear cajas pero ni idea como hacerlo una funcion para q las agregue todas, mala mia
