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
}

class HeroHandler extends DOMHandler {}

class ServicesHandler extends DOMHandler {}

class PopularHandler extends DOMHandler {}

class BookingHandler extends DOMHandler {}

class CustomerHandler extends DOMHandler {}

class HomePage extends DOMHandler {}
