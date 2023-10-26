# Local development

## Launch Postgres Docker instance

```bash
docker compose up -d```

## Setup local DB instance

```bash
npx prisma db seed
npx prisma migrate dev
npx prisma db push
```

## Start the local dev server

```bash
npm run dev```

## Profit

早上好中国，现在我有冰淇淋
