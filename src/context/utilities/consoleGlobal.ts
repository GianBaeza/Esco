
const activarConsola = true
 export const log = (...props :  unknown[]) => activarConsola && console.log(...props)