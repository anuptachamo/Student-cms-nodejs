const { 
    renderRegisterPage,
    RegisterPage,
    renderLoginPage,
    LoginPage,
    renderLogoutPage 
} = require("../controller/auth/authController")

//Create an Express Router instance.
const router = require("express").Router()

//* register page
router.route("/").get(renderRegisterPage)  //define route(main starting page)  
router.route("/createUser").post(RegisterPage)

//* login
router.route("/login").get(renderLoginPage)
router.route("/createLogin").post(LoginPage)

//* logout
router.route("/logout").get(renderLogoutPage)

module.exports = router;