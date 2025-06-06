function fetchinstrument(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let contenair = document.getElementById("product-contenair");

      let principal = document.getElementById("principal");

      principal.innerHTML += ` 
              <h2>${data.nomEntreprise}</h2>
        <p>${data.accroche}</p>
          <button>
    <i class="fa-solid fa-cart-shopping"></i> ${data.callToAction}
  </button>
            `;

      data.produits.forEach((activities) => {
        let card = document.createElement("div");
        card.classList.add("card");


        let name = document.createElement("h3");
        name.innerHTML = `<i class="fa-solid fa-music"></i> ${activities.nom}`;

        let descript = document.createElement("p");
        descript.textContent = activities.description;

        let image = document.createElement("img");
        image.src = activities["image-url"];

        // card.appendChild(name);
        // card.appendChild(descript);
        let divContent = document.createElement("div");
        divContent.classList.add("divContent");

        divContent.appendChild(name);
        divContent.appendChild(descript);

        card.appendChild(divContent);
        card.appendChild(image);

        contenair.appendChild(card);
      });

      let temoin = document.getElementById("temoin-container");

      data.temoignages.forEach((temoignage) => {
        let carte = document.createElement("div");
        carte.classList.add("temoin-carte");

        let prenom = document.createElement("h4");
        prenom.innerHTML = `<i class="fa-solid fa-user"></i> ${temoignage.prenom}`;

        let commentaire = document.createElement("p");
        commentaire.innerHTML = `<i class="fa-solid fa-comment"></i> ${temoignage.commentaire}`;

        carte.appendChild(prenom);
        carte.appendChild(commentaire);
        temoin.appendChild(carte);
      });
    });
}
fetchinstrument(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/instruments-musique-monde.json"
);
