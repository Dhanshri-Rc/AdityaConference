import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import AboutUniversity from "../Components/AboutUniversity/AboutUniversity";
import AboutEEE from "../Components/AboutEEE/AboutEEE";
import CallForPapers from "../Components/CallForPapers/CallForPapers";
import Submission from "../Components/Submission/Submission";
import RegistrationFee from "../Components/RegistrationFee/RegistrationFee";
import RegistrationDates from "../Components/RegistrationDates/RegistrationDates";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Committee from "../Components/Committee/Committee";
import ConferenceList from "../Components/ConferenceList/ConferenceList";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <section id="home">
        <Hero />
      </section>

      <section id="conferences">
        <ConferenceList />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="aboutUniversity">
        <AboutUniversity />
      </section>

      <section id="aboutEEE">
        <AboutEEE />
      </section>

      <section id="callForPapers">
        <CallForPapers />
      </section>

      <section id="submission">
        <Submission />
      </section>

      <section id="registrationFee">
        <RegistrationFee />
      </section>

      <section id="registrationDates">
        <RegistrationDates />
      </section>

      <section id="committee">
        <Committee />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* <Footer /> */}
    </>
  );
}
