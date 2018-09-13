/* start example */
/* yarn example/ */
import cleanStack from '../src'

const err = `
Error: test
    at Object.<anonymous> (/Users/zavr/adc/clean-stack/i2.js:1:69)
    at Module._compile (module.js:652:30)
    at Module._compile (/Users/zavr/adc/clean-stack/node_modules/pirates/lib/index.js:83:24)
    at Module._extensions..js (module.js:663:10)
    at Object.newLoader [as .js] (/Users/zavr/adc/clean-stack/node_modules/pirates/lib/index.js:88:7)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
`.trim()

const res = cleanStack(err)
/* end example */
console.log(res)