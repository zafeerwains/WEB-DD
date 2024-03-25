const addition = () => {
    var input1 = +prompt("Enter the First Number")
    var input2 = +prompt("Enter the Second Number")
    if (!input1 || !input2 || isNaN(input1) || isNaN(input2))
        return alert("Please enter a number")
    return alert(input1 + input2)
}