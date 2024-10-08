const path = require('path');



module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi-database"),
      password: env("DATABASE_PASSWORD", "$trap!123!"),
    },
    useNullAsDefault: true,
  },
});
