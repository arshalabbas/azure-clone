// Dynamic badge cards
const badgeCardsContainer = document.querySelector("#badge-cards");

BADGE_CARDS.forEach((item) => {
  const badgeCard = document.createElement("div");
  badgeCard.classList.add("card-padding", "badge-card");
  badgeCard.innerHTML = `
    <div class="card-body">
        <div class="badge">
            <img
              src=${item.badge}
              alt="badge"
            />
        </div>

        <div class="content">
            <h3 class="title-sm">${item.title}</h3>
            <p>
              ${item.description}
            </p>
        </div>

        <div class="link link-line">Explore the product</div>
    </div>
  `;

  badgeCardsContainer.appendChild(badgeCard);
});

// End Link
const endLink = document.querySelectorAll("#end-link");
endLink.forEach((item) => {
  item.innerHTML = `
  <a href="#" class="icon-link">
      <span class="btn action-btn">
          <i class="ms-Icon ms-Icon--ChevronRight fluent-icon"></i>
      </span>
      <span class="link">${item.dataset.label}</span>
  </a>
  `;
});
