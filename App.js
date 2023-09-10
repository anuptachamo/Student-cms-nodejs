const express = require ('express'); //require a express
const app = express(); //calling a express

const bcrypt = require("bcryptjs"); //password hashing lagii use garxa


/*students_details and users is an table name which are on database [studentRecordsCms] 
(index.js ko line no. 32-33)*/
const { students_details, users } = require("./model/index");    
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
    res.render('register');
});

//home.ejs file lai define gareko
app.get('/home', async (req, res) => {
  res.render('home');
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


/*addStudentsDetails.ejs Start */

/*POST method(http verbs)
addStudent vanne addStudentsDetails.ejs file ko FORM ko ACTION ma hunxa jahile, anii  METHOD jahile POST hunu parxa*/
app.post('/addStudent', async(req, res) =>{ 
    //database ma data pathauxa
    await students_details.create({
      fullname : req.body.fullname,  // first fullname vaneko column fullname ho, second fullname vaneko form bata aako value 
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
  const allsDetails = await students_details.findAll({
    where: {
      id,
    },
  });

  res.render("sDetails", { allsDetails });
});

/*addStudentsDetails.ejs end */




/*DELETE students details start*/

  app.get("/delete/:id", async (req, res) => {
    // no UI
    const id = req.params.id;
    // For delating any data we can use destory on it
    await students_details.destroy({ where: { id } });
    res.redirect("/allDetails");
  });

/*DELETE students details end*/


/*updateStudentsDetails start*/

app.get("/update/:id", async (req, res) => {
  const id = req.params.id;
    // finding single student to prefill in input
    const allsDetails = await students_details.findAll({
      where: {
        id,
      },
    });

    // allsDetails(single Blog) pass gareko updateStudentsDetails.ejs file ma prefill ko lagi
  res.render("updateStudentsDetails", { id: id,allsDetails:allsDetails });
});

/*Updating Students details [POST]
updatestudent is define in updateStudentsDetails.ejs file line no. 15*/
app.post("/updateStudent/:id", async (req, res) => {
  const id = req.params.id;

  // update
  // form bata(req.body) bata aako kura haru(fullname, address, grade, etc) lai update gardey where id ko value chae tyo parameter bata aako id ko value xa 
  await students_details.update(req.body, {
    where: {
      id: id,
    },
  });
  // update vayisakeypaxi direct to sDetails.ejs page of that specific id
  res.redirect("/single/" + id);
});

/*updateStudentsDetails end*/

/*register.ejs file start */
//setting register page 
app.post('/createUser', async(req, res ) =>{
  console.log(req.body);

  //database ma halnu paryo
  await users.create({
      username : req.body.username,
      email : req.body.email,
      password : bcrypt.hashSync(req.body.password,10),
  })
  res.redirect('/login')
})
/*register.ejs file end */



//login.ejs start
app.get('/login',(req, res) =>{
  res.render('login');
});

// LOGIN user post API
app.post("/createLogin", async (req, res) => {
  // email , password
  const email = req.body.email;
  const password = req.body.password;

  //aako email registered xa ki xaina check garnu paryo
  const userFound = await users.findAll({
    where: {
      email: email,
    },
  });

  // if registered xaina vaney(no)
  if (userFound.length == 0) {
    // error faldinu paryo invalid email or email not registered error
    res.send("Invalid email or password");
  } else {
    const databasePassword = userFound[0].password; // database pahila register garda ko password
    //if registered xa vaney (yes)

    // if yes(xa) vaney ,password check garnu paryo
    const isPasswordCorrect = bcrypt.compareSync(password, databasePassword);

    if (isPasswordCorrect) {
      // match vayo(yes),login sucessfully
      res.render("home");
    } else {
      // match vayena (no) , error->invalid password
      res.send("Invalid email or password");
    }
  }
});

//login.ejs end

//logout.ejs start
// Perform any logout actions, such as clearing session data or tokens
app.get('/logout', (req, res) => {

  // Redirect the user to the register page after logging out
  res.redirect('/');
});

//logout.ejs end



//Start the server
app.listen(3000, () =>{
    console.log('Server is running on port number 3000');
});

