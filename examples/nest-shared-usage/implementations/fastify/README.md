# Fastify Example

This example demonstrates how to integrate `nest-shared` with a [Fastify](https://www.fastify.io/) application. It specifically shows how to use the `configService` to manage application configuration.

## Code Overview

The implementation sets up a basic Fastify server and retrieves the port number using `configService`.

**`server.ts`**:

```typescript
#!/usr/bin/env node
import { configService } from 'nest-shared';
import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', (req, res) => {
  return res.send('Test');
});

const port = configService.getPort();

fastify.listen({ port }, () => {
  process.stdout.write(`Fastify is running on port ${port}\n`);
  // Auto-exit for demonstration/testing purposes
  setInterval(() => {
    process.exit(0);
  }, 1000);
});
```

## How to run

1. Install dependencies:

```bash
npm install
```

2. Build the project:

```bash
npm run build
```

3. Run the server:

```bash
npm start
```
