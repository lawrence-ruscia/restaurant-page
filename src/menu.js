import heroImg from "./assets/images/menu-hero.jpeg";
import cardImg1 from "./assets/images/steak.jpeg";
import cardImg2 from "./assets/images/ramen.jpeg";
import cardImg3 from "./assets/images/parfait.jpeg";
import cardImg4 from "./assets/images/katsu-curry.jpeg";
import cardImg5 from "./assets/images/pancake.jpeg";
import cardImg6 from "./assets/images/omurice.jpeg";
import { DOMHandler, PopularHandler } from "./home";

export class MenuPage extends DOMHandler {
  #popularHandler = new PopularHandler();
  #DOMElements = {
    menu: this.createDiv({ id: "menu" }),
    hero: this.createDiv({ classNames: ["menu__hero"] }),
    textBlock: this.createDiv({
      classNames: ["menu__text-block", "text-block"],
    }),
    heroHeadline: this.createHeading({
      headingType: "h1",
      textContent: "Our Magical Menu",
      classNames: ["menu__text-block--headline", "section-headline"],
    }),
    heroDescription: this.createPara({
      textContent:
        "Embark on a culinary journey where every dish tells a story. From hearty meals to delightful desserts, experience the enchantment of our chef's creations.",
      classNames: ["menu__text-block-description", "section-description"],
    }),
    graphic: this.createDiv({
      classNames: ["menu__graphic", "section-graphic"],
    }),
    graphicImg: this.createImg({
      src: heroImg,
      alt: "An image of califer cooking breakfast while eating egg shells",
      classNames: ["menu__graphic-img", "graphic-img"],
    }),

    container: this.createDiv({ classNames: ["menu__container"] }),
    header: this.createDiv({ classNames: ["menu__header", "menu-header"] }),
    caption: this.createDiv({ classNames: ["menu__caption", "menu-caption"] }),
    headline: this.createHeading({
      headingType: "h1",
      textContent: "Most Popular Dishes",
      classNames: ["menu__headline", "section-headline"],
    }),
    description: this.createPara({
      textContent:
        "Discover the dishes our guests can’t stop raving about—crafted with love and a sprinkle of magic.",
      classNames: ["menu__description", "section-description"],
    }),
    cta: this.createButton({
      textContent: "Full Menu",
      classNames: ["menu__btn", "menu-btn", "call-to-action"],
    }),

    cardContainer: this.createDiv({
      classNames: ["menu__card-container", "menu-card-container"],
    }),
    cards: [
      this.#popularHandler.createCard({
        src: cardImg1,
        alt: "A beautifully plated grilled steak with herb butter, served with roasted vegetables.",
        price: "3,500",
        titleText: "Calcifer’s Flame-Grilled Steak",
        descriptionText:
          "Perfectly seared steak infused with smoky, magical flavors straight from Calcifer’s fire.",
        classNames: ["menu__card-item", "menu-card-item"],
      }),
      this.#popularHandler.createCard({
        src: cardImg2,
        alt: "A bowl of vibrant, aromatic ramen topped with soft-boiled eggs, fresh herbs, and a hint of spice.",
        price: "2,400",
        titleText: "Howl’s Enchanted Ramen",
        descriptionText:
          "A rich, flavorful bowl of ramen that warms the soul and ignites your senses.",
        classNames: ["menu__card-item", "menu-card-item"],
      }),
      this.#popularHandler.createCard({
        src: cardImg3,
        alt: "A layered parfait with rich chocolate, coffee cream, and a sprinkle of cocoa powder, served in a tall glass.",
        price: "1,500",
        titleText: "Sophie’s Dreamy Parfait",
        descriptionText:
          "A dreamy dessert blending smooth mocha flavors with indulgent chocolate layers.",
        classNames: ["menu__card-item", "menu-card-item"],
      }),

      this.#popularHandler.createCard({
        src: cardImg4,
        alt: "A plate featuring golden-fried katsu placed over a pool of steaming curry, garnished with bright pickled ginger and parsley, with rice molded neatly alongside.",
        price: "1,800",
        titleText: "Katsu-Curry Supreme",
        descriptionText:
          "Crispy pork cutlet with rich Japanese curry, served with rice and pickled vegetables.",
        classNames: ["menu__card-item", "menu-card-item"],
      }),
      this.#popularHandler.createCard({
        src: cardImg5,
        alt: "A towering stack of golden pancakes with syrup cascading down the sides, crowned with vibrant berries and a dusting of powdered sugar like a magical snowfall.",
        price: "1,200",
        titleText: "Fluffy Cloud Pancakes",
        descriptionText:
          "Airy pancakes topped with whipped cream, berries, and maple syrup.",
        classNames: ["menu__card-item", "menu-card-item"],
      }),
      this.#popularHandler.createCard({
        src: cardImg6,
        alt: "A golden omelet resting over colorful fried rice, with an artistic drizzle of tomato sauce and cream forming a whimsical design.",
        price: "1,400",
        titleText: "Enchanted Omurice",
        descriptionText:
          "A fluffy omelet over fried rice, topped with tomato demi-glace and cream.",
        classNames: ["menu__card-item", "menu-card-item"],
      }),
    ],
  };

  render() {
    const { menu, hero, container } = this.#DOMElements;
    menu.append(hero, container);

    const { textBlock, graphic } = this.#DOMElements;
    hero.append(textBlock, graphic);

    const { heroHeadline, heroDescription, graphicImg } = this.#DOMElements;
    textBlock.append(heroHeadline, heroDescription);
    graphic.append(graphicImg);

    const { header, cardContainer } = this.#DOMElements;
    container.append(header, cardContainer);

    const { caption, headline, description, cta } = this.#DOMElements;
    caption.append(headline, description);
    header.append(caption, cta);

    const { cards } = this.#DOMElements;
    cardContainer.append(...cards);

    return menu;
  }
}
