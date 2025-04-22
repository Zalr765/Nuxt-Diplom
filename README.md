## Setup

Make sure to install the dependencies:

reqwuired node - 18

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```


# Компоненты

## UI

### Card:

| type | props | description |
| ----- | ----- | ----- |
| String | title | Принимает в себя заголовок товара |
| String | subtitle| Принимает в себя цену подзаголвок |
| String | price | Принимает в себя цену товара |
| String | img | Принимает путь до кортинки: 'pathToImg' |
| Boleean | isHover | Принимает путь булевое значение, где true это активация ховера |

### imgCard:

| type | props | description |
| ----- | ----- | ----- |
| String | title | Принимает в себя заголовок товара |
| String | subtitle| Принимает в себя цену подзаголвок |
| String | price | Принимает в себя цену товара |
| String | img | Принимает путь до кортинки: 'pathToImg' |
