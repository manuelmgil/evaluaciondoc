const tabla = document.querySelector("tbody");
const crear = document.getElementById("crear");
let idglobal = 4;

let preguntas = [
    {
        id: 0,
        pregunta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        fechacrea: '21 / 10 / 2021',
        fechamod: '21/10/2021'
    },
    {
        id: 1,
        pregunta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        fechacrea: '21 / 10 / 2021',
        fechamod: '21/10/2021'
    },
    {
        id: 2,
        pregunta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        fechacrea: '21 / 10 / 2021',
        fechamod: '21/10/2021'
    }
]

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
    fecha1.appendChild(document.createTextNode("00/00/00"))
    fecha2.appendChild(document.createTextNode("00/00/00"))
    pre.appendChild(document.createTextNode("empty"))
    id.appendChild(document.createTextNode(idglobal))
    tr.appendChild(id);
    tr.appendChild(pre);
    tr.appendChild(fecha1);
    tr.appendChild(fecha2);
    tr.appendChild(tdbut);
    tabla.appendChild(tr);
    idglobal++;
}

crear.addEventListener("click", crearpre);