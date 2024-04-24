const palabras = [
    "autocomplete",
    "base",
    "datos",
    "elemento",
    "input",
    "javascript",
    "librería",
    "palabras",
    "propias",
    "proponiendo",
    "usuario",
    "van",
    "agregando",
    "comienzo",
    "coincidan",
    "clase",
    "con",
    "caja",
    "completar",
    "texto",
    "librería",
  ];
  
  const buscarPalabras = (cadena) => {
    return palabras.filter((palabra) => palabra.startsWith(cadena));
  };
  
  const mostrarSugerencias = (sugerencias) => {
    // Elimina la lista anterior
    const lista = document.querySelector(".sugerencias");
    if (lista) {
      lista.remove();
    }
  
    // Crea una nueva lista
    const nuevaLista = document.createElement("ul");
    nuevaLista.className = "sugerencias";
    sugerencias.forEach((palabra) => {
      const li = document.createElement("li");
      li.textContent = palabra;
      nuevaLista.appendChild(li);
    });
    document.body.appendChild(nuevaLista);
  };
  
  const escucharCambios = () => {
    const inputs = document.querySelectorAll(".autocomplete");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const cadena = input.value;
        if (cadena.length > 0) {
          const sugerencias = buscarPalabras(cadena);
          mostrarSugerencias(sugerencias);
        } else {
          mostrarSugerencias([]);
        }
      });
    });
  };
  
  escucharCambios();  