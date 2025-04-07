const form_exercise_8 = document.getElementById("form-exercise-8")
const input_number = document.getElementById("input_number")
const result = document.getElementById("result")

const pi = 3.1416

form_exercise_8.addEventListener("submit", (e) => {
    e.preventDefault()

    const number_value = input_number.value
    const area = pi * number_value**2
    result.innerHTML = area
})