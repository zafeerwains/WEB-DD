const images = ["https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1494856488146-6070a6b67f78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1554067559-269708c83fb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1519238425857-d6922ed3d613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxCNFVMSzMyWFNGWXx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1582093236149-516a8be696fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xCNFVMSzMyWFNGWXx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1489846986031-7cea03ab8fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxCNFVMSzMyWFNGWXx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1582201264500-46be8c0ad1a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxCNFVMSzMyWFNGWXx8ZW58MHx8fHx8"]
var i = 0
document.getElementById("image").src = images[i]

const handleIncrement = () => {
    if (i >= images.length)
        i = 0
    document.getElementById("image").src = images[i++]
}
const handleDecrement = () => {
    if (i < 0)
        i = images.length - 1
    document.getElementById("image").src = images[i--]
}
