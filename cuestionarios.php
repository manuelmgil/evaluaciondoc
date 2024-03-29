<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/alumno.css">
    <link rel="stylesheet" href="CSS/cuestionarios.css">
    <title>Evaluación docente</title>
</head>

<body>
    <nav>
        <a href="administrador.php"><img src="img/logo.jpg" alt="logo">
            </a>
            <p class="uninombre">Universidad Politécnica de Quintana Roo</p>
            <div class="pushnav">
                <p>
                    <!-- Nombre en consulta-->Manuel Iván Mukul Gil
                </p>
                <a href="#">
                    <p class="sesionnav">Cerrar Sesión</p>
                </a>
            </div>
        </nav>
        <!-- Info del periodo -->
        <div class="infoperiodo">
            <p>Sistema de Evaluación Docente</p>
            <p class="pushperiodo">
            </p>
        </div>
    <div class="contenido">
        <div class="datos">
            <p class="textodatos">  Cuestionario</p>
        </div>
        <div class="contenedor">
            <div>
                <table class="table"> 
                    <thead>
                        <tr>
                        <th  scope="col">Ordenar Por:</th>
                        <th  scope="col">
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>Choose...</option>
                        <option value="1">Periodo</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                        </th>
                    </thead>
                </table> 
            </div>
            <p class="textodatos">  Periodo SEP-DIC</p>
            <hr>
            <br>
            <div class="grid">
            <!-- tarjeta -->
                <div class="tarjeta incompleto">
                    <p class="Estatus">Incompleto</p>
                    <p class="Nombre">Mariano Xiu Chan</p>
                    <p class="Materia">Algoritmos</p>
                    <div class="separar">
                        <p class="Carrera">Ingeniería en Software</p>
                        <p class="Periodo pushperiodo">Periodo SEP-DIC</p>
                    </div>
                </div>
                <!-- tarjeta fin -->
                <!-- tarjeta -->
                <div class="tarjeta incompleto">
                    <p class="Estatus">Incompleto</p>
                    <p class="Nombre">Mariano Xiu Chan</p>
                    <p class="Materia">Algoritmos</p>
                    <div class="separar">
                        <p class="Carrera">Ingeniería en Software</p>
                        <p class="Periodo pushperiodo">Periodo SEP-DIC</p>
                    </div>
                </div>
                <!-- tarjeta fin -->
                <!-- tarjeta -->
                <div class="tarjeta pendiente">
                    <p class="Estatus">Incompleto</p>
                    <p class="Nombre">Mariano Xiu Chan</p>
                    <p class="Materia">Algoritmos</p>
                    <div class="separar">
                        <p class="Carrera">Ingeniería en Software</p>
                        <p class="Periodo pushperiodo">Periodo SEP-DIC</p>
                    </div>
                </div>
                <!-- tarjeta fin -->
                <!-- tarjeta -->
                <div class="tarjeta pendiente">
                    <p class="Estatus">Incompleto</p>
                    <p class="Nombre">Mariano Xiu Chan</p>
                    <p class="Materia">Algoritmos</p>
                    <div class="separar">
                        <p class="Carrera">Ingeniería en Software</p>
                        <p class="Periodo pushperiodo">Periodo SEP-DIC</p>
                    </div>
                </div>
            <!-- tarjeta fin -->
        </div>

        
    </div>    


</body>

</html>