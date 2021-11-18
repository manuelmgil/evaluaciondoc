//Variables
const grid = document.getElementById("grid");


//Array
let cues = [

    {
        id: '0',
        tipo: "Docente a Docente",
        periodo: 'SEP-DIC',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        carrera: 'Ingeniería en Software',
        q: [
            `¿El maestro realiza una evaluación diagnóstica al inicio del cuatrimestre ?`,
            `¿El maestro Implementa actividades que te permiten vincularte con el contexto social?`,
            `¿El maestro te da a conocer los contenidos de la materia que imparte?`,
            `¿El maestro lleva a cabo un registro permanente de los resultados de aprendizaje?`,
            `¿El maestro promueve un pensamiento reflexivo y crítico a partir de los contenidos educativos?`,
            `¿Tu maestro genera soluciones creativas ante eventualidades que pudieran presentarse en el aula?`,
            `¿Tu maestro selecciona los materiales apropiados incluyendo las nuevas tecnologías y el análisis de casos para el desarrollo de tus competencias, implementándolas en el salón de clase?`,
            `¿Tu maestro comunica los contenidos de su asignatura de manera clara en los diferentes ambientes de aprendizaje?`,
            `¿Tu maestro proporciona oportunidades y herramientas para avanzar en los procesos de construcción del conocimiento?`,
            `¿Tu maestro evalúa los aprendizaje apegados al enfoque por competencias?`,
            `¿Tu maestro fortalece los conocimientos mediante la retroalimentación, despues de la evaluación de los aprendizajes?`,
            `¿Tu maestro utiliza diferentes herramientas para la evaluación bajo el enfoque de competencias?`,
            `¿Tu maestro evalua de manera justa y objetiva los aprendizajes?`,
            `¿Tu maestro práctica y promueve el respeto a la diversidad de creencias, valores e ideas?`,
            `¿Tu maestro favorece el diálogo como mecanismo para la resolución de conflictos?`,
            `¿Tu maestro estimula la participación de los estudiantes en la definición de normas de trabajo y convivencia?`,
            `¿Tu maestro alienta a que los estudiantes se expresen en un marco de respeto y armonia?`,
            `¿Tu maestro favorece el sentido de pertenencia institucional en los alumnos?`,
            `¿Tu maestro Promueve el interes y respeto a valores cívicos, éticos y ecológicos?`
        ],
        value: {

        }

    },
    {
        id: '1',
        tipo: "Director a Docente",
        periodo: 'SEP-DIC',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        carrera: 'Ingeniería en Software',
        q: [
            `¿El maestro realiza una evaluación diagnóstica al inicio del cuatrimestre ?`,
            `¿El maestro Implementa actividades que te permiten vincularte con el contexto social?`,
            `¿El maestro te da a conocer los contenidos de la materia que imparte?`,
            `¿El maestro lleva a cabo un registro permanente de los resultados de aprendizaje?`,
            `¿El maestro promueve un pensamiento reflexivo y crítico a partir de los contenidos educativos?`,
            `¿Tu maestro genera soluciones creativas ante eventualidades que pudieran presentarse en el aula?`,
            `¿Tu maestro selecciona los materiales apropiados incluyendo las nuevas tecnologías y el análisis de casos para el desarrollo de tus competencias, implementándolas en el salón de clase?`,
            `¿Tu maestro comunica los contenidos de su asignatura de manera clara en los diferentes ambientes de aprendizaje?`,
            `¿Tu maestro proporciona oportunidades y herramientas para avanzar en los procesos de construcción del conocimiento?`,
            `¿Tu maestro evalúa los aprendizaje apegados al enfoque por competencias?`,
            `¿Tu maestro fortalece los conocimientos mediante la retroalimentación, despues de la evaluación de los aprendizajes?`,
            `¿Tu maestro utiliza diferentes herramientas para la evaluación bajo el enfoque de competencias?`,
            `¿Tu maestro evalua de manera justa y objetiva los aprendizajes?`,
            `¿Tu maestro práctica y promueve el respeto a la diversidad de creencias, valores e ideas?`,
            `¿Tu maestro favorece el diálogo como mecanismo para la resolución de conflictos?`,
            `¿Tu maestro estimula la participación de los estudiantes en la definición de normas de trabajo y convivencia?`,
            `¿Tu maestro alienta a que los estudiantes se expresen en un marco de respeto y armonia?`,
            `¿Tu maestro favorece el sentido de pertenencia institucional en los alumnos?`,
            `¿Tu maestro Promueve el interes y respeto a valores cívicos, éticos y ecológicos?`
        ],
        value: {

        }

    },
    {
        id: '2',
        tipo: "Alumno a Docente",
        periodo: 'SEP-DIC',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        carrera: 'Ingeniería en Software',
        q: [
            `¿El maestro realiza una evaluación diagnóstica al inicio del cuatrimestre ?`,
            `¿El maestro Implementa actividades que te permiten vincularte con el contexto social?`,
            `¿El maestro te da a conocer los contenidos de la materia que imparte?`,
            `¿El maestro lleva a cabo un registro permanente de los resultados de aprendizaje?`,
            `¿El maestro promueve un pensamiento reflexivo y crítico a partir de los contenidos educativos?`,
            `¿Tu maestro genera soluciones creativas ante eventualidades que pudieran presentarse en el aula?`,
            `¿Tu maestro selecciona los materiales apropiados incluyendo las nuevas tecnologías y el análisis de casos para el desarrollo de tus competencias, implementándolas en el salón de clase?`,
            `¿Tu maestro comunica los contenidos de su asignatura de manera clara en los diferentes ambientes de aprendizaje?`,
            `¿Tu maestro proporciona oportunidades y herramientas para avanzar en los procesos de construcción del conocimiento?`,
            `¿Tu maestro evalúa los aprendizaje apegados al enfoque por competencias?`,
            `¿Tu maestro fortalece los conocimientos mediante la retroalimentación, despues de la evaluación de los aprendizajes?`,
            `¿Tu maestro utiliza diferentes herramientas para la evaluación bajo el enfoque de competencias?`,
            `¿Tu maestro evalua de manera justa y objetiva los aprendizajes?`,
            `¿Tu maestro práctica y promueve el respeto a la diversidad de creencias, valores e ideas?`,
            `¿Tu maestro favorece el diálogo como mecanismo para la resolución de conflictos?`,
            `¿Tu maestro estimula la participación de los estudiantes en la definición de normas de trabajo y convivencia?`,
            `¿Tu maestro alienta a que los estudiantes se expresen en un marco de respeto y armonia?`,
            `¿Tu maestro favorece el sentido de pertenencia institucional en los alumnos?`,
            `¿Tu maestro Promueve el interes y respeto a valores cívicos, éticos y ecológicos?`
        ],
        value: {

        }

    },


]


//Creación de tarjeta
const crearTarjeta = (vnombre, vmateria, vcarrera, vperiodo) => {
    //Creación de elemetos
    //Aqui se crean las etiquetas que conforman la tarjeta
    let link = document.createElement('a');
    let tarjeta = document.createElement('div');
    let nombre = document.createElement('p');
    let materia = document.createElement('p');
    let separacion = document.createElement('div');
    let carrera = document.createElement('p');
    let periodo = document.createElement('p');

    //aqui se preparan
    //se crea el <a> que alberga la tarjeta
    link.setAttribute('href', './editcuestionario.html');

    //Se crea el primer <div>
    link.appendChild(tarjeta);
    tarjeta.classList.add('tarjeta');
    tarjeta.classList.add('cuestionario');

    //se crean los primeros <p> fuera del <div> secundario
    nombre.classList.add("Nombre");
    nombre.appendChild(document.createTextNode(vnombre));
    materia.classList.add("Materia");
    materia.appendChild(document.createTextNode(vmateria));

    //Se incluyen en el nodo padre
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(materia);

    //Se crea el <div> secundario
    separacion.classList.add("separar");

    //se crean los <p> finales
    carrera.classList.add("Carrera");
    carrera.appendChild(document.createTextNode(vcarrera));
    periodo.classList.add("Periodo");
    periodo.classList.add("pushperiodo");
    periodo.appendChild(document.createTextNode(vperiodo));

    //se rellena el <div> secundario con los otros dos <p>
    separacion.appendChild(carrera);
    separacion.appendChild(periodo);

    //Se añade el <div> secundario al <div>principal
    tarjeta.appendChild(separacion);

    //aqui se imprimen en el grid
    grid.appendChild(link);
}




//Prueba Creacion de tarjeta
const primerLlenado = () => {
    cues.forEach((element, i) => {
        crearTarjeta(
            element.tipo,
            "",
            "25 preguntas",
            element.periodo
        )

    });
}



//Event Listeners


//Invocacion de funciones
primerLlenado();