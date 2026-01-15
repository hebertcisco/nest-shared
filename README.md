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

### Using npm

```bash
npm install nest-shared
```

### Using yarn

```bash
yarn add nest-shared
```

### Using pnpm

```bash
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

// Use configuration service
const port = configService.getPort();

// Generate API key
const apiKey = generateAPIKey({
  str: 'my-app',
  prefix: 'app',
  size: 32
});

// Base64 encoding
const encoded = encode({ text: 'hello world' });
```

### CommonJS

```typescript
const { configService, generateAPIKey, encode } = require('nest-shared');

// Same functionality as above
const port = configService.getPort();
const apiKey = generateAPIKey({ str: 'my-app', prefix: 'app', size: 32 });
const encoded = encode({ text: 'hello world' });
```

### Import the lib with ES Modules or CommonJS:

```mjs
// es6
import shared from 'nest-shared';
```

```cjs
// cjs
const shared = require('nest-shared');
```

## 📖 Usage Examples

### Configuration Management

The `configService` provides centralized configuration management for your application:

```typescript
import { configService } from 'nest-shared';

// Get application port
const port = configService.getPort(); // Default: 4000

// Get Node environment
const nodeEnv = configService.getNodeEnv(); // 'development' | 'production' | 'test'

// Get custom configuration values
const customValue = configService.get('CUSTOM_KEY', 'default-value');
```

#### Express.js Integration

```typescript
import express from 'express';
import { configService } from 'nest-shared';

const app = express();
const port = configService.getPort();

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!', port });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
```

#### Fastify Integration

```typescript
import Fastify from 'fastify';
import { configService } from 'nest-shared';

const fastify = Fastify({ logger: true });
const port = configService.getPort();

fastify.get('/', async (request, reply) => {
  return { message: 'Fastify server is running!', port };
});

const start = async () => {
  try {
    await fastify.listen({ port });
    console.log(`⚡ Fastify server running on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
```

### Constants

Pre-defined constants for common use cases:

```typescript
import {
  NODE_PORT,
  CACHE_TTL,
  CACHE_TTL_50_SEC,
  API_HEADER_OPTIONS,
  WEBSOCKET_PORT,
  VALID_UUID_REGEX,
} from 'nest-shared';

console.log('Application Port:', NODE_PORT); // 4000
console.log('Cache TTL (1 hour):', CACHE_TTL); // 3600
console.log('Cache TTL (50 seconds):', CACHE_TTL_50_SEC); // 50
console.log('API Header Options:', API_HEADER_OPTIONS); // []
console.log('WebSocket Port:', WEBSOCKET_PORT); // 4001
console.log('UUID Validation:', VALID_UUID_REGEX.test('28aebbd6-173b-4375-99eb-56dc04ec2bcb')); // true
```

### Cryptographic Utilities

#### API Key Generation

```typescript
import { generateAPIKey } from 'nest-shared';

// Basic API key generation
const apiKey = generateAPIKey({
  str: 'my-application',
  prefix: 'app',
  size: 32,
});
console.log(apiKey); // app_3f4a9b2c1d5e6f7g8h9i0j1k2l3m4n5o

// Advanced API key with custom digest
const secureKey = generateAPIKey({
  str: 'secure-data',
  prefix: 'sec',
  digest: 'hex',
  size: 64,
});
console.log(secureKey); // sec_a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2
```

#### Base64 Encoding/Decoding

```typescript
import { encode, decode } from 'nest-shared';

// Encode text to Base64
const encoded = encode({ text: 'Hello World!' });
console.log(encoded); // SGVsbG8gV29ybGQh

// Decode Base64 back to text
const decoded = decode({ text: encoded });
console.log(decoded); // Hello World!

// Encode JSON data
const jsonData = { user: 'john', role: 'admin' };
const encodedJson = encode({ text: JSON.stringify(jsonData) });
console.log(encodedJson); // eyJ1c2VyIjoiam9obiIsInJvbGUiOiJhZG1pbiJ9
```

#### UUID Utilities

```typescript
import { validateUUID, randomUUID } from 'nest-shared';

// Generate random UUID
const newUUID = randomUUID();
console.log(newUUID); // f47ac10b-58cc-4372-a567-0e02b2c3d479

// Validate UUID format
const isValid = validateUUID('f47ac10b-58cc-4372-a567-0e02b2c3d479');
console.log(isValid); // true

const isInvalid = validateUUID('not-a-uuid');
console.log(isInvalid); // false
```

### Buffer Base Implementation

Create custom buffer implementations using the `BufferBase` contract:

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

const customBuffer = new CustomBuffer();

const originalText = 'Secret Message!';
const encodedText = customBuffer.encode(originalText);
const decodedText = customBuffer.decode(encodedText);

console.log('Original:', originalText); // Secret Message!
console.log('Encoded:', encodedText);   // U2VjcmV0IE1lc3NhZ2Uh
console.log('Decoded:', decodedText);   // Secret Message!
```

### Helper Functions

#### Time Utilities

```typescript
import { formatDate, addDays } from 'nest-shared';

const today = new Date();
const formatted = formatDate(today, 'YYYY-MM-DD');
console.log(formatted); // 2024-01-15

const futureDate = addDays(today, 7);
console.log(futureDate); // Date object 7 days from now
```

#### Math Utilities

```typescript
import { RandomNumber, sum } from 'nest-shared';

// Generate random number between 1 and 100
const random = RandomNumber(1, 100);
console.log(random); // e.g., 42

// Sum array of numbers
const total = sum([1, 2, 3, 4, 5]);
console.log(total); // 15
```

#### HTTP Utilities

```typescript
import { axiosErrorHandler, parseQueryParams } from 'nest-shared';

// Handle Axios errors
const response = await axios.get('/api/data').catch(axiosErrorHandler);

// Parse query parameters
const queryString = 'page=1&limit=10&sort=name';
const params = parseQueryParams(queryString);
console.log(params); // { page: '1', limit: '10', sort: 'name' }
```

## 📚 API Documentation

### Configuration Service (`configService`)

| Method | Description | Return Type | Example |
|--------|-------------|-------------|---------|
| `getPort()` | Get application port number | `number` | `configService.getPort()` // 4000 |
| `getNodeEnv()` | Get Node.js environment | `NodeEnvType` | `configService.getNodeEnv()` // 'development' |
| `get(key, defaultValue?)` | Get configuration value by key | `T \| undefined` | `configService.get('DB_HOST', 'localhost')` |

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

We welcome contributions from the community! Here's how you can help:

### 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/nest-shared.git
   cd nest-shared
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```

### 🛠️ Development Workflow

1. **Make your changes** to the codebase
2. **Run tests** to ensure everything works:
   ```bash
   npm test
   ```
3. **Run linting** to check code quality:
   ```bash
   npm run lint
   ```
4. **Format your code**:
   ```bash
   npm run format
   ```
5. **Build the project**:
   ```bash
   npm run build
   ```

### 📋 Submitting Changes

1. **Commit your changes** with a clear message:
   ```bash
   git commit -m "feat: add amazing new feature"
   ```
2. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```
3. **Open a Pull Request** on GitHub

### 🎯 What We're Looking For

- **Bug fixes** and **performance improvements**
- **New features** that align with the project's goals
- **Documentation improvements**
- **Test coverage** improvements
- **Examples** and **use cases**

### 📏 Code Standards

- Follow the existing **code style** and **conventions**
- Write **meaningful commit messages** following [Conventional Commits](https://www.conventionalcommits.org/)
- Add **tests** for new features
- Update **documentation** as needed
- Ensure **TypeScript types** are properly defined

### 🐛 Reporting Issues

Found a bug or have a feature request? Please check our [issues page](https://github.com/hebertcisco/nest-shared/issues) first to avoid duplicates. When reporting issues, please include:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Environment details** (Node.js version, OS, etc.)
- **Code samples** if applicable

## 💖 Support

If you find this project helpful, please consider supporting it:

### ⭐ Give a Star

Show your support by giving this repository a ⭐ on GitHub!

### ☕ Buy Me a Coffee

Help fuel development by buying me a coffee:

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" alt="Buy Me A Coffee" style="max-width: 100%;">
</a>

### 🌟 Spread the Word

Share this project with others who might find it useful!

- ⭐ **Star** the repository
- 🐦 **Tweet** about it
- 📧 **Share** with your team
- 📝 **Blog** about your experience

## 📄 License

Copyright © 2023–2026 [hebertcisco](https://github.com/hebertcisco).

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

### 📋 License Summary

You are free to:
- ✅ **Use** the software for any purpose
- ✅ **Modify** the software
- ✅ **Distribute** the software
- ✅ **Use** the software commercially

Under the following conditions:
- 📄 **License and copyright notice** must be included

### 🙏 Acknowledgments

- Thanks to all [contributors](https://github.com/hebertcisco/nest-shared/contributors) who have helped make this project better
- Special thanks to the [NestJS](https://nestjs.com/) team for creating such an amazing framework
- Gratitude to the TypeScript team for providing excellent type safety

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
