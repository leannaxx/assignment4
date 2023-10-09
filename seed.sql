
INSERT INTO Events (EventID, EventName, EventDate, Location, MainEventFightID)
VALUES
    (1, 'UFC 1', '1993-11-12', 'Irvine, california', 1),
    (2, 'UFC 2', '2009-07-11', 'Las Vegas, Nevada', 2);

INSERT INTO Fighters (FighterID, FirstName, LastName, Nickname, WeightClass, Country, EventID)
VALUES
    (1, 'Anderson', 'Silva', 'The Spider', 'Middleweight', 'Brazil', 2),
    (2, 'Georges', 'St-Pierre', 'GSP', 'Welterweight', 'Canada', 2);

INSERT INTO NewsArticles (ArticleID, Title, Author, PublicationDate, Content, EventID, FighterID)
VALUES
    (1, 'The news of the 30/09/2023', 'Nael', '19931113', 'A lot happened this week, lets check it out together', 1, NULL),
    (2, 'Who will win this year?', 'CLarisse', '20200520', 'The best fighters are in competition, who will win?', 2, 2);

INSERT INTO Comments (CommentID, ArticleID, CommenterNickname, CommentDate, CommentText)
VALUES
    (1, 1, 'FARES', '20230521', 'COOL FIGHT BROS'),
    (2, 2, 'ARTHUR', '20230522', 'i love mma');
