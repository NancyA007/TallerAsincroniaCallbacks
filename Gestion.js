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

Menu();