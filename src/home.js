import heroGraphic from "./assets/images/hero-preview.jpeg";
import cardImg1 from "./assets/images/services1.svg";
import cardImg2 from "./assets/images/services2.svg";
import cardImg3 from "./assets/images/services3.svg";
import popularCardImg1 from "./assets/images/steak.jpeg";
import popularCardImg2 from "./assets/images/ramen.jpeg";
import popularCardImg3 from "./assets/images/parfait.jpeg";

// Mimic Abstract Class
class DOMHandler {
  constructor() {
    if (new.target === DOMHandler) {
      throw new Error("Cannot instantiate an abstract class directly.");
    }
  }

  // Abstract Method
  render() {
    throw new Error("Abstract method must be implemented by subclass.");
  }

  createDiv(...classNames) {
    this.#validateClassNames(classNames);

    const div = document.createElement("div");
    this.#addClassNames(div, classNames);

    return div;
  }

  createHeading(headingType, textContent = "", ...classNames) {
    this.#validateClassNames(classNames);

    const validHeadings = ["h1", "h2", "h3", "h4", "h5", "h6"];
    if (!validHeadings.includes(headingType)) {
      throw new Error(`Invalid heading type: ${headingType}`);
    }

    const heading = document.createElement(headingType);
    heading.textContent = textContent;
    this.#addClassNames(heading, classNames);

    return heading;
  }

  createPara(textContent = "", ...classNames) {
    this.#validateClassNames(classNames);

    const para = document.createElement("p");
    para.textContent = textContent;
    this.#addClassNames(para, classNames);

    return para;
  }

  createButton(textContent = "", ...classNames) {
    this.#validateClassNames(classNames);

    const button = document.createElement("button");
    this.#addClassNames(button, classNames);
    button.textContent = textContent;

    return button;
  }

  createImg(src, alt = "", ...classNames) {
    this.#validateClassNames(classNames);
    this.#validateSrcPath(src);

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    this.#addClassNames(img, classNames);

    return img;
  }

  createAnchor(href = "#", textContent = "", ...classNames) {
    this.#validateClassNames(classNames);

    const a = document.createElement("a");
    this.#addClassNames(a, classNames);
    a.href = href;
    a.textContent = textContent;

    return a;
  }

  #addClassNames(element, classNames) {
    classNames.forEach((className) => element.classList.add(className));
  }

  #validateClassNames(classNames) {
    if (
      !Array.isArray(classNames) ||
      classNames.some((cls) => typeof cls !== "string" || cls.trim() === "")
    ) {
      throw new Error(
        `Invalid class names: ${classNames}. Ensure class names are non-empty strings.`
      );
    }
  }

  #validateSrcPath(src) {
    if (src === null || src === undefined) {
      throw new Error(`Invalid src path: ${src}.`);
    }
  }
}

export class HeroHandler extends DOMHandler {
  #DOMElements = {
    hero: this.createDiv("hero"),
    textBlock: this.createDiv("hero__text-block"),
    headline: this.createHeading(
      "h1",
      "Enchanting Flavors, Inspired by Magic",
      "hero__text-block--headline"
    ),
    description: this.createPara(
      "Step into Howl's Moving Kitchen and savor dishes crafted with heart and a touch of enchanment",
      "hero__text-block--description"
    ),
    textBlockBtn: this.createButton(
      "Explore the Menu",
      "text-block__btn",
      "call-to-action"
    ),
    graphic: this.createDiv("hero__graphic"),
    graphicImg: this.createImg(
      heroGraphic,
      "An image of califer cooking breakfast while eating egg shells",
      "hero__graphic-img"
    ),
  };

  #renderTextBlock(textBlock) {
    const { headline, description, textBlockBtn } = this.#DOMElements;
    textBlock.append(headline, description, textBlockBtn);
  }

  #renderGraphic(graphic) {
    const { graphicImg } = this.#DOMElements;
    graphic.append(graphicImg);
  }

  render() {
    // Append to Hero
    const { hero, textBlock, graphic } = this.#DOMElements;

    this.#renderTextBlock(textBlock);
    this.#renderGraphic(graphic);

    hero.append(textBlock, graphic);

    return hero;
  }
}

export class ServicesHandler extends DOMHandler {
  #DOMElements = {
    services: this.createDiv("our-services"),
    container: this.createDiv("our-services__container"),
    header: this.createDiv("our-services__header"),
    headline: this.createHeading(
      "h1",
      "The Magic of Exceptional Dining",
      "our-services__headline",
      "section-headline"
    ),
    description: this.createPara(
      "Experience cuisine crafted with heart and enchantment, designed to delight every palate.",
      "our-services__description",
      "section-description"
    ),

    cardContainer: this.createDiv("our-services__card-container"),
    cards: [
      this.#createCard(
        cardImg1,
        "Wholesome Feasts",
        "Indulge in hearty, wholesome meals made with the freshest ingredients and a dash of magic."
      ),
      this.#createCard(
        cardImg2,
        "Quick Bites with Charm",
        " Savor quick, flavorful dishes perfect for those on the move, inspired by Calcifer’s fiery touch."
      ),
      this.#createCard(
        cardImg3,
        "Enchanting Brews",
        "Sip on handcrafted teas and coffees, brewed to warm your soul and awaken your senses."
      ),
    ],
  };

  #createCard(ImgSrc, headlineText, descriptionText) {
    const card = this.createDiv("our-services__card-item");
    const img = this.createImg(ImgSrc, "our-services__card-item-img");
    const caption = this.createDiv("our-services__card-item-caption");
    const title = this.createAnchor(
      "#",
      headlineText,
      "our-services__card-item-title"
    );
    const description = this.createPara(
      descriptionText,
      "our-services__card-item-description"
    );

    caption.append(title, description);
    card.append(img, caption);

    return card;
  }

  render() {
    const { services, container, cardContainer } = this.#DOMElements;
    services.append(container, cardContainer);

    const { header, headline, description } = this.#DOMElements;
    header.append(headline, description);
    container.append(header);

    const { cards } = this.#DOMElements;
    cardContainer.append(...cards);

    return services;
  }
}

export class PopularHandler extends DOMHandler {
  #DOMElements = {
    popular: this.createDiv("most-popular"),
    header: this.createDiv("most-popular__header"),
    caption: this.createDiv("most-popular__caption"),
    headline: this.createHeading(
      "h1",
      "Most Popular Dishes",
      "most-popular__headline",
      "section-headline"
    ),
    description: this.createPara(
      "Discover the dishes our guests can’t stop raving about—crafted with love and a sprinkle of magic.",
      "most-popular__description",
      "section-description"
    ),
    menuBtn: this.createButton(
      "Full Menu",
      "most-popular__menu-btn",
      "call-to-action"
    ),
    cardContainer: this.createDiv("most-popular__card-container"),

    cards: [
      this.#createCard(
        popularCardImg1,
        "A beautifully plated grilled steak with herb butter, served with roasted vegetables.",
        "3,500",
        "Calcifer’s Flame-Grilled Steak",
        "Perfectly seared steak infused with smoky, magical flavors straight from Calcifer’s fire."
      ),
      this.#createCard(
        popularCardImg2,
        "A bowl of vibrant, aromatic ramen topped with soft-boiled eggs, fresh herbs, and a hint of spice.",
        "2,400",
        "Howl’s Enchanted Ramen",
        "A rich, flavorful bowl of ramen that warms the soul and ignites your senses."
      ),
      this.#createCard(
        popularCardImg3,
        "A layered parfait with rich chocolate, coffee cream, and a sprinkle of cocoa powder, served in a tall glass.",
        "1,500",
        "Sophie’s Dreamy Parfait",
        "A dreamy dessert blending smooth mocha flavors with indulgent chocolate layers."
      ),
    ],
  };

  #createCard(ImgSrc, ImgAlt, price, titleText, descriptionText) {
    const card = this.createDiv("most-popular__card-item");
    const graphic = this.createDiv("card-item__graphic");
    const img = this.createImg(ImgSrc, ImgAlt, "card-item__img");
    const priceTag = this.createDiv("card-item__price-tag");
    priceTag.textContent = `&#165;${price}`;
    const details = this.createDiv("card-item__details");
    const title = this.createAnchor("#", titleText, "card-item__title");
    const description = this.createPara(
      descriptionText,
      "card-item__description"
    );
    const button = this.createButton("Order Now", "card-item__order-now-btn");

    card.append(graphic, priceTag, details);
    graphic.append(img);
    details.append(title, description, button);

    return card;
  }

  render() {
    const { popular, header, cardContainer } = this.#DOMElements;
    popular.append(header, cardContainer);

    const { caption, headline, description, menuBtn } = this.#DOMElements;
    caption.append(headline, description);
    header.append(caption, menuBtn);

    const { cards } = this.#DOMElements;
    cardContainer.append(...cards);

    return popular;
  }
}

class BookingHandler extends DOMHandler {}

class CustomerHandler extends DOMHandler {}

class HomePage extends DOMHandler {}
