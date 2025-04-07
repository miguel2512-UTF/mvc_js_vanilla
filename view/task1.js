const form_exercise_13 = document.getElementById("form-exercise-13")
const base_input = document.getElementById("base")
const potencia_input = document.getElementById("potencia")
const result = document.getElementById("result")

form_exercise_13.addEventListener("submit", (e) => {
    e.preventDefault()

    const base = base_input.value
    const potencia = potencia_input.value
    
    result.innerHTML = `${base}<sup>${potencia}</sup> = ${base**potencia}`
})
