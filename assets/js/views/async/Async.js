export default class {
    title = "Programación asíncrona";
    constructor() {
        this.setTitle(this.title);
    }

    setTitle(title) {
        document.title = title;
    }

    async view() {
        return `
            <h2 class="topic-title">${this.title}</h2>
            <p class="topic-description">
                Normalmente, el código de un programa determinado se ejecuta directamente, 
                y solo sucede una cosa a la vez. Si una función se basa en el resultado de otra función, tiene que esperar a que la otra función termine y 
                regrese, y hasta que eso suceda, todo el programa se detiene esencialmente desde la perspectiva del usuario.
            </p>
            <h4 class="topic-sub-title">Código asincróno</h4>
            <div class="topic-cad-code-example">
                <script src="https://gist.github.com/jcapellanvasquez/f94d799bebd8b868bf93f7a0f6831e9b.js"></script>
            </div>
            <div class="flex topic-button">
                <button class="btn btn-secondary">
                    🚀 Correr ejercicio
                </button>
            </div>
    `;
    }
}