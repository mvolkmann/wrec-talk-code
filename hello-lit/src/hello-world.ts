import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("hello-world")
class HelloWorld extends LitElement {
  @property({ type: String, reflect: true }) color = "black";
  @property({ type: String, reflect: true }) name = "World";

  render() {
    return html`<h1 style="color: ${this.color}">Hello, ${this.name}!</h1>`;
  }
}
