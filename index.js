if ("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
    }).catch(error => {
        console.log("SW Registration failed");
    });
}
if(window.location.pathname == "teorieMecanica.html#1")
{
    alert("2");
    document.getElementById('1').id = 'highlight'
    location.reload();
}
