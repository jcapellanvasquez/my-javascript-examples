export const runAsyncAwaitExample = () => {
    const accionDelay = (delayTime, accion) => {
        return new Promise((resolve) => {
             setTimeout(() => {
                 console.log(accion)
                 resolve(accion)
             }, delayTime)
        })
   }
   
   
   const lavarseDientes = async () => {
     const delay = 5000;
     const msg = "Dientes limpios!"
     accionDelay(delay, msg)
   }
   
   const banarse =  async() => {
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
     console.log("Inicio de script")
     await vestirse()
     await banarse()
     await lavarseDientes()
   }
   
   run()
   
}