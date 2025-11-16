const path = require('path');

module.exports = ({ env }) => {
  // For production on Render
  if (env('NODE_ENV') === 'production') {
    return {
      connection: {
        client: 'postgresql',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi'),
          user: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'strapi'),
          ssl: env.bool('DATABASE_SSL', false),
        },
        debug: false,
      },
    };
  }

  // For development (SQLite)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};