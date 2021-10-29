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
                        <th class="textodatos" scope="col">Banco de Preguntas</th>
                        <th scope="col">
                            <div class="search-container">
                                <form action="/action_page.php">
                                    <input type="text" placeholder="Buscar.." name="search">
                                    <button type="button" class="btn btn-success">Buscar</button>
                                </form>
                            </div>
                        </th>
                        <th scope="col">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">Crear Pregunta</button>
                            <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Crear nueva pregunta</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div>
                                                <input type="text" placeholder="Escribe la pregunta">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" id="crear" class="btn btn-primary "
                                                data-bs-dismiss="modal">Crear Pregunta</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end modal -->
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
                        <th scope="col">ID</th>
                        <th scope="col">Pregunta</th>
                        <th scope="col">Fecha Creacion</th>
                        <th scope="col">Fecha modificacion</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>21/10/2021</td>
                        <td>21/10/2021</td>
                        <td><button type="button" class="btn btn-danger">Editar</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>21/10/2021</td>
                        <td>21/10/2021</td>
                        <td><button type="button" class="btn btn-danger">Editar</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>21/10/2021</td>
                        <td>21/10/2021</td>
                        <td><button type="button" class="btn btn-danger">Editar</button></td>
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