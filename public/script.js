document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('surprise');
    const response1 = document.getElementById('response');

    button.addEventListener('click', () => {
        const randomnb = Math.floor(Math.random() * 100);
        fetch(`${randomnb}`)
            .then((response) => response.json())
            .then((data) => {
                response1.innerHTML = ` ${data.message}`;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});

commentNumber = 2;
function fillBoxes() {
    commentNumber = +1;
    const commentID = commentNumber;
    const articleID = document.getElementById('articleID').value;
    const commenterNickname = document.getElementById('commenterNickname').value;
    const commentDate = document.getElementById('commentDate').value;
    const commentText = document.getElementById('commentText').value;

    const commentInfo = {
        CommentID: commentID,
        ArticleID: articleID,
        CommenterNickname: commenterNickname,
        CommentDate: commentDate,
        CommentText: commentText
    };
    console.log("22222");
    document.getElementById('filledInfo').innerHTML = JSON.stringify(commentInfo, null, 2);
    
    fetch('/api/createComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
    })
    .then(response => response.json())
    .then(newComment => {
        document.getElementById('filledInfo').innerHTML = JSON.stringify(newComment, null, 2);
    })
    .catch(error => {
        console.error('Error inserting comment:', error);
        alert('Failed to insert comment. Please try again.');
    });
}
/*
function searchFighter() {
    const searchTerm = document.getElementById('nickname').value;
    fetch(`/api/searchFighter?nickname=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data);
        })
        .catch(error => {
            console.error('Error searching for fighter:', error);
            alert('Failed to perform search. Please try again.');
        });

}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
        searchResultsContainer.textContent = 'No results found.';
        return;
    }

    const resultList = document.createElement('ul');
    resultList.className = 'fighters';

    results.forEach(fighter => {
        const listItem = document.createElement('li');
        listItem.textContent = `Fighter ID: ${fighter.FighterID}, First Name: ${fighter.FirstName}, Last Name: ${fighter.LastName}, Nickname: ${fighter.Nickname}, Weight Class: ${fighter.WeightClass}, Country: ${fighter.Country}, Event ID: ${fighter.EventID}`;
        resultList.appendChild(listItem);
    });

    searchResultsContainer.appendChild(resultList);
}
*/