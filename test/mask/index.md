// removes the internal stack lines
Error: test
    at Object.<anonymous> (/Users/zavr/adc/clean-stack/t.js:1:69)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3

/* expected */
Error: test
    at Object.<anonymous> (/Users/zavr/adc/clean-stack/t.js:1:69)
/**/

// removes pirates
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

/* expected */
Error: test
    at Object.<anonymous> (/Users/zavr/adc/clean-stack/i2.js:1:69)
/**/