const template = document.createElement("template");
template.innerHTML = `
  <style>
    p { color: blue; }
  </style>
  <p>Hello, <span></span>!</p>
`;

class HelloWorld extends HTMLElement {
  #name = "World";
  #span: HTMLSpanElement | null = null;

  static get observedAttributes() {
    return ["color", "name"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const dom = template.content.cloneNode(true) as DocumentFragment;
    this.#span = dom.querySelector("span");
    this.#update();
    this.shadowRoot!.replaceChildren(dom);
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === "name") this.name = newValue;
  }

  get name() {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
    this.#update();
  }

  #update() {
    const span = this.#span;
    if (span) span.textContent = this.#name || "World";
  }
}

customElements.define("hello-world", HelloWorld);
