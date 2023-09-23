const { students_details, users } = require("../../model/index");
const bcrypt = require("bcryptjs"); //password hashing lagii use garxa


//* home(get)
exports.renderHomePage = async (req, res) => {
    res.render('home');
  }

//*addStudents(get)
exports.renderAddStudentsDetails = (req, res) => {
    res.render('addStudentsDetails');
}

//*addStudents(post)
exports.AddStudentsDetails = async(req, res) =>{ 
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
  }

//*single(get)
  exports.renderSingleStudentDetails = async (req, res) => {
    // parameter/url bata ko id
    const id = req.params.id;
  
    // yo id related matra data database bata tannu paryo
    const allSingleDetails = await students_details.findAll({
      where: {
        id,
      },
    });
  
    res.render("sDetails", { allSingleDetails });
  }

//*delete(get)
  exports.renderDeleteStudentsDetails = async (req, res) => {
    // no UI
    const id = req.params.id;
    // For deleting any data we can use destroy on it
    await students_details.destroy({ where: { id } });
    res.redirect("/allDetails");
  }


  //* update(get)
  exports.renderUpdateStudentsDetails = async (req, res) => {
    const id = req.params.id;
      // finding single student to prefill in input
      const allsingleDetails = await students_details.findAll({
        where: {
          id,
        },
      });
  
      // allSingleDetails(single Blog) pass gareko updateStudentsDetails.ejs file ma prefill ko lagi
    res.render("updateStudentsDetails", { id: id,allSingleDetails:allsingleDetails });
  }

//* update(post)
exports.UpdateStudentsDetails = async (req, res) => {
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
  }

//* AllDetails(get)
exports.renderAllDetails =   async (req, res) => {
    // res.render('home');
    const allSingleDetails = await students_details.findAll();
    res.render("allDetails", { students_details: allSingleDetails });
  } 

//* register(get)
exports.renderRegisterPage = async (req, res) => {
    res.render('register');
}

//* register(post)
exports.RegisterPage = async(req, res ) =>{
    console.log(req.body);
  
    //database ma halnu paryo
    await users.create({
        username : req.body.username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,10),
    })
    res.redirect('/login')
  }

//* login(get)
exports.renderLoginPage = (req, res) =>{
    res.render('login');
  }

//* login(post)
exports.LoginPage =  async (req, res) => {
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
        // match vayo(yes),login successfully
        res.render("home");
      } else {
        // match vayena (no) , error->invalid password
        res.send("Invalid email or password");
      }
    }
  } 


//* logout(get)
  exports.renderLogoutPage = (req, res) => {

    // Redirect the user to the register page after logging out
    res.redirect('/');
  }