const knex = require('knex')({
    client: 'postgres',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'admin',
      password: '22042003',
      database: 'assignment3'
    }
  });
  
module.exports = knex; // Export the Knex instance

app.post('/records', async (req, res) => {
    try {
        const { detail1, detail2 } = req.body; // assuming detail1 and detail2 are the two details coming from the request
        const [newRecord] = await knex('table_name').insert({ detail1, detail2 }).returning('*');
        res.json(newRecord);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

