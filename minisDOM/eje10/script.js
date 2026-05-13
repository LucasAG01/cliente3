const zonaDibujo = document.getElementById("zonaDibujo");

const tabla = document.createElement("table");
const tbody = document.createElement("tbody");

/*
for filas
    crear tr

    for columnas
        crear td
        meter td en tr

    meter tr en tbody
*/ 

for (let index = 0; index < 5; index++) {
    
    const tr = document.createElement("tr");

    for(let j =0; j < 5; j++){
        
        const td = document.createElement("td");
        td.className="celda";
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

tabla.appendChild(tbody);
zonaDibujo.appendChild(tabla);

/*
crear tabla
crear tbody
crear filas
crear celdas
meter celdas en filas
meter filas en tbody
meter tbody en tabla
meter tabla en div
*/ 