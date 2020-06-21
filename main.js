var todo = function () {
    var username = document.getElementById("username").value;
    var userpass = document.getElementById("password").value;
    if (username == "admin" && userpass == 12345) {
        var resultado = "Hello Admin"
        var elemento = document.createElement("h1");
        var contenido = document.createTextNode(resultado);
        elemento.appendChild(contenido);
        return document.getElementById("result").appendChild(elemento);
    } else {
        var resultado = "Te olvidastes tu contraseña?"
        var elemento = document.createElement("h1");
        var contenido = document.createTextNode(resultado);
        elemento.appendChild(contenido);
        return document.getElementById("result").appendChild(elemento);
    }
}