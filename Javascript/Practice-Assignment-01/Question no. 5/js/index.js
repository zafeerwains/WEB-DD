const handleSubmit = () => {
    event.preventDefault()
    document.getElementById("Name").innerHTML = ""
    document.getElementById("Klass").innerHTML = ""
    document.getElementById("Age").innerHTML = ""
    var name = document.getElementById("name").value
    var klass = document.getElementById("klass").value
    var age = document.getElementById("age").value
    document.getElementById("Name").innerHTML = "Name => " + name
    document.getElementById("Klass").innerHTML = "Class => " + klass
    document.getElementById("Age").innerHTML = "Age => " + age
}