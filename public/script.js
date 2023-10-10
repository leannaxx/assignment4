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

//adding
commentNumber = 2;
function fillBoxes() {
    commentNumber++;
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
    document.getElementById('filledInfo').innerHTML = JSON.stringify(commentInfo, null, 2);

    fetch('/createComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentInfo),
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


//retrieval
function searchFighter() {
    const searchTerm = document.getElementById('nickname').value;
    fetch(`/searchFighter?nickname=${encodeURIComponent(searchTerm)}`)
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

//update
document.getElementById('updateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const eventID = document.getElementById('eventID').value;
    const changes = JSON.parse(document.getElementById('changes').value);
    alert("answer submitted yay!!");
    try {
      const response = await fetch(`/updateEvent/${eventID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changes),
      });
      
      const data = await response.json();
      
      if (data.success) {
        document.getElementById('result').textContent = 'Event updated successfully.';
      } else {
        document.getElementById('result').textContent = 'Failed to update event.';
      }
    } catch (error) {
      console.error(error);
      document.getElementById('result').textContent = 'Error occurred while updating event.';
    }
  });  

//delete
const deleteCommentForm = document.getElementById('deleteCommentForm');
const messageContainer = document.getElementById('message');

deleteCommentForm.addEventListener('submitdelete', async (e) => {
    e.preventDefault();

    const commentId = document.getElementById('commentId').value;

    try {
        const response = await fetch(`/deleteComment/${commentId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            messageContainer.textContent = 'Comment deleted successfully.';
            messageContainer.style.color = 'green';
        } else {
            const errorData = await response.json();
            messageContainer.textContent = `Error: ${errorData.message}`;
            messageContainer.style.color = 'red';
        }
    } catch (error) {
        console.error('Error deleting comment:', error);
        messageContainer.textContent = 'An error occurred while deleting the comment.';
        messageContainer.style.color = 'red';
    }
});