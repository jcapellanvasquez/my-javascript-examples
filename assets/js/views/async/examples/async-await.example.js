export const runAsyncAwaitExample = () => {
    console.log("codigo iniciado")
    const accionDelay = (delayTime, accion) => setTimeout(() => console.log(accion), delayTime)

    const lavarseDientes = async () => {
        const delay = 5000;
        const msg = "Dientes limpios!"
        accionDelay(delay, msg)
    }

    const banarse = async () => {
        const delay = 6000;
        const msg = "banado, a secarse!"
        accionDelay(delay, msg)
    }

    const vestirse = async () => {
        const delay = 7000;
        const msg = "Vestido, a desayunar!"
        accionDelay(delay, msg)
    }

    const run = async () => {
        await vestirse()
        await banarse()
        await lavarseDientes()
    }

    run()
}