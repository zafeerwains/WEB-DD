const handleSubmit = () => {
    event.preventDefault()
    var password = document.getElementById("password").value
    console.log(password);
    if (password.length < 6)
        return alert("Please enter a minimum 6 characters passowrd")
    alert("submitted successfully")
}