# p3
Passion

## Dependencies
This project uses Node.js. All dependencies are specified in `package.json`.

This project requires the use of MySQL. Currently, the project is configured to use the database `p3_test` through the passwordless user `p3_admin` who has all privileges to the `p3_test` database.

The `export_database.py` script depends on the [openpyxl](https://openpyxl.readthedocs.org/en/default/index.html) package.

## Getting Started
First, make sure Node.js and npm are installed. Then run

    npm install

which will install all the dependencies needed. Then you can run

    nodejs main.js

which will start the server on port 8080.

To populate the MySQL databases, first create a database called `p3_test` in MySQL. Then download an appropriate spreadsheet from the Bureau Labor of Statistics and execute `scripts/init_db`.