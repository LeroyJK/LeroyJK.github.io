/* =========================================================
   VALORANT — LE GUIDE
   Données des agents + interactions de la page
   ========================================================= */

// Adresse des images (API communautaire valorant-api.com)
const IMG_URL = "https://media.valorant-api.com/agents/";

// Couleur et nom affiché pour chaque rôle
const ROLES = {
  duelliste:  { label: "Duelliste",  color: "#ff4655" },
  initiateur: { label: "Initiateur", color: "#3ec5ad" },
  controleur: { label: "Contrôleur", color: "#b07cff" },
  sentinelle: { label: "Sentinelle", color: "#f5c542" },
};

// Liste des agents. Les compétences sont dans l'ordre des touches C, Q, E, X.
const AGENTS = [
  /* ---------- DUELLISTES ---------- */
  {
    name: "Jett", role: "duelliste", origin: "Corée du Sud",
    id: "add6443a-41bd-e414-f6ad-e58d267f4e95",
    bio: "Agile et insaisissable, Jett mise tout sur la mobilité. Elle prend des risques que personne d'autre n'oserait prendre et s'échappe toujours avant que l'ennemi ne réagisse.",
    abilities: [
      ["Cloudburst", "Lance un nuage de fumée qui bloque brièvement la vision. On peut courber sa trajectoire en maintenant la touche."],
      ["Updraft", "Propulse instantanément Jett dans les airs pour atteindre des positions en hauteur."],
      ["Tailwind", "Signature : après une courte préparation, Jett fonce dans la direction de son déplacement."],
      ["Blade Storm", "Équipe des couteaux de lancer précis. Une élimination recharge tous les couteaux."],
    ],
  },
  {
    name: "Phoenix", role: "duelliste", origin: "Royaume-Uni",
    id: "eb93336a-449b-9c1b-0a54-a891f7921d69",
    bio: "Phoenix manie le feu avec un style flamboyant. Ses flammes le soignent, et il peut même revenir à la vie grâce à son ultime.",
    abilities: [
      ["Blaze", "Crée un mur de flammes qui bloque la vision et blesse ceux qui le traversent… mais soigne Phoenix."],
      ["Curveball", "Lance un orbe aveuglant qui tourne à gauche ou à droite avant d'exploser."],
      ["Hot Hands", "Signature : lance une boule de feu qui crée une zone de flammes au sol. Elle soigne Phoenix."],
      ["Run It Back", "Place un marqueur. S'il meurt pendant la durée de l'ultime, Phoenix réapparaît au marqueur avec toute sa vie."],
    ],
  },
  {
    name: "Reyna", role: "duelliste", origin: "Mexique",
    id: "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
    bio: "Reyna se nourrit des âmes de ses ennemis. Plus elle élimine, plus elle devient forte : elle est la duelliste la plus égoïste et la plus redoutable en un contre un.",
    abilities: [
      ["Leer", "Lance un œil fragile qui aveugle les ennemis qui le regardent."],
      ["Devour", "Absorbe l'âme d'un ennemi éliminé pour se soigner rapidement."],
      ["Dismiss", "Signature : consomme une âme pour devenir intangible pendant un court instant."],
      ["Empress", "Entre dans une frénésie : cadence de tir augmentée et Devour/Dismiss gratuits à chaque élimination."],
    ],
  },
  {
    name: "Raze", role: "duelliste", origin: "Brésil",
    id: "f94c3b30-42be-e959-889c-5aa313dba261",
    bio: "Raze adore les explosions. Elle déloge les ennemis de leurs cachettes avec ses explosifs et finit le travail avec son lance-roquettes.",
    abilities: [
      ["Boom Bot", "Déploie un petit robot qui fonce en ligne droite et explose sur le premier ennemi repéré."],
      ["Blast Pack", "Lance une charge collante. En la faisant exploser, Raze peut se propulser très loin."],
      ["Paint Shells", "Signature : grenade à fragmentation qui libère de petites sous-munitions."],
      ["Showstopper", "Sort un lance-roquettes : un seul tir qui inflige d'énormes dégâts de zone."],
    ],
  },
  {
    name: "Yoru", role: "duelliste", origin: "Japon",
    id: "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
    bio: "Yoru déchire la réalité pour tromper ses adversaires. Faux pas, téléportations et passage dans une autre dimension : il est le roi de la feinte.",
    abilities: [
      ["Fakeout", "Envoie un écho qui imite les pas de Yoru. S'il est touché, il aveugle les ennemis proches."],
      ["Blindside", "Lance un fragment qui rebondit sur un mur puis explose en aveuglant ceux qui le regardent."],
      ["Gatecrash", "Signature : envoie une faille qui avance. Yoru peut s'y téléporter à tout moment."],
      ["Dimensional Drift", "Passe dans une autre dimension : invisible et invulnérable, il peut se repositionner librement."],
    ],
  },
  {
    name: "Neon", role: "duelliste", origin: "Philippines",
    id: "bb2a4828-46eb-8cd1-e765-15848195d751",
    bio: "Neon canalise l'électricité pour courir à une vitesse folle. Elle surprend ses adversaires en arrivant avant même qu'ils ne l'entendent.",
    abilities: [
      ["Fast Lane", "Projette deux murs électriques parallèles qui bloquent la vision et blessent ceux qui les traversent."],
      ["Relay Bolt", "Lance un éclair qui rebondit une fois et étourdit les ennemis dans la zone d'impact."],
      ["High Gear", "Signature : Neon sprinte à grande vitesse. Elle peut aussi effectuer une glissade."],
      ["Overdrive", "Tire un rayon électrique mortel très précis pendant qu'elle court."],
    ],
  },
  {
    name: "Iso", role: "duelliste", origin: "Chine",
    id: "0e38b510-41a8-5780-5e8f-568b2a4f2d6c",
    bio: "Iso est un assassin méthodique. Il se protège avec un bouclier d'énergie et peut forcer un adversaire à un duel à mort dans une autre dimension.",
    abilities: [
      ["Contingency", "Pousse devant lui un mur indestructible qui bloque les balles."],
      ["Undercut", "Lance un éclair qui traverse les murs et rend les ennemis touchés vulnérables."],
      ["Double Tap", "Signature : après une élimination, un orbe apparaît. Le toucher donne un bouclier qui bloque un tir."],
      ["Kill Contract", "Entraîne Iso et un ennemi dans une arène pour un duel en un contre un."],
    ],
  },
  {
    name: "Waylay", role: "duelliste", origin: "Thaïlande",
    id: "df1cb487-4902-002e-5c17-d28e83e78588",
    bio: "Waylay se déplace à la vitesse de la lumière. Elle entre sur un site en un éclair et peut revenir à sa position de départ pour s'échapper.",
    abilities: [
      ["Saturate", "Lance un explosif de lumière qui entrave les ennemis touchés (ils deviennent lents)."],
      ["Lightspeed", "Waylay fonce à toute vitesse en un ou deux élans. Elle peut tirer pendant ce temps."],
      ["Refract", "Signature : place une balise et peut s'y téléporter, en devenant intouchable pendant le trajet."],
      ["Convergent Paths", "Crée une onde de lumière qui ralentit fortement les ennemis tout en accélérant Waylay."],
    ],
  },

  /* ---------- INITIATEURS ---------- */
  {
    name: "Sova", role: "initiateur", origin: "Russie",
    id: "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
    bio: "Sova est un chasseur-éclaireur. Avec son arc et son drone, il traque les ennemis et révèle leurs positions à toute l'équipe.",
    abilities: [
      ["Owl Drone", "Pilote un drone qui peut tirer une fléchette pour révéler l'ennemi touché."],
      ["Shock Bolt", "Tire une flèche électrique qui explose à l'impact et inflige des dégâts."],
      ["Recon Bolt", "Signature : tire une flèche-sonar qui révèle les ennemis qu'elle voit."],
      ["Hunter's Fury", "Tire jusqu'à trois rayons d'énergie qui traversent les murs et révèlent les ennemis touchés."],
    ],
  },
  {
    name: "Breach", role: "initiateur", origin: "Suède",
    id: "5f8d3a7f-467b-97f3-062c-13acf203c006",
    bio: "Breach possède des bras bioniques capables de lancer des ondes de choc à travers les murs. Il ouvre la voie de manière brutale.",
    abilities: [
      ["Aftershock", "Envoie une charge à travers un mur qui explose en trois salves de dégâts."],
      ["Flashpoint", "Envoie un flash à travers un mur qui aveugle tous ceux qui le regardent."],
      ["Fault Line", "Signature : crée une onde sismique qui étourdit tous les ennemis sur une longue ligne."],
      ["Rolling Thunder", "Déclenche un énorme séisme en cône qui étourdit et projette tous les ennemis en l'air."],
    ],
  },
  {
    name: "Skye", role: "initiateur", origin: "Australie",
    id: "6f2a04ca-43e0-be17-7f36-b3908627744d",
    bio: "Skye s'appuie sur des créatures de la nature pour repérer et aveugler ses ennemis, tout en soignant ses alliés.",
    abilities: [
      ["Regrowth", "Soigne les alliés à portée tant que Skye canalise le soin."],
      ["Trailblazer", "Contrôle un tigre de Tasmanie qui peut bondir et étourdir les ennemis."],
      ["Guiding Light", "Signature : lance un faucon qu'elle peut transformer en flash aveuglant."],
      ["Seekers", "Envoie trois traqueurs qui chassent les trois ennemis les plus proches et les assourdissent."],
    ],
  },
  {
    name: "KAY/O", role: "initiateur", origin: "Terre alternative",
    id: "601dbbe7-43ce-be57-2a40-4abd24953621",
    bio: "KAY/O est un robot de guerre conçu pour neutraliser les pouvoirs. Il peut empêcher les ennemis d'utiliser leurs compétences.",
    abilities: [
      ["FRAG/ment", "Lance une grenade qui colle au sol et explose plusieurs fois."],
      ["FLASH/drive", "Lance une grenade flash. Un clic droit la fait exploser plus vite."],
      ["ZERO/point", "Signature : lance une lame qui supprime les compétences de tous les ennemis dans la zone."],
      ["NULL/cmd", "Émet une énorme onde de suppression. S'il est abattu, ses alliés peuvent le relever."],
    ],
  },
  {
    name: "Fade", role: "initiateur", origin: "Turquie",
    id: "dade69b4-4f5a-8528-247b-219e5a1facd6",
    bio: "Chasseuse de primes, Fade utilise les cauchemars de ses ennemis pour les traquer et dévoiler leurs plus grandes peurs.",
    abilities: [
      ["Prowler", "Envoie une créature qui suit les traces et aveugle le premier ennemi rencontré."],
      ["Seize", "Lance un orbe qui emprisonne les ennemis : ils ne peuvent plus fuir et deviennent sourds."],
      ["Haunt", "Signature : lance un œil qui révèle les ennemis qu'il voit et les marque d'une trace."],
      ["Nightfall", "Projette une vague de cauchemar qui marque, assourdit et affaiblit les ennemis touchés."],
    ],
  },
  {
    name: "Gekko", role: "initiateur", origin: "États-Unis",
    id: "e370fa57-4757-3604-3648-499e1f642d3f",
    bio: "Gekko est accompagné d'une bande de petites créatures. Il peut les récupérer après usage pour les réutiliser.",
    abilities: [
      ["Mosh Pit", "Lance Mosh qui s'étale en flaque puis explose en infligeant de lourds dégâts."],
      ["Wingman", "Envoie Wingman étourdir l'ennemi le plus proche… ou poser / désamorcer le Spike à sa place."],
      ["Dizzy", "Signature : Dizzy s'envole et tire des projectiles qui aveuglent les ennemis."],
      ["Thrash", "Contrôle Thrash qui bondit sur les ennemis et les immobilise sur place."],
    ],
  },
  {
    name: "Tejo", role: "initiateur", origin: "Colombie",
    id: "b444168c-4e35-8076-db47-ef9bf368f384",
    bio: "Vétéran expérimenté, Tejo utilise un arsenal de missiles guidés et de drones pour pilonner l'ennemi à distance.",
    abilities: [
      ["Stealth Drone", "Envoie un drone furtif qui peut révéler et ralentir les ennemis."],
      ["Special Delivery", "Lance une grenade collante qui étourdit les ennemis à l'endroit de l'impact."],
      ["Guided Salvo", "Signature : choisit jusqu'à deux cibles sur une carte et y envoie des missiles."],
      ["Armageddon", "Déclenche une frappe aérienne massive le long d'une zone choisie sur la carte."],
    ],
  },

  /* ---------- CONTRÔLEURS ---------- */
  {
    name: "Brimstone", role: "controleur", origin: "États-Unis",
    id: "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
    bio: "Ancien militaire et chef des opérations, Brimstone dispose d'un bracelet tactique qui lui permet d'appeler des frappes orbitales.",
    abilities: [
      ["Stim Beacon", "Pose une balise qui accélère la cadence de tir et la vitesse des alliés proches."],
      ["Incendiary", "Lance une grenade incendiaire qui crée une zone de feu au sol."],
      ["Sky Smoke", "Signature : choisit jusqu'à trois emplacements sur la carte pour y faire tomber des fumées."],
      ["Orbital Strike", "Déclenche un laser orbital dévastateur sur une zone choisie de la carte."],
    ],
  },
  {
    name: "Omen", role: "controleur", origin: "Inconnue",
    id: "8e253930-4c05-31dd-1b6c-968525494517",
    bio: "Fantôme d'un souvenir, Omen chasse dans les ombres. Il aveugle ses ennemis et se téléporte n'importe où sur la carte.",
    abilities: [
      ["Shrouded Step", "Se téléporte sur une courte distance à l'endroit visé."],
      ["Paranoia", "Envoie une ombre qui traverse les murs et rend aveugles et sourds les ennemis touchés."],
      ["Dark Cover", "Signature : lance une sphère d'ombre qui crée une fumée là où il le souhaite, même à travers les murs."],
      ["From the Shadows", "Se téléporte n'importe où sur la carte. Il peut annuler pendant la transformation."],
    ],
  },
  {
    name: "Viper", role: "controleur", origin: "États-Unis",
    id: "707eab51-4836-f488-046a-cda6bf494859",
    bio: "Chimiste américaine, Viper utilise des produits toxiques pour contrôler le terrain et affaiblir quiconque ose s'approcher.",
    abilities: [
      ["Snake Bite", "Lance une fiole d'acide qui crée une zone toxique infligeant des dégâts."],
      ["Poison Cloud", "Pose un émetteur qui libère un nuage de gaz toxique. Il peut être activé ou désactivé."],
      ["Toxic Screen", "Signature : déploie une longue ligne d'émetteurs qui crée un mur de gaz toxique."],
      ["Viper's Pit", "Crée un énorme nuage toxique autour d'elle qui réduit la vision des ennemis."],
    ],
  },
  {
    name: "Astra", role: "controleur", origin: "Ghana",
    id: "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
    bio: "Astra puise dans l'énergie du cosmos. Elle place des étoiles sur toute la carte depuis sa forme astrale pour contrôler le champ de bataille.",
    abilities: [
      ["Gravity Well", "Active une étoile qui aspire les ennemis vers son centre puis les rend vulnérables."],
      ["Nova Pulse", "Active une étoile qui explose après un court délai et étourdit les ennemis."],
      ["Nebula", "Signature : transforme une étoile en nuage de fumée. Elle peut récupérer ses étoiles."],
      ["Cosmic Divide", "Crée un mur infini qui bloque les balles et étouffe les sons sur toute la carte."],
    ],
  },
  {
    name: "Harbor", role: "controleur", origin: "Inde",
    id: "95b78ed7-4637-86d9-7e41-71ba8c293152",
    bio: "Harbor contrôle l'eau grâce à un ancien artefact. Il crée des murs et des boucliers d'eau pour protéger son équipe.",
    abilities: [
      ["Cascade", "Envoie une vague d'eau qui traverse les murs et ralentit les joueurs touchés."],
      ["Cove", "Lance une sphère d'eau qui bloque la vision et protège des balles."],
      ["High Tide", "Signature : dirige un long mur d'eau qui ralentit les joueurs qui le traversent."],
      ["Reckoning", "Fait jaillir des geysers sous les ennemis dans une grande zone pour les étourdir."],
    ],
  },
  {
    name: "Clove", role: "controleur", origin: "Écosse",
    id: "1dbf2edd-4729-0984-3115-daa5eed44993",
    bio: "Clove est une contrôleuse immortelle et malicieuse. Elle continue d'aider son équipe même après sa mort.",
    abilities: [
      ["Pick-Me-Up", "Absorbe l'énergie d'un ennemi tué pour gagner de la vitesse et des PV temporaires."],
      ["Meddle", "Lance un fragment qui rend les ennemis touchés fragiles (ils subissent plus de dégâts)."],
      ["Ruse", "Signature : place des fumées sur la carte, même après sa mort."],
      ["Not Dead Yet", "Après sa mort, Clove revient à la vie. Elle doit faire une élimination rapidement pour rester en vie."],
    ],
  },

  /* ---------- SENTINELLES ---------- */
  {
    name: "Sage", role: "sentinelle", origin: "Chine",
    id: "569fdd95-4d10-43ab-ca70-79becc718b46",
    bio: "Sage est le pilier de l'équipe. Elle soigne ses alliés, ralentit les ennemis et peut même ressusciter un coéquipier tombé au combat.",
    abilities: [
      ["Barrier Orb", "Crée un grand mur de glace solide qui bloque le passage."],
      ["Slow Orb", "Lance un orbe qui crée une zone de glace ralentissant tous les joueurs."],
      ["Healing Orb", "Signature : soigne un allié ou elle-même au fil du temps."],
      ["Resurrection", "Ressuscite un allié mort avec toute sa vie."],
    ],
  },
  {
    name: "Cypher", role: "sentinelle", origin: "Maroc",
    id: "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
    bio: "Cypher est un marchand d'informations. Avec ses pièges et sa caméra, rien ne lui échappe : il sait toujours où se trouvent ses ennemis.",
    abilities: [
      ["Trapwire", "Place un fil piège qui révèle et ralentit l'ennemi qui le déclenche."],
      ["Cyber Cage", "Crée une cage qui bloque la vision et ralentit les ennemis qui la traversent."],
      ["Spycam", "Signature : place une caméra qu'il peut contrôler pour observer et marquer les ennemis."],
      ["Neural Theft", "Sur un ennemi mort, révèle la position de tous les ennemis encore en vie."],
    ],
  },
  {
    name: "Killjoy", role: "sentinelle", origin: "Allemagne",
    id: "1e58de9c-4950-5125-93e9-a0aee9f98746",
    bio: "Inventrice de génie, l'Allemande Killjoy défend les sites grâce à son arsenal de gadgets : tourelle, robots et nanobots.",
    abilities: [
      ["Nanoswarm", "Lance une grenade cachée qui libère, à l'activation, un essaim de nanobots blessants."],
      ["Alarmbot", "Place un robot qui traque les ennemis proches et les rend vulnérables."],
      ["Turret", "Signature : déploie une tourelle qui tire sur les ennemis dans un cône de 180°."],
      ["Lockdown", "Pose un appareil qui, après un délai, immobilise tous les ennemis dans un grand rayon."],
    ],
  },
  {
    name: "Chamber", role: "sentinelle", origin: "France",
    id: "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
    bio: "Élégant concepteur d'armes français, Chamber tient les angles à distance avec ses armes sur mesure et se téléporte pour s'échapper.",
    abilities: [
      ["Trademark", "Place un piège qui ralentit les ennemis qui passent à proximité."],
      ["Headhunter", "Équipe un pistolet lourd très précis, idéal pour les tirs à la tête."],
      ["Rendezvous", "Signature : place une ancre de téléportation pour s'y replier instantanément."],
      ["Tour de Force", "Sort un fusil de précision qui tue en une balle et ralentit les ennemis autour de la victime."],
    ],
  },
  {
    name: "Deadlock", role: "sentinelle", origin: "Norvège",
    id: "cc8b64c8-4b25-4ff9-6e7f-37b4da43d235",
    bio: "Agente des forces spéciales norvégiennes, Deadlock utilise une nanotechnologie de pointe pour verrouiller une zone.",
    abilities: [
      ["GravNet", "Lance une grenade qui force les ennemis touchés à s'accroupir et à se déplacer lentement."],
      ["Sonic Sensor", "Place un capteur qui étourdit les ennemis s'ils font du bruit à proximité."],
      ["Barrier Mesh", "Signature : lance un disque qui crée des murs en croix qui bloquent le passage."],
      ["Annihilation", "Lance un nano-filet qui capture un ennemi et le traîne. S'il n'est pas libéré, il meurt."],
    ],
  },
  {
    name: "Vyse", role: "sentinelle", origin: "Inconnue",
    id: "efba5359-4016-a1e5-7626-b1ae76895940",
    bio: "Vyse manipule le métal liquide pour créer des pièges mortels. Elle isole ses ennemis et les prend au piège sans pitié.",
    abilities: [
      ["Razorvine", "Place des lianes de métal qui ralentissent et blessent les ennemis qui les traversent."],
      ["Shear", "Pose un mur invisible qui se dresse derrière le premier ennemi qui passe, pour l'isoler."],
      ["Arc Rose", "Signature : place une rose de métal qui aveugle les ennemis qui la regardent."],
      ["Steel Garden", "Fait jaillir des épines de métal qui empêchent les ennemis d'utiliser leur arme principale."],
    ],
  },
];

/* =========================================================
   1. GÉNÉRATION DES CARTES D'AGENTS
   ========================================================= */
const grid = document.getElementById("agents-grid");
const KEYS = ["C", "Q", "E", "X"];

// Met un texte en minuscules, sans accents ni ponctuation ("KAY/O" → "kayo")
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")                 // "é" devient "e" + accent séparé
    .replace(/[^a-z0-9]/g, "");       // on retire accents et ponctuation
}

function createCard(agent, index) {
  const role = ROLES[agent.role];
  const card = document.createElement("button");
  card.type = "button";
  card.className = "agent-card";
  card.dataset.role = agent.role;
  card.dataset.name = normalize(agent.name);
  card.style.setProperty("--c", role.color);
  card.style.animationDelay = `${index * 0.03}s`;

  // Un <button> ne peut contenir que des éléments "en ligne" : on utilise des <span>
  card.innerHTML = `
    <span class="agent-visual">
      <span class="letter" aria-hidden="true">${agent.name[0]}</span>
      <img src="${IMG_URL}${agent.id}/displayicon.png" alt="" loading="lazy">
    </span>
    <span class="agent-body">
      <span class="role-tag">${role.label}</span>
      <span class="agent-name">${agent.name}</span>
      <span class="more">Voir les compétences →</span>
    </span>
  `;

  // Si l'image ne charge pas, on la cache : l'initiale reste visible
  card.querySelector("img").addEventListener("error", (e) => {
    e.target.style.display = "none";
  });

  card.addEventListener("click", () => openModal(agent));
  return card;
}

AGENTS.forEach((agent, i) => grid.appendChild(createCard(agent, i)));
document.getElementById("agent-count").textContent = AGENTS.length;

/* =========================================================
   2. FILTRES PAR RÔLE + RECHERCHE
   ========================================================= */
const filterButtons = document.querySelectorAll(".filter");
const searchInput = document.getElementById("search");
const noResult = document.getElementById("no-result");
let currentRole = "all";

function applyFilters() {
  const text = normalize(searchInput.value);
  let visible = 0;

  grid.querySelectorAll(".agent-card").forEach((card) => {
    const okRole = currentRole === "all" || card.dataset.role === currentRole;
    const okText = card.dataset.name.includes(text);
    const show = okRole && okText;
    card.style.display = show ? "" : "none";
    if (show) {
      // Délai recalculé pour que les cartes affichées apparaissent en cascade
      card.style.animationDelay = `${visible * 0.03}s`;
      visible++;
    }
  });

  noResult.classList.toggle("show", visible === 0);
}

function setRole(roleName) {
  currentRole = roleName;
  filterButtons.forEach((b) => {
    const active = b.dataset.role === roleName;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", active);
  });
  applyFilters();
}

filterButtons.forEach((btn) => {
  // Affiche le nombre d'agents à côté de chaque filtre
  const count = btn.dataset.role === "all"
    ? AGENTS.length
    : AGENTS.filter((a) => a.role === btn.dataset.role).length;
  btn.insertAdjacentHTML("beforeend", `<span class="count">${count}</span>`);

  btn.addEventListener("click", () => setRole(btn.dataset.role));
});

searchInput.addEventListener("input", applyFilters);

// Les liens "Voir les duellistes →" de la section Rôles appliquent le filtre
document.querySelectorAll(".role-link").forEach((link) =>
  link.addEventListener("click", () => {
    searchInput.value = "";
    setRole(link.dataset.role);
  })
);

/* =========================================================
   3. FENÊTRE DÉTAIL (MODAL)
   ========================================================= */
const modal = document.getElementById("modal");
const modalBox = modal.querySelector(".modal-box");
const modalImg = document.getElementById("modal-img");
const modalClose = modal.querySelector(".modal-close");
let lastFocused = null; // élément à re-sélectionner à la fermeture

function openModal(agent) {
  lastFocused = document.activeElement;
  const role = ROLES[agent.role];
  modalBox.style.setProperty("--c", role.color);

  document.getElementById("modal-name").textContent = agent.name;
  document.getElementById("modal-bigname").textContent = agent.name;
  document.getElementById("modal-role").textContent = role.label;
  document.getElementById("modal-origin").textContent = "Origine : " + agent.origin;
  document.getElementById("modal-bio").textContent = agent.bio;

  // On vide l'image d'abord pour ne pas voir l'agent précédent pendant le chargement
  modalImg.removeAttribute("src");
  modalImg.style.display = "";
  modalImg.src = `${IMG_URL}${agent.id}/fullportrait.png`;
  modalImg.alt = agent.name;

  document.getElementById("modal-abilities").innerHTML = agent.abilities
    .map(([name, desc], i) => `
      <li class="${i === 3 ? "ult" : ""}">
        <span class="key">${KEYS[i]}</span>
        <div>
          <strong>${name}${i === 3 ? "<small>Ultime</small>" : i === 2 ? "<small>Signature</small>" : ""}</strong>
          <p>${desc}</p>
        </div>
      </li>`)
    .join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  modal.querySelector(".modal-info").scrollTop = 0;
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (lastFocused) lastFocused.focus();
}

modalImg.addEventListener("error", () => (modalImg.style.display = "none"));
modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  // Le seul élément cliquable de la fenêtre est le bouton fermer :
  // on y garde le focus pour que Tab ne parte pas dans la page derrière
  if (e.key === "Tab") {
    e.preventDefault();
    modalClose.focus();
  }
});

/* =========================================================
   4. EN-TÊTE, MENU MOBILE ET LIEN ACTIF
   ========================================================= */
const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a");
const sections = document.querySelectorAll("section[id]");

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 40);

  // Met en surbrillance le lien de la section visible
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 150) current = s.id;
  });
  navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll(); // état correct même si la page est rechargée au milieu

function setMenu(open) {
  burger.classList.toggle("open", open);
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  document.body.classList.toggle("no-scroll", open);
}

burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
navLinks.forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Ferme le menu mobile avec Échap ou en cliquant à côté
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) setMenu(false);
});
document.addEventListener("click", (e) => {
  if (nav.classList.contains("open") && !nav.contains(e.target) && !burger.contains(e.target)) {
    setMenu(false);
  }
});

/* =========================================================
   5. APPARITION DES ÉLÉMENTS AU DÉFILEMENT
   ========================================================= */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => {
  // Petit décalage entre les cartes d'une même grille pour un effet de cascade
  const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
  el.style.animationDelay = `${(siblings.indexOf(el) % 4) * 0.08}s`;
  observer.observe(el);
});
