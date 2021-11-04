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
    },
    {
        id: 3,
        pregunta: 'Se aplico un examen de diagnostico para medir el nivel de los alumnos antes de empezar el curso',
        fechacrea: '2/11/2021',
        fechamod: '3/11/2021'
    },

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
                let but2 = document.createElement("button");
                // but.className = "btn btn-danger";
                but.classList.add("btn");
                but.classList.add("btn-success");
                but2.classList.add("btn");
                but2.classList.add("btn-danger");
                tr.setAttribute("id", "idpre" + element.id)
                but.appendChild(document.createTextNode("Editar"))
                but2.appendChild(document.createTextNode("Eliminar"))
                tdbut.appendChild(but);
                tdbut.appendChild(but2);
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
                deleteEvent("idpre" + element.id, element.id);

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
        let but2 = document.createElement("button");
        // but.className = "btn btn-danger";
        but.classList.add("btn");
        but.classList.add("btn-success");
        but2.classList.add("btn");
        but2.classList.add("btn-danger");
        tr.setAttribute("id", "idpre" + element.id)
        but.appendChild(document.createTextNode("Editar"))
        but2.appendChild(document.createTextNode("Eliminar"))
        tdbut.appendChild(but);
        tdbut.appendChild(but2);
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
        deleteEvent("idpre" + element.id, element.id);
    });
}

const crearpre = () => {
    const num = checkvalue();

    if (num != '') {

        // let tr = document.createElement("tr");
        // let id = document.createElement("th");
        // let pre = document.createElement("td");
        // let fecha1 = document.createElement("td");
        // let fecha2 = document.createElement("td");
        // let tdbut = document.createElement("td");
        // let but = document.createElement("button");

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

        // but.className = "btn btn-danger";
        preguntas.forEach((element, i) => {
            cont++
        });
        const nuevap = {
            id: cont,
            pregunta: num,
            fechacrea: fecha,
            fechamod: fecha
        }

        // but.classList.add("btn");
        // but.classList.add("btn-danger");
        // tr.setAttribute("id", "idpre" + cont)
        // but.appendChild(document.createTextNode("Eliminar"))
        // tdbut.appendChild(but);
        // fecha1.appendChild(document.createTextNode(fecha))
        // fecha2.appendChild(document.createTextNode(fecha))
        // pre.appendChild(document.createTextNode(num))
        // id.appendChild(document.createTextNode(cont))
        // tr.appendChild(id);
        // tr.appendChild(pre);
        // tr.appendChild(fecha1);
        // tr.appendChild(fecha2);
        // tr.appendChild(tdbut);
        // tabla.appendChild(tr);

        input.value = '';
        buscar.value = '';


        preguntas.push(nuevap);
        tabla.replaceChildren();
        llenado();

    } else {
        console.log("input vacio")
    }

}

const checkvalue = () => {
    return input.value;
}

const deleteEvent = (id, numero) => {
    const algo = document.getElementById(id);
    const elim = algo.children[4].children[1];
    elim.addEventListener('click', () => {
        elim.parentElement.parentElement.parentElement.removeChild(elim.parentElement.parentElement);
        preguntas.forEach((ele, i, ob) => {
            if (ele.id === numero) {
                ob.splice(i, 1);
            }
        });
        tabla.replaceChildren();
        input.value = '';
        buscar.value = '';
        llenado();
    })
}

crear.addEventListener("click", crearpre);
buscar.addEventListener("input", busqueda);
llenado();