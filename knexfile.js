// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: '22042003',
      database: 'assignment3',
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'assignment3',
      user:     'postgres',
      password: '22042003'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'assignment3',
      user:     'postgres',
      password: '22042003'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
