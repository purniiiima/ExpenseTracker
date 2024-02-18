// Define an array of expenses
let expenses = [
    { amount: 50.25, date: '2024-02-10', category: 'groceries' },
    { amount: 30.50, date: '2024-02-11', category: 'utilities' },
    { amount: 20.75, date: '2024-02-12', category: 'entertainment' }
];

// Function to display expenses in an HTML table
function displayExpenses() {
    // Get the HTML element with ID "expenses"
    const expenseTable = document.getElementById('expenses');

    // Clear existing content in the table
    expenseTable.innerHTML = '';

    // Iterate over each expense and create a table row for each
    expenses.forEach(expense => {
        // Create a new table row element
        const row = document.createElement('tr');
        
        // Set HTML content for the row with expense details
        row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.category}</td>
            <td>$${expense.amount.toFixed(2)}</td>
        `;
        
        // Append the row to the expense table
        expenseTable.appendChild(row);
    });
}

// Function to add a new expense
function addExpense(event) {
    // Prevent the default form submission behavior
    event.preventDefault(); 

    // Get the amount, date, and category from form inputs
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    // Add the new expense to the expenses array
    expenses.push({ amount, date, category });

    // Display the updated list of expenses
    displayExpenses();

    // Reset form inputs
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';
    document.getElementById('category').selectedIndex = 0; 
}

// Add event listener to the expense form for form submission
document.getElementById('expense-form').addEventListener('submit', addExpense);

// Display expenses when the page loads
displayExpenses();
