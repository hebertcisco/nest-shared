<div align="center">
  <img src=".github/images/nest-shared-icon.png" alt="Nest Shared Logo" width="120" height="120">
  <h1>Nest Shared</h1>
  <p><strong>Shared helpers, contracts and configuration utilities for NestJS/TypeScript projects</strong></p>
  
  <div>
    <a href="https://codecov.io/gh/hebertcisco/nest-shared">
      <img src="https://codecov.io/gh/hebertcisco/nest-shared/branch/main/graph/badge.svg?token=5PBW46PS3R" alt="Code Coverage">
    </a>
    <a href="https://github.com/hebertcisco/nest-shared/actions/workflows/npm-publish.yml">
      <img src="https://github.com/hebertcisco/nest-shared/actions/workflows/npm-publish.yml/badge.svg" alt="Node.js Package">
    </a>
    <a href="https://github.com/hebertcisco/nest-shared/actions/workflows/coverage.yml">
      <img src="https://github.com/hebertcisco/nest-shared/actions/workflows/coverage.yml/badge.svg" alt="Running Code Coverage">
    </a>
    <a href="https://www.npmjs.com/package/nest-shared">
      <img src="https://img.shields.io/npm/v/nest-shared.svg" alt="npm version">
    </a>
    <a href="https://github.com/hebertcisco/nest-shared/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/hebertcisco/nest-shared.svg" alt="License">
    </a>
  </div>
</div>

## 📖 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Requirements](#-requirements)
- [Quick Start](#-quick-start)
- [Usage Examples](#-usage-examples)
- [API Documentation](#-api-documentation)
- [File Structure](#-file-structure)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)

## ✨ Features

- **🔧 Configuration Management**: Centralized configuration service for your NestJS applications
- **🔐 Cryptographic Utilities**: Base64 encoding/decoding, API key generation, UUID validation
- **📦 Helper Functions**: Time utilities, math functions, file operations, HTTP helpers
- **🏗️ Base Contracts**: Reusable interfaces and abstract classes for common patterns
- **🧪 Testing Support**: Built-in testing utilities and mocks
- **📋 Constants**: Predefined constants for common use cases
- **🚀 Framework Agnostic**: Works with Express, Fastify, and other Node.js frameworks
- **📦 TypeScript First**: Full TypeScript support with comprehensive type definitions
- **🔍 Well Tested**: Comprehensive test coverage with Jest

## 📦 Installation

```bash
# npm
npm install nest-shared

# yarn  
yarn add nest-shared

# pnpm
pnpm add nest-shared
```

## 📋 Requirements

- **Node.js**: >= 20.18.1
- **TypeScript**: >= 5.9
- **npm**: >= 10.8.2

## 🚀 Quick Start

### ES Modules (Recommended)

```typescript
import { configService, generateAPIKey, encode } from 'nest-shared';

// Configuration
const port = configService.getPort();

// Cryptography
const apiKey = generateAPIKey({ str: 'my-app', prefix: 'app', size: 32 });
const encoded = encode({ text: 'hello world' });
```

### CommonJS

```typescript
const { configService, generateAPIKey, encode } = require('nest-shared');

const port = configService.getPort();
const apiKey = generateAPIKey({ str: 'my-app', prefix: 'app', size: 32 });
const encoded = encode({ text: 'hello world' });
```

## 📖 Usage Examples

### Configuration Management

```typescript
import { configService } from 'nest-shared';

const port = configService.getPort(); // Default: 4000
const nodeEnv = configService.getNodeEnv(); // 'development' | 'production' | 'test'
const customValue = configService.get('CUSTOM_KEY', 'default-value');
```

#### Framework Integration

```typescript
// Express.js
import express from 'express';
import { configService } from 'nest-shared';

const app = express();
const port = configService.getPort();

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));

// Fastify
import Fastify from 'fastify';
const fastify = Fastify({ logger: true });
await fastify.listen({ port: configService.getPort() });
```

### Constants

```typescript
import { NODE_PORT, CACHE_TTL, VALID_UUID_REGEX } from 'nest-shared';

console.log('Port:', NODE_PORT); // 4000
console.log('Cache TTL:', CACHE_TTL); // 3600
console.log('UUID Valid:', VALID_UUID_REGEX.test('28aebbd6-173b-4375-99eb-56dc04ec2bcb'));
```

### Cryptographic Utilities

```typescript
import { generateAPIKey, encode, decode, randomUUID, validateUUID } from 'nest-shared';

// API Key Generation
const apiKey = generateAPIKey({ str: 'my-app', prefix: 'app', size: 32 });
// app_3f4a9b2c1d5e6f7g8h9i0j1k2l3m4n5o

// Base64 Encoding
const encoded = encode({ text: 'Hello World!' }); // SGVsbG8gV29ybGQh
const decoded = decode({ text: encoded }); // Hello World!

// UUID Utilities
const uuid = randomUUID(); // f47ac10b-58cc-4372-a567-0e02b2c3d479
const isValid = validateUUID(uuid); // true
```

### Helper Functions

```typescript
import { RandomNumber, sum, formatDate, addDays, axiosErrorHandler } from 'nest-shared';

// Math
const random = RandomNumber(1, 100);
const total = sum([1, 2, 3, 4, 5]); // 15

// Time
const today = new Date();
const formatted = formatDate(today, 'YYYY-MM-DD');
const futureDate = addDays(today, 7);

// HTTP
const response = await axios.get('/api/data').catch(axiosErrorHandler);
```

### Buffer Base Implementation

```typescript
import { BufferBase } from 'nest-shared';
import { Buffer } from 'buffer';

class CustomBuffer implements BufferBase {
  encode(data: string | Buffer): string {
    return Buffer.from(data).toString('base64');
  }
  
  decode(str: string): string {
    return Buffer.from(str, 'base64').toString('utf-8');
  }
}
```

## 📚 API Documentation

### Configuration Service (`configService`)

| Method | Description | Return Type | Example |
|--------|-------------|-------------|---------|
| `getPort()` | Get application port number | `number` | `configService.getPort()` // 4000 |
| `getNodeEnv()` | Get Node.js environment | `NodeEnvType` | `configService.getNodeEnv()` // 'development' |
| `get(key, defaultValue?)` | Get configuration value by key | `T \| undefined` | `configService.get('DB_HOST', 'localhost')` |

### File Service (`FileService`)

Initialize with `{ AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY }`.

| Method | Description | Parameters | Return Type |
|--------|-------------|------------|-------------|
| `filesInterceptor(args)` | Create NestJS FilesInterceptor for S3 | `FilesInterceptorInterfaceArgs` | `Type<NestInterceptor>` |
| `getS3FileURL(req)` | Get uploaded file URL from request | `Request` | `URL \| null` |
| `getS3FileKey(req)` | Get uploaded file Key from request | `Request` | `string \| null` |
| `getSignedUrl(key, expires, bucket)` | Generate presigned URL | `string, number, string` | `Promise<URL>` |

### Cryptographic Utilities

| Function | Description | Parameters | Return Type |
|----------|-------------|------------|-------------|
| `generateAPIKey(options)` | Generate secure API key | `{ str, prefix?, digest?, size? }` | `string` |
| `encode(options)` | Base64 encode text | `{ text }` | `string` |
| `decode(options)` | Base64 decode text | `{ text }` | `string` |
| `validateUUID(uuid)` | Validate UUID format | `string` | `boolean` |
| `randomUUID()` | Generate random UUID | - | `string` |

### Helper Functions

| Function | Description | Parameters | Return Type |
|----------|-------------|------------|-------------|
| `RandomNumber(min, max)` | Generate random number | `number, number` | `number` |
| `sum(numbers)` | Sum array of numbers | `number[]` | `number` |
| `formatDate(date, format)` | Format date | `Date, string` | `string` |
| `addDays(date, days)` | Add days to date | `Date, number` | `Date` |
| `parseQueryParams(query)` | Parse query string | `string` | `Record<string, string>` |
| `axiosErrorHandler(error)` | Handle Axios errors | `any` | `void` |

### Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `NODE_PORT` | `4000` | Default application port |
| `CACHE_TTL` | `3600` | Cache TTL in seconds (1 hour) |
| `CACHE_TTL_50_SEC` | `50` | Cache TTL in seconds (50 seconds) |
| `WEBSOCKET_PORT` | `4001` | Default WebSocket port |
| `API_HEADER_OPTIONS` | `[]` | Default API header options |
| `VALID_UUID_REGEX` | `RegExp` | UUID validation regex |

## 📁 File Structure

```
nest-shared/
├── src/
│   ├── config/                    # Configuration management
│   │   ├── application.config.ts  # Main configuration service
│   │   └── index.ts              # Config exports
│   ├── modules/                   # Feature modules
│   │   └── file/                 # File handling module
│   │       ├── interfaces/       # File interfaces
│   │       ├── services/         # File services
│   │       └── types/            # File types
│   └── shared/                    # Shared utilities
│       ├── constants/            # Application constants
│       ├── contract/             # Base contracts and interfaces
│       │   ├── base/             # Base classes
│       │   ├── entity/           # Common entities
│       │   ├── interfaces/       # Shared interfaces
│       │   └── types/            # TypeScript types
│       ├── helpers/              # Utility functions
│       │   ├── class/            # Class utilities
│       │   ├── crypto/           # Cryptographic utilities
│       │   ├── fs/               # File system utilities
│       │   ├── http/             # HTTP utilities
│       │   ├── math/             # Math utilities
│       │   └── time/             # Time utilities
│       └── testing/              # Testing utilities
├── examples/                      # Usage examples
├── lib/                          # Compiled JavaScript
└── docs/                         # Documentation
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contributing Steps

1. **Fork the repository**
2. **Clone your fork**: `git clone https://github.com/your-username/nest-shared.git`
3. **Install dependencies**: `npm install`
4. **Create a feature branch**: `git checkout -b feature/amazing-feature`
5. **Make your changes and test**: `npm test`
6. **Commit and push**: `git commit -m "feat: add amazing feature"`
7. **Open a Pull Request**

### Development Commands

```bash
npm test          # Run tests
npm run test:cov  # Run tests with coverage
npm run lint      # Run linting
npm run format    # Format code
npm run build     # Build project
```

## 💖 Support

If you find this project helpful:

- ⭐ **Give a Star** on GitHub
- ☕ [Buy Me a Coffee](https://www.buymeacoffee.com/hebertcisco)
- 🐦 **Share** with your team and community

## 📄 License

Copyright © 2023–2026 [hebertcisco](https://github.com/hebertcisco).

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <p><strong>Made with ❤️ for the NestJS community</strong></p>
  <p>
    <a href="https://github.com/hebertcisco/nest-shared">⭐ Star this repo</a>
    •
    <a href="https://github.com/hebertcisco/nest-shared/issues">🐛 Report bugs</a>
    •
    <a href="https://github.com/hebertcisco/nest-shared/issues">💡 Request features</a>
  </p>
</div>