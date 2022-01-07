module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f7ae189dc68683f942f38fde4c9cd4f'),
  },
});
