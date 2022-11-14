

const navigateTo = (url) => {
    history.pushState(null, null, url)
    router()
}

const router = () => {
    const routes = [
        {path: "/", view: () => "<h4>Ruta por defecto cargada</h4>"},
        {path: "/promise", view: () => "<h4>Ruta promise cargada</h4>"},
        {path: "/async-await", view: () => "<h4>Ruta async-await cargada</h4>"}
    ];

    let currentRoute = routes.find( route => route.path === location.pathname)

    if (!currentRoute) {
        currentRoute = routes[0];
    }

    document.querySelector("#app").innerHTML = currentRoute.view();
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