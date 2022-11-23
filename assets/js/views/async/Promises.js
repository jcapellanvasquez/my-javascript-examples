import AbstractView from "../AbstractView.js";
import { PROMISE_EXAMPLE } from "./examples-content/promise-example.content.js";
import { runPromiseExample } from "./examples/promise.example.js";

export default class extends AbstractView{
    title = "Promesas";
    promiseExampleTitle = "Uso de Promesas"
    description = "Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona. Dado que la mayoría de las personas consumen promises ya creadas, esta guía explicará primero cómo consumirlas, y luego cómo crearlas.Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una función."


    constructor() {
        super()
        this.setTitle(this.title);
    }

    view() {
        return this.headerContent(this.title, this.description)
        .exampleContent(this.promiseExampleTitle, PROMISE_EXAMPLE)
        .addAction(runPromiseExample).build()
    }
}