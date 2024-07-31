# Sikh Beperwah Project

This project is a Node.js application built with Express.js, demonstrating the use of APIs and CRUD operations.

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
    │       styles.css
    │       contact.css
    └───js
            api-demo.js
```

### Project Description

This project consists of the following main files and directories:

1. **app.js**: 
    - Sets up the Express application.
    - Serves static files from the `public` directory.
    - Defines routes for the home, about, contact, and API demo pages.

2. **data/data.json**:
    - Contains sample JSON data used in the API demo.

3. **public/**:
    - Contains HTML, CSS, and JavaScript files for the front-end of the application.

### API Endpoints

1. **GET /data**:
    - Returns the JSON data from `data/data.json`.

### Testing with Postman

Postman is a powerful tool used to test APIs by making HTTP requests. Use Postman to test the API endpoint implemented in `app.js`:

#### Fetching Data

- **GET Request**
  - URL: `http://localhost:3000/data`
  - Method: GET

### Additional Information

- **Home Page**: Contains an overview of the project and a link to the API demo.
- **About Page**: Provides information about the project creator.
- **Contact Page**: Includes a form to contact the project creator.
- **API Demo Page**: Demonstrates fetching data from the server and displaying it in a table format.

### Contact

If you have any questions or need further assistance, feel free to contact the project creator via the [Contact Page](contact.html).

```markdown
Thanks 👋
```

