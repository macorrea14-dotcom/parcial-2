// clase para los libros
class Libro {
  constructor() {
    this.libros = [
      { titulo: "el renacuajo paseador", autor: "rafael pombo", disponible: true },
      { titulo: "cien años de soledad", autor: "garcia marquez", disponible: true },
      { titulo: "crónica de una muerte anunciada", autor: "garcia marquez", disponible: false },
      { titulo: "don quijote", autor: "cervantes", disponible: true }
    ];
  }
  //busca el libro por su titulo
  buscarPorTitulo(titulo) {
    const libro = this.libros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
    return libro ? libro : "no se encontro el libro";
  }
  //busca el libro por su autor
  buscarPorAutor(autor) {
    return this.libros.filter(l => l.autor.toLowerCase() === autor.toLowerCase());
  }
}
//clase para los usuarios
class Usuario {
  constructor() {
    this.usuarios = [
      { nombre: "sofia", documento: "123" },
      { nombre: "camila", documento: "456" },
      { nombre: "juan", documento: "789" },
      { nombre: "eliza", documento: "147" }
    ];
  }
}
//clase para los préstamos
class Prestamo {
  constructor(libros, usuarios) {
    this.libros = libros;
    this.usuarios = usuarios;
    this.prestamos = [];
  }
  //funcion para prestar un libro
  prestarLibro(nombre, titulo) {
    const usuario = this.usuarios.find(u => u.nombre.toLowerCase() === nombre.toLowerCase());
    const libro = this.libros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());

    if (!usuario) {
        return console.log("usuario no encontrado")
    }
    if (!libro) {
        return console.log("libro no encontrado")
    }
    if (!libro.disponible) {
        return console.log("el libro no está disponible")
    }

    libro.disponible = false;
    this.prestamos.push({ usuario: nombre, titulo });
    console.log(`${nombre} prestó ${titulo}`);
  }
  //crea el reporte
  reporte() {
    const totalPrestados = this.prestamos.length;
    const disponibles = this.libros.filter(l => l.disponible).length;
    console.log(`libros prestados: ${totalPrestados}, libros disponibles: ${disponibles}`);
  }
}
//crear objetos del sistema
const biblioteca = new Libro();
const usuarios = new Usuario();
const sistema = new Prestamo(biblioteca.libros, usuarios.usuarios);

sistema.prestarLibro("sofia", "cien años de soledad");
sistema.prestarLibro("juan", "don quijote");
sistema.reporte();

//justificacion: combiné clases para organizar los datos y funciones como find y filter para búsquedas y reportes.
