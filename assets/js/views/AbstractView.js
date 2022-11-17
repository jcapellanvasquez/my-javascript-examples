export default class {
    content = document.createElement("div");
    setTitle(titlePage) {
        document.title = titlePage;
    }

    build() {
        return this.content;
    }

    addAction(action) {
        const actionContainer = document.createElement("div");
        const btn = document.createElement("button")
        actionContainer.classList.add("flex", "topic-button")
        btn.classList.add("btn", "btn-secondary")
        btn.innerHTML = "🚀 Correr ejercicio"
        btn.addEventListener("click", action)
        actionContainer.appendChild(btn)
        this.content.appendChild(actionContainer);
        return this;
    }

    headerContent(title, description) {
        this.showMenu()
        this.titleContent(title).descriptionContent(description)
        return this;
    }

    exampleContent(titleExample, codeExample) {
        this.subTitleContent(titleExample).codeExampleContent(codeExample)
        return this;
    }

    titleContent(title) {
        const titleElement = document.createElement("h2")
        titleElement.classList.add("topic-title")
        titleElement.innerHTML = title
        this.content.appendChild(titleElement)
        return this;
    }

    descriptionContent(desc) {
        const descriptionElement = document.createElement("p")
        descriptionElement.classList.add("topic-description")
        descriptionElement.textContent = desc;
        this.content.appendChild(descriptionElement)
        return this;
    }

    subTitleContent(subTitle) {
        const subTitleElement = document.createElement("h4")
        subTitleElement.classList.add("topic-sub-title")
        subTitleElement.innerHTML = subTitle
        this.content.appendChild(subTitleElement);
        return this;
    }

    codeExampleContent(codeExample) {
        const codeExampleElement = document.createElement("div")
        codeExampleElement.classList.add("topic-cad-code-example")
        codeExampleElement.innerHTML = codeExample
        this.content.appendChild(codeExampleElement)
        return this;
    }

    hideMenu() {
        document.getElementById("menu").className = "closed";
        return this;
    }

    showMenu() {
        document.getElementById("menu").className = "open";
        return this;
    }

    view() {
        return null;
    }
}