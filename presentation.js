const service = require('./service.js')


function start() {

    // récupération du module `readline`
    const readline = require('readline');

    const parNom = "1---Rechercher un collègue par nom";
    const sortir = "99--Sortir";

    // création d'un objet `rl` permettant de récupérer la saisie utilisateur
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // récupération de la saisie utilisateur


    function run() {
    
        rl.question(parNom + '\n' + sortir, function (saisie) {
            if (saisie == '1') {
                rl.question('veillez saisir un nom', function(nom){
                    console.log(`>> Recherche en cours du nom ${nom}`)
                    const promesseCollegues$ = service.rechercherColleguesParNom(nom); 
                    promesseCollegues$.then(tabColleguesTrouves => {
                        // cas ok, j'ai le tableau de collègues
                        console.log(tabColleguesTrouves);
                        run();  
                    })
                    .catch(err => {

                     console.log("ce collègue n'existe pas !")
                    })  
                });
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