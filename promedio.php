<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/alumno.css">
    <link rel="stylesheet" href="CSS/banco.css">
    <title>Evaluación docente</title>
</head>

<body>
    <nav>
        <a href="administrador.php"><img src="img/logo.jpg" alt="logo">
        </a>
        <p class="uninombre">Universidad Politécnica de Quintana Roo</p>
        <div class="pushnav">
            <p>
                <!-- Nombre en consulta-->Administrador
            </p>
            <a href="#">
                <p class="sesionnav">Salir</p>
            </a>
        </div>
    </nav>
    <!-- Info del periodo -->
    <div class="infoperiodo">
        <p>Sistema de Evaluación Docente</p>
        <p class="pushperiodo">
            <!-- Periodo en consulta--> Periodo SEP-DIC
        </p>
    </div>
    <div class="contenido">
        <div class="datos">
            <table class="table">
                <thead>
                    <tr>
                        <th class="textodatos" scope="col">Promedio de Cursos</th>
                        <th scope="col">
                            <div class="search-container">
                                <form action="/action_page.php">
                                    <input type="text" placeholder="Buscar.." name="search">
                                    <button type="button" class="btn btn-success">Buscar</button>
                                </form>
                            </div>
                        </th>
                        <th scope="col">
                            <button type="button" class="btn btn-primary" onclick="location.href='reporteador.php' " >Obtener Reporte General</button>
                            
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="contenedor">
            <table class="table">
                <!-- Aqui deberia haber un while por lo que el codigo se reduce -->
                <thead>
                    <tr>
                        <th scope="col">Curso</th>
                        <th scope="col">Periodo</th>
                        <th scope="col">Promedio</th>
                        <th scope="col">Tipo de Evaluacion</th>
                        <th scope="col">Reporte</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Base de datos</th>
                        <td>2021A</td>
                        <td>5</td>
                        <td>Alumno a Docente</td>
                        <td><button type="button" class="btn btn-info" onclick="location.href='reporte.php' ">Reporte de Materia</button></td>
                    </tr>
                    <tr>
                        <th scope="row">Programacion Orientada a Objetos</th>
                        <td>2021A</td>
                        <td>5</td>
                        <td>Alumno a Docente</td>
                        <td><button type="button" class="btn btn-info" onclick="location.href='reporte.php' ">Reporte de Materia</button></td>
                    </tr>
                    <tr>
                        <th scope="row">Ingles</th>
                        <td>2021A</td>
                        <td>5</td>
                        <td>Docente a Docente</td>
                        <td><button type="button" class="btn btn-info" onclick="location.href='reporte.php' ">Reporte de Materia</button></td>
                    </tr>
                    <tr>
                        <th scope="row">Matematicas Discretas</th>
                        <td>2021A</td>
                        <td>5</td>
                        <td>Docente a Docente</td>
                        <td><button type="button" class="btn btn-info" onclick="location.href='reporte.php' ">Reporte de Materia</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <script type="text/javascript" src="./js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>

</html>