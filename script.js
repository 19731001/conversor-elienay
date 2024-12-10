// Funções de conversão de comprimento
function convertKmToMeters() {
    const km = document.getElementById('km').value;
    const meters = km * 1000;
    document.getElementById('meters').value = meters;
}

function convertMetersToKm() {
    const meters = document.getElementById('meters').value;
    const km = meters / 1000;
    document.getElementById('km').value = km;
}

// Funções de conversão de temperatura
function convertCelsiusToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
}

function convertFahrenheitToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius;
}

// Funções de conversão de peso
function convertKgToPounds() {
    const kg = document.getElementById('kg').value;
    const pounds = kg * 2.20462;
    document.getElementById('pounds').value = pounds;
}

function convertPoundsToKg() {
    const pounds = document.getElementById('pounds').value;
    const kg = pounds / 2.20462;
    document.getElementById('kg').value = kg;
}
