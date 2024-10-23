# Personal Expense Tracker

## Objective

The Personal Expense Tracker is a RESTful API developed to manage personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Tools and Technologies

- **Backend Framework**: Node.js with Express.js
- **Database**: SQLite (for simplicity) or MongoDB (if you prefer a NoSQL solution)

## Requirements

### Database Setup

1. **SQLite**
    - Create a database with the following tables:
      - **transactions**: `id`, `type` (income or expense), `category`, `amount`, `date`, `description`
      - **categories**: `id`, `name`, `type` (income or expense)

2. **MongoDB**
    - Define collections:
      - **transactions**: `{ type, category, amount, date, description }`
      - **categories**: `{ name, type }`

### API Endpoints

- **POST** `/transactions`: Adds a new transaction (income or expense).
- **GET** `/transactions`: Retrieves all transactions.
- **GET** `/transactions/:id`: Retrieves a transaction by ID.
- **PUT** `/transactions/:id`: Updates a transaction by ID.
- **DELETE** `/transactions/:id`: Deletes a transaction by ID.
- **GET** `/summary`: Retrieves a summary of transactions, such as total income, total expenses, and balance. Optionally, this can be filtered by date range or category.

### Functionality

- Implement route handlers for each endpoint.
- Provide error handling to manage common issues like invalid transaction IDs, invalid inputs, etc.
- Optionally add user authentication to protect the routes and associate transactions with specific users.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JellaSindhu/PersonalExpenseTracker.git
   cd PersonalExpenseTracker
Install dependencies

bash
Copy code
npm install
Set up the database (if using SQLite)

You might need to create the database tables as mentioned in the database setup section.

Start the server

bash
Copy code
node app.js
The server will run on http://localhost:3000 (or the specified port).

Usage
You can test the API endpoints using tools like Postman or curl. Below are some sample requests:

Sample API Requests
Add a new transaction

Endpoint: POST /transactions
Request Body:
json
Copy code
{
  "type": "income",
  "category": "Salary",
  "amount": 5000,
  "date": "2024-10-23",
  "description": "Monthly Salary"
}
Get all transactions

Endpoint: GET /transactions
Get a transaction by ID

Endpoint: GET /transactions/:id
Update a transaction

Endpoint: PUT /transactions/:id
Request Body:
json
Copy code
{
  "amount": 5500
}
Delete a transaction

Endpoint: DELETE /transactions/:id
Get transaction summary

Endpoint: GET /summary
Documentation
The API endpoints are documented with necessary request and response details. Check the code for inline documentation.

### Postman Screenshots
(Include screenshots of Postman requests and responses here)

POST /transactions: Adds a new transaction (income or expense):
![Screenshot (429)](https://github.com/user-attachments/assets/fdf9060c-3dbe-4c1d-a1ea-e13b3113279c)



GET /transactions: Retrieves all transactions:
![Screenshot (428)](https://github.com/user-attachments/assets/068af1ee-e855-4934-bf2a-76cdeaff38d6)



GET /transactions/:id: Retrieves a transaction by ID:
![Screenshot (427)](https://github.com/user-attachments/assets/f261774b-eb00-48a1-b128-3d3d9112b65b)


PUT /transactions/:id: Updates a transaction by ID:
![Screenshot (430)](https://github.com/user-attachments/assets/ea471e4d-1132-45f4-9894-d7466ebdaf46)


DELETE /transactions/:id: Deletes a transaction by ID:
![Screenshot (432)](https://github.com/user-attachments/assets/e9fcc10e-40e3-42df-9d48-629e7592c844)


GET /summary: Retrieves a summary of transactions, such as total income, total expenses, and balance. Optionally, this can be filtered by date range or category.
![Screenshot (431)](https://github.com/user-attachments/assets/5c052c69-44d4-4761-9b0f-52d0b9bc6784)


```
Bonus Features (Optional)
Implemented basic user authentication and linked transactions to specific users.
Added pagination to the GET /transactions endpoint to handle large volumes of data.
Created an endpoint for generating reports, such as monthly spending by category.
Contributing
Feel free to fork the repository and submit pull requests. Any contributions are welcome!
