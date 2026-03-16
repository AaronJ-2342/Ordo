# Ordo

A lightweight job queue system for Bun.

> **Note**: This project is in early development and not yet functional.

## Goals

- **Redis Integration**: Use Redis for job persistence and message passing.
- **Worker Support**: Simple interface for processing jobs across multiple workers.
- **Job Retries**: Automatic retries with backoff strategies.
- **Type Safety**: Full TypeScript support.

## Usage (Planned)

```typescript
import { Ordo } from "ordo";

const ordo = new Ordo();

await ordo.add({ name: "register", data: "payload" });

// Subject to change....
ordo.process("register", async (job) => {
  // Logic here
});
```

## Development

```bash
bun install
```
