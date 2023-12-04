// ash-superheroes.netlify.app


// APP DATA
const data = [
  {
    id: "hero1",
    name: "Cheese-man!",
    superpower: "It stinks!",
    weakness: "People!",
    image: "https://th.bing.com/th/id/OIG.oVm9pILUCKlNw50XsEVj?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
    id: "hero2",
    name: "Gianna the Superhero",
    superpower: "Being cool!",
    weakness: "Afraid of Jimmy",
    image: "https://th.bing.com/th/id/OIG.H0o0ZySxmirBCIq1S75R?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
    id: "hero3",
    name: "Cupcake man",
    superpower: "Cupcakes",
    weakness: "Cupcakes",
    image: "https://th.bing.com/th/id/OIG.8WALtYkrUq7kVYRgm0VQ?pid=ImgGn"
  },
  {
    id: "hero4",
    name: "Immune man",
    superpower: "Not killable, healthy, fly, superspeed, invisibility",
    weakness: "Sweets, not healthy",
  },
  {
    id: "hero5",
    name: "Loud Whisperer",
    superpower: "Whispers really loud",
    image: "https://th.bing.com/th/id/OIG._Gx1ghcSzivTI5k.N1nE?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
    id: "hero6",
    name: "Chair Breaker",
    superpower: "Breaks a lot of chairs",
    image: "https://th.bing.com/th/id/OIG.T7.UgM3ELbTcuX4UneJs?pid=ImgGn"
  },
  {
    id: "hero7",
    name: "Super Skibidi",
    superpower: "Skibidi toilet power",
    image: "https://th.bing.com/th/id/OIG.3Se9KVpGmjKsM8DMR5tk?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
    id: "hero8",
    name: "Helene",
    superpower: "Hypnotize",
    image: "https://th.bing.com/th/id/OIG.V5KnGFb.amptluzrf47C?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
    id: "hero9",
    name: "Furryman",
    superpower: "Can transform",
    image: "https://th.bing.com/th/id/OIG.0A_caqRJqXi67NcK6FUR?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
]

// HOME PAGE
const homePage = function() {
  const cardsWrapperElem = document.getElementById('heroes');
  data.forEach(function(card) {
    const cardToBeAdded = document.createElement('button');
    cardToBeAdded.classList.add('card');

    if (card.image) {
      cardToBeAdded.innerHTML = `
        <h2 class="name">${card.name}</h2>
        <div class="imageWrapper">
          <img src="${card.image}" />
        </div>
    `;
    } else {
      cardToBeAdded.innerHTML = `
        <h2 class="name">${card.name}</h2>
        <div class="imageWrapper"></div>
      `;
    }

    cardsWrapperElem.append(cardToBeAdded);

    cardToBeAdded.addEventListener('click', function() {
      window.location.href = `hero.html?id=${card.id}`;
    })
  });
}

// CARD PAGE
const cardPage = function() {
  const params = new URLSearchParams(location.search);
  const heroId = params.get('id');
  const heroData = data.find(function(hero) {
    if (hero.id === heroId) {
      return hero;
    }
  })
  
  const nameElem = document.getElementById('name');
  const superpowerElem = document.getElementById('superpower');
  const bigImageElem = document.getElementById('bigImage');

  nameElem.textContent = heroData.name;
  superpowerElem.textContent = heroData.superpower;
  if (heroData.image) {
    bigImageElem.src = heroData.image;
  } else {
    bigImageElem.parentElement.textContent = '(No image found)';
  }
}

// CHECK WHICH PAGE
if (PAGE === 'home') {
  homePage();
} else if (PAGE === 'hero') {
  cardPage();
}












