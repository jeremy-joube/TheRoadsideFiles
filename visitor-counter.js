// =========================================
// ROADSIDE FILES VISITOR COUNTER
// =========================================

const UPDATE_INTERVAL = 5000;

const MIN_INCREMENT = 1;
const MAX_INCREMENT = 3;

// Récupération de la valeur sauvegardée
let visitorCount = localStorage.getItem("roadsideCounter")
  ? parseInt(localStorage.getItem("roadsideCounter"), 10)
  : 132;

// =========================================
// DISPLAY
// =========================================

function renderCounter() {

  const counter = document.getElementById("visitorCounter");

  // Sécurité : le compteur n'existe pas encore
  if (!counter) {
    return;
  }

  const padded = String(visitorCount).padStart(6, "0");

  counter.innerHTML = "";

  padded.split("").forEach(number => {

    const digit = document.createElement("span");

    digit.textContent = number;

    counter.appendChild(digit);

  });
}

// =========================================
// UPDATE
// =========================================

function updateCounter() {

  // 60 % de chance d'augmenter
  if (Math.random() > 0.4) {

    const increase =
      Math.floor(
        Math.random() *
        (MAX_INCREMENT - MIN_INCREMENT + 1)
      ) + MIN_INCREMENT;

    visitorCount += increase;
  }

  // Événements étranges
  const randomEvent = Math.random();

  if (randomEvent > 0.995) {
    visitorCount = 666;
  }

  if (randomEvent < 0.003) {
    visitorCount = 1313;
  }

  // Sauvegarde
  localStorage.setItem(
    "roadsideCounter",
    visitorCount
  );

  renderCounter();
}

// =========================================
// INITIALISATION
// =========================================

function initVisitorCounter() {

  renderCounter();

  setInterval(
    updateCounter,
    UPDATE_INTERVAL
  );
}