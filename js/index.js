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

// Footer links
const footerNav = document.querySelector("#footer-nav");
FOOTER_LINKS.forEach((item) => {
  const navGroup = document.createElement("div");
  navGroup.classList.add("nav-group");

  navGroup.innerHTML = `
  <div class="group-heading">${item.heading}</div>
  <ul>
    ${item.items
      .map(
        (link) => `
        <li>
          <a href="#">${link}</a>
        </li>
      `
      )
      .join(" ")}
  </ul>
  `;

  footerNav.appendChild(navGroup);
});

const PRIVACY_SVG_PATH = `
<title>Your Privacy Choices Opt-Out Icon</title>
<path
  d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
  style="fill-rule: evenodd; clip-rule: evenodd; fill: #fff">
</path>
<path
  d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
  style="fill-rule: evenodd; clip-rule: evenodd; fill: #06f">
</path>
<path
  d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
  style="fill: #fff">
  </path>
<path
  d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
  style="fill: #06f">
</path>
`;

const privacySvg = document.querySelector("#privacy-icon");

privacySvg.innerHTML = PRIVACY_SVG_PATH;
