// Función para traducir el número a texto en espanol
function traducir() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    const traducciones = [
        "", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE",
        "DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISEIS", "DIECISIETE",
        "DIECIOCHO", "DIECINUEVE", "VEINTE", "VEINTIUNO", "VEINTIDOS", "VEINTITRES",
        "VEINTICUATRO", "VEINTICINCO", "VEINTISEIS", "VEINTISIETE", "VEINTIOCHO", "VEINTINUEVE",
        "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA", "CIEN"
    ];

    if (numero >= 1 && numero <= 100) {
        resultado.innerText = `${traducciones[numero]}`;
    } else {
        resultado.innerText = "Número fuera de rango";
    }
}

// Función para traducir el número a texto en inglés
function traducirIngles() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    const traduccionesIngles = [
        "", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE",
        "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN",
        "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "TWENTY-ONE", "TWENTY-TWO",
        "TWENTY-THREE", "TWENTY-FOUR", "TWENTY-FIVE", "TWENTY-SIX", "TWENTY-SEVEN",
        "TWENTY-EIGHT", "TWENTY-NINE", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY",
        "EIGHTY", "NINETY", "HUNDRED"
    ];

    if (numero >= 1 && numero <= 100) {
        let textoEsp = traducirNumeroEnEspanol(numero);
        let textoIngles = traduccionesIngles[numero];
        resultado.innerText = `${numero} – ${textoEsp} – ${textoIngles}`;
    } else {
        resultado.innerText = "Number out of range";
    }
}

// Función auxiliar para traducir el número a texto en espanol
function traducirNumeroEnEspanol(numero) {
    const traducciones = [
        "", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE",
        "DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISEIS", "DIECISIETE",
        "DIECIOCHO", "DIECINUEVE", "VEINTE", "VEINTIUNO", "VEINTIDOS", "VEINTITRES",
        "VEINTICUATRO", "VEINTICINCO", "VEINTISEIS", "VEINTISIETE", "VEINTIOCHO", "VEINTINUEVE",
        "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA", "CIEN"
    ];

    return numero >= 1 && numero <= 100 ? traducciones[numero] : "Número fuera de rango";
}
