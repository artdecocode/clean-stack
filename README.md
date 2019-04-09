# @artdeco/clean-stack

[![npm version](https://badge.fury.io/js/%40artdeco%2Fclean-stack.svg)](https://npmjs.org/package/@artdeco/clean-stack)

`@artdeco/clean-stack` is a fork of clean-stack to remove internal Node.js lines from error stacks, as well as lines from specific modules.

```sh
yarn add -E @artdeco/clean-stack
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`cleanStack(stack: string, options?: Config)`](#cleanstackstack-stringoptions-config-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

## API

The package is available by importing its default function:

```js
import cleanStack from '@artdeco/clean-stack'
```

## `cleanStack(`<br/>&nbsp;&nbsp;`stack: string,`<br/>&nbsp;&nbsp;`options?: Config,`<br/>`): void`

__<a name="type-config">`Config`</a>__: Options for the program.

|     Name      |         Type          |                          Description                          |    Default    |
| ------------- | --------------------- | ------------------------------------------------------------- | ------------- |
| pretty        | _boolean_             | Replace the absolute path to the home directory with the `~`. | `false`       |
| ignoreModules | _Array&lt;string&gt;_ | Which modules to ignore in the path.                          | `['pirates']` |

Remove unuseful internal _Node.JS_ lines from the error stack. Any other modules to ignore can be passed in the `ignoreModules` option.

```js
/* yarn example/ */
import cleanStack from '@artdeco/clean-stack'

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
```

```
Error: test
    at Object.<anonymous> (/Users/zavr/adc/clean-stack/i2.js:1:69)
```

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco
