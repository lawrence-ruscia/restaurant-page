import heroGraphic from "./assets/images/hero-preview.jpeg";
import cardImg1 from "./assets/images/services1.svg";
import cardImg2 from "./assets/images/services2.svg";
import cardImg3 from "./assets/images/services3.svg";

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

  render() {
    // Append to Hero
    const { hero, textBlock, graphic } = this.#DOMElements;
    hero.append(textBlock, graphic);

    // Append to TextBlock
    const { headline, description, textBlockBtn } = this.#DOMElements;
    textBlock.append(headline, description, textBlockBtn);

    // Append to Graphic
    const { graphicImg } = this.#DOMElements;
    graphic.append(graphicImg);

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

class PopularHandler extends DOMHandler {}

class BookingHandler extends DOMHandler {}

class CustomerHandler extends DOMHandler {}

class HomePage extends DOMHandler {}
