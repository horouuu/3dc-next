# Local development:

## 1. Launch Postgres Docker instance:

```docker compose up -d```

## 2. Setup local DB instance:

```
npx prisma db seed
npx prisma migrate dev
npx prisma db push
```

## 3. Start the local dev server:

```npm run dev```

## 4. Profit $$$