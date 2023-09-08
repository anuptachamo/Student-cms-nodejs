const express = require ('express'); //require a express
const app = express(); //calling a express

const { students_details } = require("./Model/index");    //blogs index.js file bata define vayera ako ho (index.js ko line no. 30)



//setting up ejs, telling nodejs to use ejs
app.set("view engine", "ejs");

// folder access garna deko ejs file haru lai
//public vitra ko folder access garna payo aba 
app.use(express.static("./public")); 


//requiring a database
require("./Model/index");

//parsing FormData (form bata aako data laii parse gareko)
app.use(express.json());
app.use|(express.urlencoded({extended: true}));

// Define route
app.get('/', (req, res) => {
    res.render('home');
});

//addStudentsDetails.ejs file lai define gareko
app.get('/addStudentsDetails', (req, res) => {
    res.render('addStudentsDetails');
});

//POST method(http verbs)
//addStudent vanne home.ejs file ko FORM ko ACTION ma hunxa jahile anii  METHOD jahile POST hunxa
app.post('/addStudent', async(req, res) =>{ 
  
    //database ma data pathauxa
    await students_details.create({
      fullname : req.body.fullname,  // first title vaneko column title ho, second title vaneko form bata aako value 
      address: req.body.address,
      grade : req.body.grade,
      rollno : req.body.rollno,
      age : req.body.age,
      contactno : req.body.contactno
    })
  
    res.redirect('/');
  });

//Start the server
app.listen(4000, () =>{
    console.log('Server is running on port number 4000');
})