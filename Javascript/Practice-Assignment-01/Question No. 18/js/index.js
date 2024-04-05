const playSound = () => {
    let val = document.getElementById("soundFile")
    val.paused ? val.play() : val.pause()
}

