/**2.- Realice una página que permita mostrar información de autos. 
1. Acceda a la pagina https://api.api-ninjas.com
2. Registrese. 
3. Obtenga la API_KEY 
4. Busque el endpoint cars. 
5. Verifique como funciona el endpoint (que parámetros usa y cual es el formato del 
resultado. 
6. Note que para utilizar la api se debe proveer una API KEY que debe enviarse en 
los encabezados del request. 
Solicite por medio de un formulario la marca, modelo y tipo de combustible y actualice 
los datos de los autos sin recargar el contenido de la página. 
Los filtros deben aplicarse en forma acumulativa si el usuario lo desea.  */
const filterForm = document.getElementById("filterForm");
const resultsContainer = document.getElementById("results");

filterForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const fuelType = document.getElementById("fuelType").value;

  fetchCars(make, model, fuelType);
});

function fetchCars(make, model, fuelType) {
  const url = `https://api.api-ninjas.com/v1/cars?model=${model}&make=${make}&fuel_type=${fuelType}`;
  const headers = {
    "X-Api-Key": "UI5mPbfdMRv/O5P3f1oIrA==Fwa6z9cMSlgIvtXG",
  };

  fetch(url, {
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Hubo un error");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      displayResults(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      resultsContainer.textContent = "Error al obtener datos de autos.";
    });
}

function displayResults(data) {
  resultsContainer.innerHTML = ""; 

  if (data.length === 0) {
    resultsContainer.textContent =
      "No se encontraron autos que coincidan con tu búsqueda.";
    return;
  }

  let resultsHTML = "";
  for (const car of data) {
    resultsHTML += `
        <div class="car-result">
          <p><strong>Modelo:</strong> ${car.model}</p>
          <p><strong>Marca:</strong> ${car.make}</p>
          <p><strong>Tipo de Combustible:</strong> ${car.fuel_type}</p>
        </div>
        <hr> `;
  }

  resultsContainer.innerHTML = resultsHTML;
}
