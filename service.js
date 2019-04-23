var request = require('request');


function rechercherColleguesParNom(nomRecherche, callback) {

    request('https://amadou--collegues-api.herokuapp.com/collegues?nom=dupont', { json: true }, function(err, res, body) {

        var tableauColleguesTrouves = body;

        callback(tableauColleguesTrouves);
    });

    // à noter que la fonction ne retourne rien ici
}

exports.rechercherColleguesParNom = rechercherColleguesParNom; 

function rechercherColleguesParMatricule(matricule, callback) {

    request('https://amadou--collegues-api.herokuapp.com/collegues/matricule', { json: true }, function(err, res, body) {

        var tableauColleguesTrouves = body;

        callback(tableauColleguesTrouves);
    });

}
exports.rechercherColleguesParMatricule = rechercherColleguesParMatricule; 