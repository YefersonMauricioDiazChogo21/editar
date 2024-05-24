// import { info } from "./infoUser.js"
// console.log(info)
const info = [
    {
        about: "¿Que nivel de calidad estas buscando?",
        name: "Calidad",
        imagenes: [
            {
                src: "./src/users/create-tabla/imagenes/P-1/calidadOptima.png",
                value: "2000000",
                descripcion: "Calidad Optima",
            },
            {
                src: "./src/users/create-tabla/imagenes/P-1/calidadPrecio.png",
                value: "4000000",
                descripcion: "Buena Relacion Calidad/Precio",
            },
            {
                src: "./src/users/create-tabla/imagenes/P-1/noImportaLaCalidad.png",
                value: "1000000",
                descripcion: "No me importa tanto la calidad",
            },
        ]
    }]
const divCont=document.getElementById('contenedorEditar')

divCont.innerHTML=`
<p class="editar">Editar</p>
<div class="contenedorEditar-tabla">
    
</div>
`
const btnEditar=document.querySelector('.editar')
const divTabla=document.querySelector('.contenedorEditar-tabla')
const data=[
    ['img/flash.png','DC COMICS','Flash'],
    ['img/ironman.png','MARVEL COMICS','IronMan']
]

btnEditar.addEventListener('click',()=>{
    const divEdit=document.createElement('div')
    divEdit.classList.add('d-flex', 'align-items-center','flex-column')
    divEdit.innerHTML=`
        ${data.map((item,index)=>`
        <div class="d-flex align-items-center">
            <img class="miniatura-img" src="${item[0]}" alt="">
            <div class="subInfo">
                <p>${item[1]}</p>
                <div class="d-flex align-items-center justify-content-center">
                    <p class="tipo">${item[2]}</p>
                    <button class="btn btnCambiar" name="cambio" data-id="${index}">Cambiar</button>
                </div>
            </div>
        </div>
            `
        ).join('')}`
    divTabla.appendChild(divEdit)
    
    divTabla.addEventListener('click',(e)=>{
        if(e.target.name=='cambio'){
            console.log('hola')
            const id=e.target.dataset.id
            console.log(id)

            const itemElement = document.createElement('div');
            itemElement.classList.add('align-items-around', 'd-flex', 'flex-column','gap-4', 'contenedor-opciones')
            console.log(itemElement)
            itemElement.innerHTML = `
                <h2><strong>${info[id].about}</strong></h2>  
                <div  class="row justify-content-center flex-wrap espacio"  style="width: 99%" >
                    ${info[id].imagenes.map(imagen => `
                    <div class="card">
                        <img src="${imagen.src}" data-value="${imagen.value}" class="card-img-top siguiente" alt="${imagen.descripcion}">
                        <div class="card-body">
                        <p class="card-text">${imagen.descripcion}</p>
                        </div>
                    </div>`).join('')}
                </div>
            `;
        
            divCont.appendChild(itemElement);

        }
        
    })
})


