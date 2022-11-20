import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    title = "Welcome";
    
    constructor() {
        super()
        this.setTitle(this.title);
    }

    statictContent() {
        this.content.innerHTML = `
            <div class="flex welcome-wrapper">
                <div class="welcome-content">
                    <div class="welcome-profile">
                        <img src="/assets/img/profile.jpeg" alt="profile">
                    </div>
                    <h2 class="welcome-title">👋 Julio J. Capellán</h2>
                    <p class="welcome-description">
                        Aquí podras encontrar varios ejemplos prácticos de los temas que 
                        se trataran en el diplomado de javascript
                    </p>
                    <button class="btn btn-welcome">
                        Ver ejemplos
                    </button>
                </div>
            </div>
        `
        return this
    }

    addAction() {
        const btn = this.content.querySelector(".btn")
        btn.addEventListener("click", this.showMenu)
        return this;
    }

    view() {
        return this.statictContent().hideMenu().addAction().build()
    }
}