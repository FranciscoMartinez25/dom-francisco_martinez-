const personajes = [
    {
        id: 1,
        nombre: "A-Bomb",
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
    },
    {
        id: 2,
        nombre: "Abe Sapien",
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg"
    },
    {
        id: 3,
        nombre: "Abin Sur",
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg"
    },
    {
        id: 4,
        nombre: "Abomination",
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
    },
    {
        id: 5,
        nombre: "Abraxas",
        imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg"
    }
];

const formulario=document.querySelector("#formulario");
const inputNombre=document.querySelector("#nombre");
const inputImagen=document.querySelector("#imagen");
const contenedor = document.querySelector("#tarjetaPersonaje");
const inputBuscar = document.querySelector("#buscar");
const btnBuscar = document.querySelector("#botonBuscar");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const personajeNuevo={
        id:personajes.length+1,
        nombre:inputNombre.value,
        imagen:inputImagen.value
    };
    personajes.push(personajeNuevo);
    verPersonaje();
    formulario.reset();
});


function eliminarPersonaje(id){
    const indice=personajes.findIndex(
        personaje=>personaje.id===id
    );
    if (indice !== -1){
        personajes.splice(indice, 1);
    }
    verPersonaje();
}


function verPersonaje(lista=personajes) {
    contenedor.innerHTML="";
    lista.forEach(personaje => {
        contenedor.innerHTML += `
            <div class="card col-lg-3 m-3">
            <img
                src="${personaje.imagen}"
                class="card-img-top"
                alt="${personaje.nombre}"
                style="object-fit: cover"
                >
                <div class="card-body">
                <h5 class="card-title">
                ${personaje.nombre}
                </h5>
                <button 
                class="btn btn-danger" 
                onclick="eliminarPersonaje(${personaje.id})">Eliminar</button>
                </div>
                </div>
        `;
    });

    
}
btnBuscar.addEventListener("click",()=>{
    const texto=inputBuscar.value.toLowerCase().trim();
    if(texto===""){
        verPersonaje();
        return
    }
    const filtro=personajes.filter
    (personaje=>
        personaje.nombre.toLowerCase().includes(texto)
);
verPersonaje(texto==="" ? personajes:filtro);
}
);
verPersonaje();