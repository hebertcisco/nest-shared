[![codecov](https://codecov.io/gh/hebertcisco/nest-shared/branch/master/graph/badge.svg?token=5PBW46PS3R)](https://codecov.io/gh/hebertcisco/nest-shared)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hebertcisco/nest-shared)

[![Node.js Package](https://github.com/hebertcisco/nest-shared/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/hebertcisco/nest-shared/actions/workflows/npm-publish.yml)

## Installation

> Install with yarn or npm: `yarn` or `npm`:

```bash
# yarn
yarn add nest-shared
```

```bash
# npm
npm i nest-shared --save
```

### Import the lib with es6 or cjs:

```mjs
// es6
import shared from 'nest-shared';
```

```cjs
// cjs
const shared = require('nest-shared');
```

### Usage examples:

#### Constants

```ts
#!/usr/bin/env node
import app from './app';
import shared from 'nest-shared';

app.listen(shared.PORT, () => process.stdout.write(`Server is running on port ${shared.PORT}\n`));
```
#### Helpers

##### generateAPIKey

```cjs
#!/usr/bin/env node
const { generateAPIKey } = require("nest-shared");

console.log(generateAPIKey({
    str: 'Hello World', 
    prefix: 'apk', 
    digest: 'hex',
    size: 8 * 8
 })); // "apk_bd5d70d05e0f3e0da3afa0c82a4faccbd6bda99dfe8af7d916739fbbc98a05b3"
```

##### base64Encoder and base64Decoder

```cjs
#!/usr/bin/env node
const { base64Encoder, base64Decoder } = require("nest-shared");

const encoded = base64Encoder('Hello World')
const decoded = base64Decoder(encoded);

console.log(encoded); // "SGVsbG8gV29ybGQ="
console.log(decoded); // "Hello World"
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
