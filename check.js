const textArea = document.getElementById("ta")
const input1 = document.getElementById("1")
const input2 = document.getElementById("2")
const input3 = document.getElementById("3")
const input4 = document.getElementById("4")

const checkBtn = document.getElementById("btn")
const p = document.getElementById("p")


let formObjects = []

checkBtn.addEventListener("click", ()=>{
    //elements
    formObjects = [
        textArea.value.trim(),
        input1.value.trim(),
        input2.value.trim(),
        input3.value.trim(),
        input4.value.trim()
    ]

    // check empty inputs and add to i
    let i = 0
    formObjects.forEach(element => {
        !element?i++:true
    });
    //if empty or not
    i?
    //if true: show the object and number of empty
    p.textContent= JSON.stringify(formObjects) 
        +"\n number of empty inputs: "
            +i
    //if false:
    :p.innerText = "all is filled"
    
})