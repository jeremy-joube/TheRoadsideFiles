
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

            location: "Black Creek, Maryland",

            description:
                "",

            link:
                "0-the-horned-man.html"

        },

        "rituel": {

            title: "Where Roads Meet",

            location: "Burlington, Vermont",

            description:
                "",

            link:
                "0-where-roads-meet.html"

        },

        "ghost-rider": {

            title: "The Ghost Rider",

            location: "Tombstone, Arizona",

            description:
                "",

            link:
                ""

        },


        "logan-mercer": {

            title: "The Last Lap",

            location: "North Wilkesboro, Caroline du Nord",

            description:
                "",

            link:
                ""

        },


        "bayou": {

            title: "Dead Men Don't Drown",

            location: "Louisiane",

            description:
                "",

            link:
                ""

        },


        "dragon": {

            title: "Last Exit to Chicago",

            location: "Chicago, Illinois",

            description:
                "",

            link:
                ""

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