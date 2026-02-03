import { html, Wrec } from "wrec";

class HelloWorld extends Wrec {
  static html = html`<h1>Hello, World!</h1>`;
}

HelloWorld.register();
