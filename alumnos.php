<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/alumno.css">
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
            <!-- Periodo en consulta--> Periodo SEP-DIC
        </p>
    </div>
    <p class="textosuave">Seleccione un cuestionario para empezar a evaluar</p>
    <!-- Variables de prueba, esto deberia ser recibido por una consulta a la BDD -->
    <?php
    $maestro = array();
    $maestro = ['Mariano Xiu Chan', 'Carlos Tamay', 'Manuel Flores', 'Christian Guadalupe', 'Mariano Xiu Chan', 'Carlos Tamay', 'Manuel Flores', 'Christian Guadalupe'];
    $materia = array();
    $materia = ['POO', 'Algoritmos', 'Base de Datos', 'Ing Requerimientos', 'POO', 'Algoritmos', 'Base de Datos', 'Ing Requerimientos'];
    $estatus = array();
    $estatus = ['completo', 'incompleto', 'incompleto', 'incompleto', 'incompleto', 'incompleto', 'incompleto', 'incompleto'];
    $carrera = 'Ing. Software';
    $periodo = 'SEP-DIC 2021';
    ?>
    <!-- Fin variables de prueba -->
    <div class="contenedor">
        <?php
        $tamaño = 7;
        $cont = 0;
            echo '<div class="wrapper">';
            while ($cont <= $tamaño) {
                if ($estatus[$cont] == 'completo') {
                    echo
                    '
                
                    
                        <!-- tarjeta -->
                        <div class="tarjeta ' . $estatus[$cont] . '">
                            
                                <p class="Estatus">' . $estatus[$cont] . '</p>
                                <p class="Nombre">' . $maestro[$cont] . '</p>
                                <p class="Materia">' . $materia[$cont] . '</p>
                                <div class="separar">
                                    <p class="Carrera">'.$carrera.'</p>
                                    <p class="Periodo pushperiodo">Periodo SEP-DIC</p>
                                </div>
                        </div>
                        <!-- tarjeta fin -->
                    
                    ';
                } else {
                    echo
                    '
                            <!-- tarjeta -->
                            <div class="tarjeta ' . $estatus[$cont] . '">
                                <a style="text-decoration:none;" href="./cuestionario.php?n='.$maestro[$cont].'&mat='.$materia[$cont].'&c='.$carrera.'">
                                    <p class="Estatus">' . $estatus[$cont] . '</p>
                                    <p class="Nombre">' . $maestro[$cont] . '</p>
                                    <p class="Materia">'.$materia[$cont].'</p>
                                    
                                    <div class="separar">
                                        <p class="Carrera">'.$carrera.'</p>
                                    <p class="Periodo pushperiodo">Periodo SEP-DIC</p>
                                    </div>
                                </a>
                            </div>
                            <!-- tarjeta fin -->
                        ';
                }

                $cont++;
            }
            echo '</div>';
    ?>



    </div>

</body>

</html>