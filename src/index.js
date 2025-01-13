import "./style.css";
import "./normalize.css";

import { HomePage } from "./home.js";
import { MenuPage } from "./menu.js";

class RenderHandler {
  #content = document.querySelector("#content");

  #PageSections = {
    home: new HomePage().render(),
    menu: new MenuPage().render(),
  };

  // TEMP: Temporary remove homepage while creating other apges
  constructor() {
    // const home = this.#PageSections.home;
    // this.#appendPage(home); // Initial page

    this.setupEventListener("home", this.#PageSections.home);
    this.setupEventListener("menu", this.#PageSections.menu);
  }

  setupEventListener() {
    const header = document.querySelector("#header");

    header.addEventListener("click", (e) => {
      const button = e.target;

      if (button.dataset.page) {
        const pageKey = button.dataset.page;
        const page = this.#PageSections[pageKey];

        if (page) {
          this.#clearPage();
          this.#appendPage(page);
        }
      }
    });
  }

  #appendPage(page) {
    this.#content.append(page);
  }

  #clearPage() {
    this.#content.innerHTML = "";
  }
}

new RenderHandler();
