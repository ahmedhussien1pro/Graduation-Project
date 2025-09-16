import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login-Register/Login.jsx";
import Register from "./Pages/Auth/Login-Register/Register.jsx";
import Authincate from "./Pages/Auth/Authincate-Number/Authincate.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Users from "./Pages/Dashboard/Users/Users.jsx";
import User from "./Pages/Dashboard/User/User.jsx";
import AddUser from "./Pages/Dashboard/AddUser/AddUser.jsx";
import RequierAuth from "./Pages/Auth/RequierAuth.jsx";
import Writer from "./Pages/Dashboard/Writer/Writer.jsx";
import Error404 from "./Pages/Auth/Page-404/404.jsx";
import UserHome from "./Pages/Website/UserHome/UserHome.jsx";
import Settings from "./Pages/Dashboard/Settings/Settings.jsx";
import Theme from "./Pages/Dashboard/Theme/Theme.jsx";
import PlatformInfo from "./Pages/Dashboard/AboutUs/PlatformInfo.jsx";
// import RequireBack from "./Pages/Auth/RequireBack.jsx";
import Contact from "./Pages/Website/Contact/Contact.jsx";
import SQL_INJECTION from "./Pages/Website/UserHome/Labs/Sql_Injection/Sql_Injection.jsx";
import SQLInjection from "./Pages/Website/UserHome/Labs/Sql_Injection/SQLInjection_labs.jsx";
import LoginSqlInjection from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/first_lab/LoginSqlInjection.jsx";
import Welcome from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/first_lab/Welcome.jsx";
import OUR_STORE from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/second_lab/Our_Store.jsx";
import WITH_STOCK from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/second_lab/With_Stock.jsx";

import SHOW_PRICES from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/third_lab/Show_prices.jsx";
import SHOW_PRICES2 from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/fourth_lab/Show_prices.jsx";

import FINISH_TEST from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/third_lab/Finish_test.jsx";
import FINISH_TEST2 from "./Pages/Website/UserHome/Labs/Sql_Injection/practical/fourth_lab/Finish_test.jsx";
import XSS from "./Pages/Website/UserHome/Labs/XSS/XSS.jsx";
import XSS_LAB from "./Pages/Website/UserHome/Labs/XSS/XSS_lab.jsx";
import XSS_FIRST from "./Pages/Website/UserHome/Labs/XSS/Practical/First_lab.jsx";
import XSS_SECOND from "./Pages/Website/UserHome/Labs/XSS/Practical/Second_lab.jsx";
import XSS_THIRD from "./Pages/Website/UserHome/Labs/XSS/Practical/Third_lab.jsx";
import XSS_FOURTH from "./Pages/Website/UserHome/Labs/XSS/Practical/Fourth_lab.jsx";
import Cookies from "./Pages/Website/UserHome/Labs/Cookies/Cookies.jsx";
import COOKIES_LAB from "./Pages/Website/UserHome/Labs/Cookies/Cookies_lab.jsx";
import CookiesFirstLogin from "./Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Login_page.jsx";
import CookiesFirstAdmin from "./Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Admin.jsx";
import CookiesFirstSupport from "./Pages/Website/UserHome/Labs/Cookies/practical/first_lab/Support.jsx";
import CookiesSecondlogin from "./Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Login_page.jsx";
import CookiesSecondAdmin from "./Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Admin.jsx";
import CookiesSecondSupport from "./Pages/Website/UserHome/Labs/Cookies/practical/second_lab/Support.jsx";
import Linux from "./Pages/Website/UserHome/Labs/Linux/Linux.jsx";
import LINUX_LAB from "./Pages/Website/UserHome/Labs/Linux/Linux_lab.jsx";
import LINUX_FIRST_LAB from "./Pages/Website/UserHome/Labs/Linux/practical/first_lab/Patient.jsx";
import LINUX_SECOND_LAB from "./Pages/Website/UserHome/Labs/Linux/practical/second_lab/Power.jsx";
import LINUX_THIRD_LAB from "./Pages/Website/UserHome/Labs/Linux/practical/fourth_lab/Test.jsx";
import LINUX_FOURTH_LAB from "./Pages/Website/UserHome/Labs/Linux/practical/third_lab/Welcome.jsx";

// Access Control Vulnerability
import AC_VULN from "./Pages/Website/UserHome/Labs/AC-Vuln/AC_Vuln.jsx";
import AC_VULN_LABS from "./Pages/Website/UserHome/Labs/AC-Vuln/AC_Vuln_labs.jsx";
import AC_VULN_FIRST_LAB from "./Pages/Website/UserHome/Labs/AC-Vuln/practical/first_lab/First_Lab.jsx";
import AC_VULN_SECOND_LAB from "./Pages/Website/UserHome/Labs/AC-Vuln/practical/second_lab/Second_Lab.jsx";
import AC_VULN_THIRD_LAB from "./Pages/Website/UserHome/Labs/AC-Vuln/practical/third_lab/Third_Lab.jsx";
import AC_VULN_THIRD_LAB_LOGIN from "./Pages/Website/UserHome/Labs/AC-Vuln/practical/third_lab/Third_Lab_LoginForm.jsx";
import AC_VULN_TXT_FILE from "./Pages/Website/UserHome/Labs/AC-Vuln/practical/first_lab/TextFileViewer.jsx";
import AC_VULN_USERS from "./Pages/Website/UserHome/Labs/AC-Vuln/practical/first_lab/UserList.jsx";
import AC_VULN_USERS2 from "./Pages/Website/UserHome/Labs/AC-Vuln/practical/second_lab/UserList.jsx";
import AC_VULN_USERS3 from "./Pages/Website/UserHome/Labs/AC-Vuln/practical/third_lab/UserList.jsx";
// End Access Control Vulnerability
// Cross-Site Request Forgery
import CSRF from "./Pages/Website/UserHome/Labs/CSRF/CSRF.jsx";
import CSRF_LABS from "./Pages/Website/UserHome/Labs/CSRF/CSRF_labs.jsx";
import CSRF_FIRST_LAB from "./Pages/Website/UserHome/Labs/CSRF/practical/first_lab/First_Lab.jsx";
import CSRF_SECOND_LAB from "./Pages/Website/UserHome/Labs/CSRF/practical/second_lab/Second_Lab.jsx";
import CSRF_THIRD_LAB from "./Pages/Website/UserHome/Labs/CSRF/practical/third_lab/Third_Lab.jsx";
import CSRF_FOURTH_LAB from "./Pages/Website/UserHome/Labs/CSRF/practical/quiz/MCQQuiz.jsx";
// End Cross-Site Request Forgery

// Regular Expression
import REGEX from "./Pages/Website/UserHome/Labs/Regex/Regex.jsx";
import REGEX_LABS from "./Pages/Website/UserHome/Labs/Regex/Regex_labs.jsx";
import REGEX_FIRST_LAB from "./Pages/Website/UserHome/Labs/Regex/practical/first_lab/First_Lab.jsx";
import REGEX_SECOND_LAB from "./Pages/Website/UserHome/Labs/Regex/practical/second_lab/Second_Lab.jsx";
// End Regular Expression
//Careers in Cyber
import CAREERS_IN_CYBER from "./Pages/Website/UserHome/Labs/CareersInCyber/CareersInCyber.jsx";
import CAREERS_IN_CYBER_MCQ from "./Pages/Website/UserHome/Labs/CareersInCyber/CareersInCyber_labs.jsx";
import CAREERS_IN_CYBER_MCQ_PAGE from "./Pages/Website/UserHome/Labs/CareersInCyber/practical/MCQ/MCQPage.jsx";
import CAREERS_IN_CYBER_MORE from "./Pages/Website/UserHome/Labs/CareersInCyber/more/MorePage.jsx";

// End Careers in Cyber
// Api Hacking
import API_HACKING from "./Pages/Website/UserHome/Labs/Api-Hacking/Api_Hacking.jsx";
import API_HACKING_LABS from "./Pages/Website/UserHome/Labs/Api-Hacking/Api_Hacking_labs.jsx";
import API_HACKING_FIRST_LAB from "./Pages/Website/UserHome/Labs/Api-Hacking/practical/first_lab/First_Lab.jsx";
import API_HACKING_SECOND_LAB from "./Pages/Website/UserHome/Labs/Api-Hacking/practical/second_lab/Second_Lab.jsx";
import DashboardAdmin from "./Pages/Website/UserHome/Labs/Api-Hacking/practical/second_lab/DashboardUser/DashboardAdmin.jsx";
import Dashboard1 from "./Pages/Website/UserHome/Labs/Api-Hacking/practical/second_lab/DashboardUser/Dashboard1.jsx";

// End Api Hacking
// Click Jacking
import CLICK_JACKING from "./Pages/Website/UserHome/Labs/Click-Jacking/Click_Jacking.jsx";
import CLICK_JACKING_LABS from "./Pages/Website/UserHome/Labs/Click-Jacking/Click_Jacking_labs.jsx";
import CLICK_JACKING_FIRST_LAB from "./Pages/Website/UserHome/Labs/Click-Jacking/practical/first_lab/First_Lab.jsx";
import CLICK_JACKING_FIRST_LAB_AFFIRMATION from "./Pages/Website/UserHome/Labs/Click-Jacking/practical/first_lab/Affirmation.jsx";
import CLICK_JACKING_EDIT_INFO from "./Pages/Website/UserHome/Labs/Click-Jacking/practical/first_lab/EditInfo.jsx";
import CLICK_JACKING_EXPLOIT_PANEL from "./Pages/Website/UserHome/Labs/Click-Jacking/practical/first_lab/ExploitPanel.jsx";
// End Click Jacking

// Business Logic Vulnerability
import BL_VULN from "./Pages/Website/UserHome/Labs/BL-Vuln/BL_Vuln.jsx";
import BL_VULN_LABS from "./Pages/Website/UserHome/Labs/BL-Vuln/BL_Vuln_labs.jsx";
import BL_VULN_FIRST_LAB from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/First_Lab.jsx";
import BL_VULN_FIRST_LAB_CART from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/CartPage.jsx";
import BL_VULN_FIRST_LAB_DETAIL_PAGE from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/DetailPage.jsx";
import BL_VULN_FIRST_LAB_LOGIN from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/LoginPage.jsx";
import BL_VULN_FIRST_LAB_MY_ACCOUNT from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/first_lab/MyAccountPage.jsx";
import BL_VULN_SECOND_LAB from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/Second_Lab.jsx";
import BL_VULN_SECOND_LAB_CART from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/CartPage.jsx";
import BL_VULN_SECOND_LAB_DETAIL_PAGE from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/DetailPage.jsx";
import BL_VULN_SECOND_LAB_LOGIN from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/LoginPage.jsx";
import BL_VULN_SECOND_LAB_MY_ACCOUNT from "./Pages/Website/UserHome/Labs/BL-Vuln/practical/second_lab/MyAccountPage.jsx";
// End Business Logic Vulnerability

// Digital Forensics
import DIGITAL_FORENSICS from "./Pages/Website/UserHome/Labs/Digital_Forensics/Digital_Forensics.jsx";
import DIGITAL_FORENSICS_LABS from "./Pages/Website/UserHome/Labs/Digital_Forensics/Digital_Forensics_Labs.jsx";
import DIGITAL_FORENSICS_FIRST_LAB from "./Pages/Website/UserHome/Labs/Digital_Forensics/practical/first_lab/First_Lab.jsx";
import DIGITAL_FORENSICS_MCQ_PAGE from "./Pages/Website/UserHome/Labs/Digital_Forensics/DigitalForensicsMCQPage.jsx";
// End Digital Forensics
// Hashing
import HASHING from "./Pages/Website/UserHome/Labs/Hashing/Hashing.jsx";
import HASHING_LABS from "./Pages/Website/UserHome/Labs/Hashing/Hashing_labs.jsx";
import HASHING_FIRST_LAB from "./Pages/Website/UserHome/Labs/Hashing/practical/first_lab/First_Lab.jsx";
import HashGenerator from "./Pages/Website/UserHome/Labs/Hashing/practical/first_lab/HashGenerator.jsx";
import HashComparator from "./Pages/Website/UserHome/Labs/Hashing/practical/first_lab/HashComparator.jsx";
import HashCracker from "./Pages/Website/UserHome/Labs/Hashing/practical/first_lab/HashCracker.jsx";
import SaltingDemo from "./Pages/Website/UserHome/Labs/Hashing/practical/first_lab/SaltingDemo.jsx";
import HASHING_SECOND_LAB from "./Pages/Website/UserHome/Labs/Hashing/practical/second_lab/Second_Lab.jsx";
// End Hashing
// Bash Scripting
import Bash from "./Pages/Website/UserHome/Labs/Bash_Scripting/Bash.jsx";
import BASH_QUIZ from "./Pages/Website/UserHome/Labs/Bash_Scripting/second_lab/Bash_quiz.jsx";
// End Bash Scripting
// Obfuscation
import Obfuscation from "./Pages/Website/UserHome/Labs/Obfuscation/Obfuscation.jsx";
import OBFUSCATION_LAB from "./Pages/Website/UserHome/Labs/Obfuscation/Obfuscation_lab.jsx";
import OBFUSCATION_LOGIN from "./Pages/Website/UserHome/Labs/Obfuscation/Practical/Lab_1/Login.jsx";
import OBFUSCATION_QUIZ from "./Pages/Website/UserHome/Labs/Obfuscation/Practical/Lab_2/Ob_quiz.jsx";
// End Obfuscation
// CryptoGraphy
import CryptoGraphy from "./Pages/Website/UserHome/Labs/CryptoGraphy/CryptoGraphy.jsx";
import CRYPTOGRAPHY_LAB from "./Pages/Website/UserHome/Labs/CryptoGraphy/CryptoGraphy_lab.jsx";
import TOP_SECRET from "./Pages/Website/UserHome/Labs/CryptoGraphy/Practical/first_lab/Top_secret.jsx";
import DECODE_IMAGE from "./Pages/Website/UserHome/Labs/CryptoGraphy/Practical/second_lab/Decode_image.jsx";
import Corrupted from "./Pages/Website/UserHome/Labs/CryptoGraphy/Practical/third_lab/corrupted.jsx";
import HASH_CRACK from "./Pages/Website/UserHome/Labs/CryptoGraphy/Practical/fourth_lab/Hash_crack.jsx";
// End CryptoGraphy
// WireShark
import WireShark from "./Pages/Website/UserHome/Labs/WireShark/WireShark.jsx";
import WIRESHARK_LAB from "./Pages/Website/UserHome/Labs/WireShark/WireShark_lab.jsx";
import STOLEN_FLAG from "./Pages/Website/UserHome/Labs/WireShark/Practical/third_lab/Stolen_flag.jsx";
import TCP_INTRUSION from "./Pages/Website/UserHome/Labs/WireShark/Practical/second_lab/TCP_intrusion.jsx";
import ARP_TRICK from "./Pages/Website/UserHome/Labs/WireShark/Practical/first_lab/ARP_trick.jsx";
// End WireShark
// File Inclusion
import FileInclusion from "./Pages/Website/UserHome/Labs/FileInclusion/FileInclusion.jsx";
import FILEINCLUSION_LAB from "./Pages/Website/UserHome/Labs/FileInclusion/FileInclusion_lab.jsx";
import LEARN_CAPITAL_1 from "./Pages/Website/UserHome/Labs/FileInclusion/Practical/first_lab/Learn_capital_1.jsx";
import LEARN_CAPITAL_2 from "./Pages/Website/UserHome/Labs/FileInclusion/Practical/second_lab/Learn_capital_2.jsx";
import LEARN_CAPITAL_3 from "./Pages/Website/UserHome/Labs/FileInclusion/Practical/third_lab/Learn_capital_3.jsx";

// End FileInclusion
// SSTI
import SSTI from "./Pages/Website/UserHome/Labs/SSTI/SSTI.jsx";
import SSTI_LAB from "./Pages/Website/UserHome/Labs/SSTI/SSTI_lab.jsx";
import Blog from "./Pages/Website/UserHome/Labs/SSTI/Practical/Lab_2/Blog.jsx";
import BLOG_ITEM from "./Pages/Website/UserHome/Labs/SSTI/Practical/Lab_2/Blog_item.jsx";
import SSTI_STORE from "./Pages/Website/UserHome/Labs/SSTI/Practical/Lab_1/SSTI_store.jsx";
// End SSTI
// CaptchaBypass
import CaptchaBypass from "./Pages/Website/UserHome/Labs/CaptchaBypass/CaptchaBypass.jsx";
import CAPTCHABYPASS_LAB from "./Pages/Website/UserHome/Labs/CaptchaBypass/CaptchaBypass_lab.jsx";
import CAPTCHABYPASS_1 from "./Pages/Website/UserHome/Labs/CaptchaBypass/Practical/Lab_1/Captcha_first.jsx";
import CAPTCHABYPASS_2 from "./Pages/Website/UserHome/Labs/CaptchaBypass/Practical/Lab_2/Captcha_second.jsx";
import CAPTCHABYPASS_3 from "./Pages/Website/UserHome/Labs/CaptchaBypass/Practical/Lab_3/Captcha_third.jsx";
// End CaptchaBypass
// JWT Attacks
import JWTAttacks from "./Pages/Website/UserHome/Labs/JWTAttacks/JWTAttacks.jsx";
import JWTATTACKS_LAB from "./Pages/Website/UserHome/Labs/JWTAttacks/JWTAttacks_lab.jsx";
import JWTATTACKS_ADMIN1 from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_1/lab1_admin.jsx";
import JWTATTACKS_USER1 from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_1/lab1_user.jsx";
import JWTATTACKS_ADMIN2 from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_2/lab2_admin.jsx";
import JWTATTACKS_USER2 from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_2/lab2_user.jsx";
import JWTATTACKS_ADMIN3 from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_3/lab3_admin.jsx";
import JWTATTACKS_USER3 from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_3/lab3_user.jsx";
import JWT_LAB_FIRST from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_1/lab1.jsx";
import JWT_LAB_SECOND from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_2/lab2.jsx";
import JWT_LAB_THIRD from "./Pages/Website/UserHome/Labs/JWTAttacks/Practical/Lab_3/lab3.jsx";
// End JWT Attacks
import Robots from "./Pages/Website/UserHome/Labs/XSS/Practical/Robots.jsx";
import XSS_SEVEN from "./Pages/Website/UserHome/Labs/XSS/Practical/XSS_SEVEN.jsx";
import PyramidsOfGiza from "./Pages/Website/UserHome/Labs/XSS/Practical/PyramidsOfGiza.jsx";
import EiffelTower from "./Pages/Website/UserHome/Labs/XSS/Practical/EiffelTower.jsx";
import ChichenItza from "./Pages/Website/UserHome/Labs/XSS/Practical/ChichenItza.jsx";
import TajMahal from "./Pages/Website/UserHome/Labs/XSS/Practical/TajMahal.jsx";
import ParadiseOfHawaii from "./Pages/Website/UserHome/Labs/XSS/Practical/ParadiseOfHawaii.jsx";
import Colosseum from "./Pages/Website/UserHome/Labs/XSS/Practical/Colosseum.jsx";
// Start UnrestrictedFileUpload
import UnrestrictedFileUpload from "./Pages/Website/UserHome/Labs/UnrestrictedFileUpload/UnrestrictedFileUpload.jsx";
import UnrestrictedFileUploadLabs from "./Pages/Website/UserHome/Labs/UnrestrictedFileUpload/UnrestrictedFileUploadLabs.jsx";
import UnrestrictedFirstlab from "./Pages/Website/UserHome/Labs/UnrestrictedFileUpload/Practical/Unrestricted_Lab1.jsx";
import UnrestrictedSecondlab from "./Pages/Website/UserHome/Labs/UnrestrictedFileUpload/Practical/Unrestricted_Lab2.jsx";
import UnrestrictedThirdlab from "./Pages/Website/UserHome/Labs/UnrestrictedFileUpload/Practical/Unrestricted_Lab3.jsx";
// End UnrestrictedFileUpload
// Start Insecure Direct Object Reference
import InsecureDirectObjectReference from "./Pages/Website/UserHome/Labs/IDOR/InsecureDirectObjectReference.jsx";
import InsecureDirectObjectReferenceLabs from "./Pages/Website/UserHome/Labs/IDOR/InsecureDirectObjectReferenceLabs.jsx";
import IDORLab1 from "./Pages/Website/UserHome/Labs/IDOR/practical/IDOR_Lab1.jsx";
import IDORLab2 from "./Pages/Website/UserHome/Labs/IDOR/practical/IDOR_Lab2.jsx";
import IDORLab3 from "./Pages/Website/UserHome/Labs/IDOR/practical/IDOR_Lab3.jsx";
// End Insecure Direct Object Reference
// Start Broken Authentication
import BrokenAuthentication from "./Pages/Website/UserHome/Labs/Broken_Auth/BrokenAuthentication.jsx";
import BrokenAuthenticationLab from "./Pages/Website/UserHome/Labs/Broken_Auth/BrokenAuthenticationLab.jsx";
import AuthLab1 from "./Pages/Website/UserHome/Labs/Broken_Auth/Practical/Auth_lab1.jsx";
import AuthLab2 from "./Pages/Website/UserHome/Labs/Broken_Auth/Practical/Auth_lab2.jsx";
import WordsList from "./Pages/Website/UserHome/Labs/Broken_Auth/Practical/WordsList.js";
import AuthLab3 from "./Pages/Website/UserHome/Labs/Broken_Auth/Practical/Auth_lab3.jsx";
import Products from "./Pages/Website/UserHome/Labs/Broken_Auth/Practical/products.jsx";
import UsersPage from "./Pages/Website/UserHome/Labs/Api-Hacking/practical/second_lab/UsersPage.jsx";
// End Broken Authentication
// Start Path Traversal
import PathTraversal from "./Pages/Website/UserHome/Labs/Path...Traversal/PathTraversal.jsx";
import PathTraversalLabs from "./Pages/Website/UserHome/Labs/Path...Traversal/PathTraversalLabs.jsx";
import PathTraversalBlacklist from "./Pages/Website/UserHome/Labs/Path...Traversal/Practical/Lab1/PathTraversalBlacklist.jsx";
import ShowProducts from "./Pages/Website/UserHome/Labs/Path...Traversal/Practical/Lab1/ShowProducts.jsx";
import EtcPassword from "./Pages/Website/UserHome/Labs/Path...Traversal/Practical/Lab1/passwd.jsx";
import PathTraversalMcq1 from "./Pages/Website/UserHome/Labs/Path...Traversal/Practical/MCQ/PathTraversalMcq1.jsx";
import PathTraversalMcq2 from "./Pages/Website/UserHome/Labs/Path...Traversal/Practical/MCQ/PathTraversalMcq2.jsx";
// End Path Traversal
// Start Command Injection
import CommandInjection from "./Pages/Website/UserHome/Labs/CommandInjection/CommandInjection.jsx";
import CommandInjectionLabs from "./Pages/Website/UserHome/Labs/CommandInjection/CommandInjectionLabs.jsx";
import CommandInjectionLab1 from "./Pages/Website/UserHome/Labs/CommandInjection/Practical/CommandInjectionLab1.jsx";
import CommandInjectionLab2 from "./Pages/Website/UserHome/Labs/CommandInjection/Practical/CommandInjectionLab2.jsx";
import CommandInjectionLab3 from "./Pages/Website/UserHome/Labs/CommandInjection/Practical/CommandInjectionLab3.jsx";
// End Command Injection
// Start Insecure Deserialization
import InsecureDeserialization from "./Pages/Website/UserHome/Labs/InsecureDeserialization/InsecureDeserialization.jsx";
import InsecureDeserializationLabs from "./Pages/Website/UserHome/Labs/InsecureDeserialization/InsecureDeserializationLabs.jsx";
import InsecureDeserializationLab1 from "./Pages/Website/UserHome/Labs/InsecureDeserialization/practical/Lab1/InsecureDeserializationLab1.jsx";
import InsecureDeserializationLab2 from "./Pages/Website/UserHome/Labs/InsecureDeserialization/practical/Lab2/InsecureDeserializationLab2.jsx";
import TestPage from "./Pages/Website/UserHome/Labs/InsecureDeserialization/practical/Lab1/TestPage.jsx";
import AdminDashboard from "./Pages/Website/UserHome/Labs/InsecureDeserialization/practical/Lab1/AdminDashboard.jsx";
// End Insecure Deserialization
// Start Burp Suit
import BurpSuit from "./Pages/Website/UserHome/Labs/Burp-Suite/BurpSuit.jsx";
import BurpSuitLabs from "./Pages/Website/UserHome/Labs/Burp-Suite/BurpSuitLabs.jsx";
import BurpSuitLab1 from "./Pages/Website/UserHome/Labs/Burp-Suite/Practical/Lab1/BurpSuitLab1.jsx";
import BurpSuitLab2 from "./Pages/Website/UserHome/Labs/Burp-Suite/Practical/Lab2/BurpSuitLab2.jsx";
import BurpSuitLab3 from "./Pages/Website/UserHome/Labs/Burp-Suite/Practical/Lab3/BurpSuitLab3.jsx";
import BurpSuitLab4 from "./Pages/Website/UserHome/Labs/Burp-Suite/Practical/Lab4/BurpSuitLab4.jsx";
import BurpSuitDescriptions from "./Pages/Website/UserHome/Labs/Burp-Suite/Practical/Lab3/BurpSuitDescriptions.jsx";
// End Burp Suit
//Start SSRF
import SSRF from "./Pages/Website/UserHome/Labs/SSRF/SSRF.jsx";
import SSRFLab from "./Pages/Website/UserHome/Labs/SSRF/SSRF_lab.jsx";
import SSRFLab1 from "./Pages/Website/UserHome/Labs/SSRF/Practical/Lab_1/SSRF_store.jsx";
import SSRFLab2 from "./Pages/Website/UserHome/Labs/SSRF/Practical/Lab_2/SSRF_store.jsx";
import SSRFLab1Admin from "./Pages/Website/UserHome/Labs/SSRF/Practical/Lab_1/SSRF_admin.jsx";
import SSRFLab2Admin from "./Pages/Website/UserHome/Labs/SSRF/Practical/Lab_2/SSRF_admin.jsx";
//End SSRF
import RaceCondition from "./Pages/Website/UserHome/Labs/Condition_Race/RaceCondition.jsx";
import RaceConditionLabs from "./Pages/Website/UserHome/Labs/Condition_Race/RaceConditionLabs.jsx";
import RaceConditionInRegister from "./Pages/Website/UserHome/Labs/Condition_Race/Practical/Lab1/RC_In_Register.jsx";
import ViewRegistes from "./Pages/Website/UserHome/Labs/Condition_Race/Practical/Lab1/ViewRegistes.jsx";
import ShoppingCart from "./Pages/Website/UserHome/Labs/Condition_Race/Practical/Lab2/ShoppingCart.jsx";
import AboutUs from "./Pages/Website/AboutUs/AboutUs.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        {/* <Route element={<RequireBack />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authenticate" element={<Authincate />} />
        {/* </Route> */}
        <Route path="/*" element={<Error404 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Home - Labs - Routes */}
        <Route element={<RequierAuth allowedRole={["writer", "admin"]} />}>
          <Route path="/home" element={<UserHome />} />
          {/* Start Sql_Injection Prepare */}
          <Route path="/sql_Injection" element={<SQL_INJECTION />} />
          <Route
            path="/sql_Injection/sql_Injection_labs"
            element={<SQLInjection />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/login"
            element={<LoginSqlInjection />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/Welcome"
            element={<Welcome />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/second_lab/our_store"
            element={<OUR_STORE />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/second_lab/our_store'+or+1=1--"
            element={<WITH_STOCK />}
          />

          <Route
            path="/Sql_Injection/sql_Injection_lab/third_lab/show-prices"
            element={<SHOW_PRICES />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/fourth_lab/show_prices"
            element={<SHOW_PRICES2 />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/third_lab/show-prices'+union+select+null,+null,+null--"
            element={<FINISH_TEST />}
          />

          <Route
            path="/Sql_Injection/sql_Injection_lab/fourth_lab/show-prices"
            element={<SHOW_PRICES2 />}
          />
          <Route
            path="/Sql_Injection/sql_Injection_lab/fourth_lab/show_prices'+UNION+SELECT+NULL,'abcdef',NULL--"
            element={<FINISH_TEST2 />}
          />
          {/* AC_Vuln */}
          <Route path="/AC_Vuln" element={<AC_VULN />} />
          <Route path="/AC-Vuln/AC_Vuln_labs" element={<AC_VULN_LABS />} />
          <Route
            path="/AC-Vuln/AC_Vuln_labs/first_lab"
            element={<AC_VULN_FIRST_LAB />}
          />
          <Route
            path="/AC-Vuln/AC_Vuln_labs/second_lab"
            element={<AC_VULN_SECOND_LAB />}
          />
          <Route
            path="/AC-Vuln/AC_Vuln_labs/third_lab"
            element={<AC_VULN_THIRD_LAB />}
          />
          <Route
            path="/AC-Vuln/AC_Vuln_labs/first_lab/robots.txt"
            element={<AC_VULN_TXT_FILE />}
          />
          <Route
            path="/AC-Vuln/AC_Vuln_labs/first_lab/administrator-panel"
            element={<AC_VULN_USERS />}
          />
          <Route
            path="/AC-Vuln/AC_Vuln_labs/second_lab/admin-qfn717"
            element={<AC_VULN_USERS2 />}
          />
          <Route
            path="/AC-Vuln/AC_Vuln_labs/third_lab/admin"
            element={<AC_VULN_USERS3 />}
          />
          <Route
            path="/AC-Vuln/AC_Vuln_labs/third_lab/login"
            element={<AC_VULN_THIRD_LAB_LOGIN />}
          />
          {/* End AC_Vuln */}
          {/* CSRF */}
          <Route path="/CSRF" element={<CSRF />} />
          <Route path="/CSRF/CSRF_labs" element={<CSRF_LABS />} />
          <Route
            path="/CSRF/CSRF_labs/first_lab"
            element={<CSRF_FIRST_LAB />}
          />
          <Route
            path="/CSRF/CSRF_labs/second_lab"
            element={<CSRF_SECOND_LAB />}
          />
          <Route
            path="/CSRF/CSRF_labs/third_lab"
            element={<CSRF_THIRD_LAB />}
          />
          <Route path="/CSRF/CSRF_labs/MCQQuiz" element={<CSRF_FOURTH_LAB />} />

          {/* End CSRF */}
          {/* Regex */}
          <Route path="/Regex" element={<REGEX />} />
          <Route path="/Regex/Regex_labs" element={<REGEX_LABS />} />
          <Route
            path="/Regex/Regex_labs/MCQReview"
            element={<REGEX_FIRST_LAB />}
          />
          <Route
            path="/Regex/Regex_labs/CompleteReview"
            element={<REGEX_SECOND_LAB />}
          />
          {/* End Regex */}
          {/* BL_Vuln*/}
          <Route path="/BL_Vuln" element={<BL_VULN />} />
          <Route path="/BL-Vuln/BL_Vuln_labs" element={<BL_VULN_LABS />} />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/first_lab"
            element={<BL_VULN_FIRST_LAB />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/first_lab/cart"
            element={<BL_VULN_FIRST_LAB_CART />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/first_lab/ProductDetail/:id"
            element={<BL_VULN_FIRST_LAB_DETAIL_PAGE />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/first_lab/login"
            element={<BL_VULN_FIRST_LAB_LOGIN />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/first_lab/myaccount"
            element={<BL_VULN_FIRST_LAB_MY_ACCOUNT />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/second_lab"
            element={<BL_VULN_SECOND_LAB />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/second_lab/cart"
            element={<BL_VULN_SECOND_LAB_CART />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/second_lab/ProductDetail/:id"
            element={<BL_VULN_SECOND_LAB_DETAIL_PAGE />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/second_lab/login"
            element={<BL_VULN_SECOND_LAB_LOGIN />}
          />
          <Route
            path="/BL-Vuln/BL_Vuln_labs/second_lab/myaccount"
            element={<BL_VULN_SECOND_LAB_MY_ACCOUNT />}
          />
          {/* End BL_Vuln */}

          {/*Digital Forensics*/}
          <Route path="/Digital_Forensics" element={<DIGITAL_FORENSICS />} />
          <Route
            path="/Digital_Forensics/Digital_Forensics_labs"
            element={<DIGITAL_FORENSICS_LABS />}
          />
          <Route
            path="/Digital_Forensics/Digital_Forensics_labs/lab1"
            element={<DIGITAL_FORENSICS_FIRST_LAB />}
          />
          {/* <Route
            path="/Digital_Forensics/MCQ/BlockChain"
            element={<BLOCK_CHIN_AND_CRYPTOCURRENCY />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Computer"
            element={<COMPUTER_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Cloud"
            element={<CLOUD_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Database"
            element={<DATABASE_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/DataRecovery"
            element={<DATA_RECOVERY_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Drone"
            element={<DRONE_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Email"
            element={<EMAIL_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Gaming"
            element={<GAMING_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Iot"
            element={<IOT_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Malware"
            element={<MALWARE_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Mobile"
            element={<MOBILE_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Multimedia"
            element={<MULTIMEDIA_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Network"
            element={<NETWORK_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/SocialMedia"
            element={<SOCIAL_MEDIA_FORENSICS />}
          />
          <Route
            path="/Digital_Forensics/MCQ/Vehicle"
            element={<VEHICLE_FORENSICS />}
          /> */}
          <Route
            path="/Digital_Forensics/MCQ/:category"
            element={<DIGITAL_FORENSICS_MCQ_PAGE />}
          />

          {/* End Digital Forensics */}
          {/* Careers in Cyber */}
          <Route path="/CareersInCyber" element={<CAREERS_IN_CYBER />} />
          <Route
            path="/CareersInCyber/CareersInCyber_MCQ"
            element={<CAREERS_IN_CYBER_MCQ />}
          />

          <Route
            path="/CareersInCyber/CareersInCyber_MCQ/:category/MCQ"
            element={<CAREERS_IN_CYBER_MCQ_PAGE />}
          />
          <Route
            path="/CareersInCyber/CareersInCyber_labs/:page"
            element={<CAREERS_IN_CYBER_MORE />}
          />

          {/* End Careers in Cyber */}

          {/* Api Hacking */}
          <Route path="/Api_Hacking" element={<API_HACKING />} />
          <Route
            path="/Api_Hacking/Api_Hacking_labs"
            element={<API_HACKING_LABS />}
          />
          <Route
            path="/Api_Hacking/Api_Hacking_labs/lab1"
            element={<API_HACKING_FIRST_LAB />}
          />
          <Route
            path="/Api_Hacking/Api_Hacking_labs/lab2"
            element={<API_HACKING_SECOND_LAB />}
          />
          <Route
            path="/Api_Hacking/Api_Hacking_labs/lab2/users.json"
            element={<UsersPage />}
          />
          <Route
            path="/Api_Hacking/Api_Hacking_labs/lab2/DashboardAdmin/:id"
            element={<DashboardAdmin />}
          />
          <Route
            path="/Api_Hacking/Api_Hacking_labs/lab2/DashboardUser/:id"
            element={<Dashboard1 />}
          />
          {/* End Api Hacking */}
          {/* Click Jacking */}
          <Route path="/Click_Jacking" element={<CLICK_JACKING />} />
          <Route
            path="/Click_Jacking/Click_Jacking_labs"
            element={<CLICK_JACKING_LABS />}
          />
          <Route
            path="/Click_Jacking/Click_Jacking_labs/lab1"
            element={<CLICK_JACKING_FIRST_LAB />}
          />
          <Route
            path="/Click_Jacking/Click_Jacking_labs/lab1/affirmation"
            element={<CLICK_JACKING_FIRST_LAB_AFFIRMATION />}
          />
          <Route
            path="/Click_Jacking/Click_Jacking_labs/lab1/EditInfo"
            element={<CLICK_JACKING_EDIT_INFO />}
          />
          {/* CLICK_JACKING_EXPLOIT_PANEL */}
          <Route
            path="/Click_Jacking/Click_Jacking_labs/lab1/EditInfo/ExploitPanel"
            element={<CLICK_JACKING_EXPLOIT_PANEL />}
          />
          {/* End Click Jacking */}

          {/*Hashing */}
          <Route path="/Hashing" element={<HASHING />} />
          <Route path="/Hashing/Hashing_labs" element={<HASHING_LABS />} />
          <Route
            path="/Hashing/Hashing_labs/lab1"
            element={<HASHING_FIRST_LAB />}
          />
          <Route
            path="/Hashing/Hashing_labs/lab1/HashGenerator"
            element={<HashGenerator />}
          />
          <Route
            path="/Hashing/Hashing_labs/lab1/HashComparator"
            element={<HashComparator />}
          />
          <Route
            path="/Hashing/Hashing_labs/lab1/HashCracker"
            element={<HashCracker />}
          />
          <Route
            path="/Hashing/Hashing_labs/lab1/SaltingDemo"
            element={<SaltingDemo />}
          />
          <Route
            path="/Hashing/Hashing_labs/lab2"
            element={<HASHING_SECOND_LAB />}
          />
          {/* End Hashing */}

          {/* End Sql_Injection */}
          {/* Start XSS */}
          <Route path="/xss" element={<XSS />} />
          <Route path="/xss/xss_labs" element={<XSS_LAB />} />
          <Route path="/xss/xss_lab/first_lab" element={<XSS_FIRST />} />
          <Route path="/xss/xss_lab/second_lab" element={<XSS_SECOND />} />
          <Route path="/xss/xss_lab/third_lab" element={<XSS_THIRD />} />
          <Route path="/xss/xss_lab/fourth_lab" element={<XSS_FOURTH />} />
          <Route
            path="/xss/xss_lab/fourth_lab/Robots_Details"
            element={<Robots />}
          />
          <Route path="/xss/xss_lab/seven_lab" element={<XSS_SEVEN />} />
          <Route
            path="/xss/xss_lab/seven_lab/details/Pyramids-of-Giza"
            element={<PyramidsOfGiza />}
          />
          <Route
            path="/xss/xss_lab/seven_lab/details/The-Eiffel-Tower"
            element={<EiffelTower />}
          />
          <Route
            path="/xss/xss_lab/seven_lab/details/Pyramid-of-Chichén Itzá"
            element={<ChichenItza />}
          />
          <Route
            path="/xss/xss_lab/seven_lab/details/The-Taj-Mahal"
            element={<TajMahal />}
          />
          <Route
            path="/xss/xss_lab/seven_lab/details/Paradise-of-Hawaii"
            element={<ParadiseOfHawaii />}
          />
          <Route
            path="/xss/xss_lab/seven_lab/details/Colosseum"
            element={<Colosseum />}
          />
          {/* End XSS */}
          {/* Start Unrestricted File Upload_ */}
          <Route
            path="/UnrestrictedFileUpload"
            element={<UnrestrictedFileUpload />}
          />
          <Route
            path="/Unrestricted File Upload/lab_Unrestricted_File_Uplode"
            element={<UnrestrictedFileUploadLabs />}
          />
          <Route
            path="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/first_lab"
            element={<UnrestrictedFirstlab />}
          />
          <Route
            path="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/second_lab"
            element={<UnrestrictedSecondlab />}
          />
          <Route
            path="/Unrestricted File Upload/lab_Unrestricted_File_Uplode/third_lab"
            element={<UnrestrictedThirdlab />}
          />
          {/* End Unrestricted File Upload_ */}
          {/* Start Insecure_Direct_Object_Reference */}
          <Route
            path="/Insecure_Direct_Object_Reference(IDOR)"
            element={<InsecureDirectObjectReference />}
          />
          <Route
            path="/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs"
            element={<InsecureDirectObjectReferenceLabs />}
          />
          <Route
            path="/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab1"
            element={<IDORLab1 />}
          />
          <Route
            path="/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab2"
            element={<IDORLab2 />}
          />
          <Route
            path="/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab3"
            element={<IDORLab3 />}
          />
          {/* End Insecure_Direct_Object_Reference */}
          {/* Start Broken Authentication */}
          <Route path="/broken-auth" element={<BrokenAuthentication />} />
          <Route
            path="/broken-auth/Broken_Authentication_Lab"
            element={<BrokenAuthenticationLab />}
          />
          <Route
            path="/broken-auth/Broken_Authentication_Lab/lab1"
            element={<AuthLab1 />}
          />
          <Route path="/words-list" element={<WordsList />} />
          <Route
            path="/broken-auth/Broken_Authentication_Lab/lab2"
            element={<AuthLab2 />}
          />
          <Route
            path="/broken-auth/Broken_Authentication_Lab/lab3"
            element={<AuthLab3 />}
          />
          <Route
            path="/broken-auth/Broken_Authentication_Lab/products"
            element={<Products />}
          />
          {/* End Broken Authentication */}
          {/* Start Path Traversal */}
          <Route path="/Path__Traversal" element={<PathTraversal />} />
          <Route
            path="/Path__Traversal/Path_Traversal_Labs"
            element={<PathTraversalLabs />}
          />
          <Route
            path="/Path__Traversal/Path_Traversal_Labs/lab1"
            element={<PathTraversalBlacklist />}
          />
          <Route
            path="/Path__Traversal/Path_Traversal_Labs/lab2"
            element={<PathTraversalMcq1 />}
          />
          <Route
            path="/Path__Traversal/Path_Traversal_Labs/lab3"
            element={<PathTraversalMcq2 />}
          />
          <Route
            path="/Path__Traversal/Path_Traversal_Labs/lab1/Show_Products/:id"
            element={<ShowProducts />}
          />
          <Route
            path="/Path__Traversal/Path_Traversal_Labs/etc/passwd"
            element={<EtcPassword />}
          />
          {/* End Path Traversal */}
          {/* Start  Command Injection  */}
          <Route path="/Command_Injection" element={<CommandInjection />} />
          <Route
            path="/Command_Injection/Command_Injection_labs"
            element={<CommandInjectionLabs />}
          />
          <Route
            path="/Command_Injection/Command_Injection_labs/lab1"
            element={<CommandInjectionLab1 />}
          />
          <Route
            path="/Command_Injection/Command_Injection_labs/lab2"
            element={<CommandInjectionLab2 />}
          />
          <Route
            path="/Command_Injection/Command_Injection_labs/lab3"
            element={<CommandInjectionLab3 />}
          />
          {/* End  Command Injection  */}
          {/* Start Insecure Deserialization */}
          <Route
            path="/Insecure_Deserialization"
            element={<InsecureDeserialization />}
          />
          <Route
            path="/Insecure_Deserialization/Insecure_Deserialization_Labs"
            element={<InsecureDeserializationLabs />}
          />
          <Route
            path="/Insecure_Deserialization/Insecure_Deserialization_Labs/lab1"
            element={<InsecureDeserializationLab1 />}
          />
          <Route
            path="/Insecure_Deserialization/Insecure_Deserialization_Labs/lab1/testPage"
            element={<TestPage />}
          />
          <Route
            path="/Insecure_Deserialization/Insecure_Deserialization_Labs/lab1/AdminDashboard"
            element={<AdminDashboard />}
          />
          <Route
            path="/Insecure_Deserialization/Insecure_Deserialization_Labs/lab2"
            element={<InsecureDeserializationLab2 />}
          />
          <Route
            path="/Insecure_Deserialization/Insecure_Deserialization_Labs/lab2/testPage"
            element={<TestPage />}
          />
          <Route
            path="/Insecure_Deserialization/Insecure_Deserialization_Labs/lab2/AdminDashboard"
            element={<AdminDashboard />}
          />
          {/* End Insecure_Deserialization */}
          {/* Start Burp suit */}
          <Route path="/Burp_Suit" element={<BurpSuit />} />
          <Route path="/Burp_Suit/Burp_Suit_Labs" element={<BurpSuitLabs />} />
          <Route
            path="/Burp_Suit/Burp_Suit_Labs/lab1"
            element={<BurpSuitLab1 />}
          />
          <Route
            path="/Burp_Suit/Burp_Suit_Labs/lab2"
            element={<BurpSuitLab2 />}
          />
          <Route
            path="/Burp_Suit/Burp_Suit_Labs/lab3"
            element={<BurpSuitLab3 />}
          />
          <Route
            path="/Burp_Suit/Burp_Suit_Labs/lab3/:id"
            element={<BurpSuitDescriptions />}
          />
          <Route
            path="/Burp_Suit/Burp_Suit_Labs/lab4"
            element={<BurpSuitLab4 />}
          />
          {/* End Burp Suit */}
          {/* Start Race Condition */}
          <Route path="/Race_Condition" element={<RaceCondition />} />
          <Route
            path="/Race_Condition/Race_Condition_Labs"
            element={<RaceConditionLabs />}
          />
          <Route
            path="/Race_Condition/Race_Condition_Labs/Lab1"
            element={<RaceConditionInRegister />}
          />
          <Route path="/View Registers" element={<ViewRegistes />} />
          <Route
            path="/Race_Condition/Race_Condition_Labs/Lab2"
            element={<ShoppingCart />}
          />
          {/* End Race Condition */}
          {/* Start Cookies */}
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/cookies/cookies_lab" element={<COOKIES_LAB />} />
          <Route
            path="/cookies/cookies_lab/first/login"
            element={<CookiesFirstLogin />}
          />
          <Route
            path="/cookies/cookies_lab/first/admin"
            element={<CookiesFirstAdmin />}
          />
          <Route
            path="/cookies/cookies_lab/first/support"
            element={<CookiesFirstSupport />}
          />
          <Route
            path="/cookies/cookies_lab/second/login"
            element={<CookiesSecondlogin />}
          />
          <Route
            path="/cookies/cookies_lab/second/admin"
            element={<CookiesSecondAdmin />}
          />
          <Route
            path="/cookies/cookies_lab/second/support"
            element={<CookiesSecondSupport />}
          />
          {/* End Cookies */}
          {/* Start Linux */}
          <Route path="/linux" element={<Linux />} />
          <Route path="/linux/linux_lab" element={<LINUX_LAB />} />
          <Route
            path="/linux/linux_lab/patient"
            element={<LINUX_FIRST_LAB />}
          />
          <Route
            path="/linux/linux_lab/power-of-command"
            element={<LINUX_SECOND_LAB />}
          />
          <Route
            path="/linux/linux_lab/Welcome"
            element={<LINUX_FOURTH_LAB />}
          />
          <Route
            path="/linux/linux_lab/test-yourself"
            element={<LINUX_THIRD_LAB />}
          />
          {/* End Linux */}
          {/* Start Bash Scripting */}
          <Route path="/bash-scripting" element={<Bash />} />
          <Route path="/bash-scripting/bash_quiz" element={<BASH_QUIZ />} />
          {/* End Bash Scripting */}
          {/* Start Obfuscation */}
          <Route path="/obfuscation" element={<Obfuscation />} />
          <Route
            path="/Obfuscation/obfuscation_lab"
            element={<OBFUSCATION_LAB />}
          />
          <Route
            path="/Obfuscation/obfuscation_lab/login"
            element={<OBFUSCATION_LOGIN />}
          />
          <Route
            path="/Obfuscation/obfuscation_lab/quiz"
            element={<OBFUSCATION_QUIZ />}
          />
          {/* End Obfuscation */}
          {/* Start CryptoGraphy */}
          <Route path="/cryptography" element={<CryptoGraphy />} />
          <Route
            path="/cryptography/cryptography_lab"
            element={<CRYPTOGRAPHY_LAB />}
          />
          <Route
            path="/cryptography/cryptography_lab/top-secret"
            element={<TOP_SECRET />}
          />
          <Route
            path="/cryptography/cryptography_lab/decode-the-image"
            element={<DECODE_IMAGE />}
          />
          <Route
            path="/cryptography/cryptography_lab/corrupted"
            element={<Corrupted />}
          />
          <Route
            path="/cryptography/cryptography_lab/hash-crack"
            element={<HASH_CRACK />}
          />
          {/* End CryptoGraphy */}
          {/* Start WireShark */}
          <Route path="/wireshark" element={<WireShark />} />
          <Route path="/wireshark/wireshark_lab" element={<WIRESHARK_LAB />} />
          <Route
            path="/wireshark/wireshark_lab/stolen-flag"
            element={<STOLEN_FLAG />}
          />
          <Route
            path="/wireshark/wireshark_lab/tcp-intrusion"
            element={<TCP_INTRUSION />}
          />
          <Route
            path="/wireshark/wireshark_lab/arp-trick"
            element={<ARP_TRICK />}
          />
          {/* End WireShark */}
          {/* Start FileInclusion */}
          <Route path="/fileinclusion" element={<FileInclusion />} />
          <Route
            path="/fileinclusion/fileinclusion_lab"
            element={<FILEINCLUSION_LAB />}
          />
          <Route
            path="fileinclusion/fileinclusion_lab/Learn-the-capital-1"
            element={<LEARN_CAPITAL_1 />}
          />
          <Route
            path="fileinclusion/fileinclusion_lab/Learn-the-capital-2"
            element={<LEARN_CAPITAL_2 />}
          />
          <Route
            path="fileinclusion/fileinclusion_lab/Learn-the-capital-3"
            element={<LEARN_CAPITAL_3 />}
          />
          {/* End FileInclusion */}
          {/* Start SSTI */}
          <Route path="/SSTI" element={<SSTI />} />
          <Route path="/SSTI/SSTI_lab" element={<SSTI_LAB />} />
          <Route path="ssti/ssti_lab/SSTIlab2/blog" element={<Blog />} />
          <Route
            path="ssti/ssti_lab/SSTIlab2/blog/blog-item"
            element={<BLOG_ITEM />}
          />
          <Route path="ssti/ssti_lab/SSTIlab1/store" element={<SSTI_STORE />} />
          {/* End SSTI */}
          {/* Start CaptchaBypass */}
          <Route path="/captchabypass" element={<CaptchaBypass />} />
          <Route
            path="/captchabypass/captchabypass_lab"
            element={<CAPTCHABYPASS_LAB />}
          />
          <Route
            path="/captchabypass/captchabypass_lab/lab1"
            element={<CAPTCHABYPASS_1 />}
          />
          <Route
            path="/captchabypass/captchabypass_lab/lab2"
            element={<CAPTCHABYPASS_2 />}
          />
          <Route
            path="/captchabypass/captchabypass_lab/lab3"
            element={<CAPTCHABYPASS_3 />}
          />
          {/* End CaptchaBypass */}
          {/* Start JWTAttacks */}
          <Route path="/jwtattacks" element={<JWTAttacks />} />
          <Route
            path="/jwtattacks/jwtattacks_lab"
            element={<JWTATTACKS_LAB />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab1/admin"
            element={<JWTATTACKS_ADMIN1 />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab1/user"
            element={<JWTATTACKS_USER1 />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab2/admin"
            element={<JWTATTACKS_ADMIN2 />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab2/user"
            element={<JWTATTACKS_USER2 />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab3/admin"
            element={<JWTATTACKS_ADMIN3 />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab3/user"
            element={<JWTATTACKS_USER3 />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab1"
            element={<JWT_LAB_FIRST />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab2"
            element={<JWT_LAB_SECOND />}
          />
          <Route
            path="/jwtattacks/jwtattacks_lab/lab3"
            element={<JWT_LAB_THIRD />}
          />
          {/* End JWTAttacks */}
          {/* Start SSRF */}
          <Route path="/ssrf" element={<SSRF />} />
          <Route path="/ssrf/ssrf_lab" element={<SSRFLab />} />
          <Route path="/ssrf/ssrf_lab/ssrf_lab1/store" element={<SSRFLab1 />} />
          <Route path="/ssrf/ssrf_lab/ssrf_lab2/store" element={<SSRFLab2 />} />
          <Route
            path="/ssrf/ssrf_lab/ssrf_lab1/store/admin"
            element={<SSRFLab1Admin />}
          />
          <Route
            path="/ssrf/ssrf_lab/ssrf_lab2/store/admin"
            element={<SSRFLab2Admin />}
          />
          {/* End SSRF */}
        </Route>
        {/* End Routes of Labs */}

        {/* Start Protected Routes */}
        <Route element={<RequierAuth allowedRole={["writer", "admin"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequierAuth allowedRole={["admin"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="user/edit/:id" element={<User />} />
              <Route path="user/add" element={<AddUser />} />
            </Route>
            <Route element={<RequierAuth allowedRole={["writer", "admin"]} />}>
              <Route path="personal-information" element={<Writer />} />
              <Route path="settings" element={<Settings />} />
              <Route path="Platform-information" element={<PlatformInfo />} />
              <Route path="theme" element={<Theme />} />
            </Route>
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Routes>
    </div>
  );
}

export default App;
