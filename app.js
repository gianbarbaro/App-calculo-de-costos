let montos = [];
let nombres = [];

function obtenerGastos() {
  if (
    document.getElementById("inputNombre").value !== "" &&
    document.getElementById("inputGasto").value !== ""
  ) {
    if (document.getElementById("inputGasto").value < 0) {
      alert("Lo siento, el monto ingresado es incorrecto");
    } else {
      const nom = document.getElementById("inputNombre").value;
      const monto = document.getElementById("inputGasto").value;

      montos.push(monto);
      nombres.push(nom);
      
      imprimirDatos(nom, monto);

      imprimirMontos();
    }
  } else {
    alert("Lo siento, debe rellenar ambos campos");
  }
}

function imprimirDatos(nom, monto) {
  const gastos = document.getElementById("gastos");
  gastos.innerText = nom + ": $" + monto;
}

function totalAPagar(listaDePrecios) {
  let suma = 0;
  for (let monto of listaDePrecios) {
    suma += parseInt(monto);
  }
  return suma;
}

function imprimirMontos() {
  const total = document.getElementById("total");
  const division = document.getElementById("division");
  total.innerText = "Total: $" + totalAPagar(montos);
  division.innerText =
    "Total a poner cada uno: $" + totalAPagar(montos) / montos.length;
}
