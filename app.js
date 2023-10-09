const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());

app.all('*', (req, res) => {
    const request = req.originalUrl;

    const jsonResponse = {
        message: `you requested the path number: ${request}`,
    };

    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server is active. port : ${port}`);
});

module.exports = app;
// Path: knex.js

app.post('/api/createComment', (req, res) => {
    const { ArticleID, CommenterNickname, CommentDate, CommentText } = req.body;
    knex('Comments')
        .insert({
            ArticleID,
            CommenterNickname,
            CommentDate,
            CommentText
        })
        .returning(['CommentID', 'ArticleID', 'CommenterNickname', 'CommentDate', 'CommentText'])
        .then((insertedRecords) => {
            const newComment = insertedRecords[0];
            res.json(newComment);
            console.log("data inserted");
        })
        .catch((error) => {
            console.error('Error inserting comment:', error);
            res.status(500).json({ error: 'Failed to insert comment' });
        });
});

/*app.get('/api/searchFighters', (req, res) => {
    const searchTerm = req.query.firstName; // Extract the search term from the query parameters (e.g., ?firstName=...)

    // Use Knex to perform a wildcard text search using LIKE on the FirstName attribute
    knex('Fighters')
        .where('FirstName', 'like', `%${searchTerm}%`)
        .select('FighterID', 'FirstName', 'LastName', 'Nickname', 'WeightClass', 'Country', 'EventID')
        .then((searchResults) => {
            res.json(searchResults); // Send the search results as a JSON response
        })
        .catch((error) => {
            console.error('Error searching for fighters:', error);
            res.status(500).json({ error: 'Failed to perform search' });
        });
});
*/