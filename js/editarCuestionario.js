//Variables
const contenedor = document.getElementById('cuestionario')

//Variables locales para 
//Hasta tener BDD
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


//Funciones ------------------


//Creación de una pregunta
const crearPregunta = (count, vpregunta, max) => {
    //primero creamos las etiquetas para todos los componentes de la pregunta
    let div = document.createElement('div');
    let pregunta = document.createElement('p');
    let botones = document.createElement('div');
    let eliminar = document.createElement('button');

    //creamos el primer div
    div.classList.add('pregunta', 'mb-3');

    //agregamos clases y  texto de la pregunta
    pregunta.appendChild(document.createTextNode(`${count}.- ${vpregunta}`))
    div.appendChild(pregunta);

    //se agrega el div para los botones, se le agrega su clase primero
    botones.classList.add('flex');
    div.appendChild(botones);

    //Se agregan los botones en el div y sus clases
    eliminar.appendChild(document.createTextNode('Eliminar'))
    eliminar.classList.add('btn', 'btn-danger', 'automatic');
    eliminar.setAttribute('id', `del${count}`)




    if (count > 1) {
        let subir = document.createElement('button');
        subir.appendChild(document.createTextNode('Subir'))
        subir.classList.add('btn', 'btn-secondary', 'automatic', 'me-2');
        subir.setAttribute('id', `up${count}`)
        botones.appendChild(subir);
    }

    if (count < max) {
        let bajar = document.createElement('button');
        bajar.appendChild(document.createTextNode('Bajar'))
        bajar.classList.add('btn', 'btn-secondary', 'automatic', 'me-2');
        bajar.setAttribute('id', `down${count}`)
        botones.appendChild(bajar);
    }

    botones.appendChild(eliminar);

    //se agrega todo al contenedor: cuestionario
    contenedor.appendChild(div)

    //se agregan los eventos individualmente a cada boton
    eventoEliminar(`del${count}`, count);

    if (count > 1) {
        eventoSubir(`up${count}`, count);
    }

    if (count < max) {
        eventoBajar(`down${count}`, count);
    }
}

//Imprimir todas las preguntas
const llenar = (array) => {
    contenedor.textContent = '';
    const max = array.length;
    array.forEach((element, i) => {
        crearPregunta(i + 1, element, max)
    })
}


//funcion para eliminar de la variable estatica
const eliminarPrueba = (id) => {
    cues[0].q.forEach((e, i, ob) => {
        if (i === id - 1) {
            ob.splice(i, 1)
        }
    })

    llenar(cues[0].q)
}

//funcion para subir la pregunta
const intercambiar = (indexA, indexB) => {
    const temp = cues[0].q[indexB];
    cues[0].q[indexB] = cues[0].q[indexA];
    cues[0].q[indexA] = temp

    llenar(cues[0].q)

}

//eventListeners

//Eliminar una pregunta
const eventoEliminar = (id, num) => {
    const objeto = document.getElementById(id);
    objeto.addEventListener('click', () => {

        //Se retira todo el contenido del div padre con la pregunta y los botones
        objeto.parentElement.parentElement.parentElement.removeChild(objeto.parentElement.parentElement);

        //funcion para eliminar de la BDD
        //PROVISIONAL PARA PRUEBAS
        eliminarPrueba(num);
        //FIN PROVISIONAL
    })
}

//subir una pregunta PROVISIONAL PARA ARRAY
const eventoSubir = (id, num) => {
    const objeto = document.getElementById(id);
    objeto.addEventListener('click', () => {

        intercambiar(num - 1, num - 2);
    })

}

//bajar una pregunta PROVISIONAL PARA ARRAY
const eventoBajar = (id, num) => {
    const objeto = document.getElementById(id);
    objeto.addEventListener('click', () => {

        intercambiar(num - 1, num);
    })

}





//primer llenado
llenar(cues[0].q);