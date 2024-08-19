# My Forum API

## Project Overview
My Forum API is a RESTful API designed for a closed forum where EhB students can ask questions (both anonymously and non-anonymously), and teachers can respond and discuss in the comments. It includes features like highlighting correct answers and moderating the forum.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [Docker](#docker)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Backend:**
  - Create, read, and delete questions.
  - Add comments to questions.
  - Fully tested with unit and integration tests.
  - Continuous Integration and Deployment (CI/CD) setup using GitHub Actions.
  - Dockerized for easy deployment.
  
- **Frontend:**
  - User-friendly interface to submit and view questions.
  - View and add comments to each question.
  - Responsive design using HTML and CSS.

## Installation
To install and run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/portfolio-tweede-zit-v2-REEM-AR.git
    cd portfolio-tweede-zit-v2-REEM-AR
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Set up the database:**

    The project uses SQLite, so no additional setup is needed. The database will be automatically created in the project directory as `database.sqlite`.

4. **Run the application:**

    ```bash
    npm start
    ```

5. **Access the frontend:**

    Open your browser and go to `http://localhost:5000`.


## Usage
This API can be used to manage a simple Q&A forum. Users can submit questions and comments, which can be viewed and managed through the provided endpoints or through the frontend interface.

### API Endpoints

- **Questions**
  - `GET /api/questions`: Retrieve all questions.
  - `POST /api/questions`: Create a new question.
  - `GET /api/questions/:id`: Retrieve a specific question by ID.
  - `DELETE /api/questions/:id`: Delete a specific question by ID.

- **Comments**
  - `POST /api/questions/:questionId/comments`: Add a comment to a specific question.
  - `DELETE /api/questions/:questionId/comments/:commentId`: Delete a comment from a specific question.

## Running Tests

The project includes unit and integration tests. To run the tests, use the following command:

```bash
npm test


