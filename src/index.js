import "./style.css";
import "./normalize.css";

import { HeroHandler, ServicesHandler } from "./home.js";

// TEMP: This is only to test the rendering of the homepage
const content = document.querySelector("#content");
const hero = new HeroHandler().render();
const services = new ServicesHandler().render();
content.append(hero, services);
