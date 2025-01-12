import "./style.css";
import "./normalize.css";

import { HomePage } from "./home.js";

// TEMP: This is only to test the rendering of the homepage
const content = document.querySelector("#content");
content.append(new HomePage().render());
