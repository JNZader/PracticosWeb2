/*5.- En base al siguiente formato JSON 
[ 
{ 
"id" : "978-0641723445", 
"label" : ["book","hardcover"], 
"name" : "The Lightning Thief", 
"author" : "Rick Riordan", 
"series_t" : "Percy Jackson and the Olympians", 
"genre_s" : "fantasy", 
"inStock" : true, 
"price" : 12, 
"pages_i" : 384 
} 
, 
{ 
"id" : "978-1857995879", 
"label" : ["book","paperback"], 
"name" : "Sophie's World : The Greek Philosophers", 
"author" : "Jostein Gaarder", 
"genre_s" : "fantasy", 
"inStock" : true, 
"price" : 3, 
"pages_i" : 64 
} 
, 
{ 
"id" : "978-1933988177", 
"label" : ["Article","paperback"], 
"name" : "Lucene in Action, Second Edition", 
"author" : "Michael McCandless", 
"genre_s" : "IT", 
"inStock" : true, 
"price" : 30, 
"pages_i" : 475 
} 
]
a.- Cree una página que pueda cargar un nuevo registro de libro en el array de objetos 
basado en el formato JSON dado. 
b.- Agregue una funcionabilidad que permita al usuario ver todos los libros registrados. 
c.- Cree otra función que permita al usuario ver los libros mayores a un determinado 
precio. 
d.- Cree otra funcionalidad que permita ver al usuario los libros que pertenecen a una 
determinada etiqueta. 
*/
class Libro {
  constructor(
      id,
      label,
      name,
      author,
      series_t,
      genre_s,
      inStock,
      price,
      pages_i
  ) {
      this.id = id;
      this.label = label;
      this.name = name;
      this.author = author;
      this.series_t = series_t;
      this.genre_s = genre_s;
      this.inStock = inStock;
      this.price = price;
      this.pages_i = pages_i;
  }
}

function crearLibro(
  id,
  label,
  name,
  author,
  series_t,
  genre_s,
  inStock,
  price,
  pages_i
) {
  return new Libro(
      id,
      label,
      name,
      author,
      series_t,
      genre_s,
      inStock,
      price,
      pages_i
  );
}
const libros = [
  crearLibro(
      "978-0641723445",
      ["book", "hardcover"],
      "The Lightning Thief",
      "Rick Riordan",
      "Percy Jackson and the Olympians",
      "fantasy",
      true,
      12,
      384
  ),
  crearLibro(
      "978-1857995879",
      ["book", "paperback"],
      "Sophie's World : The Greek Philosophers",
      "Jostein Gaarder",
      "fantasy",
      "IT",
      true,
      3,
      64
  ),
  crearLibro(
      "978-1933988177",
      ["Article", "paperback"],
      "Lucene in Action, Second Edition",
      "Michael McCandless",
      "IT",
      "IT",
      true,
      30,
      475
  ),
];

function mostrarLibros(libros) {
  const listaLibros = document.getElementById("listaLibros");
  listaLibros.innerHTML = "";
  for (const libro of libros) {
      const elementoLista = document.createElement("li");
      elementoLista.textContent = `${libro.name} de ${libro.author}`;
      listaLibros.appendChild(elementoLista);
  }
}

function manejarAgregarLibro(evento) {
  evento.preventDefault();
  libros.push(
      crearLibro(
          document.getElementById("id").value,
          document.getElementById("etiqueta").value,
          document.getElementById("nombre").value,
          document.getElementById("autor").value,
          document.getElementById("series").value,
          document.getElementById("genero").value,
          document.getElementById("stock").value,
          parseFloat(document.getElementById("precio").value),
          parseInt(document.getElementById("paginas").value)
      )
  );
  mostrarLibros(libros);
  document.getElementById("formNuevoLibro").reset();
}

function filtrarPorPrecio(libros, precioMinimo) {
  return libros.filter((libro) => libro.price >= precioMinimo);
}

function manejarFiltrarPorPrecio(evento) {
  evento.preventDefault();
  const precioMinimo = parseFloat(document.getElementById("precioMinimo").value);
  const librosFiltrados = filtrarPorPrecio(libros, precioMinimo);
  mostrarLibros(librosFiltrados);
}

function filtarPorEtiqueta(libros, etiqueta) {
  return libros.filter((libro) => libro.label.includes(etiqueta));
}

function manejarFiltrarPorEtiqueta(evento) {
  evento.preventDefault();
  const etiquetaSeleccionada = document.getElementById("etiquetaSeleccionada").value;
  const librosFiltrados = filtarPorEtiqueta(libros, etiquetaSeleccionada);
  mostrarLibros(librosFiltrados);
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarLibros(libros);
  document.getElementById("formNuevoLibro").addEventListener("submit", manejarAgregarLibro);
  document.getElementById("btnFiltrarPorPrecio").addEventListener("click", manejarFiltrarPorPrecio);
  document.getElementById("btnFiltrarPorNombre").addEventListener("click", manejarFiltrarPorEtiqueta);
});
const btnAgregarLibro = document.getElementById("agregarLibro");
const formNuevoLibro = document.getElementById("formNuevoLibro");
const btnBuscarPorPrecio = document.getElementById("btn_buscarLibroPorPrecio");
const formBuscarPorPrecio = document.getElementById("form_buscarLibroPorPrecio");
const btnBuscarPorNombre = document.getElementById("btn_buscarLibroPorNombre");
const formBuscarPorNombre = document.getElementById("form_buscarLibroPorNombre");

function alternarFormularioNuevoLibro() {
  formNuevoLibro.style.display = formNuevoLibro.style.display === "none" ? "block" : "none";
}

function alternarFormularioBuscarPorPrecio() {
  formBuscarPorPrecio.style.display = formBuscarPorPrecio.style.display === "none" ? "block" : "none";
}

function alternarFormularioBuscarPorNombre() {
  formBuscarPorNombre.style.display = formBuscarPorNombre.style.display === "none" ? "block" : "none";
}
btnAgregarLibro.addEventListener("click", alternarFormularioNuevoLibro);
btnBuscarPorPrecio.addEventListener("click", alternarFormularioBuscarPorPrecio);
btnBuscarPorNombre.addEventListener("click", alternarFormularioBuscarPorNombre);

document.getElementById("btnFiltrarPorPrecio").addEventListener("click", () => {
  manejarFiltrarPorPrecio();
});

document.getElementById("btnFiltrarPorNombre").addEventListener("click", () => {
  manejarFiltrarPorEtiqueta();
});