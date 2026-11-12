// Le site suit la date réelle avec un décalage fictif de 20 ans.
      // Exemple : 12/11/2026 dans la réalité = 12/11/2006 sur le site.
      function getSiteDate() {
        const now = new Date();
        const year = now.getFullYear() - 20;
        const month = now.getMonth();
        const day = now.getDate();
        
        // Gère le 29 février lorsque l'année fictive n'est pas bissextile.
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
        return new Date(year, month, Math.min(day, lastDayOfMonth));
      }
      
      function updateMissingDays() {
        const siteDate = getSiteDate();
        const siteDay = Date.UTC(
        siteDate.getFullYear(),
        siteDate.getMonth(),
        siteDate.getDate()
        );
        
        document.querySelectorAll("[data-disappearance-date]").forEach(card => {
          const dateText = card.dataset.disappearanceDate;
          const parts = dateText.split("-").map(Number);
          const disappearanceDay = Date.UTC(parts[0], parts[1] - 1, parts[2]);
          const days = Math.floor((siteDay - disappearanceDay) / 86400000);
          const output = card.querySelector(".days-missing");
          
          if (!output) return;
          
          if (days < 0) {
            output.textContent = "date à venir";
            return;
          }
          
          output.textContent = `${days} ${days === 1 ? "jour" : "jours"}`;
        });
      }
      
      updateMissingDays();