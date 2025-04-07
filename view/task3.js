const form_exercise_2 = document.getElementById("form-exercise-2")
const input_number = document.getElementById("input_number")
const result = document.getElementById("result")

form_exercise_2.addEventListener("submit", (e) => {
    e.preventDefault()

    const number_value = input_number.value
    if (number_value % 2 === 0) {
        result.innerHTML = "El número ingresado es par"
    } else {
        result.innerHTML = "El número ingresado es impar"
    }
})