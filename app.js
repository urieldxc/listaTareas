const elementoFecha = document.getElementById('fecha');
const lista = document.getElementById('lista');
const input = document.getElementById('input');
const agregar = document.getElementById('iconoEnviar');
const papelera = document.getElementById('papelera');
const tick = document.getElementById('checkBox');
const actualizar = document.querySelector('.limpiar');



function insertarTarea(toDo){
    const text = `<li id="lista" class="item">
    
                        <i onclick="cambiarCheck()" class="far fa-square "></i>
                        <p class="texto" onclick="tachar()">${toDo}</p>
                        <i id="papelera" class="far fa-trash-alt fa-align-right" onclick="eliminarTarea()"></i>
                
                    </li>`
    const position = "beforeend";
    lista.insertAdjacentHTML(position, text);
    

};


/* Listeners, tanto hagas enter como click en el icono */



document.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        toDo = input.value;
        if(toDo !== ""){
            insertarTarea(toDo);
        }
        input.value='';
        
    };
    
});

agregar.addEventListener('click', () =>{
    toDo = input.value;
    if (toDo !== ""){
        insertarTarea(toDo);
    }
    input.value="";
});

/*papelera.addEventListener('click', ()=>{
    eliminarTarea();
});*/

actualizar.addEventListener('click', ()=>{
    window.location.reload();
    
})



/* Eliminar tarea*/ 
function eliminarTarea() {
    event.currentTarget.parentElement.remove();
  }

  /*Tachar */
  
function tachar(){
    event.currentTarget.style.textDecoration = "line-through";
    
    event.currentTarget.parentElement.classList.add("tachado");
    
}

function cambiarCheck(){
    
    tachar();
}