CREATE TABLE Events (
    EventID INT PRIMARY KEY,
    EventName VARCHAR(100),
    EventDate DATE,
    Location VARCHAR(100),
    MainEventFightID INT
);

CREATE TABLE Fighters (
    FighterID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Nickname VARCHAR(50),
    WeightClass VARCHAR(50),
    Country VARCHAR(50),
    EventID INT,
    FOREIGN KEY (EventID) REFERENCES Events(EventID)
);

CREATE TABLE NewsArticles (
    ArticleID INT PRIMARY KEY,
    Title VARCHAR(255),
    Author VARCHAR(100),
    PublicationDate DATE,
    Content TEXT,
    EventID INT,
    FighterID INT,
    FOREIGN KEY (EventID) REFERENCES Events(EventID),
    FOREIGN KEY (FighterID) REFERENCES Fighters(FighterID)
);


CREATE TABLE Comments (
    CommentID INT PRIMARY KEY,
    ArticleID INT,
    CommenterNickname VARCHAR(100),
    CommentDate INT,
    CommentText TEXT,
    FOREIGN KEY (ArticleID) REFERENCES NewsArticles(ArticleID)
);

