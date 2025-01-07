/**
 * STORY CARDS
 * ----------------------------------------------
 * image: string;
 * authorImage: string;
 * quote: string;
 * products: { icon: string; label: string; }[]
 */

let TRIGGER_ID = "story-card";

let data = {
  image: "",
  authorImage: "",
  quote: "",
  products: [],
};

let card = document.querySelector("#carousel-occf87-0");

data.image = card.querySelector(".testimonial-card__media img").src;
data.authorImage = card.querySelector(
  ".testimonial-card__content-media img"
).src;

data.quote = card.querySelector(
  ".testimonial-card__content span.d-block.h4"
).innerHTML;

data.products = Array.from(
  card.querySelectorAll(".testimonial-card__products ul li ")
).map((item) => {
  return {
    icon: item.querySelector(".list-item__leading img").src,
    label: item.querySelector(".list-item__content a.ms-rte-link").innerHTML,
  };
});

/**
 * TAKE THE NEXT STEP
 * --------------------------------
 * title: string;
 * description: string;
 * footerLabel: string;
 */

function getStepCards() {
  const cards = Array.from(
    document.querySelectorAll(
      ".step-cards.three-up-cards .three-up-cards__card .card"
    )
  );

  return cards.map((card) => ({
    title: card.querySelector(".block-feature .block-feature__title h3 span")
      .innerHTML,
    description: card.querySelector(
      ".block-feature .block-feature__paragraph div"
    ).innerHTML,
    footerLabel: card.querySelector(".block-slim .action a .link__text")
      .innerHTML,
  }));
}

/**
 * FOOTER LINKS
 * --------------------------------
 * {
 * heading: string;
 * items: string[]
 * }[]
 */

function getFooterData() {
  const data = Array.from(
    document.querySelectorAll("footer nav .c-uhff-nav-group")
  ).map((el) => {
    const heading = el.querySelector(".c-heading-4").innerHTML;
    const items = Array.from(el.querySelectorAll("ul li a")).map(
      (iel) => iel.innerHTML
    );

    return {
      heading,
      items,
    };
  });

  return JSON.stringify(data);
}
