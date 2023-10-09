const knex = require('knex')({
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: '22042003',
      database: 'assignment3'
    }
  });
  
module.exports = knex;

