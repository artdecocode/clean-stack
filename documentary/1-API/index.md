
## API

The package is available by importing its default function:

```js
import cleanStack from '@artdeco/clean-stack'
```

```## cleanStack
[
  ["stack", "string"],
  ["options?", "Config"]
]
```

%TYPEDEF types/index.xml%

Remove unuseful internal Node.js lines from the error stack. Any other modules to ignore can be passed in the `ignoreModules` option.

%EXAMPLE: example/example.js, ../src => @artdeco/clean-stack%

%FORK example example/example%
