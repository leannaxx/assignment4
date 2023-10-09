const app = require('./app');
const knex = require('./knex'); 

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is active. port : ${port}`);
});
