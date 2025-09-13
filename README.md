[![codecov](https://codecov.io/gh/hebertcisco/nest-shared/branch/main/graph/badge.svg?token=5PBW46PS3R)](https://codecov.io/gh/hebertcisco/nest-shared)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hebertcisco/nest-shared)

[![Node.js Package](https://github.com/hebertcisco/nest-shared/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/hebertcisco/nest-shared/actions/workflows/npm-publish.yml)

[![Running Code Coverage](https://github.com/hebertcisco/nest-shared/actions/workflows/coverage.yml/badge.svg)](https://github.com/hebertcisco/nest-shared/actions/workflows/coverage.yml)

[![📝 Update Lock](https://github.com/hebertcisco/nest-shared/actions/workflows/update-lock.yml/badge.svg)](https://github.com/hebertcisco/nest-shared/actions/workflows/update-lock.yml)

Shared helpers, contracts and configuration utilities for NestJS/TypeScript projects.

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

### Requirements

- Node.js >= 20.18.1
- TypeScript >= 5.9

### Import the lib with ES Modules or CommonJS:

```mjs
// es6
import shared from 'nest-shared';
```

```cjs
// cjs
const shared = require('nest-shared');
```

### Usage examples

### Express usage

```ts
#!/usr/bin/env node
import { configService } from 'nest-shared';
import express, { Router } from 'express';

const app = express();
const router = Router();

router.get('/', (req, res) => {
  return res.send('Test');
});

app.use(router);
const port = configService.getPort();

app.listen(port, () => {
  process.stdout.write(`Server is running on port ${port}\n`);
});
```

#### Constants

```ts
#!/usr/bin/env node
import {
  NODE_PORT,
  CACHE_TTL,
  CACHE_TTL_50_SEC,
  API_HEADER_OPTIONS,
  WEBSOCKET_PORT,
  VALID_UUID_REGEX,
} from 'nest-shared';

console.log('NODE_PORT', NODE_PORT); // 4000
console.log('CACHE_TTL', CACHE_TTL); // 3600
console.log('CACHE_TTL_50_SEC', CACHE_TTL_50_SEC); // 50
console.log('API_HEADER_OPTIONS', API_HEADER_OPTIONS); // []
console.log('WEBSOCKET_PORT', WEBSOCKET_PORT); // 4001
console.log('VALID_UUID_REGEX', VALID_UUID_REGEX.test('28aebbd6-173b-4375-99eb-56dc04ec2bcb')); // true
```

#### Helpers

##### generateAPIKey

```ts
#!/usr/bin/env node
import { generateAPIKey } from 'nest-shared';

const api_key = generateAPIKey({
  str: 'Hello World',
  prefix: 'apk',
  digest: 'hex',
  size: 32,
});
console.log('api_key', api_key); // apk_f9cfa3c29500449828aebc910ce1d328
```

##### YourClass implements BufferBase

```ts
#!/usr/bin/env node
import { BufferBase } from 'nest-shared';
import { Buffer } from 'buffer';
// Types are available via a deep import (barrels exclude this to avoid bloat)
import type {
  EncodeDataType,
  DecodeStrType,
} from 'nest-shared/lib/shared/contract/types/buffer.type';

console.log(BufferBase.name); // BufferBase

class BufferBaseImpl implements BufferBase {
  encode(data: EncodeDataType): string {
    return Buffer.from(data).toString('base64');
  }
  decode(str: DecodeStrType): string {
    // example: decoding from base64 into utf-8
    return Buffer.from(str, 'base64').toString('utf-8');
  }
}

const bufferBaseImpl = new BufferBaseImpl();

const content = 'Hello World!';
const encoded = bufferBaseImpl.encode(content);
console.log(encoded); // SGVsbG8gV29ybGQh
console.log(bufferBaseImpl.decode(encoded)); // Hello World!

```

##### Base64 helper

```ts
import { encode, decode, validateUUID, randomUUID } from 'nest-shared';

const b64 = encode({ text: 'hello' });
console.log(b64); // aGVsbG8=
console.log(decode({ text: b64 })); // hello

console.log(validateUUID(randomUUID)); // true
```

### File structure

```text
├── src
│   ├── config
│   │   └── application.config.ts
│   ├── modules
│   │   └── file
│   │       ├── interfaces
│   │       ├── services
│   │       └── types
│   └── shared
│       ├── constants
│       ├── contract
│       │   ├── base
│       │   ├── entity
│       │   ├── interfaces
│       │   └── types
│       └── helpers
│           ├── class
│           ├── crypto
│           ├── fs
│           ├── http
│           ├── math
│           └── time
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check the [issues page](https://github.com/hebertcisco/nest-shared/issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2023–2025 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
