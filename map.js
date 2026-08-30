
    /* ==========================================
       CASE DATABASE
    ========================================== */

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


    /* ==========================================
       INTERACTION
    ========================================== */

    const markers =
        document.querySelectorAll(".case-marker");

    const info =
        document.getElementById("caseInfo");

    const title =
        document.getElementById("caseTitle");

    const location =
        document.getElementById("caseLocation");

    const description =
        document.getElementById("caseDescription");

    const link =
        document.getElementById("caseLink");


    markers.forEach(marker => {

        marker.addEventListener("click", function(event) {

            event.stopPropagation();

            const caseID =
                this.dataset.case;

            const selectedCase =
                cases[caseID];

            title.textContent =
                selectedCase.title;

            location.textContent =
                selectedCase.location;

            description.textContent =
                selectedCase.description;

            link.href =
                selectedCase.link;


            /*
             * Position the information box
             * near the clicked marker
             */

            const mapRect =
                document
                    .getElementById("map")
                    .getBoundingClientRect();

            const markerRect =
                this.getBoundingClientRect();


            let x =
                markerRect.left -
                mapRect.left +
                25;

            let y =
                markerRect.top -
                mapRect.top;


            /*
             * Prevent the box from going
             * outside the map.
             */

            if (x + 320 > mapRect.width) {

                x =
                    markerRect.left -
                    mapRect.left -
                    340;

            }


            if (y + 180 > mapRect.height) {

                y =
                    mapRect.height -
                    200;

            }


            info.style.left =
                x + "px";

            info.style.top =
                y + "px";


            info.classList.add("active");

        });

    });


    /*
     * Close the window when clicking elsewhere
     */

    document
        .getElementById("map")
        .addEventListener("click", function() {

            info.classList.remove("active");

        });


    /*
     * Prevent closing when clicking
     * inside the information window
     */

    info.addEventListener("click", function(event) {

        event.stopPropagation();

    });
