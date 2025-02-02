import heroGraphic from "./assets/images/hero-preview.jpeg";
import servicesCardImg1 from "./assets/images/services1.svg";
import servicesCardImg2 from "./assets/images/services2.svg";
import servicesCardImg3 from "./assets/images/services3.svg";
import popularCardImg1 from "./assets/images/steak.jpeg";
import popularCardImg2 from "./assets/images/ramen.jpeg";
import popularCardImg3 from "./assets/images/parfait.jpeg";
import bookingImg1 from "./assets/images/yokai-cooking.jpeg";
import customerImg1 from "./assets/images/sophie.jpeg";
import customerImg2 from "./assets/images/noface.jpeg";
import customerImg3 from "./assets/images/totoro.jpeg";

// Mimic Abstract Class
export class DOMHandler {
  constructor() {
    if (new.target === DOMHandler) {
      throw new Error("Cannot instantiate an abstract class directly.");
    }
  }

  // Abstract Method
  render() {
    throw new Error("Abstract method must be implemented by subclass.");
  }

  createDiv({ textContent = "", id = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);

    const div = document.createElement("div");
    div.textContent = textContent;
    div.id = id;
    this.#addClassNames(div, classNames);

    return div;
  }

  createHeading({
    headingType,
    textContent = "",
    id = "",
    classNames = [],
  } = {}) {
    this.#validateClassNames(classNames);

    const validHeadings = ["h1", "h2", "h3", "h4", "h5", "h6"];
    if (!validHeadings.includes(headingType)) {
      throw new Error(`Invalid heading type: ${headingType}`);
    }

    const heading = document.createElement(headingType);
    heading.textContent = textContent;
    heading.id = id;
    this.#addClassNames(heading, classNames);

    return heading;
  }

  createPara({ textContent = "", id = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);

    const para = document.createElement("p");
    para.textContent = textContent;
    para.id = id;
    this.#addClassNames(para, classNames);

    return para;
  }

  createButton({ textContent = "", id = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);

    const button = document.createElement("button");
    button.id = id;
    button.textContent = textContent;
    this.#addClassNames(button, classNames);

    return button;
  }

  createImg({ src, alt = "", id = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);
    this.#validateSrcPath(src);

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.id = id;
    this.#addClassNames(img, classNames);

    return img;
  }

  createAnchor({
    href = "#",
    textContent = "",
    id = "",
    classNames = [],
  } = {}) {
    this.#validateClassNames(classNames);

    const a = document.createElement("a");
    a.href = href;
    a.textContent = textContent;
    a.id = id;
    this.#addClassNames(a, classNames);

    return a;
  }

  createForm({ action = "", method = "", id = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);

    const form = document.createElement("form");
    form.action = action;
    form.method = method;
    form.id = id;
    this.#addClassNames(form, classNames);

    return form;
  }

  createLabel({ forElem, id = "", textContent = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);

    const label = document.createElement("label");
    label.htmlFor = forElem;
    label.id = id;
    label.textContent = textContent;
    this.#addClassNames(label, classNames);

    return label;
  }

  createInput({
    type = "input",
    id = "",
    name,
    placeholder = "",
    required = "false",
    min = "",
    max = "",
    classNames = [],
  } = {}) {
    this.#validateClassNames(classNames);

    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = name;
    input.placeholder = placeholder;
    input.required = required;
    input.min = min;
    input.max = max;

    this.#addClassNames(input, classNames);

    return input;
  }

  createTextArea({
    id = "",
    name,
    placeholder = "",
    required = "false",
    min = "",
    max = "",
    classNames = [],
  } = {}) {
    this.#validateClassNames(classNames);

    const textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.name = name;
    textarea.placeholder = placeholder;
    textarea.required = required;
    textarea.min = min;
    textarea.max = max;

    this.#addClassNames(textarea, classNames);

    return textarea;
  }

  createList({ listType, listItems = [], id = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);

    const validListTypes = ["ol", "ul"];
    if (!validListTypes.includes(listType))
      throw new Error(`Invalid list type: ${listType}`);

    const list = document.createElement(listType);
    list.append(...listItems);
    list.id = id;
    this.#addClassNames(list, classNames);

    return list;
  }

  createListItem({ src, textContent = "", id = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);

    const li = document.createElement("li");
    const img = this.createImg({ src });
    const text = this.createPara({ textContent });
    li.append(img, text);
    li.id = id;
    this.#addClassNames(li, classNames);

    return li;
  }

  createListItems({ count, textContent = "", id = "", classNames = [] } = {}) {
    this.#validateClassNames(classNames);

    const listItems = [];
    while (count > 0) {
      const li = document.createElement("li");
      li.textContent = textContent;
      li.id = id;
      this.#addClassNames(li, classNames);
      listItems.push(li);
      count--;
    }

    return listItems;
  }

  #addClassNames(element, classNames) {
    classNames.forEach((className) => element.classList.add(className));
  }

  #validateClassNames(classNames) {
    if (
      !Array.isArray(classNames) ||
      classNames.some((cls) => typeof cls !== "string")
    ) {
      throw new Error(`Invalid class names: ${classNames}.`);
    }
  }

  #validateSrcPath(src) {
    if (src === null || src === undefined) {
      throw new Error(`Invalid src path: ${src}.`);
    }
  }
}

class HeroHandler extends DOMHandler {
  #DOMElements = {
    hero: this.createDiv({ classNames: ["hero"] }),
    textBlock: this.createDiv({
      classNames: ["hero__text-block", "text-block"],
    }),
    headline: this.createHeading({
      headingType: "h1",
      textContent: "Enchanting Flavors, Inspired by Magic",
      classNames: ["section-headline", "hero-headline"],
    }),
    description: this.createPara({
      textContent:
        "Step into Howl's Moving Kitchen and savor dishes crafted with heart and a touch of enchanment",
      classNames: ["section-description"],
    }),
    textBlockBtn: this.createButton({
      textContent: "Explore the Menu",
      classNames: ["text-block__btn", "call-to-action"],
    }),
    graphic: this.createDiv({
      classNames: ["hero__graphic", "hero-graphic"],
    }),
    graphicImg: this.createImg({
      src: heroGraphic,
      alt: "An image of califer cooking breakfast while eating egg shells",
      classNames: ["hero__graphic-img", "graphic-img"],
    }),
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
    services: this.createDiv({ classNames: ["our-services"] }),
    container: this.createDiv({ classNames: ["our-services__container"] }),
    header: this.createDiv({ classNames: ["our-services__header"] }),
    headline: this.createHeading({
      headingType: "h1",
      textContent: "The Magic of Exceptional Dining",
      classNames: ["our-services__headline", "section-headline"],
    }),
    description: this.createPara({
      textContent:
        "Experience cuisine crafted with heart and enchantment, designed to delight every palate.",
      classNames: ["our-services__description", "section-description"],
    }),

    cardContainer: this.createDiv({
      classNames: ["our-services__card-container"],
    }),
    cards: [
      this.#createCard({
        src: servicesCardImg1,
        headlineText: "Wholesome Feasts",
        descriptionText:
          "Indulge in hearty, wholesome meals made with the freshest ingredients and a dash of magic.",
      }),
      this.#createCard({
        src: servicesCardImg2,
        headlineText: "Quick Bites with Charm",
        descriptionText:
          "Savor quick, flavorful dishes perfect for those on the move, inspired by Calcifer’s fiery touch.",
      }),
      this.#createCard({
        src: servicesCardImg3,
        headlineText: "Enchanting Brews",
        descriptionText:
          "Sip on handcrafted teas and coffees, brewed to warm your soul and awaken your senses.",
      }),
    ],
  };

  #createCard({ src, headlineText, descriptionText } = {}) {
    const card = this.createDiv({ classNames: ["our-services__card-item"] });
    const img = this.createImg({
      src,
      classNames: ["our-services__card-item-img"],
    });
    const caption = this.createDiv({
      classNames: ["our-services__card-item-caption"],
    });
    const title = this.createAnchor({
      href: "#",
      textContent: headlineText,
      classNames: ["our-services__card-item-title"],
    });
    const description = this.createPara({
      textContent: descriptionText,
      classNames: ["our-services__card-item-description"],
    });

    caption.append(title, description);
    card.append(img, caption);

    return card;
  }

  #renderHeader(container, header) {
    const { headline, description } = this.#DOMElements;
    container.append(header);
    header.append(headline, description);
  }

  #renderCardContainer(cardContainer) {
    const { cards } = this.#DOMElements;
    cardContainer.append(...cards);
  }

  render() {
    const { services, header, container, cardContainer } = this.#DOMElements;

    this.#renderHeader(container, header);
    this.#renderCardContainer(cardContainer);

    services.append(container, cardContainer);

    return services;
  }
}

export class PopularHandler extends DOMHandler {
  #DOMElements = {
    popular: this.createDiv({ classNames: ["most-popular"] }),
    header: this.createDiv({
      classNames: ["most-popular__header", "menu-header"],
    }),
    caption: this.createDiv({
      classNames: ["most-popular__caption", "menu-caption"],
    }),
    headline: this.createHeading({
      headingType: "h1",
      textContent: "Most Popular Dishes",
      classNames: ["most-popular__headline", "section-headline"],
    }),
    description: this.createPara({
      textContent:
        "Discover the dishes our guests can’t stop raving about—crafted with love and a sprinkle of magic.",
      classNames: ["most-popular__description", "section-description"],
    }),
    menuBtn: this.createButton({
      textContent: "Full Menu",
      classNames: ["most-popular__menu-btn", "menu-btn", "call-to-action"],
    }),
    cardContainer: this.createDiv({
      classNames: ["most-popular__card-container", "menu-card-container"],
    }),

    cards: [
      this.createCard({
        src: popularCardImg1,
        alt: "A beautifully plated grilled steak with herb butter, served with roasted vegetables.",
        price: "3,500",
        titleText: "Calcifer’s Flame-Grilled Steak",
        descriptionText:
          "Perfectly seared steak infused with smoky, magical flavors straight from Calcifer’s fire.",
        classNames: ["most-popular__card-item", "menu-card-item"],
      }),
      this.createCard({
        src: popularCardImg2,
        alt: "A bowl of vibrant, aromatic ramen topped with soft-boiled eggs, fresh herbs, and a hint of spice.",
        price: "2,400",
        titleText: "Howl’s Enchanted Ramen",
        descriptionText:
          "A rich, flavorful bowl of ramen that warms the soul and ignites your senses.",
        classNames: ["most-popular__card-item", "menu-card-item"],
      }),
      this.createCard({
        src: popularCardImg3,
        alt: "A layered parfait with rich chocolate, coffee cream, and a sprinkle of cocoa powder, served in a tall glass.",
        price: "1,500",
        titleText: "Sophie’s Dreamy Parfait",
        descriptionText:
          "A dreamy dessert blending smooth mocha flavors with indulgent chocolate layers.",
        classNames: ["most-popular__card-item", "menu-card-item"],
      }),
    ],
  };

  createCard({ src, alt, price, titleText, descriptionText, classNames = [] }) {
    const card = this.createDiv({ classNames });
    const graphic = this.createDiv({ classNames: ["menu-card-graphic"] });
    const img = this.createImg({
      src,
      alt,
      classNames: ["card-img"],
    });
    const priceTag = this.createDiv({ classNames: ["menu-card-price"] });
    priceTag.innerHTML = `&#165;${price}`;

    const details = this.createDiv({ classNames: ["menu-card-details"] });
    const title = this.createAnchor({
      textContent: titleText,
      classNames: ["menu-card-title"],
    });
    const description = this.createPara({
      textContent: descriptionText,
      classNames: ["menu-card-description"],
    });
    const button = this.createButton({
      textContent: "Order Now",
      classNames: ["menu-card-order-btn"],
    });

    card.append(graphic, priceTag, details);
    graphic.append(img);
    details.append(title, description, button);

    return card;
  }

  #renderHeader(header) {
    const { caption, headline, description, menuBtn } = this.#DOMElements;
    caption.append(headline, description);
    header.append(caption, menuBtn);
  }

  #renderCardContainer(cardContainer) {
    const { cards } = this.#DOMElements;
    cardContainer.append(...cards);
  }

  render() {
    const { popular, header, cardContainer } = this.#DOMElements;
    popular.append(header, cardContainer);

    this.#renderHeader(header);
    this.#renderCardContainer(cardContainer);

    return popular;
  }
}

export class BookingHandler extends DOMHandler {
  #DOMElements = {
    booking: this.createDiv({ classNames: ["booking-area"] }),
    container: this.createDiv({ classNames: ["booking-area__container"] }),
    graphic: this.createDiv({ classNames: ["booking-area__graphic"] }),
    bookingImg: this.createImg({
      src: bookingImg1,
      alt: "An image from a scene of Spirited Away where yokai frogs are cooking in the kitchen",
      classNames: ["booking-area__img"],
    }),
    content: this.createDiv({ classNames: ["booking-area__content"] }),
    header: this.createDiv({ classNames: ["booking-area__header"] }),
    headline: this.createHeading({
      headingType: "h1",
      textContent: "Book a Table",
      classNames: ["booking-area__headline", "section-headline"],
    }),
    description: this.createPara({
      textContent:
        "Reserve your seat at Howl’s Moving Kitchen in just a few clicks. Experience magical dining, crafted just for you.",
      classNames: ["booking-area__description", "section-description"],
    }),

    form: this.createForm({ classNames: ["booking-area__form"] }),
    labels: [
      this.createLabel({
        forElem: "name",
        textContent: "Full Name",
        classNames: ["booking-area__label"],
      }),
      this.createLabel({
        forElem: "date",
        textContent: "Reservation Date",
        classNames: ["booking-area__label"],
      }),
      this.createLabel({
        forElem: "time",
        textContent: "Reservation Time",
        classNames: ["booking-area__label"],
      }),
      this.createLabel({
        forElem: "guests",
        textContent: "Number of Guests",
        classNames: ["booking-area__label"],
      }),
    ],

    inputs: [
      this.createInput({
        id: "name",
        name: "name",
        placeholder: "Enter your name",
        required: true,
        classNames: ["booking-area__input"],
      }),
      this.createInput({
        type: "date",
        id: "date",
        name: "date",
        required: true,
        classNames: ["booking-area__input", "booking-area__input--datetime"],
      }),
      this.createInput({
        type: "time",
        id: "time",
        name: "time",
        required: true,
        classNames: ["booking-area__input", "booking-area__input--datetime"],
      }),
      this.createInput({
        type: "number",
        id: "guests",
        name: "guests",
        min: "1",
        max: "10",
        placeholder: "Guests",
        required: true,
        classNames: ["booking-area__input"],
      }),
    ],
    button: this.createButton({
      textContent: "Book Now",
      classNames: ["booking-area__form-button", "call-to-action"],
    }),
  };

  #createFormGroup(input, label) {
    const group = this.createDiv({ classNames: ["booking-area__form-group"] });
    group.append(label, input);

    return group;
  }

  get formGroups() {
    return [
      this.#createFormGroup(
        this.#DOMElements.inputs[0],
        this.#DOMElements.labels[0]
      ),
      this.#createFormGroup(
        this.#DOMElements.inputs[1],
        this.#DOMElements.labels[1]
      ),
      this.#createFormGroup(
        this.#DOMElements.inputs[2],
        this.#DOMElements.labels[2]
      ),
      this.#createFormGroup(
        this.#DOMElements.inputs[3],
        this.#DOMElements.labels[3]
      ),
    ];
  }

  render() {
    const { booking, container } = this.#DOMElements;
    booking.append(container);

    const { graphic, content } = this.#DOMElements;
    container.append(graphic, content);

    const { bookingImg } = this.#DOMElements;
    graphic.append(bookingImg);

    const { header, headline, description } = this.#DOMElements;
    header.append(headline, description);
    content.append(header);

    const { form, button } = this.#DOMElements;
    form.append(...this.formGroups, button);
    content.append(form);

    return booking;
  }
}

class CustomerHandler extends DOMHandler {
  #DOMElements = {
    customer: this.createDiv({ classNames: ["customer"] }),
    header: this.createDiv({ classNames: ["customer__header"] }),
    headline: this.createHeading({
      headingType: "h1",
      textContent: "What Our Guests Are Saying",
      classNames: ["customer_headline", "section-headline"],
    }),
    description: this.createPara({
      textContent:
        "Real stories from our enchanted diners—see why they call it a magical culinary journey!",
      classNames: ["customer__description", "section-description"],
    }),
    container: this.createDiv({ classNames: ["customer__card-container"] }),
    cards: [
      this.#createCard({
        src: customerImg1,
        captionText: `"The atmosphere is simply spellbinding! From the magical flavors
              to the cozy ambiance, everything was perfect. The ramen warmed my
              heart like a hug from Howl!"`,
        customerName: "Sophie Hatter",
      }),
      this.#createCard({
        src: customerImg2,
        captionText: `"The dining experience here is beyond words. The staff welcomed me
              warmly, and the steak melted in my mouth. I left feeling lighter,
              happier, and full!"`,
        customerName: "No Face",
      }),
      this.#createCard({
        src: customerImg3,
        captionText:
          '"This place feels like home. The chocolate parfait was the highlight—it was like tasting pure happiness. My friends and I will definitely be back!"',
        customerName: "Totoro",
      }),
    ],
  };

  #createCard({ src, captionText, customerName } = {}) {
    const card = this.createDiv({ classNames: ["customer__card"] });

    const graphic = this.createDiv({ classNames: ["customer-card__graphic"] });
    const img = this.createImg({ src, classNames: ["card-img"] });

    graphic.append(img);

    const caption = this.createPara({
      textContent: captionText,
      classNames: ["customer-card__caption"],
    });

    const rating = this.createDiv({ classNames: ["customer-card__rating"] });
    const stars = this.createListItems({ count: 5, classNames: ["star"] });
    const ratingList = this.createList({
      listType: "ul",
      listItems: stars,
      classNames: ["rating__list"],
    });
    const customer = this.createPara({
      textContent: `- ${customerName}`,
      classNames: ["rating__customer"],
    });

    rating.append(ratingList, customer);

    card.append(graphic, caption, rating);

    return card;
  }

  render() {
    const { customer, header, container } = this.#DOMElements;
    customer.append(header, container);

    const { headline, description } = this.#DOMElements;
    header.append(headline, description);

    const { cards } = this.#DOMElements;
    container.append(...cards);

    return customer;
  }
}

export class HomePage extends DOMHandler {
  #PageSections = {
    hero: new HeroHandler().render(),
    services: new ServicesHandler().render(),
    popular: new PopularHandler().render(),
    booking: new BookingHandler().render(),
    customer: new CustomerHandler().render(),
  };

  render() {
    const home = this.createDiv({ id: "home" });
    home.append(...Object.values(this.#PageSections));

    return home;
  }
}
