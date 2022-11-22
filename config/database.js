module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-3-219-135-162.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd8nm9ioi2sq3g9'),
      user: env('DATABASE_USERNAME', 'zlldmprypxstnb'),
      password: env('DATABASE_PASSWORD', '576985df4e9449bdfdaf5828c9a1c6e98930600b7e5208227185c8e3e57c747b'),
      ssl: {
        rejectUnauthorized: false
    }
    },
  },
});
