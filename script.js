async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    displayCards(data.posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayCards(posts) {
  cards.innerHTML = "";
  posts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    HTML here     
        `;
    cards.appendChild(card);
  });
}

searchBtn.addEventListener("click", () => {
  const searchText = searchBar.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const name = card.querySelector(".title").textContent.toLowerCase();
    if (name.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

fetchProducts();
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-button");
const cards = document.getElementById("cards-container");

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    displayCards(data.posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayCards(posts) {
  cards.innerHTML = "";
  posts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <p class="title">${post.title}</p>
      <p class="card-body">
      ${post.body.slice(0, 100)} ...
      </p>
      <div class="tags">
      ${post.tags.map((tag) => `<p class="tag">${tag}</p>`).join("")}
      </div>
      <div class="views-likes">
        <div class="likes">
          <div>
            <i class="fa-solid fa-thumbs-up icon green"></i> <span>${
              post.reactions.likes
            }</span>
          </div>
          <div>
            <i class="fa-solid fa-thumbs-down icon red"></i> <span>${
              post.reactions.dislikes
            }</span>
          </div>
        </div>
        <div class="views">
          <i class="fa-solid fa-eye eye-icon"></i>
          <span>${post.views} views</span>
        </div>
      </div>        
        `;
    cards.appendChild(card);
  });
}

searchBtn.addEventListener("click", () => {
  const searchText = searchBar.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const name = card.querySelector(".title").textContent.toLowerCase();
    if (name.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

fetchProducts();
