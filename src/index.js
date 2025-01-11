import "./style.css";
import "./normalize.css";

import { HeroHandler, ServicesHandler, PopularHandler } from "./home.js";

// TEMP: This is only to test the rendering of the homepage
const content = document.querySelector("#content");
const hero = new HeroHandler().render();
const services = new ServicesHandler().render();
const popular = new PopularHandler().render();
content.append(hero, services, popular);
