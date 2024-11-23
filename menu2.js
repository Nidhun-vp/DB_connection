const mysql = require('mysql2');
const read = require('readline-sync');

// Establish connection to MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'student2',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected successfully to the database.');
        mainmenu();
    }
});

function mainmenu() {
    console.log("\nMenu:");
    console.log("1. Add Contact");
    console.log("2. Update Contact");
    console.log("3. Delete Contact");
    console.log("4. Display All Contacts");
    console.log("5. Exit");

    const choice = Number(read.question("Enter your choice: "));

    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            updateContact();
            break;
        case 3:
            deleteContact();
            break;
        case 4:
            displayContacts();
            break;
        case 5:
            console.log("Exiting...");
            connection.end();
            break;
        default:
            console.log("Invalid choice. Please try again.");
            mainmenu();
    }
}

//
function addContact() {
    const no= Number(read.question("Enter contact no: "));
    const name = read.question("Enter name: ");
    const salary = read.question("Enter place: ");

    const insertQuery = "INSERT INTO contactlist (name,ph_no,place) VALUES (?, ?, ?)";
    connection.query(insertQuery, [name,no,salary], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err.message);
        } else {
            console.log(`Contact added successfully with ID: ${result.insertId}`);
        }
        mainmenu();
    });
}
//
function updateContact() {
    const name = read.question("Enter the name of the contact to update: ");
    const phone = read.question("Enter the new phone number: ");

    const updateQuery = "UPDATE contactlist SET ph_no =?  WHERE name =?";
    connection.query(updateQuery, [phone, name], (err, result) => {
        if (err) {
            console.error("Error updating contact:", err.message);
        } else if (result.affectedRows === 0) {
            console.log("No contact found with the given name.");
        } else {
            console.log("Contact updated successfully.");
        }
        mainmenu();
    });
}
//
function deleteContact() {
    const name = read.question("Enter the name of the contact to delete: ");

    const deleteQuery = "DELETE FROM contactlist WHERE name = ?";
    connection.query(deleteQuery, [name], (err, result) => {
        if (err) {
            console.error("Error deleting contact:", err.message);
        } else if (result.affectedRows === 0) {
            console.log("No contact found with the given name.");
        } else {
            console.log("Contact deleted successfully.");
        }
        mainmenu();
    });
}

function displayContacts() {
    const selectQuery = "SELECT * FROM contactlist";
    connection.query(selectQuery, (err, results) => {
        if (err) {
            console.error("Error fetching contacts:", err.message);
        } else {
            console.log("Contact List:");
            console.table(results);
        }
        mainmenu();
    });
}
