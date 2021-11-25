//variables
const boton = document.querySelectorAll("input")[1];
const valor = document.querySelectorAll("input")[0];
let session = false

//variables estaticas para pruebass
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


//funciones


//funcion para iniciar sesión
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
    valor.value = '';
}

//funcion para iniciar sesión presionando Enter
const ingresarInput = (e) => {
    if (e.keyCode === 13) {
        ingresar();
    }
}


boton.addEventListener("click", ingresar);
valor.addEventListener('keyup', ingresarInput);