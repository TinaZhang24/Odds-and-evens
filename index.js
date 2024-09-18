// === State ===

const state = {
    bank:[],
    odd:[],
    even:[],
};

 function addNumber(number){
    state.bank.push(number);
 }

 function sortNumber(){
    const numToSort = state.bank.shift();
    if(numToSort % 2 === 0){
        state.even.push(numToSort);
    }else{
        state.odd.push(numToSort);
    }
 }

// === Render ===
/** render function for add to bank */
function renderBank(){
    const $bank = state.bank.map((number) => {
        const $number = document.createElement("span");
        $number.textContent = number;
        return $number;
    })
        const $output = document.querySelector("#numBank");
        $output.replaceChildren(...$bank)
}

function renderOdd(){
    const $odd = state.odd.map((number)=>{
        const $number = document.createElement("span");
        $number.textContent = number;
        return $number;
    })
    const $output = document.querySelector("#odds_num");
    $output.replaceChildren(...$odd)
}

function renderEven(){
    const $even = state.even.map((number)=>{
        const $number = document.createElement("span");
        $number.textContent = number;
        return $number;
    })
    const $output = document.querySelector("#evens_num");
    $output.replaceChildren(...$even)
}

function render(){
    renderBank();
    renderOdd();
    renderEven();
}

// === Script ===

render();

/** Adds a number to the bank according to user prompt*/
    const $form = document.querySelector("form")
    $form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const $numberInput = document.querySelector("#number");
        /** guard case*/
        if($numberInput.value === null || isNaN($numberInput)){
            console.error("Please input a number.");
        }
        addNumber($numberInput.value)
        $numberInput.value = "";
        render();
    });

/** Sort One according to user react. */
    const $sortOne = document.querySelector("#sortOne");
    $sortOne.addEventListener("click",() => {
        sortNumber();
        render();
    });

/**  Sort All according to user react. */
    const $sortAll = document.querySelector("#sortAll");
    $sortAll.addEventListener("click",() => {
        while(i = 0, i < state.bank.length, i++){
            sortNumber();
        }
        render();
    });