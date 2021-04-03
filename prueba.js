var form = document.querySelector("form");
//inputs 
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var movil = document.getElementById("movil");
var info = document.getElementById("info");
var enviar = document.getElementById("enviar");
var limpiar = document.getElementById("limpiar");
//check
var python = document.getElementById("python");
var java = document.getElementById("java");
var ts = document.getElementById("ts");
var php = document.getElementById("php");
var c = document.getElementById("c");
var cpp = document.getElementById("cpp");
//radio
var exp1 = document.getElementById("1");
var exp2 = document.getElementById("2");
var exp3 = document.getElementById("3");
var exp4 = document.getElementById("4");
var exp5 = document.getElementById("5");
function validar(num) {
    if (!num.match(/^[0-9]+$/)) {
        return false;
    }
    return true;
}
function checks() {
    if (python.checked)
        return true;
    if (java.checked)
        return true;
    if (ts.checked)
        return true;
    if (php.checked)
        return true;
    if (c.checked)
        return true;
    if (cpp.checked)
        return true;
    return false;
}
function radio() {
    if (exp1.checked)
        return true;
    if (exp2.checked)
        return true;
    if (exp3.checked)
        return true;
    if (exp4.checked)
        return true;
    if (exp5.checked)
        return true;
    return false;
}
enviar.addEventListener("click", function (e) {
    e.preventDefault();
    if (validar(rut.value) &&
        nombre.value &&
        apellidos.value &&
        correo.value && correo.value.match(/\S+@\S+\.\S+/) &&
        validar(movil.value) && movil.value.length == 9 &&
        info.value &&
        checks() && radio()) {
        document.write("Hemos recibido sus datos, pronto nos estaremos comunicando con usted");
    }
    else {
        if (!document.getElementById("error")) {
            var para_1 = document.createElement("p");
            para_1.setAttribute("id", "error");
            var node = document.createTextNode("Formulario invalido");
            para_1.appendChild(node);
            para_1.id;
            document.getElementById("body").appendChild(para_1);
            setTimeout(function () {
                document.getElementById("body").removeChild(para_1);
            }, 1000);
        }
    }
});
limpiar.addEventListener("click", function (e) {
    e.preventDefault();
    form.reset();
});
