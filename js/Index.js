const boton = document.querySelectorAll("input")[1];
const valor = document.querySelectorAll("input")[0];
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
        if (parseInt(val) === data.id && data.tipoUsuario === "Administrador") {
            //Admin inicio de sesion
            return location.href = "./administrador.html";
        } else if (parseInt(val) == data.id && data.tipoUsuario === "Alumno") {
            //Alumno - Inicio de sesion
            return location.href = "./alumnos.html";
        }


    })

}

boton.addEventListener("click", ingresar);