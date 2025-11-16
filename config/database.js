const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  // For production (Render)
  if (env('NODE_ENV') === 'production') {
    const config = parse(env('DATABASE_URL') || '');
    return {
      connection: {
        client: 'postgresql',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: env.bool('DATABASE_SSL', false),
        },
        pool: {
          min: 0,
          max: 1
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
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};