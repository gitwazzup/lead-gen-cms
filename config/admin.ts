export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '892d49d292ee05e060c70f44870cecd9'),
  },
});
