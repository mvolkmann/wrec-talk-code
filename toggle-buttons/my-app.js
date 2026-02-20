import { html, Wrec } from "wrec";
import "./hello-world";
import "./toggle-buttons";

class MyApp extends Wrec {
  static properties = {
    color: { type: String, value: "red" },
  };

  static html = html`
    <hello-world color="this.color"></hello-world>
    <toggle-buttons labels="red,green,blue" value="this.color"></toggle-buttons>
  `;
}

MyApp.define("my-app");
