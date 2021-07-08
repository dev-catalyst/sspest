export const onInitialClientRender = () => {
    // setTimeout(function() {
    //     document.getElementById("___loader").style.display = "none"
    // }, 1000)
    setTimeout(function() {
        document.getElementById("navbar-header").style.opacity = 1
        document.getElementById("navbar-header").style.visibility = "visible"
    }, 2000)
}