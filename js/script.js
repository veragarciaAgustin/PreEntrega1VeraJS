function estadia(noches, habitacion) {
    let precio;
    switch(habitacion.toLowerCase()) {
        case "simple":
            precio = (1500 * noches);
            alert("$" + precio);
            break;
        case "doble":
            precio = (2500 * noches);
            alert("$" + precio);
            break;
        case "suit":
            precio = (3800 * noches);
            alert("$" + precio);
            break;
        default:
            alert("No ha ingresado correctamente el tipo de habitacion");
            break;
    }
}

alert("Bienvenido, esta es la pagina de reserva del hotel, procederemos a realizar su reserva");
alert("Necesitaremos algunos datos personales para continuar con la reserva, ingrese los siguientes datos:");

let nombreCliente, apellidoCliente, numeroCliente, emailCliente;
while (true) {
    nombreCliente = prompt("Ingrese su nombre: ");
    apellidoCliente = prompt("Ingrese su apellido: ");
    numeroCliente = parseInt(prompt("Ingrese su numero de telefono: "));
    emailCliente = prompt("Ingrese su correo electronico: ");

    if (nombreCliente && apellidoCliente && numeroCliente && emailCliente) {
        if (confirm("Verifique sus datos: \nNombre: " + nombreCliente + "\nApellido: " + apellidoCliente + "\nTelefono: " + numeroCliente + "\nCorreo: " + emailCliente)) {
            alert("Ha ingresado sus datos correctamente! Ahora seleccionara las condiciones de la reserva");
            break;
        } else {
            alert("Error: No ha confirmado los datos, intente de nuevo.");
        }
    } else {
        alert("Error: Algun dato no fue ingresado correctamente, por favor intente de nuevo.");
    }
}

let nochesDeEstadia = parseInt(prompt("Cuanto durara tu estadia?"));
alert("Ahora debe ingresar que tipo de habitacion quiere: ");
let tipoHabitacion = prompt("Simple: $1500 por noche \nDoble: $2500 por noche \nSuit: $3800 por noche");

alert("El cliente " + nombreCliente + " " + apellidoCliente + " hizo una reserva de " + nochesDeEstadia + " noches " + "en una habitacion " + tipoHabitacion + " por lo que la reserva tiene un precio total de: ");
estadia(nochesDeEstadia, tipoHabitacion);
