# Local development

## Launch Postgres Docker instance

```docker compose up -d```

## Setup local DB instance

```
npx prisma db seed
npx prisma migrate dev
npx prisma db push
```

## Start the local dev server

```npm run dev```

## Profit

$$$