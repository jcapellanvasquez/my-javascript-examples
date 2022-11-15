export default class {
    content = document.createElement("div");
    setTitle(title) {
        document.title = title;
    }

    build() {
        return this.content;
    }

    addAction(action) {
        const actionContainer = document.createElement("div");
        actionContainer.classList.add("flex", "topic-button")
        let btn = document.createElement("button")
        btn.classList.add("btn", "btn-secondary")
        btn.innerHTML = "🚀 Correr ejercicio"
        btn.addEventListener("click", action)
        actionContainer.appendChild(btn)
        this.content.appendChild(actionContainer);
        return this;
    }

    statictContent() {
        return this;
    }

    view() {
        return null;
    }
}