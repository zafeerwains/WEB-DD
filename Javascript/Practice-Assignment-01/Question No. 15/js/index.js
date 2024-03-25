const handleCheck = () => {
    event.preventDefault()

    var check = document.getElementById("check").checked
    document.getElementById("password").type = check ? "text" : "password"

}