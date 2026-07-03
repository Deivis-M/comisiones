const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.1);
        return comision
    }
}

function calcular(){
    // recuperamos propiedades de las cajas de texo
    let componenteSueldoBase=document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");
    
    // recuperamos el valor
    let sueldoBaseStr=componenteSueldoBase.value;
    let ventasStr=componenteVentas.value;
    let precioStr=componentePrecio.value;

    //convertir texto a numero
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(ventasStr);
    let precioProducto = parseFloat(precioStr);

    let comision = calcularComision(numeroVentas,precioProducto);

    let total = sueldoBase+comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}