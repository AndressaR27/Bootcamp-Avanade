
function createHtml(inputValue) {
    return `
    <div class="task-item">
        <input onclick="clicked('${inputValue}')" type="checkbox">
        <span id="${inputValue}">${inputValue}</span>
    </div> 
    `
}

function work(event) {
    event.preventDefault() //serve para prevenir o comportamento padrão de um evento.
    const input = document.querySelector("#task-input")
    const inputValue = input.value
    const list = createHtml(inputValue)
    document.querySelector("#tasks").innerHTML += list
}


function clicked(nomeTarefa){
    // if (x.checked) {
    //     document.getElementById(nomeTarefa).classList.add("tarefa")
    // } else {
    //     document.getElementById(nomeTarefa).classList.remove("tarefa")
    // }
    document.getElementById(nomeTarefa).classList.toggle("tarefa")
}



