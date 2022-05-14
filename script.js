const btn = document.querySelector('input');
let einstandpreis = document.querySelector('#einstandpreis');
let verkauspreis = document.querySelector('#verkauspreis');

// const einstandpreis = document.querySelector('#einstandpreis');
// const gemeinkosten = document.querySelector('#gemeinkosten').value;
// const gewinn = document.querySelector('#gewinn').value;
// const kundenrabatt = document.querySelector('#kundenrabatt').value;
// const skonto = document.querySelector('#skonto').value;
// const verkauspreis = document.querySelector('#verkauspreis').value;

// const profit = document.querySelector('input');

function calculation () {

   
    let gemeinkosten = document.getElementById('gemeinkosten').value / 100;
    let gewinn = document.getElementById('gewinn').value / 100;
    let kundenrabatt = document.getElementById('kundenrabatt').value / 100;
    let skonto = document.getElementById('skonto').value / 100;


    if(verkauspreis.value === "") {
        console.log(einstandpreis.value);

        let result = priceOben (einstandpreis.value, gemeinkosten, gewinn, kundenrabatt, skonto);

        verkauspreis.value = result;
    } else {
        console.log(verkauspreis.value);

        let result = preisUnten (verkauspreis.value, skonto, kundenrabatt, gewinn, gemeinkosten);

        einstandpreis.value = result;
    }
}




function priceOben (einstandpreis, gemeinkosten, gewinn, kundenrabatt, skonto) {
    let mitGemeinkosten = einstandpreis * (1 + gemeinkosten);
    let mitGewinn = mitGemeinkosten * (1 + gewinn);
    let mitRabatt = mitGewinn / (1 - kundenrabatt);
    let mitSkonto = mitRabatt / (1 - skonto);
    let verkauspreis = mitSkonto * 1.2;

    // console.log(verkauspreis);
    // verkauspreis.value = verkauspreis;
    return verkauspreis.toFixed(2);
}




function preisUnten (verkauspreis, skonto, kundenrabatt, gewinn, gemeinkosten) {
    let ohneUst = verkauspreis / 1.2;
    let ohneSconto = ohneUst * (1 - skonto);
    let ohneRabatt = ohneSconto * (1 - kundenrabatt);
    let ohneGewinn = ohneRabatt / (1 + gewinn)
    let einstandpreis = ohneGewinn / (1 + gemeinkosten)

    // console.log(einstandpreis);
    // einstandpreis.value = einstandpreis;
    return einstandpreis.toFixed(2);
}