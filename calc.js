document.querySelector('.calculer').addEventListener('click', function() {
    const heures = parseFloat(document.querySelector('.heures1').value);
    const prixUnitaires = parseFloat(document.querySelector('.prix1').value);
    let montantTotal = 0;
    let message = '';

    if (heures < 0 || prixUnitaires <= 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    }

    if (heures <= 40) {
        montantTotal = heures * prixUnitaires;
        message = 'Il n\'y a pas de majorations pour vos heures entrées.';
    } else if (heures >= 41 && heures <= 44) {
        montantTotal = heures * prixUnitaires * 1.25;
        message = 'Une majoration de 25% est appliquée.';
    } else if (heures >= 45 && heures <= 47) {
        montantTotal = heures * prixUnitaires * 1.50;
        message = 'Une majoration de 50% est appliquée.';
    } else if (heures > 48) {
        montantTotal = heures * prixUnitaires * 2;
        message = 'Une majoration de 100% est appliquée.';
    }

    alert(message);
    document.getElementById('resultat').value = montantTotal.toFixed(2);
});