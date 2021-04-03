
const form = document.querySelector("form") as HTMLFormElement;

//inputs 
const nombre = document.getElementById("nombre") as HTMLInputElement;
const apellidos = document.getElementById("apellidos") as HTMLInputElement;
const rut = document.getElementById("rut") as HTMLInputElement;
const correo = document.getElementById("correo") as HTMLInputElement;
const movil = document.getElementById("movil") as HTMLInputElement;
const info = document.getElementById("info") as HTMLInputElement;
const enviar = document.getElementById("enviar") as HTMLInputElement;
const limpiar = document.getElementById("limpiar") as HTMLInputElement;
//check
const python = document.getElementById("python") as HTMLInputElement;
const java = document.getElementById("java") as HTMLInputElement;
const ts = document.getElementById("ts") as HTMLInputElement;
const php = document.getElementById("php") as HTMLInputElement;
const c = document.getElementById("c") as HTMLInputElement;
const cpp = document.getElementById("cpp") as HTMLInputElement;
//radio
const exp1 = document.getElementById("1") as HTMLInputElement;
const exp2 = document.getElementById("2") as HTMLInputElement;
const exp3 = document.getElementById("3") as HTMLInputElement;
const exp4 = document.getElementById("4") as HTMLInputElement;
const exp5 = document.getElementById("5") as HTMLInputElement;

function validar(num: string): boolean {
    if (!num.match(/^[0-9]+$/)) {
        return false;
    }
    return true;
}
function checks(): boolean {
    if (python.checked) return true;
    if (java.checked) return true;
    if (ts.checked) return true;
    if (php.checked) return true;
    if (c.checked) return true;
    if (cpp.checked) return true;
    return false;
}
function radio(): boolean {
    if (exp1.checked) return true;
    if (exp2.checked) return true;
    if (exp3.checked) return true;
    if (exp4.checked) return true;
    if (exp5.checked) return true;
    return false;
}

enviar.addEventListener("click", (e: Event) => {
    e.preventDefault();

    if (validar(rut.value) &&
        nombre.value &&
        apellidos.value &&
        correo.value && correo.value.match(/\S+@\S+\.\S+/) &&
        validar(movil.value) && movil.value.length == 9 &&
        info.value &&
        checks() && radio()
    ) {
        document.write("Hemos recibido sus datos, pronto nos estaremos comunicando con usted");
    } else {
        if (!document.getElementById("error")) {
            const para = document.createElement("p");
            para.setAttribute("id", "error");
            const node = document.createTextNode("Formulario invalido");
            para.appendChild(node);
            para.id
            document.getElementById("body").appendChild(para);

            setTimeout(function () {
                document.getElementById("body").removeChild(para);
            }, 1000);
        }

    }

})
limpiar.addEventListener("click", (e: Event) => {
    e.preventDefault();
    form.reset();
})

