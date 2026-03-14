// import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
// import AboutUniversity from "./Components/AboutUniversity/AboutUniversity";
// import AboutEEE from "./Components/AboutEEE/AboutEEE";
// import CallForPapers from "./Components/CallForPapers/CallForPapers";
// import Submission from "./Components/Submission/Submission";
// import RegistrationFee from "./Components/RegistrationFee/RegistrationFee";
// import RegistrationDates from "./Components/RegistrationDates/RegistrationDates";
// import Hero from "./Components/Hero/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import ConferencePage from "./Pages/ConferencePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/conference/:slug" element={<ConferencePage/>} />
        {/* <Route path="/Hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutUniversity" element={<AboutUniversity/>} />
        <Route path="/aboutEEE" element={<AboutEEE/>} />
        <Route path="/callForPapers" element={<CallForPapers />} />
        <Route path="/submission" element={<Submission/>} />
        <Route path="/registrationFee" element={<RegistrationFee/>} />
        <Route path="/registrationDates" element={<RegistrationDates/>} />
        <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
 