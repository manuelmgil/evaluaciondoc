<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/alumno.css">
    <link rel="stylesheet" href="CSS/cuestionario.css">
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
    <div class="contenido">
        <div class="datos">
            <p class="textodatos"> Mariano Xiu | Ingenieria en Software</p>
            <p class="textomateria"> Algoritmos</p>
        </div>
        <div class="contenedor">
            <div class="">
                <p class="textomateria">
                    Responda todas la preguntas de acuerdo a como se sinstió al tomar el curso este cuatrimestre.
                </p>
            </div>
            <div>
            <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
                <table class="table">

                    <!-- Aqui deberia haber un while por lo que el codigo se reduce -->
                    <thead>
                        <tr>
                            <th scope="col" style="width: 5%"></th>
                            <th scope="col" style="width: 75%"></th>
                            <th scope="col" style="width: 20%">   MM  | M | Reg | B | MB</th>

                        </tr>
                    </thead>
                    <tbody>
                         <!-- Variables de prueba -->
                        <?php
                            $npreguntas= 5;
                            $preguntas= array();
                            $preguntas=['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'Lorem ipsum dolor sit amet'];
                        ?>
                        
                        
                         <!-- Fin variables de prueba -->
                        <?php
                            $cont=0;
                            while($cont<$npreguntas)
                            {
                                $row=$cont+1;
                                echo
                                    '
                                    <tr>
                                        <th scope="row">'.$row.'</th>
                                        <td>'.$preguntas[$cont].'</td>
                                        <td>
                                            <div class="fijo">
                                                <input type="radio" name="q'.$cont.'" value="1">
                                                <input type="radio" name="q'.$cont.'" value="2">
                                                <input type="radio" name="q'.$cont.'" value="3">
                                                <input type="radio" name="q'.$cont.'" value="4">
                                                <input type="radio" name="q'.$cont.'" value="5">
                                            </div>
                                        </td>
                                    </tr>

                                    ';
                                $cont++;
                            }
                        ?>
                        
                        
                    </tbody>
                </table>
                <input type="submit">
                </form>
                 <!-- Envio de datos por POST de Prueba  -->
                    <?php
                    if ($_SERVER["REQUEST_METHOD"]=="POST")
                    {
                        $prueba=array();
                        $prueba[0]=$_POST['q0'];
                        $prueba[1]=$_POST['q1'];
                        $prueba[2]=$_POST['q2'];
                        $prueba[3]=$_POST['q3'];
                        $prueba[4]=$_POST['q4'];
                        if(empty($prueba[0] or $prueba[1] or $prueba[2] or  $prueba[3] or $prueba[4] ))
                        {
                            echo"Sin datos";

                        }
                        else
                        {
                            echo $prueba[0];
                            echo $prueba[1];
                            echo $prueba[2];
                            echo $prueba[3];
                            echo $prueba[4];
                        }
                    }
                    ?>
                 <!-- Fin de envio de datos por POST de Prueba  -->
            </div>
        </div>
    </div>


</body>

</html>