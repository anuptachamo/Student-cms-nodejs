const { 
    renderAddStudentsDetails,
    AddStudentsDetails,
    renderSingleStudentDetails,
    renderUpdateStudentsDetails,
    renderDeleteStudentsDetails,
    renderAllDetails,
    renderHomePage,
    UpdateStudentsDetails 
} = require("../controller/studentsDetails/studentController");


//Create an Express Router instance.
const router = require("express").Router()

// * home page
router.route("/home").get(renderHomePage)

//*POST method(http verbs)
// addStudent vanne addStudentsDetails.ejs file ko FORM ko ACTION ma hunxa jahile, anii  METHOD jahile POST hunu parxa*/
router.route("/addStudentsDetails").get(renderAddStudentsDetails)
router.route("/addStudent").post(AddStudentsDetails)

//* All details page
router.route("/allDetails").get(renderAllDetails)

//*single
router.route("/single/:id").get(renderSingleStudentDetails)

//*update
// /*Updating Students details [POST]
// updatestudent is define in updateStudentsDetails.ejs file line no. 15*/
router.route("/update/:id").get(renderUpdateStudentsDetails)
router.route("/updateStudent/:id").post(UpdateStudentsDetails)

//*delete
router.route("/delete/:id").get(renderDeleteStudentsDetails)


module.exports = router;