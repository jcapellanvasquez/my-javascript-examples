import AbstractView from "./AbstractView.js";
import { DOM_EXAMPLE } from "./examples/dom-javascript.example.js";

export default class extends AbstractView {
    title = "Javascript DOM (Document Object Model)";
    domExampleTitle = "Manipulando el DOM";
    description =
      "DOM significa Document Object Model, en español sería Modelo de Objetos del Documento. Es una interfaz de programación que nos permite crear, cambiar, o remover elementos del documento. También podemos agregar eventos a esos elementos para hacer más dinámica nuestra página.El DOM visualiza el documento de HTML como un árbol de tres nodos. Un nodo representa un documento de HTML.";
  
    constructor() {
      super();
      this.setTitle(this.title);
    }
  
    view() {
      return this.headerContent(this.title, this.description)
        .exampleContent(this.domExampleTitle, DOM_EXAMPLE)
        .build();
    }
 }