const superheroes = [
  {
    id: 1,
    name: "A-Bomb",
    slug: "1-a-bomb",
    powerstats: {
      intelligence: 38,
      strength: 100,
      speed: 17,
      durability: 80,
      power: 24,
      combat: 64,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'8", "203 cm"],
      weight: ["980 lb", "441 kg"],
      eyeColor: "Yellow",
      hairColor: "No Hair",
    },
    biography: {
      fullName: "Richard Milhouse Jones",
      alterEgos: "No alter egos found.",
      aliases: ["Rick Jones"],
      placeOfBirth: "Scarsdale, Arizona",
      firstAppearance: "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Musician, adventurer, author; formerly talk show host",
      base: "-",
    },
    connections: {
      groupAffiliation:
        "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
      relatives:
        "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg",

    },
  },
  {
    id: 2,
    name: "Adam Strange",
    slug: "8-adam-strange",
    powerstats: {
      intelligence: 69,
      strength: 10,
      speed: 33,
      durability: 40,
      power: 37,
      combat: 50,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["195 lb", "88 kg"],
      eyeColor: "Blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Adam Strange",
      alterEgos: "No alter egos found.",
      aliases: ["Warrior of Two Worlds", "Savior of Rann"],
      placeOfBirth: "Chicago, Illinois",
      firstAppearance: "Outsiders #6 (April, 1986)",
      publisher: "DC Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer, archaelogist, ambassador",
      base: "Rann, Alpha Centauri System",
    },
    connections: {
      groupAffiliation:
        "Omega Men, L.E.G.I.O.N., R.E.B.E.L.S., formerly Seven Soldiers of Victory",
      relatives:
        "Alanna Strange (wife); Aleea Strange (daughter); Sardath (father-in-law); Janey Strange (sister); Todd Strange (brother, deceased); Bantteir (mother-in-law); Adam Strange II (descendent)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/8-adam-strange.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/8-adam-strange.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/8-adam-strange.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/8-adam-strange.jpg",
    },
  },
  {
    id: 3,
    name: "Agent Bob",
    slug: "10-agent-bob",
    powerstats: {
      intelligence: 10,
      strength: 8,
      speed: 13,
      durability: 5,
      power: 5,
      combat: 20,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["181 lb", "81 kg"],
      eyeColor: "Brown",
      hairColor: "Brown",
    },
    biography: {
      fullName: "Bob",
      alterEgos: "No alter egos found.",
      aliases: ["Bob", "agent of Hydra", "Bob", "agent of A.I.M"],
      placeOfBirth: "-",
      firstAppearance: "Cable & Deadpool #38 (May, 2007)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Mercenary, janitor; former pirate, terrorist",
      base: "Mobile; formerly Manhattan, Hellcarrier",
    },
    connections: {
      groupAffiliation: "A.I.M., Deadpool; formerly Agency X, Hydra",
      relatives: "Allison (ex-wife); Terry and Howie (sons)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/10-agent-bob.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/10-agent-bob.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/10-agent-bob.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/10-agent-bob.jpg",

    },
  },
  {
    id: 4,
    name: "Agent Zero",
    slug: "11-agent-zero",
    powerstats: {
      intelligence: 75,
      strength: 28,
      speed: 38,
      durability: 80,
      power: 72,
      combat: 95,
    },
    appearance: {
      gender: "Male",
      race: null,
      height: ["6'3", "191 cm"],
      weight: ["230 lb", "104 kg"],
      eyeColor: "-",
      hairColor: "-",
    },
    biography: {
      fullName: "Christoph Nord",
      alterEgos: "No alter egos found.",
      aliases: ["Maverick"],
      placeOfBirth: "Unrevealed location in former East Germany",
      firstAppearance: "-",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Mercenary, former government operative, freedom fighter",
      base: "-",
    },
    connections: {
      groupAffiliation:
        "Formerly Weapon X, Weapon Plus, Team X, Cell Six, former bodyguard of Psi-Borg, former agent of Major Barrington",
      relatives:
        "Unidentified parents (deceased), Andreas Nord (brother, deceased), Ginetta Lucia Barsalini (wife, deceased), unnamed child (deceased)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/11-agent-zero.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/11-agent-zero.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/11-agent-zero.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/11-agent-zero.jpg",

    },
  },
  {
    id: 5,
    name: "Air-Walker",
    slug: "12-air-walker",
    powerstats: {
      intelligence: 50,
      strength: 85,
      speed: 100,
      durability: 85,
      power: 100,
      combat: 40,
    },
    appearance: {
      gender: "Male",
      race: null,
      height: ["6'2", "188 cm"],
      weight: ["240 lb", "108 kg"],
      eyeColor: "Blue",
      hairColor: "White",
    },
    biography: {
      fullName: "Gabriel Lan",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "Xandar, a planet in the Tranta system, Andromeda galaxy",
      firstAppearance: "Fantastic Four #120",
      publisher: "Marvel Comics",
      alignment: "bad",
    },
    work: {
      occupation: "Former starship captain, Herald of Galactus",
      base: "-",
    },
    connections: {
      groupAffiliation: "Former member of Nova Corps, Heralds of Galactus",
      relatives: "-",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/12-air-walker.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/12-air-walker.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/12-air-walker.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/12-air-walker.jpg",

    },
  },
  {
    id: 6,
    name: "Alien",
    slug: "18-alien",
    powerstats: {
      intelligence: 50,
      strength: 28,
      speed: 42,
      durability: 90,
      power: 57,
      combat: 60,
    },
    appearance: {
      gender: "Male",
      race: "Xenomorph XX121",
      height: ["8'0", "244 cm"],
      weight: ["375 lb", "169 kg"],
      eyeColor: "-",
      hairColor: "No Hair",
    },
    biography: {
      fullName: "Xenomorph",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "Your chest :)",
      firstAppearance: "Alien (1979)",
      publisher: "Dark Horse Comics",
      alignment: "bad",
    },
    work: {
      occupation: "-",
      base: "-",
    },
    connections: {
      groupAffiliation: "-",
      relatives: "Alien Queen (mother)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/18-alien.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/18-alien.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/18-alien.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/18-alien.jpg",

    },
  },

];

// function createCard(superhero) {
//   const card = document.createElement('div');
//   card.classList.add('card');

//   card.innerHTML = `
//       <h2>${superhero.name}</h2>
//       <img src="${superhero.images.md}" alt="${superhero.name}">
//       <p>Eye Color: ${superhero.appearance.eyeColor}</p>
//       <p>Hair Color: ${superhero.appearance.hairColor}</p>
//       <p>Full Name: ${superhero.biography.fullName}</p>
//       <p>Alter Egos: ${superhero.biography.alterEgos}</p>
//       <p>First Appearance: ${superhero.biography.firstAppearance}</p>
//       <p>Group Affiliation: ${superhero.connections.groupAffiliation}</p>
//       <p>Relatives: ${superhero.connections.relatives}</p>
//       ${createProgressBars(superhero.powerstats)}
//   `;

//   return card;
// }

// function createProgressBars(powerstats) {
//   return Object.keys(powerstats).map(stat => `
//       <div>
//           <label>${stat.charAt(0).toUpperCase() + stat.slice(1)}</label>
//           <div class="progress-bar" style="width: ${powerstats[stat]}%"></div>
//       </div>
//   `).join('');
// }

// function displaySuperheroes(superheroes) {
//   const container = document.getElementById('card-container');
//   container.innerHTML = '';
//   superheroes.forEach(superhero => {
//       container.appendChild(createCard(superhero));
//   });
// }



displaySuperheroes(superheroes);
