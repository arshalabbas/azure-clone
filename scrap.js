/**
 * image: string;
 * authorImage: string;
 * quote: string;
 * products: { icon: string; label: string; }[]
 */

const TRIGGER_ID = "story-card";

const data = {
  image: "",
  authorImage: "",
  quote: "",
  products: [],
};

const card = document.querySelector("#carousel-occf87-0");

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
