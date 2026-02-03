import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("circle-calculator")
class CircleCalculator extends LitElement {
  @property({ type: Number, reflect: true }) radius = 0;

  static styles = css`
    :host {
      font-family: sans-serif;
    }
    label {
      font-weight: bold;
    }
  `;

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.radius = Number(input.value);
  }

  render() {
    return html`
      <div>
        <label for="radius">Radius:</label>
        <input
          id="radius"
          type="number"
          .value=${this.radius}
          @change=${this.handleChange}
        />
      </div>
      <div>
        <label for="circumference">Circumference:</label>
        <span id="circumference">${2 * Math.PI * this.radius}</span>
      </div>
      <div>
        <label for="area">Area:</label>
        <span id="area">${Math.PI * this.radius * this.radius}</span>
      </div>
    `;
  }
}
