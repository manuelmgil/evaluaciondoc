const boton = document.querySelectorAll("input")[1];
const valor = document.querySelectorAll("input")[0];
let session = false
const users = [
    {
        tipoUsuario: "Administrador",
        id: 100
    },
    {

        tipoUsuario: "Alumno",
        id: 200

    }
]

const ingresar = () => {
    const val = valor.value;
    users.forEach((data) => {
        if (parseInt(val) === data.id && data.tipoUsuario === "Administrador" && session === false) {
            //Admin inicio de sesion
            session = true;
            return location.href = "./administrador.html";
        } else if (parseInt(val) == data.id && data.tipoUsuario === "Alumno" && session === false) {
            session = true;
            //Alumno - Inicio de sesion
            return location.href = "./alumnos.html";
        }


    })

}

boton.addEventListener("click", ingresar);