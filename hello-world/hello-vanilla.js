class HelloWorld extends HTMLElement {
  static get observedAttributes() {
    return ["color", "name"];
  }

  #color = "black";
  #name = "World";
  #p = document.createElement("p");

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "color") {
      if (newValue !== this.#color) this.color = newValue;
    } else if (name === "name") {
      if (newValue !== this.#name) this.name = newValue;
    }
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.replaceChildren(this.#p);
  }

  get color() {
    return this.#color;
  }

  get name() {
    return this.#name;
  }

  set color(value) {
    this.#color = value;
    this.setAttribute("color", value);
    this.#p.style.color = value;
  }

  set name(value) {
    this.#name = value;
    this.setAttribute("name", value);
    this.#p.textContent = `Hello, ${value}!`;
  }
}

customElements.define("hello-world", HelloWorld);
