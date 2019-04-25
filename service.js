
//après installation du request-promise-native 
const request = require('request-promise-native');

class Service{

//notre fonction doit nous permettre de récupérer les informations d'un collègue à partir du nom saisi 
rechercherColleguesParNom(nomRecherche) {

//notre requete http avec un nom saisie
    return request(`https://amadou--collegues-api.herokuapp.com/collegues?nom=${nomRecherche}`, {

        json: true
    }) //de nouvelles requetes qui vont nous permettre de récupérer un tableau de promesses qui, lui-même nous permettra de transformer notre requête initiale, car la première ne nous renvoyait qu'une liste de matricule 
        .then(tabMatricules => {

            const tabPromesses2 = tabMatricules.map(matricule => request(`https://amadou--collegues-api.herokuapp.com/collegues/${matricule}`, {
                json: true
            }));

           return Promise.all(tabPromesses2)
        });
}

}
//exports.service = rechercherColleguesParNom;

module.exports = new Service()