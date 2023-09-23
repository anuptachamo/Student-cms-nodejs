const { render } = require("ejs");
const { 
    renderAddStudentsDetails,
    AddStudentsDetails,
    renderRegisterPage,
    RegisterPage,
    renderSingleStudentDetails,
    renderUpdateStudentsDetails,
    renderDeleteStudentsDetails,
    renderLoginPage,
    renderAllDetails,
    renderLogoutPage,
    renderHomePage,
    LoginPage,
    UpdateStudentsDetails 
} = require("../controller/studentsDetails/studentController");


//Create an Express Router instance.
const router = require("express").Router()

//* login
router.route("/login").get(renderLoginPage)
router.route("/createLogin").post(LoginPage)


//* register poa
router.route("/").get(renderRegisterPage)
router.route("/createUser").post(RegisterPage)

// * home page
router.route("/home").get(renderHomePage)

router.route("/addStudentsDetails").get(renderAddStudentsDetails)
router.route("/addStudent").post(AddStudentsDetails)

router.route("/allDetails").get(renderAllDetails)

router.route("/single/:id").get(renderSingleStudentDetails)

router.route("/update/:id").get(renderUpdateStudentsDetails)
router.route("/updateStudent/:id").post(UpdateStudentsDetails)

router.route("/delete/:id").get(renderDeleteStudentsDetails)


router.route("/logout").get(renderLogoutPage)








module.exports = router;