# PersonalExpenseTracker
Personal Expense Tracker assignment:

```markdown
# Floww.ai Node JS - Backend Assignment

## Assignment: Personal Expense Tracker

### Objective
Develop a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

### Tools and Technologies
- **Backend Framework**: Node.js with Express.js
- **Database**: SQLite (for simplicity) or MongoDB (if you prefer a NoSQL solution)

### Requirements

#### 1. Database Setup
- If using **SQLite**, create a database with tables:
  - **transactions**: 
    - `id`: Unique identifier for each transaction
    - `type`: Type of transaction (income or expense)
    - `category`: Category of the transaction
    - `amount`: Amount of the transaction
    - `date`: Date of the transaction
    - `description`: Description of the transaction
  - **categories**: 
    - `id`: Unique identifier for each category
    - `name`: Name of the category
    - `type`: Type of category (income or expense)

- If using **MongoDB**, define collections:
  - **transactions**: 
    - `{ type, category, amount, date, description }`
  - **categories**: 
    - `{ name, type }`

#### 2. API Endpoints
- **POST /transactions**: Adds a new transaction (income or expense).
- **GET /transactions**: Retrieves all transactions.
- **GET /transactions/:id**: Retrieves a transaction by ID.
- **PUT /transactions/:id**: Updates a transaction by ID.
- **DELETE /transactions/:id**: Deletes a transaction by ID.
- **GET /summary**: Retrieves a summary of transactions, such as total income, total expenses, and balance. Optionally, this can be filtered by date range or category.

#### 3. Functionality
- Implement route handlers for each endpoint.
- Provide error handling to manage common issues like invalid transaction IDs, invalid inputs, etc.
- Optionally add user authentication to protect the routes and associate transactions with specific users.

#### 4. Documentation
- Document your API endpoints with necessary request and response details.

### Deliverables
- Source code in a GitHub repository.
- A `README.md` file that includes:
  - Setup and run instructions.
  - API documentation.
  - Postman screenshots demonstrating each API call.

### Bonus (Optional)
- Implement basic user authentication and link transactions to specific users.
- Add pagination to the `GET /transactions` endpoint to handle large volumes of data.
- Create an endpoint for generating reports, such as monthly spending by category.

## Setup and Run Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/JellaSindhu/PersonalExpenseTracker.git
   cd PersonalExpenseTracker
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   node app.js
   ```
   The server will start, and you should see a message indicating that it's running on a specified port.

4. **Accessing the API**
   Use Postman or any API testing tool to make requests to the API endpoints defined above. 

### API Documentation
Refer to the individual endpoint descriptions above for details on how to use each API.

### Postman Screenshots
(Include screenshots of Postman requests and responses here)

![Screenshot (429)](https://github.com/user-attachments/assets/fdf9060c-3dbe-4c1d-a1ea-e13b3113279c)

```

### Notes:
- You can fill in the "Postman Screenshots" section with images that show the API requests and responses for better clarity.
- Ensure to replace the GitHub clone URL with the actual link to your repository if it's different.
- Feel free to modify the content to better suit your project's specifics or add any additional sections you find necessary.
