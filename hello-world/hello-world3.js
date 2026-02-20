import { css, html, Wrec } from "wrec";

class HelloWorld extends Wrec {
  static properties = {
    color: { type: String, value: "blue" },
    name: { type: String, value: "World" },
  };

  static css = css`
    h1 {
      color: this.color;
    }
  `;

  static html = html`<h1>Hello, <span>this.name</span>!</h1>`;
}

HelloWorld.define("hello-world");
