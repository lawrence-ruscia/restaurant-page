import "./style.css";
import "./normalize.css";

import { HeroHandler } from "./home.js";

const content = document.querySelector("#content");
const hero = new HeroHandler();
content.appendChild(hero.render());
