//import { css, html, Wrec } from "./wrec.min.js";
import { css, html, Wrec } from "wrec";

class LabeledSwitch extends Wrec {
  static properties = {
    label: { type: String, required: true },
    checked: { type: Boolean, dispatch: true },
  };

  static css = css`
    :host {
      --padding: 2px;
      --thumb-size: 22px;
      --height: calc(var(--thumb-size) + var(--padding) * 2);
      --checked-x: calc(var(--thumb-size) - var(--padding) * 2);
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
    }

    label {
      cursor: pointer;
      user-select: none;
      font-family: sans-serif;
      font-size: 14px;
    }

    .switch {
      cursor: pointer;
      display: inline-block;
      position: relative;
      width: calc(var(--thumb-size) * 2);
      height: var(--height);
      outline: none;
    }

    .track {
      position: absolute;
      inset: 0;
      background: #ccc;
      border-radius: calc(var(--height) / 2);
      transition: background 160ms;
    }

    .thumb {
      position: absolute;
      top: var(--padding);
      left: var(--padding);
      width: var(--thumb-size);
      height: var(--thumb-size);
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgb(0 0 0 / 0.4);
      transition: transform 160ms;
    }

    .checked .track {
      background: #4caf50;
    }

    .checked .thumb {
      transform: translateX(var(--checked-x));
    }
  `;

  static html = html`
    <label onClick="toggle">this.label</label>
    <div
      aria-checked="this.checked"
      class="this.checked ? 'switch checked' : 'switch'"
      onClick="toggle"
      onKeyDown="handleKey"
      role="switch"
      tabindex="0"
    >
      <span class="track"></span>
      <span class="thumb"></span>
    </div>
  `;

  handleKey(e) {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      this.toggle();
    }
  }

  toggle() {
    this.checked = !this.checked;
  }
}

LabeledSwitch.define("labeled-switch");
