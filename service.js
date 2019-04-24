var request = require('request');


function rechercherColleguesParNom(nomRecherche, callback) {

    request('https://amadou--collegues-api.herokuapp.com/collegues?nom=' + nomRecherche, { json: true }, function (err, res, body) {

        var tabMatricules = body;

        function trouverCollegues(tabMats, tabResultats) {

            if (tabMats.length === 0) {

                callback([]);

            }
            var matricule = tabMats.pop();

            rechercherColleguesParMatricule(matricule, (collegueTrouve) => {

                tabResultats.push(collegueTrouve);

                if (tabMats.length > 0) {


                    trouverCollegues(tabMats, tabResultats);

                } else {

                    callback(tabResultats);
                }
            });
        }
        trouverCollegues(tabMatricules, []);




    });

}

exports.rechercherColleguesParNom = rechercherColleguesParNom;

function rechercherColleguesParMatricule(matricule, callback) {

    request('https://amadou--collegues-api.herokuapp.com/collegues/' + matricule, { json: true }, function (err, res, body) {

        var tableauColleguesTrouves = body;

        callback(tableauColleguesTrouves);
    });

}
exports.rechercherColleguesParMatricule = rechercherColleguesParMatricule; 