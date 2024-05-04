// config/database.js

module.exports = ({env}) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "mydatabase"),
        username: env("DATABASE_USERNAME", "myusername"),
        password: env("DATABASE_PASSWORD", "mypassword"),
      },
      options: {},
    },
  },
});
