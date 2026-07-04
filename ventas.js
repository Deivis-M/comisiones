const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.1);
        return comision
    }
}


function validarNumero(input, idError) {
    const error = document.getElementById(idError);
    const valor = input.value.trim();

    error.textContent = "";

    if (valor === "") {
        error.textContent = "Este campo es obligatorio.";
        return false;
    }

    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números.";
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos.";
        return false;
    }

    return true;
}

function calcular() {
    // recuperamos propiedades de las cajas de texo
    //let componenteSueldoBase=document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");

    // recuperamos el valor
    //let sueldoBaseStr=componenteSueldoBase.value;
    //let ventasStr=componenteVentas.value;
    //let precioStr=componentePrecio.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase")
    //let ventasStr = recuperarTexto("txtVentas")
    //let precioStr = recuperarTexto("txtPrecio")

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}