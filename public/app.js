document.addEventListener('DOMContentLoaded', () => {
    const questionForm = document.getElementById('question-form');
    const questionsList = document.getElementById('questions-list');

    // Load questions on page load
    loadQuestions();

    // Handle new question submission
    questionForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('question-title').value;
        const body = document.getElementById('question-body').value;

        const response = await fetch('/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body })
        });

        if (response.ok) {
            questionForm.reset();
            loadQuestions();  // Reload questions after submitting a new one
        } else {
            alert('Failed to submit question.');
        }
    });

    // Function to load questions
    async function loadQuestions() {
        const response = await fetch('/api/questions');
        const questions = await response.json();

        questionsList.innerHTML = ''; // Clear the list before loading

        if (questions.length === 0) {
            questionsList.innerHTML = '<p>No questions available. Be the first to ask!</p>';
        } else {
            questions.forEach(question => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question';
                questionDiv.innerHTML = `
                    <h3>${question.title}</h3>
                    <p>${question.body}</p>
                    <small>Asked on: ${new Date(question.createdAt).toLocaleString()}</small>
                    <div class="comments">
                        <h4>Comments:</h4>
                        <div id="comments-${question.id}">
                            ${question.Comments && question.Comments.length > 0 ? question.Comments.map(comment => `
                                <div class="comment">
                                    <p>${comment.body}</p>
                                    <button class="delete-comment" data-comment-id="${comment.id}">Delete</button>
                                </div>
                            `).join('') : '<p>No comments yet.</p>'}
                        </div>
                        <form class="comment-form">
                            <input type="text" name="comment" placeholder="Add a comment" required>
                            <button type="submit">Submit Comment</button>
                        </form>
                    </div>
                    <hr>
                `;

                // Handle comment submission
                const commentForm = questionDiv.querySelector('.comment-form');
                commentForm.addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const commentBody = commentForm.querySelector('input[name="comment"]').value;

                    const response = await fetch(`/api/questions/${question.id}/comments`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ body: commentBody })
                    });

                    if (response.ok) {
                        loadQuestions(); // Reload questions after adding a comment
                    } else {
                        alert('Failed to submit comment.');
                    }
                });

                // Handle comment deletion
                questionDiv.querySelectorAll('.delete-comment').forEach(button => {
                    button.addEventListener('click', async (event) => {
                        const commentId = event.target.getAttribute('data-comment-id');

                        const response = await fetch(`/api/questions/${question.id}/comments/${commentId}`, {
                            method: 'DELETE'
                        });

                        if (response.ok) {
                            loadQuestions(); // Reload questions after deleting a comment
                        } else {
                            alert('Failed to delete comment.');
                        }
                    });
                });

                questionsList.appendChild(questionDiv);
            });
        }
    }
});
