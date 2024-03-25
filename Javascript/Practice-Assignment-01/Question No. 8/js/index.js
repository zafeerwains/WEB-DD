var time=10
setInterval(() => {
    if (time > 0)
    time--
    document.getElementById("timmer").innerHTML = time
}, 1000)
