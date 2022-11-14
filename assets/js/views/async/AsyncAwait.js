export default class {
    title = "Async/Await";
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Expedita maxime officia omnis fugiat molestias dicta fuga
                    placeat impedit, similique obcaecati quis perferendis 
                reiciendis soluta sequi sed nisi itaque laborum! Maiores.
            </p>
            <h4 class="topic-sub-title">Promesas</h4>
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