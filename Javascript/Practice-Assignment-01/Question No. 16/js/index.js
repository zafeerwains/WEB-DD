const submitQuiz = () => {
    count = 0
    if (document.getElementById("correctOption1").checked) count++
    if (document.getElementById("correctOption2").checked) count++
    if (document.getElementById("correctOption3").checked) count++

    document.getElementById("resultHeading").style.display = "block"
    document.getElementById("result").innerHTML = count
    
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
}