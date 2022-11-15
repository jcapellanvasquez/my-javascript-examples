import AbstractView from "../AbstractView.js";
import { runAsyncAwaitExample } from "./examples/async-await.example.js";
import { ASYNC_AWAIT_EXAMPLE } from "./examples-content/async-await-example.content.js";

export default class extends AbstractView {
    title = "Async/Await";
    description = "Tenemos dos partes cuando usamos async/await en nuestro código. En primer lugar, tenemos la palabra clave async , que se pone delante de una declaración de función para convertirla en una función async. Una función asíncrona es una función que sabe que es posible que se use la palabra clave await dentro de ella para invocar código asíncrono. La palabra clave async se añade a las funciones para que devuelvan una promesa en lugar de un valor directamente."
    asyncAwaitExampleTitle = "Uso de async/await";

    constructor() {
        super()
        this.setTitle(this.title);
    }

    view() {
        return this.headerContent(this.title, this.description)
        .exampleContent(this.asyncAwaitExampleTitle, ASYNC_AWAIT_EXAMPLE).addAction(runAsyncAwaitExample)
        .build()
    }
}