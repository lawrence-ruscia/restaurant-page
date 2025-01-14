import heroImg from "./assets/images/menu-hero.jpeg";
import { DOMHandler, BookingHandler, ServicesHandler } from "./home";

export class AboutPage extends DOMHandler {
  #DOMElements = {
    about: this.createDiv({ id: "about" }),
    hero: this.createDiv({ classNames: ["about__hero", "section-hero"] }),
    textBlock: this.createDiv({ classNames: ["text-block"] }),
    headline: this.createHeading({
      headingType: "h1",
      textContent: "The Magic Behind the Kitchen",
      classNames: ["hero-headline", "section-headline"],
    }),
    description: this.createPara({
      textContent:
        "Step into a world where culinary artistry meets enchanted flavors. Inspired by the charm of Howl’s Moving Castle, our kitchen serves heartfelt dishes crafted with a sprinkle of magic and love.",
      classNames: ["section-description"],
    }),
    graphic: this.createDiv({ classNames: ["hero-graphic"] }),
    graphicImg: this.createImg({
      src: heroImg,
      alt: "An image of califer cooking breakfast while eating egg shell",
      classNames: ["graphic-img"],
    }),
    container: this.createDiv({ classNames: ["about__container"] }),
  };

  render() {
    const { about, hero, container } = this.#DOMElements;
    about.append(hero, container);

    const { textBlock, graphic } = this.#DOMElements;
    hero.append(textBlock, graphic);

    const { headline, description } = this.#DOMElements;
    textBlock.append(headline, description);

    const { graphicImg } = this.#DOMElements;
    graphic.append(graphicImg);

    const booking = new BookingHandler().render();
    const services = new ServicesHandler().render();

    container.append(booking, services);

    return about;
  }
}
