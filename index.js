// TODO: this file! :)

// === State ===

const state = {
    bank:[],
    odd:[],
    even:[],
};

 function addNumber(number){
    state.bank.push(number);
 }

// === Render ===
function renderBank(){
    const $bank = state.bank.map((number) => {
        const $number = document.createElement("span");
        $number.textContent = number;
        return $number;
    })
        const $output = document.querySelector("#numBank");
        $output.replaceChildren(...$bank)
}

function render(){
    renderBank();
}

// === Script ===

render();

/** Adds a number to the bank according to user prompt*/
    const $form = document.querySelector("form")
    $form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const $numberInput = document.querySelector("#number");
        addNumber($numberInput.value)
        $numberInput.value = "";
        render();
    });