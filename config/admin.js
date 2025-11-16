module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fallback-secret-123'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'fallback-salt-123'),
  },
});