
    /* ==========================================
       CASE DATABASE
    ========================================== */
    document.addEventListener("DOMContentLoaded", function () {

        const map = document.getElementById("map");
        const info = document.getElementById("caseInfo");
    
        const title = document.getElementById("caseTitle");
        const location = document.getElementById("caseLocation");
        const description = document.getElementById("caseDescription");
        const link = document.getElementById("caseLink");
    
        if (!map) {
            console.error("Erreur : #map introuvable.");
            return;
        }
    
        if (!info) {
            console.error("Erreur : #caseInfo introuvable.");
            return;
        }


    const cases = {

        "the-horned-man": {

            title: "The Horned Man",

            location: "Maryland",

            description:
                "Reports of a spectral rider and a ghostly horse appearing during violent desert storms.",

            link:
                "0-the-horned-man.html"

        },

        "ghost-rider": {

            title: "The Ghost Rider",

            location: "Arizona",

            description:
                "Reports of a spectral rider and a ghostly horse appearing during violent desert storms.",

            link:
                "articles/ghost-rider.html"

        },


        "logan-mercer": {

            title: "Logan Mercer",

            location: "North Carolina",

            description:
                "A rookie NASCAR driver whose extraordinary winning streak has raised unusual questions.",

            link:
                "articles/logan-mercer.html"

        },


        "bayou": {

            title: "The Bayou Files",

            location: "Louisiana",

            description:
                "Disappearances, an old voodoo practitioner and a spirit haunting the Louisiana bayou.",

            link:
                "articles/bayou.html"

        },


        "dragon": {

            title: "The Chicago Incident",

            location: "Chicago, Illinois",

            description:
                "A strange criminal organization, a mysterious banker and reports of something far older than the city itself.",

            link:
                "articles/chicago.html"

        }

    };


    const markers =
        document.querySelectorAll(".case-marker");


    markers.forEach(marker => {

        marker.addEventListener("click", function (event) {

            event.stopPropagation();

            const caseID =
                this.dataset.case;

            const selectedCase =
                cases[caseID];


            if (!selectedCase) {

                console.error(
                    "Aucune affaire trouvée pour :",
                    caseID
                );

                return;

            }


            title.textContent =
                selectedCase.title;

            location.textContent =
                selectedCase.location;

            description.textContent =
                selectedCase.description;

            link.href =
                selectedCase.link;


            const mapRect =
                map.getBoundingClientRect();

            const markerRect =
                marker.getBoundingClientRect();


            let x =
                markerRect.left -
                mapRect.left +
                25;

            let y =
                markerRect.top -
                mapRect.top;


            if (x + 320 > mapRect.width) {

                x =
                    markerRect.left -
                    mapRect.left -
                    340;

            }


            if (y + 200 > mapRect.height) {

                y =
                    mapRect.height -
                    220;

            }


            info.style.left =
                x + "px";

            info.style.top =
                y + "px";


            info.classList.add("active");

        });

    });


    /*
     * Fermer la fiche en cliquant
     * ailleurs sur la carte
     */

    map.addEventListener("click", function () {

        info.classList.remove("active");

    });


    /*
     * Empêcher la fermeture lorsque
     * l'utilisateur clique dans la fiche
     */

    info.addEventListener("click", function (event) {

        event.stopPropagation();

    });


    console.log(
        "The Roadside Files — Map.js chargé correctement."
    );

});