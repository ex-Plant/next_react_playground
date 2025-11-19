1. npm i prisma
2. get connection string
3. npx prisma init
4. create first model
5. npx prisma migrate to push changes in the model to the db
6. npx prisma db pull to pull changes from the db for example if you edit tables from supabase or neon ui
7. npx prisma studio - to see local db

- prisma.Users.count
- prisma.Users.

const data = await prisma.Users.findMany({
where: {
name: 'John'
},
take: 10,
skip: (page - 1) ) \* 10
})

const count = await prisma.Users.count()

npx prisma migrate dev (or npx prisma migrate)

Applies changes in your schema.prisma to your actual database by creating and running SQL migrations.
Updates the database structure (tables, columns, relations, etc.).
Also runs npx prisma generate automatically after a successful migration.
npx prisma generate

Only generates or updates the Prisma Client code based on your schema.prisma.
Does NOT change your database structure.
Used when you want to refresh the client after schema changes, db pull, or migrations.
Summary:

migrate = changes your database, and updates the client.

**seed**
`prisma/seed.ts`

- to make seed work in next js app we need to add this command
  "seed": "ts-node --compiler-options '{\"module\":\"CommonJs\"}' prisma/seed.ts"
