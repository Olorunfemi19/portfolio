const bt = document.getElementById("bt");
const tm = document.getElementById("tm");
const qm = document.getElementById("qm");
const budgetTracker = document.getElementById("budgetTracker");
const todo = document.getElementById("todo");
const quiz = document.getElementById("quiz");
const divider = document.querySelector(".divider");

function showBT(){
    bt.addEventListener("click", (event) => {
        if (budgetTracker.classList.contains("hide")){
            budgetTracker.classList.remove("hide")
            todo.classList.add("hide")
            quiz.classList.add("hide")
            divider.classList.remove("hide");
        }
        event.preventDefault();
    })
}

function showTM(){
    tm.addEventListener("click", (event)=>{
        if (todo.classList.contains("hide")){
           todo.classList.remove("hide")
            budgetTracker.classList.add("hide")
            quiz.classList.add("hide")
            divider.classList.remove("hide");
        }
        event.preventDefault();
    })
}

function showQM(){
    qm.addEventListener("click", (event)=>{
        if (quiz.classList.contains("hide")){
            quiz.classList.remove("hide")
            todo.classList.add("hide")
            budgetTracker.classList.add("hide")
            divider.classList.remove("hide");
        }
        event.preventDefault();
    })
}

showBT();
showTM();
showQM();