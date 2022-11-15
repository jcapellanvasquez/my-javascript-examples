import { routes } from './config/routes.js';


const navigateTo = (url) => {
    history.pushState(null, null, url)
    router()
}

const updateActivedMenuOption = (url) => {
    document.querySelectorAll("a[data-link]").forEach(parent => parent.parentElement.classList.remove("selected"))
    document.querySelector(`a[data-link][href='${url}']`).parentElement.classList.add("selected")
}

const router = async () => {
    let currentRoute = routes.find(route => route.path === location.pathname)

    if (!currentRoute) {
        currentRoute = routes[0];
    }
    const template = new currentRoute.template();
    document.querySelector("#app").innerHTML = "";
    document.querySelector("#app").append(template.view())
    updateActivedMenuOption(currentRoute.path)
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href)
        }
    });
    router()
});