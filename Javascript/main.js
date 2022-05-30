function clicktrial()
{
    var x = document.getElementById("click trial").innerHTML;
    console.log(x);
    document.getElementById("click trials").innerHTML = (x == "FUCK" ? "LOL Bitch!" : "FUCK");
}