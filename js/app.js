let productos = [
  /*=========================================
    Kit de Filtros
==========================================*/
  {
    id: 1,
    nombre: "Kit filtros completo para VW Fox, Suran, Voyage.",
    categoria: ["KITS"],
    precio: 000,
    stock: "10"
  },
  {
    id: 2,
    nombre: "Kit filtros completo para VW Amarok.",
    categoria: ["Kits"],
    precio: 000,
    stock: "10" 
  },
  {
    id:3,
    nombre: "Kit filtros completos para Renault Kangoo II.",
    categoria: ["Kits"],
    precio: 000,
    stock: "10"
  },
  {
    id:4,
    nombre: "Kit filtros completos para Ford Fiesta Max y Ecosport 1.6 8v.",
    categoria: ["Kits"],
    precio: 000,
    stock: "10"
  },
/*=========================================
    liquiMoly
==========================================*/
  {
    id: 5,
    nombre: "Limpia inyector nafta.",
    categoria: ["LiquiMoly"],
    precio: 000,
    stock: "10"
  },
  {
    id:6,
    nombre: "Limpia inyector Diesel.",
    categoria: ["LiquiMoly"],
    precio: 000,
    stock: "10"
  },
  {
    id:7,
    nombre: "Limpia carburador.",
    categoria: ["LiquiMoly"],
    precio: 000,
    stock: "10"
  },
  {
    id:8,
    nombre: "Aditivo para aceite de motor.",
    categoria: ["LiquiMoly"],
    precio: 000,
    stock: "10"
  },
/*=========================================
    Siliconas
==========================================*/
  {
    id:9,
    nombre: "Silicona Liquida Walker.",
    categoria: ["Silicona"],
    precio: 000,
    stock: "10"
  },
  {
    id:10,
    nombre: "Silicona Liquida Tribuno.",
    categoria: ["Silicona"],
    precio: 000,
    stock: "10"
  },
  {
    id:11,
    nombre: "Silicona en Aerosol K78.",
    categoria: ["Silicona"],
    precio: 000,
    stock: "10"
  },
  {
    id:12,
    nombre: "Revividor de negro Walker.",
    categoria: ["Silicona"],
    precio: 000,
    stock: "10"
  },
/*=========================================
    Perfume
==========================================*/
    {
      id:13,
      nombre: "Perfume en lata CB",
      categoria: ["Perfume"],
      precio: 000,
      stock: "10"
    },
    {
      id:14,
      nombre: "Perfume en lata Walker",
      categoria: ["Perfume"],
      precio: 000,
      stock: "10"
    },
    {
      id:15,
      nombre: "Pinito aromatizante",
      categoria: ["Perfume"],
      precio: 000,
      stock: "10"
    },
    {
      id:16,
      nombre: "Bolita aromatizante",
      categoria: ["Perfume"],
      precio: 000,
      stock: "10"
    }
    /*=========================================
    Mas categorias para agregar productos
==========================================*/

    /*=========================================
    Mas categorias
    ==========================================*/
]

/*=========================================
    Evento - Agregar al carrito
==========================================*/

/*=========================================
function renderizarProductos(arrayProductos){
  let contenedor = document.getElementById("contenedorProductos")
  contenedor.innerHTML= ""
  arrayProductos.forEach(producto =>{
    let tarjetaProducto= document.createElement("div")
    tarjetaProducto.className="tarjetaProducto"

    tarjetaProducto.innerHTML = "
    <h2 class = tituloProducto>${producto.nombre}</h2>
    <p>${producto.categoria}</p>
    div class=imagen style="background-image"
    "
  })
}
==========================================*/

const headerMenu=document.querySelector('.hm-header');

console.log(headerMenu.offsetTop);

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 80){
        headerMenu.classList.add('header-fixed');
    }else{
        headerMenu.classList.remove('header-fixed');
    }
})

/*=========================================
    Tabs
==========================================*/
if(document.querySelector('.hm-tabs')){

    const tabLinks=document.querySelectorAll('.hm-tab-link');
    const tabsContent=document.querySelectorAll('.tabs-content');

    tabLinks[0].classList.add('active');

    if(document.querySelector('.tabs-content')){
        tabsContent[0].classList.add('tab-active');
    }
    

    for (let i = 0; i < tabLinks.length; i++) {
        
        tabLinks[i].addEventListener('click',()=>{

            
            tabLinks.forEach((tab) => tab.classList.remove('active'));
            tabLinks[i].classList.add('active');
            
            tabsContent.forEach((tabCont) => tabCont.classList.remove('tab-active'));
            tabsContent[i].classList.add('tab-active');
            
        });
        
    }

}

/*=========================================
    MENU
==========================================*/

const menu=document.querySelector('.icon-menu');
const menuClose=document.querySelector('.cerrar-menu');

menu.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.remove('active');
})