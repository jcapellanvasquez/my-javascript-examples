import AbstractView from "./AbstractView.js";
import {ES6_MODULES_EXAMPLE} from './examples/es6-modules-examples.content.js';

export default class extends AbstractView {
  title = "Modulos ES6";
  modulesExampleTitle = "Uso de los módulos";
  description =
    "Un módulo es solo un archivo. Un script es un módulo. Tan sencillo como eso.";

  constructor() {
    super();
    this.setTitle(this.title);
  }

  view() {
    return this.headerContent(this.title, this.description)
      .exampleContent(this.modulesExampleTitle, ES6_MODULES_EXAMPLE)
      .build();
  }
}
