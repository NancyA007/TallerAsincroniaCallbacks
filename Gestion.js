// CRUD - Gestión de HAbitaciones de Hotel
let Habitaciones = [];

function Menu(){
    let Opcion = prompt(
        "********** Gestión de Habitaciones - Hotel **********\n"+
        "1. Registrar nueva Habitación\n"+
        "2. Listar Habitaciones\n"+
        "3. Buscar Habitación por Número\n"+
        "4. Cambiar Estado de una Habitación\n"+
        "5. Eliminar Habitación\n"+
        "6. Salir"
    )

    switch(Opcion){
        case "1":
            console.log("Registro de Habitación");
            Registrar(Menu);
            break;
        case "2":
            Mostrar(Menu);
            break;
        case "3":
            Buscar(Menu);
            break;
        case "4":
            Actualizar(Menu);
            break;
        case "5":
            Eliminar(Menu);
            break;
        case "6":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción No Válida");
            Menu();
    }
}

function Registrar(callback) {
    let Numero = parseInt(prompt("Ingrese el Número de Habitación: "));
    let Tipo = prompt("Ingrese el Tipo de Habitación: \n"+
        "1. Sencilla \n"+
        "2. Doble \n"+
        "3. Suite \n"
    );
    let precioNoche = parseFloat(prompt("Ingrese el Precio de la Habitación: "));
    let Estado = prompt("Ingrese el Estado de la Habitación: \n"+
        "1. Libre \n"+
        "2. Ocupada \n"+
        "3. Limpieza \n"
    );
    let Huesped = prompt("Ingrese el Nombre del Huésped: ");

    let Habitacion = {
        Numero,
        Tipo,
        precioNoche,
        Estado,
        Huesped,
    };

    console.log ("Validando Información de la Habitación...");

    setTimeout(function(){
        Habitaciones.push(Habitacion);
        console.log("Habitación registrada, Número de Habitación: " + Numero);
        callback();
    }, 2000);
}

function Mostrar(callback){
    console.log("---------- Habitaciones ----------");
    Habitaciones.forEach(Habitacion => {
        console.log(`No. de Habitación: ${Habitacion.Numero} \n`+
            `Tipo de Habitación: ${Habitacion.Tipo} \n`+
            `Precio: Q. ${Habitacion.precioNoche} \n`+
            `Estado: ${Habitacion.Estado} \n`+
            `Huésped: ${Habitacion.Huesped} \n`
        );
    });
    callback();
}

Menu();