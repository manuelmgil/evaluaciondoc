<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/promedio.css">
    <link rel="stylesheet" href="CSS/banco.css">
    <title>Evaluación docente</title>
</head>

<body>
            <!-- Aqui va el codigo que se obtiene de la base de datos, si tuviera una -->
            <?php
                $nombre= 'Fernando Araujo Cruz';
                $materia= array();
                $materia=['Base de Datos','Programacion Orientada a Objetos','Ingles','Matematicas Discretas'];
                $periodo='SEP-DIC 2021 ';
                $id_cuestionario= 1;
                $promedio=array();
                $promedio=[5, 5, 5, 5];
                $tipo=array();
                $tipo=['Alumno a Docente','Alumno a Docente','Alumno a Docente','Alumno a Docente'];
                $carrera= 'Ingenieria en Software';
                $contador=sizeof($materia);
            ?>
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
                            <form method="post" action="reporteador.php">
                                <input hidden="hidden" type="hidden" id="nombre" name="nombre" value="<?php echo $nombre?>">
                                <input hidden="hidden" type="hidden" id="periodo" name="periodo" value="<?php echo $periodo ?>">
                                <input hidden="hidden" type="hidden" id="cuestionario" name="cuestionario" value= <?php echo $id_cuestionario ?>>
                                <input hidden="hidden" type="hidden" id="carrera" name="carrera" value="<?php echo $carrera ?>">
                            <button type="submit" class="btn btn-primary"  >Obtener Reporte General</button>
                            </form>
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
                    <?php
                     $i=0;
                     while($i<$contador)
                    {
                        echo'

                            <tr>
                                <th scope="row">'.$materia[$i].'</th>
                                <td>'.$periodo.'</td>
                                <td>'.$promedio[$i].'</td>
                                <td>Alumno a Docente</td>
                                <form method="post" action="reporte.php">
                                <input hidden="hidden" type="hidden" id="nombre" name="nombre" value="'.$nombre.'">
                                <input hidden="hidden" type="hidden" id="periodo" name="periodo" value="'.$periodo.'">
                                <input hidden="hidden" type="hidden" id="materia" name="materia" value="'.$materia[$i].'">
                                <input hidden="hidden" type="hidden" id="cuestionario" name="cuestionario" value='.$promedio[$i].'>
                                <input hidden="hidden" type="hidden" id="carrera" name="carrera" value="'.$carrera.'">
                                <td><button type="submit" class="btn btn-info">Reporte de Materia</button></td>
                                </form>     
                            </tr>
                        ';    
                        $i++;
                    }
                    ?>
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