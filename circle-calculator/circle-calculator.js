import { css, html, Wrec } from "wrec";

class CircleCalculator extends Wrec {
  static properties = {
    radius: { type: Number, value: 0 },
  };

  static css = css`
    :host {
      font-family: sans-serif;
    }
    label {
      font-weight: bold;
    }
  `;

  static html = html`
    <div>
      <label for="radius">Radius:</label>
      <input id="radius" type="number" value="this.radius" />
    </div>
    <div>
      <label for="circumference">Circumference:</label>
      <span id="circumference">2 * Math.PI * this.radius</span>
    </div>
    <div>
      <label for="area">Area:</label>
      <span id="area">Math.PI * this.radius</span>
    </div>
  `;
}

CircleCalculator.define("circle-calculator");
