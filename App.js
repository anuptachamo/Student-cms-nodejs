const express = require ('express'); //require a express
const app = express(); //calling a express



/*students_details and users is an table name which are on database [studentRecordsCms] 
(index.js ko line no. 32-33)*/
const { students_details, users } = require("./model/index");    
const { renderAddStudentsDetails, AddStudentsDetails, renderSingleStudentDetails, renderDeleteStudentsDetails, renderUpdateStudentsDetails, UpdateStudentsDetails, renderHomePage, renderLogoutPage, renderRegisterPage, RegisterPage, renderLoginPage, renderAllDetails, LoginPage } = require('./controller/studentsDetails/studentController');
require("./model/index");


// //* Routes
const allStudentsRoute = require("./routes/studentsRoute")


// app.use("/test", allStudentsRoute)

//setting up ejs, telling nodejs to use ejs
app.set("view engine", "ejs");

// folder access garna deko ejs file haru lai
//public vitra ko folder access garna payo aba 
app.use(express.static("./public")); 

//parsing FormData (form bata aako data laii parse gareko)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("", allStudentsRoute)


// Define route
// app.get('/', renderRegisterPage );

// //home.ejs file lai define gareko
// app.get('/home', renderHomePage );

// //addStudentsDetails.ejs file lai define gareko
// app.get('/addStudentsDetails', renderAddStudentsDetails);

// /*POST method(http verbs)
// addStudent vanne addStudentsDetails.ejs file ko FORM ko ACTION ma hunxa jahile, anii  METHOD jahile POST hunu parxa*/
// app.post('/addStudent', AddStudentsDetails );

// //Student details PAGE
// app.get("/single/:id", renderSingleStudentDetails );

// // AllDetails
// app.get('/allDetails',renderAllDetails);

// //delete
// app.get("/delete/:id", renderDeleteStudentsDetails );

// //update
// app.get("/update/:id", renderUpdateStudentsDetails );

// /*Updating Students details [POST]
// updatestudent is define in updateStudentsDetails.ejs file line no. 15*/
// app.post("/updateStudent/:id", UpdateStudentsDetails );

// //setting register page 
// app.post('/createUser', RegisterPage)

// //login.ejs 
// app.get('/login', renderLoginPage);

// // LOGIN user post API
// app.post("/createLogin", LoginPage);

// //logout.ejs 
// // Perform any logout actions, such as clearing session data or tokens
// app.get('/logout', renderLogoutPage );

//Start the server
app.listen(3000, () =>{
    console.log('Server is running on port number 3000');
});

