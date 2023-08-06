for (let turno = 1; turno <= 10; turno++) {
    let nombre = prompt("Ingrese el nombre").toLowerCase();
    alert(`Turno #${turno} Nombre: ${nombre}`);

    if (!isNaN(nombre)) {
        alert("Nombre incorrecto. No puede ser un número.");
    }
}

alert("No hay más turnos");

let turnos = new Turno("Laura", 1);

function Turno(nombre, turno) {
    this.nombre = nombre;
    this.turno = turno;
}

let infoTurno = `Su nombre es ${turnos.nombre}, número de turno: ${turnos.turno}`;
console.log(infoTurno);