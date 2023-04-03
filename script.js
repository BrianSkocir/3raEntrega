let products = [
  {
    id: 1,
    nombre: "FILTRO DE AIRE PARA VW FOX",
    categoria: ["FILTRO DE AIRE"],
    precio: 2000,
    stock: "3"
  },
  {
    id: 2,
    nombre: "FILTRO DE ACEITE PARA VW FOX",
    categoria: ["FILTRO DE ACEITE"],
    precio: 2500,
    stock: "2"
  },
  {
    id: 3,
    nombre: "ACEITE YPF",
    categoria: ["ACEITE ENVASADO"],
    precio: 8000,
    stock: "7"
  },
  {
    id: 4,
    nombre: "ACEITE TOTAL",
    categoria: ["ACEITE ENVASADO"],
    precio: 7000,
    stock: "2"
  },
  {
    id: 5,
    nombre: "ACEITE ELF",
    categoria: ["ACEITE ENVASADO"],
    precio: 8500,
    stock: "6"
  },
  {
    id: 6,
    nombre: "FILTRO DE NAFTA PARA VW SURAN",
    categoria: ["FILTRO DE NAFTA"],
    precio: 4000,
    stock: "1"
  },
  {
    id: 7,
    nombre: "FILTRO DE GASOIL PARA PEUGEOT",
    categoria: ["FILTRO DE GASOIL"],
    precio: 5000,
    stock: "10"
  },
  {
    id: 8,
    nombre: "FILTRO DE ACEITE PARA RENAULT CLIO",
    categoria: ["FILTRO DE ACEITE"],
    precio: 4500,
    stock: "10"
  },
];

let categorias = [
  "FILTROS DE AIRE",
  "FILTROS DE ACEITE",
  "FILTRO DE NAFTA",
  "FILTRO DE GASOIL",
  "ACEITE ENVASADO",
];

let productos = products.map((product) => {
  return new Producto(
    product.id,
    product.nombre,
    product.categoria,
    product.precio,
    product.stock
  );
});

let carrito = []

let listaProductos = "Seleccione numero de producto: \n 0 - PARA TERMINAR LA COMPRA \n" +productos.map(producto => producto.id + " - " + producto.nombre).join('\n')

let opcion
do{
    opcion = Number(prompt ("Por favor ingrese el numero del producto que desea comprar: "+ ('\n') + listaProductos))
    let productoBuscado = productos.find(producto => producto.id ===opcion)

    if (productoBuscado) {
        let posicionProductoBuscado = carrito.findIndex(producto => producto.id===productoBuscado.id)
        if (posicionProductoBuscado != -1){
            carrito[posicionProductoBuscado].cantidadDeUnidades++
            carrito[posicionProductoBuscado].subtotal = carrito[posicionProductoBuscado].precioUnidad * carrito[posicionProductoBuscado].cantidadDeUnidades
        } else{
            carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            cantidadDeUnidades: 1,
            precioUnidad: productoBuscado.precio,
            subtotal: productoBuscado.precio })

        console.log(posicionProductoBuscado)
        }  
    }
    console.log(carrito)
} while (opcion !=0)

let total = calcularTotal(carrito);
alert("El total de los productos seleccionados es de $" +total)

function calcularTotal(carrito){
    let total=0
    carrito.forEach((producto) => {
        total +=producto.subtotal
    });
return total;
}

