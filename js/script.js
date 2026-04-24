function calcula_dolar(){
    const taxa_cambio = 5.00;
    let real;
    let dolares;

    //taxa_cambio = Number( document.getElementById( "taxa_cambio" ).value );
    real = Number( document.getElementById( "real" ).value );

    dolares = real / taxa_cambio;

    document.getElementById( "dolares" ).innerHTML = " O valor em dolar sera: " + dolares.toFixed(2);
    //document.getElementById( "informacao" ).innerHTML = " O valor em dolar sera: ";
    console.log(dolares);
}