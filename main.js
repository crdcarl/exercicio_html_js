const form = document.getElementById('valid-form');

let formvalid = false;

function validaNumero(primeiroNumero, segundoNumero) {
    return segundoNumero > primeiroNumero;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let primeiroNumero = parseFloat(document.getElementById('n1').value);
    let segundoNumero = parseFloat(document.getElementById('n2').value);

    if (validaNumero(primeiroNumero, segundoNumero)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        primeiroNumero.value = '';
        segundoNumero.value = '';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
});

