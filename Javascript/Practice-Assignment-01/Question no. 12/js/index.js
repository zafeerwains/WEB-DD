const imageAnimate = () => {
    setInterval(() => {
        var position = document.getElementById("imageId").style.float
        document.getElementById("imageId").style.float = position == "right" ? "left" : "right"
    }, 1000)
}