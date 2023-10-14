document.getElementById('nume').addEventListener('input', function() {
    var nume = this.value;
    var mesaj = document.getElementById('mesaj');

    var numeNepermise = ['pula', 'caca', 'muie']; 
    var limitaCaractere = 20;

    if (nume.length > limitaCaractere) {
        mesaj.textContent = 'Numele nu poate avea mai mult de 20 de caractere.';
        mesaj.style.color = 'red';
        this.value = nume.slice(0, limitaCaractere); 
    } else if (nume === '') {
        mesaj.textContent = '';
    } else if (!numeNepermise.includes(nume.toLowerCase())) {
        mesaj.textContent = 'Numele tău este permis.';
        mesaj.style.color = 'green';
    } else {
        mesaj.textContent = 'Numele nu este permis.';
        mesaj.style.color = 'red';
    }
});


document.getElementById('prenume').addEventListener('input', function() {
    var prenume = this.value;
    var mesaj = document.getElementById('mesaj');

    var prenumeNepermise = ['sugipula', 'vadaulamuie', 'plm'];
    var limitaCaractere = 20;

    if (prenume.length > limitaCaractere) {
        mesaj.textContent = 'Prenumele nu poate avea mai mult de 20 de caractere.';
        mesaj.style.color = 'red';
        this.value = prenume.slice(0, limitaCaractere); 
    } else if (prenume === '') {
        mesaj.textContent = '';
    } else if (!prenumeNepermise.includes(prenume.toLowerCase())) {
        mesaj.textContent = 'Prenumele tău este permis.';
        mesaj.style.color = 'green';
    } else {
        mesaj.textContent = 'Prenumele nu este permis.';
        mesaj.style.color = 'red';
    }
});

document.getElementById('varsta').addEventListener('input', function() {
    var varstaText = this.value;
    var mesaj = document.getElementById('mesaj');
    var limitaCaractere = 2;

    if (varstaText.length > limitaCaractere) {
        mesaj.textContent = 'Vârsta nu poate avea mai mult de 2 de caractere.';
        mesaj.style.color = 'red';
        this.value = varstaText.slice(0, limitaCaractere); 
    } else {
        var varsta = parseInt(varstaText);

        if (isNaN(varsta)) {
            mesaj.textContent = '';
        } else if (varsta >= 18 && varsta <= 50) {
            mesaj.textContent = 'Vârsta ta este permisă.';
            mesaj.style.color = 'green';
        } else {
            mesaj.textContent = 'Vârsta nu este permisă.';
            mesaj.style.color = 'red';
        }
    }
});

document.getElementById('inaltime').addEventListener('input', function() {
    var inaltimeText = this.value.trim(); 
    var mesaj = document.getElementById('mesaj');
    var limitaCaractere = 4;

    if (inaltimeText.length > limitaCaractere) {
        mesaj.textContent = 'Înălțimea nu poate avea mai mult de 4 caractere.';
        mesaj.style.color = 'red';
        this.value = inaltimeText.slice(0, limitaCaractere); 
    } else {
        var inaltime = parseFloat(inaltimeText.replace(',', '.'));

        if (isNaN(inaltime)) {
            mesaj.textContent = '';
        } else if (inaltime >= 1.30 && inaltime <= 2.30) {
            mesaj.textContent = 'Înălțimea ta este permisă.';
            mesaj.style.color = 'green';
        } else {
            mesaj.textContent = 'Înălțimea nu este permisă. Trebuie să fie între 1.30 și 2.30 metri.';
            mesaj.style.color = 'red';
        }
    }
});
