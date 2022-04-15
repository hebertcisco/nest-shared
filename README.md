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

### Usage example:

```ts
#!/usr/bin/env node
import app from './app';
import shared from 'nest-shared';

app.listen(shared.PORT, () => process.stdout.write(`Server is running on port ${shared.PORT}\n`));
```
