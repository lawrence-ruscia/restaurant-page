import heroGraphic from "./assets/images/hero-preview.jpeg";

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
    const div = document.createElement("div");
    this.#addClassNames(div, classNames);

    return div;
  }

  createHeading(headingType, textContent, ...classNames) {
    const validHeadings = ["h1", "h2", "h3", "h4", "h5", "h6"];
    if (!validHeadings.includes(headingType)) {
      throw new Error(`Invalid heading type: ${headingType}`);
    }

    const heading = document.createElement(headingType);
    heading.textContent = textContent;
    this.#addClassNames(heading, classNames);

    return heading;
  }

  createPara(textContent, ...classNames) {
    const para = document.createElement("p");
    para.textContent = textContent;
    this.#addClassNames(para, classNames);

    return para;
  }

  createButton(textContent, ...classNames) {
    const button = document.createElement("button");
    this.#addClassNames(button, classNames);
    button.textContent = textContent;

    return button;
  }

  createImg(src, alt = "", ...classNames) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    this.#addClassNames(img, classNames);

    return img;
  }

  #addClassNames(element, classNames) {
    classNames.forEach((className) => element.classList.add(className));
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

class ServicesHandler extends DOMHandler {}

class PopularHandler extends DOMHandler {}

class BookingHandler extends DOMHandler {}

class CustomerHandler extends DOMHandler {}

class HomePage extends DOMHandler {}
