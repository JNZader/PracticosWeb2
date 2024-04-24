const registroForm = document.getElementById("registroForm");
const registrarBtn = document.getElementById("registrarBtn");
const dataList = document.getElementById("dataList");
const ordenarAnoBtn = document.getElementById("ordenarAnoBtn");
const ordenarInflacionBtn = document.getElementById("ordenarInflacionBtn");
const ordenarSucesoBtn = document.getElementById("ordenarSucesoBtn");

let datos = [];

// validar inputs
function validateInput() {
  const anio = document.getElementById("anio").value;
  const inflacion = parseFloat(document.getElementById("inflacion").value);
  const suceso = document.getElementById("suceso").value;

  if (!anio || !inflacion || !suceso) {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  return true;
}

// mostrar eventos
function displayEvents() {
  dataList.innerHTML = "";
  datos.forEach((evento) => {
    const dataItem = document.createElement("div");
    dataItem.classList.add("data-item");

    const dataLabelAnio = document.createElement("span");
    dataLabelAnio.classList.add("data-label");
    dataLabelAnio.textContent = "Año: ";
    const dataValueAnio = document.createElement("span");
    dataValueAnio.classList.add("data-value");
    dataValueAnio.textContent = evento.anio;
    dataItem.appendChild(dataLabelAnio);
    dataItem.appendChild(dataValueAnio);

    const dataLabelInflacion = document.createElement("span");
    dataLabelInflacion.classList.add("data-label");
    dataLabelInflacion.textContent = "Inflación: ";
    const dataValueInflacion = document.createElement("span");
    dataValueInflacion.classList.add("data-value");
    dataValueInflacion.textContent = evento.inflacion;
    dataItem.appendChild(dataLabelInflacion);
    dataItem.appendChild(dataValueInflacion);

    const dataLabelSuceso = document.createElement("span");
    dataLabelSuceso.classList.add("data-label");
    dataLabelSuceso.textContent = "Suceso: ";
    const dataValueSuceso = document.createElement("span");
    dataValueSuceso.classList.add("data-value");
    dataValueSuceso.textContent = evento.suceso;
    dataItem.appendChild(dataLabelSuceso);
    dataItem.appendChild(dataValueSuceso);

    dataList.appendChild(dataItem);
  });
}

// eventlisterer btn registrar
registrarBtn.addEventListener("click", () => {
  if (validateInput()) {
    const anio = document.getElementById("anio").value;
    const inflacion = parseFloat(document.getElementById("inflacion").value);
    const suceso = document.getElementById("suceso").value;

    const evento = {
      anio: anio,
      inflacion: inflacion,
      suceso: suceso,
    };

    datos.push(evento);

    displayEvents();

    registroForm.reset();
  }
});
