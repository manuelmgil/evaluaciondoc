//Variables
const grid = document.getElementById("grid");
const tipoAD = document.getElementById('tipoAD');
const tipoDD = document.getElementById('tipoDD');
const tipoDirD = document.getElementById('tipoDirD');
const periodoUno = document.getElementById('p1');
const periodoDos = document.getElementById('p2');
const periodoTres = document.getElementById('p3');
const verTodo = document.getElementById('verTodo');


//Array
let cues = [

    {
        id: '0',
        tipo: "Docente a Docente",
        periodo: 'Sep-Dic',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        preguntas: 'Ingeniería en Software',
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
        value: ''

    },
    {
        id: '1',
        tipo: "Director a Docente",
        periodo: 'Ene-Abr',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        preguntas: 'Ingeniería en Software',
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
        value: ''

    },
    {
        id: '2',
        tipo: "Alumno a Docente",
        periodo: 'Sep-Dic',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        preguntas: 'Ingeniería en Software',
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
        value: ''

    },
    {
        id: '3',
        tipo: 'Director a Docente',
        periodo: 'May-Ago',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        preguntas: 'Ingeniería en Software',
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
        value: ''

    },
    {
        id: '4',
        tipo: "Docente a Docente",
        periodo: 'May-Ago',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        preguntas: 'Ingeniería en Software',
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
        value: ''

    },
    {
        id: '5',
        tipo: "Alumno a Docente",
        periodo: 'Ene-Abr',
        fechac: '02-11-21',
        fecham: '02-11-21',
        evaluado: 'Mariano Xiu Chan',
        evaluadores: [
            201700094,
            201700095,
            201700096
        ],
        materia: 'Programación Web',
        preguntas: 'Ingeniería en Software',
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
        value: ''

    },


]


//Creación de tarjeta
const crearTarjeta = (vtipo, vpreguntas, vperiodo) => {
    //Creación de elemetos
    //Aqui se crean las etiquetas que conforman la tarjeta
    let link = document.createElement('a');
    let tarjeta = document.createElement('div');
    let tipo = document.createElement('p');
    let separacion = document.createElement('div');
    let preguntas = document.createElement('p');
    let periodo = document.createElement('p');

    //aqui se preparan
    //se crea el <a> que alberga la tarjeta
    link.setAttribute('href', './editarCuestionario.html');

    //Se crea el primer <div>
    link.appendChild(tarjeta);
    tarjeta.classList.add('tarjeta');
    tarjeta.classList.add('cuestionario');

    //se crean los primeros <p> fuera del <div> secundario
    tipo.classList.add("tipo");
    tipo.appendChild(document.createTextNode(vtipo));

    //Se incluyen en el nodo padre
    tarjeta.appendChild(tipo);

    //Se crea el <div> secundario
    separacion.classList.add("separar");

    //se crean los <p> finales
    preguntas.classList.add("Carrera");
    preguntas.appendChild(document.createTextNode(vpreguntas));
    periodo.classList.add("Periodo");
    periodo.classList.add("pushperiodo");
    periodo.appendChild(document.createTextNode(vperiodo));

    //se rellena el <div> secundario con los otros dos <p>
    separacion.appendChild(preguntas);
    separacion.appendChild(periodo);

    //Se añade el <div> secundario al <div>principal
    tarjeta.appendChild(separacion);

    //aqui se imprimen en el grid
    grid.appendChild(link);
}




//Llenado de la pagina
const llenado = (array) => {
    grid.textContent = '';
    array.forEach((element, i) => {
        crearTarjeta(
            element.tipo,
            "25 preguntas",
            element.periodo
        )

    });
}

//funciones
const ordenarTipo = (data) => {
    const tipoArray = cues.filter((e) => {
        if (e.tipo === data) {
            return e;
        }
    });
    grid.textContent = '';
    llenado(tipoArray);

}
const ordenarPeriodo = (data) => {
    const tipoArray = cues.filter((e) => {
        if (e.periodo === data) {
            return e;
        }
    });
    grid.textContent = '';
    llenado(tipoArray);
}



//Event Listeners
verTodo.addEventListener('click', () => {
    llenado(cues);
});
tipoAD.addEventListener('click', () => {
    ordenarTipo('Alumno a Docente');
})
tipoDD.addEventListener('click', () => {
    ordenarTipo('Docente a Docente');
})
tipoDirD.addEventListener('click', () => {
    ordenarTipo('Director a Docente');
})
periodoUno.addEventListener('click', () => {
    ordenarPeriodo('Sep-Dic');
})
periodoDos.addEventListener('click', () => {
    ordenarPeriodo('Ene-Abr');
})
periodoTres.addEventListener('click', () => {
    ordenarPeriodo('May-Ago');
})



//Invocacion de funciones

//primer llenado
llenado(cues);