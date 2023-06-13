const form = document.querySelector("form")
const resultados = document.querySelector("#resultado")
const input = document.querySelector("input")

function Create(cont, fatorial){
    let P = document.createElement("p")
    P.innerText = `!${cont} = ${fatorial}`
    resultados.append(P)
}

function Calc(){
    let num = input.value
    if(num > -1){
        num = parseInt(num)
        let fatorial = 1
        let cont = 0
        for(let i = 1; i <= num +1; i++){
            Create(cont, fatorial)
            fatorial = fatorial * i
            cont++
        }
    }
    else{
        alert("Oops! Número inválido!")
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    resultados.innerHTML = ""
    Calc()
    input.value = ""
})
    