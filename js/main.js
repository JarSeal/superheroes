// APP DATA
const data = [
  // {
  //   id: "hero1",
  //   name: "",
  //   superpower: "",
  //   image: ""
  // },
]

// HOME PAGE
const homePage = function() {
  // const cardsWrapperElem = document.getElementById('heroes');
  // data.forEach(function(card) {
  //   const cardToBeAdded = document.createElement('button');
  //   cardToBeAdded.classList.add('card');

  //   if (card.image) {
  //     cardToBeAdded.innerHTML = `
  //       <h2 class="name">${card.name}</h2>
  //       <div class="imageWrapper">
  //         <img src="${card.image}" />
  //       </div>
  //   `;
  //   } else {
  //     cardToBeAdded.innerHTML = `
  //       <h2 class="name">${card.name}</h2>
  //       <div class="imageWrapper"></div>
  //     `;
  //   }

  //   cardsWrapperElem.append(cardToBeAdded);

  //   cardToBeAdded.addEventListener('click', function() {
  //     window.location.href = `hero.html?id=${card.id}`;
  //   })
  // });
}

// CARD PAGE
const cardPage = function() {
  // const params = new URLSearchParams(location.search);
  // const heroId = params.get('id');
  // const heroData = data.find(function(hero) {
  //   if (hero.id === heroId) {
  //     return hero;
  //   }
  // })
  
  // const nameElem = document.getElementById('name');
  // const superpowerElem = document.getElementById('superpower');
  // const bigImageElem = document.getElementById('bigImage');

  // nameElem.textContent = heroData.name;
  // superpowerElem.textContent = heroData.superpower;
  // if (heroData.image) {
  //   bigImageElem.src = heroData.image;
  // } else {
  //   bigImageElem.parentElement.textContent = '(No image found)';
  // }
}

// CHECK WHICH PAGE
if (PAGE === 'home') {
  homePage();
} else if (PAGE === 'hero') {
  cardPage();
}















// {
  //   id: "hero1",
  //   name: "Loud Whisperer",
  //   superpower: "Whispers really loud",
  //   image: "https://th.bing.com/th/id/OIG._Gx1ghcSzivTI5k.N1nE?w=1024&h=1024&rs=1&pid=ImgDetMain"
  // },
  // {
  //   id: "hero2",
  //   name: "Chair Breaker",
  //   superpower: "Breaks a lot of chairs",
  //   image: "https://th.bing.com/th/id/OIG.T7.UgM3ELbTcuX4UneJs?pid=ImgGn"
  // }