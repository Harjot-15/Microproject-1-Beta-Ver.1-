# Microproject#1 (Beta Ver.1)

This project is a Node.js application built with Express.js, demonstrating the use of APIs and JSON data.

## Getting Started

### Prerequisites

Make sure you have Git, Node.js, and npm installed on your machine. You can download them from their respective websites:

- [Git](https://git-scm.com/download/win)
- [Node.js (Includes npm)](https://nodejs.org/)

If you do not have them installed, follow these steps:

1. **Install Git**:
   - Download the Git installer from [Git for Windows](https://git-scm.com/download/win).
   - Run the downloaded installer and follow the prompts to complete the installation.

2. **Install Node.js and npm**:
   - Download the Node.js installer from [Node.js](https://nodejs.org/).
   - Run the downloaded installer and follow the prompts to complete the installation. This will also install npm.

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Harjot-15/Microproject-1-Beta-Ver.1-.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd Microproject-1-Beta-Ver.1-
    ```

3. **Install the necessary modules:**

    ```sh
    npm install
    ```

4. **Install nodemon globally:**

    ```sh
    npm install -g nodemon
    ```

### Running the Application

1. **Start the server:**

    ```sh
    npm start
    ```

2. **Access the application in your browser:**

    Open your browser and go to `http://localhost:3000`

### Project Structure

```plaintext
Microproject-1-Beta-Ver.1-
│   app.js
│   package.json
│   package-lock.json
│
├───data
│       data.json
│
└───public
    │   about.html
    │   api-demo.html
    │   contact.html
    │   index.html
    ├───css
    │       about.css
    │       api-demo.css
    │       contact.css
    │       styles.css
    └───images
```

### Project Description

This project consists of the following main files and directories:

1. **app.js**: 
    - Sets up the Express application.
    - Serves static files from the `public` directory.
    - Defines routes for the home, about, contact, and API demo pages.
    - Imports the JSON data from `data.json` and serves it via a specific route.

2. **data/data.json**:
    - Contains sample JSON data used in the API demo.

3. **public/**:
    - Contains HTML, CSS, and image files for the front-end of the application.

### API Endpoints

1. **GET /data**:
    - Returns the JSON data from `data/data.json`.

### Front-End Interaction

The `api-demo.html` page includes a button that fetches the JSON data from the server using an asynchronous function with `async/await`. The data is then displayed in a table.

### Instructions

1. **API Demo Page**:
   - Navigate to the API Demo page.
   - Click the "Fetch Data" button to load and display the JSON data from the server.

### Additional Information

- **Home Page**: Contains an overview of the project and a link to the API demo.
- **About Page**: Provides information about the project creator.
- **Contact Page**: Includes a form to contact the project creator.
- **API Demo Page**: Demonstrates fetching data from the server and displaying it in a table format.

```markdown
Thanks 👋
```
