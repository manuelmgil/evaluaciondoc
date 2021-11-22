//Variables


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