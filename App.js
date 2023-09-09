const express = require ('express'); //require a express
const app = express(); //calling a express

const { students_details } = require("./model/index");    //blogs index.js file bata define vayera ako ho (index.js ko line no. 30)
require("./model/index");



//setting up ejs, telling nodejs to use ejs
app.set("view engine", "ejs");

// folder access garna deko ejs file haru lai
//public vitra ko folder access garna payo aba 
app.use(express.static("./public")); 



//parsing FormData (form bata aako data laii parse gareko)
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Define route
app.get('/', async (req, res) => {
    res.render('home');
    // const allsDetails = await students_details.findAll();
    // res.render("home", { students_details: allsDetails });
});

//addStudentsDetails.ejs file lai define gareko
app.get('/addStudentsDetails', (req, res) => {
    res.render('addStudentsDetails');
});

// AllDetails
app.get('/allDetails', async (req, res) => {
  // res.render('home');
  const allsDetails = await students_details.findAll();
  res.render("allDetails", { students_details: allsDetails });
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
      contactno : req.body.contactno,
    })

    res.redirect('/allDetails');
  });

  //Student details PAGE
app.get("/single/:id", async (req, res) => {
  // parameter/url bata ko id
  const id = req.params.id;

  // yo id related matra data database bata tannu paryo

  // const allBlogs = await blogs.findByPk(id);

  const allsDetails = await students_details.findAll({
    where: {
      id,
    },
  });

  res.render("sDetails", { allsDetails });
});


//DELETE students details
app.get("/delete/:id", async (req, res) => {
  // no UI
  const id = req.params.id;
  // delete garna destroy
  await students_details.destroy({ where: { id } });
  res.redirect("/allDetails");
});





//Start the server
app.listen(4000, () =>{
    console.log('Server is running on port number 4000');
});