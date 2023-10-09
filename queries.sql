-- this query shows an event
SELECT
    e.EventName,
    e.EventDate,
    e.Location,
    f.FirstName AS MainEventFighterFirstName,
    f.LastName AS MainEventFighterLastName,
    f.Nickname AS MainEventFighterNickname
FROM Events AS e
JOIN Fighters AS f ON e.MainEventFightID = f.FighterID
WHERE e.EventID = 1;

-- this query shows a news article
SELECT
    Title AS ArticleTitle,
    Author AS ArticleAuthor
FROM NewsArticles;

-- this query shows some informations about fighters.
SELECT
    CONCAT(FirstName, ' ', LastName) AS FighterName,
    WeightClass,
    Country,
    e.EventName AS EventParticipated
FROM Fighters AS f
JOIN Events AS e ON f.EventID = e.EventID;

-- this query shows comments
SELECT
    c.CommenterNickname,
    na.Title AS ArticleTitle,
    c.CommentText
FROM Comments AS c
JOIN NewsArticles AS na ON c.ArticleID = na.ArticleID;
