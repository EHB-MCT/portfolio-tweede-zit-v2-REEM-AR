# My Forum API

## Project Overview
My Forum API is a RESTful API designed for a closed forum where EhB students can ask questions (both anonymously and non-anonymously), and teachers can respond and discuss in the comments. It includes features like highlighting correct answers and moderating the forum.

## Features
- **User Authentication**: Securely manage user sessions.
- **Question and Comment Management**: Users can create, read, update, and delete questions and comments.
- **Moderation Tools**: Features to highlight correct answers and moderate content.
- **Testing**: Comprehensive unit and integration tests.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- NPM (v6 or higher)
- Docker (optional, for containerization)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/my-forum-api.git
    cd my-forum-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your configuration variables (e.g., database credentials).

4. Start the server:
    ```bash
    npm start
    ```

5. Alternatively, run the application using Docker:
    ```bash
    docker-compose up --build
    ```

## Usage

### API Endpoints
- **GET /api/questions**: Fetch all questions.
- **POST /api/questions**: Create a new question.
- **GET /api/questions/:id**: Fetch a single question by ID.
- **PUT /api/questions/:id**: Update a question by ID.
- **DELETE /api/questions/:id**: Delete a question by ID.
- **GET /api/questions/:id/comments**: Fetch comments for a specific question.
- **POST /api/questions/:id/comments**: Add a comment to a specific question.

### Running Tests
To run the tests, simply use:
```bash
npm test


