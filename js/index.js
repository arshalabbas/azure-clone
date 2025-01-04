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

// Stories Carousel

/**
 *
 * @param {string} image Header Image
 * @param {string} authorImage The author image
 * @param {string} quote Testimonial content
 * @param {{ icon: string; label: string }[]} products
 * @returns
 */
const template = (image, authorImage, quote, products) => `
  <div class="story-card-container">
    <div class="story-card">
      <div class="img-header">
        <img
          src=${image}
          alt="story image"
        />
      </div>

      <div class="body">
        <div class="quote">
          <div class="quote-image">
            <img
              src=${authorImage}
              alt="Company Image"
            />
          </div>
          <span class="quote-text">
            ${quote}
          </span>
        </div>

        <div class="footer">
          <div class="products-container">
            <div class="label">Products</div>

            <div class="products">
              <ul>
              ${products
                .map(
                  (item) => `
                <li>
                  <div class="icon-container">
                    <img
                      src=${item.icon}
                      alt="icon"
                    />
                  </div>

                  <a href="#" class="product-link"
                    >${item.label}</a
                  >
                </li>
                `
                )
                .join(" ")}
              </ul>
            </div>
          </div>
          <a href="#" class="btn"><span>Case study</span></a>
        </div>
      </div>
    </div>
  </div>
`;

const storyCarousels = document.querySelector("#story-carousels");

STORIES.forEach((story) => {
  storyCarousels.innerHTML += template(
    story.image,
    story.authorImage,
    story.quote,
    story.products
  );
});

// Steps cards
const stepsCards = document.querySelector("#steps-cards");
STEPS_CARDS.forEach((item) => {
  const stepCard = document.createElement("div");
  stepCard.classList.add("card-padding", "badge-card");

  stepCard.innerHTML = `
  <div class="card-body no-gap">
    <div class="content">
      <h3 class="title-sm">
        ${item.title}
      </h3>
      <p>${item.description}</p>
    </div>

    <div class="action-footer">
      <div id="end-link" data-label="${item.footerLabel}"></div>
    </div>
  </div>
  `;

  stepsCards.appendChild(stepCard);
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

// REVIEW: For testing purposes
let count = 0;

window.addEventListener("scroll", (e) => {
  count++;
  if (count > 10) {
    console.clear();
    count = 0;
  }
  console.log(window.scrollY);
});
