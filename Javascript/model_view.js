function load()
{
    var P = document.getElementById("Main");
    P.innerHTML = localStorage.getItem("model-name");
}