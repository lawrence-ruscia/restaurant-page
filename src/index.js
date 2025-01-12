import "./style.css";
import "./normalize.css";

import {
  HeroHandler,
  ServicesHandler,
  PopularHandler,
  BookingHandler,
  CustomerHandler,
} from "./home.js";

// TEMP: This is only to test the rendering of the homepage
const content = document.querySelector("#content");
const hero = new HeroHandler().render();
const services = new ServicesHandler().render();
const popular = new PopularHandler().render();
const booking = new BookingHandler().render();
const customer = new CustomerHandler().render();
content.append(hero, services, popular, booking, customer);
