## removes the internal stack lines
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

## removes pirates
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

## prettifies
Error: test
    at Object.<anonymous> (/Users/zavr/adc/clean-stack/t.js:1:69)
    at Module._compile (module.js:652:30)
    at bootstrap_node.js:612:3

/* config */
{"pretty": true}
/**/

/* expected */
Error: test
    at Object.<anonymous> (~/adc/clean-stack/t.js:1:69)
/**/

## ignores given modules
Error: test
    at addArticle (/Users/zavr/adc/idio/controller/article/article.js:49:5)
    at dispatch (/Users/zavr/adc/idio/node_modules/koa-compose/index.js:44:32)
    at next (/Users/zavr/adc/idio/node_modules/koa-compose/index.js:45:18)
    at /Users/zavr/adc/idio/node_modules/koa-router/lib/router.js:346:16
    at dispatch (/Users/zavr/adc/idio/node_modules/koa-compose/index.js:44:32)
    at /Users/zavr/adc/idio/node_modules/koa-compose/index.js:36:12
    at dispatch (/Users/zavr/adc/idio/node_modules/koa-router/lib/router.js:351:31)
    at dispatch (/Users/zavr/adc/idio/node_modules/koa-compose/index.js:42:32)
    at next (/Users/zavr/adc/idio/node_modules/koa-compose/index.js:43:18)
    at /Users/zavr/adc/idio/middleware/json/index.js:9:11

/* config */
{"ignoredModules": ["koa-compose"]}
/**/

/* expected */
Error: test
    at addArticle (/Users/zavr/adc/idio/controller/article/article.js:49:5)
    at /Users/zavr/adc/idio/node_modules/koa-router/lib/router.js:346:16
    at dispatch (/Users/zavr/adc/idio/node_modules/koa-router/lib/router.js:351:31)
    at /Users/zavr/adc/idio/middleware/json/index.js:9:11
/**/