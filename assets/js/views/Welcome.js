export default class {
    title = "Welcome";
    constructor() {
        this.setTitle(this.title);
    }

    setTitle(title) {
        document.title = title;
    }

    async view() {
        return `
        <div class="flex welcome-wrapper">
            <div class="welcome-content">
                <div class="welcome-profile">
                    <img src="/assets/img/profile.jpg" alt="profile">
                </div>
                <h2 class="welcome-title">👋 Julio J. Capellán</h2>
                <p class="welcome-description">
                    Aquí podras encontrar varios ejemplos prácticos de los temas que 
                    se trataran en el diplomado de javascript
                </p>
                <button class="btn btn-welcome">
                    Ir a los ejemplos
                </button>
            </div>
        </div>
    `;
    }
}