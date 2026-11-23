# Database Diagram

A Figma plugin to draw database tables.

Enter a table name in the plugin window and it creates a table on the canvas: a header with the table name, followed by one row per field, with primary key and foreign key markers. It is aimed at people who document a database schema in Figma.

## Table of contents

- [Database Diagram](#database-diagram)
	- [Table of contents](#table-of-contents)
	- [How it works](#how-it-works)
	- [Tech stack](#tech-stack)
	- [Repository structure](#repository-structure)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Running locally](#running-locally)
	- [Useful scripts](#useful-scripts)
	- [Tests and quality](#tests-and-quality)
	- [License](#license)

## How it works

1. **Input**: the plugin opens a small window (`src/ui/index.html`) where the user types a table name.
2. **Message**: clicking Create sends a `create-table` message from the window to the plugin code (`src/index.ts`).
3. **Table creation**: the plugin builds an auto-layout frame made of a `TableHeader` and one `TableField` per field, using the IBM Plex Mono font.
4. **Placement**: the table is appended to the current page, selected, and scrolled into view. The plugin then closes.

The field list is currently hardcoded in `src/index.ts`, and the "Amount of columns" input of the window is not used yet. The plugin only runs in Figma, not in FigJam.

## Tech stack

| Layer | Technologies |
| --- | --- |
| Plugin | Figma Plugin API (`@figma/plugin-typings`), TypeScript |
| UI | Plain HTML and JavaScript |
| Build | webpack 5, `ts-loader`, npm |
| Quality | ESLint, `@typescript-eslint`, `@figma/eslint-plugin-figma-plugins`, `@maxencebonamy/eslint-config` |

## Repository structure

```
.
├── src/
│   ├── components/
│   │   ├── table/          Table frame: header and fields
│   │   ├── table-header/   Header with the table name
│   │   └── table-field/    Field row with primary key and foreign key flags
│   ├── ui/
│   │   └── index.html      Plugin window
│   ├── utils/
│   │   └── figma/          Figma helpers (append and select nodes)
│   └── index.ts            Plugin entry point
├── manifest.json           Figma plugin manifest
├── webpack.config.js       Build configuration
└── tsconfig.json           TypeScript configuration
```

Each component folder contains the component (`*.ts`), its props type (`*.type.ts`) and an `index.ts` re-export. The `@` alias points to `src`.

## Prerequisites

- [Node.js](https://nodejs.org/) with npm
- The [Figma desktop app](https://www.figma.com/downloads/), required to import a plugin from a manifest

## Installation

```bash
git clone git@github.com:maxencebonamy/Database-Diagram-Figma-Plugin.git
cd Database-Diagram-Figma-Plugin
npm install
```

## Running locally

Build the plugin:

```bash
npm run build
```

Or rebuild on every change:

```bash
npm run dev
```

Then, in the Figma desktop app, open Plugins > Development > Import plugin from manifest, and select `manifest.json`. The compiled code is written to `dist/index.js`.

## Useful scripts

| Command | Effect |
| --- | --- |
| `npm run build` | Bundle the plugin with webpack into `dist/` |
| `npm run dev` | Build in watch mode |
| `npm run lint` | Lint `.ts` and `.tsx` files |
| `npm run lint:fix` | Lint with auto-fix |

## Tests and quality

The project has no tests. Code is checked with ESLint:

```bash
npm run lint
```

## License

This project is licensed under the [MIT License](LICENSE).
