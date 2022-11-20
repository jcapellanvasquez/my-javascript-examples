import AbstractView from "../AbstractView.js";
import {FETCH_EXAMPLE} from '../async/examples-content/fetch.example.content.js';
import {runFecthExample} from '../async/examples/fetch.example.js';


export default class extends AbstractView {
  title = "Fetch API";
  fetchExampleTitle = "Uso de Fetch";
  description =
    "La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.";

  constructor() {
    super();
    this.setTitle(this.title);
  }

  view() {
    return this.headerContent(this.title, this.description)
      .exampleContent(this.fetchExampleTitle, FETCH_EXAMPLE)
      .addAction(runFecthExample)
      .build();
  }
}
