# sql-colorful-prettify

A lightweight SQL colorizer and formatter with no external dependencies.

## Installation

```bash
npm install sql-colorful-prettify
```

## Usage

```typescript
import { colorizeSQL, beautifyAndColorizeSQL, setColorScheme } from 'sql-colorizer';

// Colorize SQL
const colorized = colorizeSQL("SELECT * FROM users WHERE id = 1");

// Beautify and colorize SQL
const beautified = beautifyAndColorizeSQL("SELECT * FROM users WHERE id = 1");

// Customize color scheme
setColorScheme({
  SELECT: '\x1b[31m',  // Red
  FROM: '\x1b[32m',    // Green
  // ... other customizations
});
```

## API

- `colorizeSQL(sql: string): string`: Colorizes the input SQL string.
- `beautifyAndColorizeSQL(sql: string): string`: Formats and colorizes the input SQL string.
- `setColorScheme(scheme: Partial<ColorScheme>): void`: Customizes the color scheme.

## Configuration

You can customize the color scheme by calling `setColorScheme` with a partial color scheme object. The default color scheme can be found in `src/config.ts`.