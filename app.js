const elementoFecha = document.getElementById('fecha');
const lista = document.getElementById('lista');
const input = document.getElementById('input');



function insertarTarea(toDo){
    const text = `<li class="item">
    
                        <i id="checkBox" class="far fa-square "></i>
                        <p class="texto">${toDo}</p>
                        <i id="papelera" class="far fa-trash-alt fa-align-right"></i>
                
                    </li>`
    const position = "beforeend";
    lista.insertAdjacentHTML(position, text);

};


document.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        toDo = input.value;
        if(toDo !== ""){
            insertarTarea(toDo);
        }
        
        
    };
    
});