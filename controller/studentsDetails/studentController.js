/*students_details is an table name which are on database [studentRecordsCms] 
(index.js ko line no. 33)*/
const { students_details} = require("../../model/index");


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

//*delete(get)
exports.renderDeleteStudentsDetails = async (req, res) => {
  // no UI
  const id = req.params.id;
  // For deleting any data we can use destroy on it
  await students_details.destroy({ where: { id } });
  res.redirect("/allDetails");
}