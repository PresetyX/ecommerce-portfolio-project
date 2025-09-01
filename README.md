# ecommerce-portfolio-project

---

### **Versão 2: Detalhada e Profissional (Recomendada)**

```markdown
# Project: E-commerce Platform Portfolio

A complete, albeit simplified, e-commerce web application designed to showcase a modern full-stack architecture. This project serves as a practical demonstration of my ability to develop and connect a responsive client-side interface with a robust server-side API.

## Architectural Goal

The primary goal of this project is to illustrate a clean separation of concerns between the front-end and back-end. The client application (built in **React**) is completely decoupled from the server (**Node.js/Express**), communicating solely through a well-defined RESTful API. This approach ensures scalability, maintainability, and flexibility.

---

## Features

-   **Dynamic Product Grid:** The main page fetches and displays a list of products directly from the back-end API in real-time.
-   **RESTful API Server:** A lightweight back-end server built with Express that exposes a `/api/products` endpoint to provide product data in JSON format.
-   **CORS Enabled:** The server is configured to handle Cross-Origin Resource Sharing (CORS), allowing the front-end application (running on a different port) to make requests securely.
-   **Modern UI:** A clean and responsive user interface built with modern CSS and React components.

---

## Tech Stack

| Area      | Technology                               |
| --------- | ---------------------------------------- |
| **Frontend** | `React.js`                               |
| **Backend** | `Node.js`, `Express`                     |
| **Database** | In-memory JSON array (for demonstration) |
| **Styling** | `CSS`                                    |

---

## Setup and Installation

To run this project locally, you will need two separate terminal instances.

**1. Configure and Run the Back-end:**

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
# The API will be available at http://localhost:5000

