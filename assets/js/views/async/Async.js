import AbstractView from '../AbstractView.js';
import { runAsyncExample } from './examples/async.example.js';
import { runSyncExample } from './examples/sync.example.js';
import { ASYNC_EXAMPLE } from './examples-content/async-example.content.js';
import { SYNC_EXAMPLE } from './examples-content/sync-example.content.js';

export default class extends AbstractView {
    title = "Programación asíncrona";
    asyncExampleTitle = "Código asíncrono"
    syncExampleTitle = "Código síncrono"
    description = "Normalmente, el código de un programa determinado se ejecuta directamente, y solo sucede una cosa a la vez. Si una función se basa en el resultado de otra función, tiene que esperar a que la otra función termine y regrese, y hasta que eso suceda, todo el programa se detiene esencialmente desde la perspectiva del usuario."

    constructor() {
        super()
        this.setTitle(this.title);
    }

    view() {
        return this.headerContent(this.title, this.description)
                .exampleContent(this.syncExampleTitle, SYNC_EXAMPLE)
                .addAction(runAsyncExample)
                .exampleContent(this.asyncExampleTitle, ASYNC_EXAMPLE).addAction(runSyncExample)
                .build()
    }
}