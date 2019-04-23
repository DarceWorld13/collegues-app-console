var rechercherColleguesParNom = require('./service.js')


function start() {

    // récupération du module `readline`
    var readline = require('readline');

    var parNom = "1---Rechercher un collègue par nom";
    var sortir = "99--Sortir";

    // création d'un objet `rl` permettant de récupérer la saisie utilisateur
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // récupération de la saisie utilisateur


    function run() {
    
        rl.question(parNom + '\n' + sortir, function (saisie) {

            if (saisie == '1') {

                rl.question('veillez saisir un nom', function(nom){
                    console.log(">> Recherche en cours du nom xxx")
                    rechercherColleguesParNom.rechercherColleguesParNom(nom, function(colleguesTrouves){
                        
                        console.log(colleguesTrouves); 
                        
                        }); 
                });
                run();

            }

            if (saisie == '99') {
                console.log("Aurevoir !");
                rl.close();
            }

        });
    
    }

    run();

}
   

    




exports.start = start; 