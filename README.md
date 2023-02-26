[![codecov](https://codecov.io/gh/hebertcisco/nest-shared/branch/main/graph/badge.svg?token=5PBW46PS3R)](https://codecov.io/gh/hebertcisco/nest-shared)

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
import type { EncodeDataType, DecodeStrType } from 'nest-shared/lib/shared/types/buffer.type';

console.log(BufferBase.name); // BufferBase

class BufferBaseImpl implements BufferBase {
  encode(data: EncodeDataType): string {
    return Buffer.from(data).toString('base64');
  }
  decode(str: DecodeStrType): string {
    return Buffer.from(str, 'utf-8').toString('utf-8');
  }
}

const bufferBaseImpl = new BufferBaseImpl();

const content = 'Hello World!';

console.log(bufferBaseImpl.encode(content)); // SGVsbG8gV29ybGQh
console.log(bufferBaseImpl.decode(content)); // Hello World!
```

### File structure

```text
├── src
│   ├── common
│   │   ├── base
│   │   │   ├── buffer-base.ts
│   │   │   ├── class-base.ts
│   │   │   ├── crud-base.ts
│   │   ├── constants
│   │   │   ├── global.constants.ts
│   │   │   └── regex.constants.ts
│   │   ├── entity
│   │   │   ├── global-common.entity.ts
│   │   │   └── user.common.entity.ts
│   │   └── interfaces
│   │       ├── app-service.interface.ts
│   │       ├── http.responses.interface.ts
│   │       └── type-orm.interface.ts
│   ├── config
│   │   ├── application.config.ts
│   ├── modules
│   │   ├── file
│   │   │   ├── interfaces
│   │   │   │   ├── file.interface.ts
│   │   │   ├── services
│   │   │   │   ├── file.service.ts
│   │   │   └── types
│   │   │       └── file.type.ts
│   ├── shared
│   │   ├── helpers
│   │   │   ├── class
│   │   │   │   ├── getKeyFromClass.ts
│   │   │   ├── crypto
│   │   │   │   ├── Base64.ts
│   │   │   │   ├── generateAPIKey.ts
│   │   │   ├── fs
│   │   │   │   └── parseFile.ts
│   │   │   ├── http
│   │   │   │   ├── axiosErrorHandler.ts
│   │   │   │   ├── handleWithAxiosResponse.ts
│   │   │   │   └── parseQueryParams.ts
│   │   │   ├── math
│   │   │   │   ├── RandomNumber.ts
│   │   │   │   └── sum.ts
│   │   │   └── time
│   │   │       ├── date-handle.ts
│   │   └── types
│   │       ├── buffer.type.ts
│   │       ├── class.type.ts
│   │       ├── crud-base.type.ts
│   └── @types
│       └── unique-slug
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

Copyright © 2023 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
