import { DOMHandler } from "./home";
import locationIcon from "./assets/icons/location-icon.svg";
import phoneIcon from "./assets/icons/phone-primary-icon.svg";
import mailIcon from "./assets/icons/mail-icon.svg";
import heroImg from "./assets/images/menu-hero.jpeg";

export class ContactPage extends DOMHandler {
  #DOMElements = {
    contact: this.createDiv({ id: "contact" }),
    hero: this.createDiv({ classNames: ["contact__hero", "section-hero"] }),
    textBlock: this.createDiv({
      classNames: ["text-block"],
    }),
    heroHeadline: this.createHeading({
      headingType: "h1",
      textContent: "Get in Touch with Us",
      classNames: ["section-headline", "hero-headline"],
    }),
    heroDescription: this.createPara({
      textContent:
        "We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, reach out and let’s connect.",
      classNames: ["section-description"],
    }),
    graphic: this.createDiv({
      classNames: ["hero-graphic"],
    }),
    graphicImg: this.createImg({
      src: heroImg,
      alt: "An image of califer cooking breakfast while eating egg shells",
      classNames: ["graphic-img"],
    }),

    container: this.createDiv({ classNames: ["contact__container"] }),
    map: this.#createMap(),
    details: this.createDiv({ classNames: ["contact__details"] }),

    formContainer: this.createDiv({ classNames: ["contact__form-container"] }),
    formHeader: this.createDiv({ classNames: ["contact__form-header"] }),
    formTitle: this.createHeading({
      headingType: "h1",
      textContent: "Send Us a Message",
      classNames: ["form-title"],
    }),
    form: this.createForm({ classNames: ["contact__form"] }),
    labels: [
      this.createLabel({
        forElem: "contact__name",
        textContent: "Name",
        classNames: ["contact__label"],
      }),
      this.createLabel({
        forElem: "contact__email",
        textContent: "Email",
        classNames: ["contact__label"],
      }),
      this.createLabel({
        forElem: "contact__subject",
        textContent: "Subject",
        classNames: ["contact__label"],
      }),
      this.createLabel({
        forElem: "contact__message",
        textContent: "Message",
        classNames: ["contact__label"],
      }),
    ],
    inputs: [
      this.createInput({
        id: "contact__name",
        name: "name",
        placeholder: "Enter name",
        required: true,
        classNames: ["contact__input"],
      }),
      this.createInput({
        id: "contact__email",
        name: "email",
        placeholder: "Enter email",
        required: true,
        classNames: ["contact__input"],
      }),
      this.createInput({
        id: "contact__subject",
        name: "subject",
        placeholder: "Enter subject",
        required: true,
        classNames: ["contact__input"],
      }),
      this.createTextArea({
        id: "contact__message",
        name: "message",
        placeholder: "Enter message",
        required: true,
        classNames: ["contact__input"],
      }),
    ],
    formBtn: this.createButton({
      textContent: "SEND MESSAGE",
      classNames: ["contact__form-btn"],
    }),

    info: this.createDiv({ classNames: ["contact__info"] }),

    listItems: [
      this.createListItem({
        src: locationIcon,
        textContent:
          "Japan, 〒480-1342 Aichi, Nagakute, Ibaragabasama, 乙１５３３−１",
        classNames: ["contact__item"],
      }),
      this.createListItem({
        src: phoneIcon,
        textContent: "+2 392 3929 210",
        classNames: ["contact__item"],
      }),
      this.createListItem({
        src: mailIcon,
        textContent: "@howlsmovingkitchen",
        classNames: ["contact__item"],
      }),
    ],
    list: this.createList({ listType: "ul", classNames: ["contact__list"] }),
  };

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

  #createFormGroup(input, label) {
    const group = this.createDiv({ classNames: ["contact__form-group"] });
    group.append(label, input);

    return group;
  }

  #createMap() {
    const container = this.createDiv({ classNames: ["contact__map"] });
    const map = document.createElement("iframe");
    map.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.2609027089957!2d137.0861939747359!3d35.17504925761571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600367450203d0b3%3A0x36164b7a69c5128b!2sGhibli%20Park!5e0!3m2!1sen!2sph!4v1736846154893!5m2!1sen!2sph";
    map.width = "600";
    map.height = "450";
    map.style = "border: 0";
    map.allowfullscreen = "";
    map.loading = "lazy";
    map.referrerpolicy = "no-referrer-when-downgrade";

    container.append(map);

    return container;
  }

  render() {
    const { contact, hero, container } = this.#DOMElements;
    contact.append(hero, container);

    const { textBlock, graphic } = this.#DOMElements;
    hero.append(textBlock, graphic);

    const { heroHeadline, heroDescription, graphicImg } = this.#DOMElements;
    textBlock.append(heroHeadline, heroDescription);
    graphic.append(graphicImg);

    const { map, details } = this.#DOMElements;
    container.append(map, details);

    const { formContainer, info } = this.#DOMElements;
    details.append(formContainer, info);

    const { formHeader, formTitle, form } = this.#DOMElements;
    formHeader.append(formTitle);
    formContainer.append(formHeader, form);

    form.append(...this.formGroups);

    const { list, listItems } = this.#DOMElements;
    list.append(...listItems);
    info.append(list);

    return contact;
  }
}
