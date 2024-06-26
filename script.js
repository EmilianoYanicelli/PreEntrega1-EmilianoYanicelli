class CalcularPromedio {
    constructor() {
        this.nombre = '';
        this.notasParciales = [];
    }

    validarNombre(nombre) {
        return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/.test(nombre);
    }

    obtenerNombre() {
        do {
            this.nombre = prompt("Este programa fue desarrollado para calcular el promedio de calificaciones de tu cursada. Ingrese su nombre para comenzar:");

            if (this.nombre === null) {
                return false;
            }

            if (!this.validarNombre(this.nombre)) {
                alert("Nombre inválido. no ingrese caracteres especiales.");
            }
        } while (!this.validarNombre(this.nombre));

        return true;
    }

    validarNota(nota) {
        return !isNaN(nota) && nota >= 1.0 && nota <= 10.0;
    }

    obtenerNotasParciales() {
        let notasIngresadas = 0;

        for (let solicitud = 1; solicitud <= 4; solicitud++) {
            let mensaje = '';
            switch (solicitud) {
                case 1:
                    mensaje = 'Perfecto, ahora ingrese la primera nota de su cursada:';
                    break;
                case 2:
                    mensaje = 'Ingrese la segunda nota de su cursada:';
                    break;
                case 3:
                    mensaje = 'Ingrese la tercera nota de su cursada:';
                    break;
                case 4:
                    mensaje = 'Ingrese la cuarta nota de su cursada:';
                    break;
            }

            let nota = prompt(mensaje);

            while (true) {
                if (nota === null) {
                    if (confirm("¿Estás seguro que deseas cancelar el ingreso de notas? Esto borrará las notas ingresadas previamente")) {
                        return false;
                    } else {
                        nota = prompt(`Continuemos. ${mensaje}`);
                    }
                }

                if (this.validarNota(parseFloat(nota))) {
                    this.notasParciales.push(parseFloat(nota));
                    notasIngresadas++;
                    break;
                } else {
                    nota = prompt(`La nota ingresada no es válida. Ingrese nuevamente (Debe ser entre 1 a 10!!):`);
                }
            }
        }

        return notasIngresadas === 4;
    }

    calcularPromedioFinal() {
        const sumaNotas = this.notasParciales.reduce((total, nota) => total + nota, 0);
        const promedioFinal = sumaNotas / this.notasParciales.length;
        return promedioFinal;
    }

    mostrarResultado() {
        const promedioFinal = this.calcularPromedioFinal();
        alert(`Hola ${this.nombre}, tu promedio final es un ${promedioFinal}.`);

        if (promedioFinal >= 4) {
            alert(`¡Felicitaciones ${this.nombre}! aprobaste el curso.`);
        } else {
            alert(`${this.nombre}, reprobaste, tienes realizar el curso nuevamente.`);
        }
    }

    mostrarMensaje(mensaje) {
        return confirm(mensaje);
    }

    confirmarSalida() {
        return this.mostrarMensaje("¿Deseas salir del programa?");
    }

    ejecutar() {
        if (!this.obtenerNombre()) {
            return;
        }

        if (!this.obtenerNotasParciales()) {
            return; 
        }

        this.mostrarResultado();
    }
}

function construirCalcularPromedio() {
    const simuladorPromedio = new CalcularPromedio();

    while (true) {
        simuladorPromedio.ejecutar();

        const salir = simuladorPromedio.confirmarSalida();

        if (salir) {
            alert("Muchas gracias por utilizar nuestro software. =)");
            break;
        } else {
            simuladorPromedio.notasParciales = [];
        }
    }
}

construirCalcularPromedio();
