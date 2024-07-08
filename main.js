
let categorias = [
    { nombre: "Prioritario", turnos: [] },
    { nombre: "Normal", turnos: [] }
];


function obtenerProximoTurno(categoria) {
    let ultimoTurno = categoria.turnos.length > 0 ? categoria.turnos[categoria.turnos.length - 1] : 0;
    return ultimoTurno + 1;
}

function agregarTurno(categoria) {
    let proximoTurno = obtenerProximoTurno(categoria);
    categoria.turnos.push(proximoTurno);
    console.log(`Se ha asignado el turno ${proximoTurno} a la categoría ${categoria.nombre}`);
}


function main() {
    while (true) {
        let opcion = prompt("Ingrese el número correspondiente a la opción deseada:\n1. Solicitar turno Prioritario\n2. Solicitar turno Normal\n3. Salir");

        switch (opcion) {
            case "1":
                let categoriaPrioritario = categorias.find(categoria => categoria.nombre === "Prioritario");
                alert("Tendrás el turno Prioritario");
                agregarTurno(categoriaPrioritario);
                break;
            case "2":
                let categoriaNormal = categorias.find(categoria => categoria.nombre === "Normal");
                alert("Tendrás el turno Normal");
                agregarTurno(categoriaNormal);
                break;
            case "3":
                alert("Gracias por utilizar nuestro sistema de turnos");
                console.log("Gracias por usar el sistema de turnos.");
                return; // Termina la ejecución del programa
            default:
                alert("Opción inválida. Por favor, ingrese 1, 2 o 3.");
        }
        
    }
}
main();