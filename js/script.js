function calcula_dolar(){
    const taxa_cambio = 5.00;
    let real;
    let dolares;

    real = Number( document.getElementById( "real" ).value );

    dolares = real / taxa_cambio;

    document.getElementById( "dolares" ).innerHTML = " O valor em dolar sera: " + dolares.toFixed(2) + "  $";
    console.log(dolares);
}