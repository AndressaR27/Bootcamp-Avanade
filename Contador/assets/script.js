let spamCurrentNumber = document.getElementById("currentNumber")
let number = 0;

function increment(){
    number = number + 1
    spamCurrentNumber.innerHTML = number
}

function decrement (){
    if( number > 0){
        number = number - 1
        spamCurrentNumber.innerHTML = number
    }
    else {
        document.querySelector(".botao").disabled
        window.alert("O contador não está habilitado para números negativos")
    }
}