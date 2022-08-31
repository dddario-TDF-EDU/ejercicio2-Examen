//como el archivo es pequeño los llamo de esta manera, sino seria por ID o clase
let btnCajas = document.querySelector("button");
let tempCajas;
let body = document.querySelector("body");

btnCajas.addEventListener("click", () => {
  tempCajas = Number(document.querySelector("input").value);
  crearCaja(tempCajas);
});

function crearCaja(cant) {
  for (let i = 0; i < cant; i++) {
    let caja = document.createElement("div");
    caja.classList.add("tamanioCaja");
    caja.classList.add("cajaRoja");
    body.appendChild(caja);
  }
}
