export const runPromiseExample = () => {
    const accionDelay = (delayTime, accion) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(accion);
                resolve(accion);
            }, delayTime);
        });
    };

    const lavarseDientes = () => {
        const delay = 5000;
        const msg = "Dientes limpios!";
        console.log("Lavandose los dientes");
        return accionDelay(delay, msg);
    };

    const banarse = () => {
        const delay = 10000;
        const msg = "banado, a secarse!";
        console.log("a banarse");
        return accionDelay(delay, msg);
    };

    const vestirse = () => {
        const delay = 2000;
        const msg = "Vestido, a desayunar!";
        console.log("A ponerse algo bonito");
        return accionDelay(delay, msg);
    };

    lavarseDientes()
        .then(() => banarse())
        .then(() => vestirse())
        .then(() => console.log("Promise end"));

    // fin
};
