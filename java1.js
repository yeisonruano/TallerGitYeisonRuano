function traducirNumeroALetras(numero) {
    const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];

    if (numero < 10) {
        return unidades[numero];
    } else if (numero < 20) {
        return especiales[numero - 10];
    } else if (numero < 100) {
        const decena = Math.floor(numero / 10);
        const unidad = numero % 10;
        return unidad === 0 ? decenas[decena] : `${decenas[decena]} y ${unidades[unidad]}`;
    } else if (numero === 100) {
        return 'cien';
    } else {
        return 'Número fuera de rango';
    }
}

function traducir() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = traducirNumeroALetras(numero);
    document.getElementById('resultado').textContent = resultado;
}
