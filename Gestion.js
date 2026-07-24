// CRUD - Gestión de Habitaciones de Hotel
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
    if (Estado.toLowerCase() === "ocupada") {
        var Huesped = prompt("Ingrese el Nombre del Huésped: ");
    } else{
        var Huesped = " ";
    }

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
        console.log("Habitación registrada correctamente");
        callback();
    }, 2000);
}

function Mostrar(callback){
    console.log("---------- Habitaciones ----------");
    
    if (!Habitaciones || Habitaciones.length === 0) {
        console.log("No existen registros");
    } else {
        Habitaciones.forEach(Habitacion => {
            if (Habitacion) {
                console.log(
                    `No. de Habitación: ${Habitacion.Numero} \n` +
                    `Tipo de Habitación: ${Habitacion.Tipo} \n` +
                    `Precio: Q. ${Habitacion.precioNoche} \n` +
                    `Estado: ${Habitacion.Estado} \n` +
                    `Huésped: ${Habitacion.Huesped} \n`
                );
            }
        });
    }

    callback();
}

function Buscar(callback){
    let Numero = parseInt(prompt("Ingresar Número de la Habitación: "));
    console.log("Consultando Bases de Datos del Hotel...");

    setTimeout(function(){
        let habitacionBuscada = Habitaciones.find(Habitacion => {
            return Habitacion.Numero === Numero;
        });
        if (habitacionBuscada){
            console.log("-- Habitación Encontrada --");
            console.log(`No. de Habitación: ${habitacionBuscada.Numero} \n`+
                `Tipo de Habitación: ${habitacionBuscada.Tipo} \n`+
                `Precio: Q. ${habitacionBuscada.precioNoche} \n`+
                `Estado: ${habitacionBuscada.Estado} \n`+
                `Huésped: ${habitacionBuscada.Huesped} \n`
            );
        } else {
            console.log("Habitación no encontrada");
        }
        callback();
    }, 3000);
}

function Actualizar(callback) {
    let Numero = parseInt(prompt("Ingresar Número de la Habitación: "));
    console.log("Consultando Bases de Datos del Hotel...");

    setTimeout(function() {
        let habitacionBuscada = Habitaciones.find(Habitacion => {
            return Habitacion.Numero === Numero;
        });

        if (habitacionBuscada) {
            let nuevoEstado = prompt("Ingrese el Estado de la Habitación: \n"+
                "1. Libre \n"+
                "2. Ocupada \n"+
                "3. Limpieza \n"
            );
            let Huesped = " ";

            if (nuevoEstado.toLowerCase() === "ocupada") {
                Huesped = prompt("Ingrese Nombre del Huésped: ");
            } else {
                Huesped = " ";
            }

            habitacionBuscada.Estado = nuevoEstado;
            habitacionBuscada.Huesped = Huesped;

            console.log("Estado Actualizado: " + habitacionBuscada.Estado);
            console.log("Nombre del Huésped: " + habitacionBuscada.Huesped);

        } else {
            console.log("Habitación no encontrada");
        }

        callback();
    }, 3000);
}

function Eliminar(callback){
    let Numero = parseInt(prompt("Ingresar Número de la Habitación a Eliminar: "));

    let Indice = Habitaciones.findIndex(Habitacion => {
        return Habitacion.Numero === Numero;
    });

    if (Indice !== -1){
        Habitaciones.splice(Indice, 1);
        console.log("Habitación Eliminada: " + Numero);
    } else {
        console.log("Habitación no Encontrada...");
    }

    callback();
}

Menu();