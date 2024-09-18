// TODO: this file! :)

// === State ===

const state = {
    bank:[],
    odd:[],
    even:[],
};

 function addNumber(number){
    bank.push(number);
 }

// === Render ===
function renderBank(){
    const $bank = bank.map((number) => {
        const $number = document.createElement("span");
        $number.textContent = number;
    })
}

// === Script ===

render();

/** Adds a number to the bank according to user prompt*/
function addNumber(){
    const $form = document.querySelector("form")
    $form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const $numberInput = document.querySelector("#number");
        addNumber($numberInput.value)
        $numberInput = "";
    })
}

render();