const tabla = document.querySelector("tbody");
const crear = document.getElementById("crear");
const input = document.getElementById("nuevapregunta");
const buscar = document.getElementById("buscar");
const buscarbtn = document.getElementById("buscarbtn");

let preguntas = [
    {
        id: 0,
        pregunta: '¿Qué tan satisfecho estas con el curso',
        fechacrea: '21/10/2021',
        fechamod: '29/10/2021'
    },
    {
        id: 1,
        pregunta: 'El profesor uso materiales didacticos para explicar mejor los temas',
        fechacrea: '25/10/2021',
        fechamod: '1/11/2021'
    },
    {
        id: 2,
        pregunta: 'Hubo mucha participacion de los alumnos durante el curso',
        fechacrea: '30/10/2021',
        fechamod: '31/10/2021'
    }
]

const busqueda = () => {
    tabla.replaceChildren();
    const valor = buscar.value;
    if (valor === '') {
        llenado();
    } else {
        preguntas.forEach((element, i) => {
            if (element.pregunta.indexOf(valor) > 0) {
                let tr = document.createElement("tr");
                let id = document.createElement("th");
                let pre = document.createElement("td");
                let fecha1 = document.createElement("td");
                let fecha2 = document.createElement("td");
                let tdbut = document.createElement("td");
                let but = document.createElement("button");
                // but.className = "btn btn-danger";
                but.classList.add("btn");
                but.classList.add("btn-danger");

                but.appendChild(document.createTextNode("Editar"))
                tdbut.appendChild(but);
                fecha1.appendChild(document.createTextNode(element.fechacrea))
                fecha2.appendChild(document.createTextNode(element.fechamod))
                pre.appendChild(document.createTextNode(element.pregunta))
                id.appendChild(document.createTextNode(element.id))
                tr.appendChild(id);
                tr.appendChild(pre);
                tr.appendChild(fecha1);
                tr.appendChild(fecha2);
                tr.appendChild(tdbut);
                tabla.appendChild(tr);
            }

        });
    }
}

let llenado = () => {
    preguntas.forEach((element, i) => {
        let tr = document.createElement("tr");
        let id = document.createElement("th");
        let pre = document.createElement("td");
        let fecha1 = document.createElement("td");
        let fecha2 = document.createElement("td");
        let tdbut = document.createElement("td");
        let but = document.createElement("button");
        // but.className = "btn btn-danger";
        but.classList.add("btn");
        but.classList.add("btn-danger");

        but.appendChild(document.createTextNode("Editar"))
        tdbut.appendChild(but);
        fecha1.appendChild(document.createTextNode(element.fechacrea))
        fecha2.appendChild(document.createTextNode(element.fechamod))
        pre.appendChild(document.createTextNode(element.pregunta))
        id.appendChild(document.createTextNode(element.id))
        tr.appendChild(id);
        tr.appendChild(pre);
        tr.appendChild(fecha1);
        tr.appendChild(fecha2);
        tr.appendChild(tdbut);
        tabla.appendChild(tr);

    });
}

const crearpre = () => {
    const num = checkvalue();

    if (num != '') {

        let tr = document.createElement("tr");
        let id = document.createElement("th");
        let pre = document.createElement("td");
        let fecha1 = document.createElement("td");
        let fecha2 = document.createElement("td");
        let tdbut = document.createElement("td");

        //Elementos automaticos de la pregunta
        let cont = 0;
        const date = new Date()

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let fecha;
        if (month < 10) {
            fecha = (`${day}/0${month}/${year}`);
        } else {
            fecha = (`${day}/${month}/${year}`)
        }

        let but = document.createElement("button");
        // but.className = "btn btn-danger";
        preguntas.forEach((element, i) => {
            cont++
        });

        but.classList.add("btn");
        but.classList.add("btn-danger");
        but.appendChild(document.createTextNode("Editar"))
        tdbut.appendChild(but);
        fecha1.appendChild(document.createTextNode(fecha))
        fecha2.appendChild(document.createTextNode(fecha))
        pre.appendChild(document.createTextNode(num))
        id.appendChild(document.createTextNode(cont))
        tr.appendChild(id);
        tr.appendChild(pre);
        tr.appendChild(fecha1);
        tr.appendChild(fecha2);
        tr.appendChild(tdbut);
        tabla.appendChild(tr);
        input.value = '';

        const nuevap = {
            id: cont,
            pregunta: num,
            fecha1: fecha,
            fecha2: fecha
        }
        preguntas.push(nuevap);

    } else {
        console.log("input vacio")
    }

}

const checkvalue = () => {
    return input.value;
}

crear.addEventListener("click", crearpre);
buscar.addEventListener("input", busqueda);
llenado();