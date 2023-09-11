
# Simple CMS Project using Node js
    This project show how to login, register, create, read, update delete the students details by using node js.


## Package installation

To run this project 
```
    install xampp
        - After installation completed open xampp and start Apache and MySQL.
```

```
Open vscode
    open terminal
        a. npm install express
            - A framework for building web applications with Node.js, simplifying route handling, middleware management, and more.
            1. app.js[file name]
                - const express = require('express');  //put value
                - const app =express() 

        b. npm install ejs
            - A templating engine for Node.js that enables dynamic HTML generation with embedded JavaScript code.
            1. app.js[file name]
                //setting up ejs, telling nodejs to use ejs
                - app.set('view engine', 'ejs')

        c. npm install nodemon
            -   Automatically restarts your Node.js server when code changes are detected.

        d. npm install sequelize
            -  Simplifies database operations in Node.js using JavaScript objects and models. 

        e. npm install mysql2
            - Connects Node.js applications to MySQL databases for data storage and retrieval.

        f. npm install bcryptjs
            -  A library for hashing and securely storing passwords in Node.js applications, enhancing security.
            1. app.js[file name]
                - const bcrypt = require("bcryptjs")
                - password : bcrypt.hashSync(req.body.password,10),
```

## Features
- Register
- Login
- password hashing
- logout
- Add students details
- View students details
- Update students details
- Delete students details

## Setting Up a Database
```
    Open phpmyadmin after downloading the studentrecordscms.sql file I've supplied.
    - click on import
        - And there is a file to import section, click choose file and upload a studentrecordscms.sql file.
        - As well as refreshing it in code and phpmyadmin

```

## 🚀 About Me
I'm a frontend developer and just a beginner at Node js...

