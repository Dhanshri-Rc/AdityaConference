// import bg from "../../assets/bg.jpg";
// import logo1 from "../../assets/agec_icon.png";
// import logo2 from "../../assets/aicteLogo.png";
// import logo3 from "../../assets/image.png";
// import logo4 from "../../assets/scopusLogo.webp";

// export default function Hero() {
//   return (
// <section
//   className="hero-bg relative min-h-[120vh] flex items-center justify-center text-white"
//   style={{
//     backgroundImage: `url(${bg})`,
//   }}
// >
    
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative text-center max-w-5xl px-6 mt-44">

//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Advanced and Global Engineering Challenges
//         </h1>

//         <h2 className="text-4xl font-bold mt-3">(AGEC-2K26)</h2>

//         <h3 className="text-3xl font-semibold mt-4">
//           Sponsored by AICTE
//         </h3>

//         <p className="mt-4 text-yellow-400 font-semibold">
//           THEME : ENERGY EFFICIENCY, RENEWABLE AND SUSTAINABLE ENERGY
//         </p>

//         {/* Logos */}
//         <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">

//           <div className="bg-white rounded-lg p-4">
//             <img src={logo1} className="h-16" />
//           </div>

//           <div className="bg-white rounded-lg p-4">
//             <img src={logo3} className="h-16" />
//           </div>

//           <div className="bg-white rounded-lg p-4">
//             <img src={logo4} className="h-16" />
//           </div>

//           <div className="bg-white rounded-lg p-4">
//             <img src={logo2} className="h-16" />
//           </div>

//         </div>

//         <p className="mt-6 text-lg">
//           08th and 09th May, 2026
//         </p>

//         <p className="mt-6 text-lg">
//           Organized by
//         </p>

//         <p className="text-yellow-400 font-semibold text-xl">
//           Department of Electrical & Electronics Engineering, Aditya University
//         </p>

//         <p className="font-semibold mt-4">
//           Surampalem, Andhra Pradesh, India
//         </p>

//         <p className="mt-4  font-semibold">
//           Venue : ADITYA UNIVERSITY, Surampalem, ADB Road, Kakinada District, A. P. – 533437.
//         </p>

//       </div>
//     </section>
//   );
// }


import bg from "../../assets/bg.jpg";
import logo1 from "../../assets/agec_icon.png";
import logo2 from "../../assets/aicteLogo.png";
import logo3 from "../../assets/image.png";
import logo4 from "../../assets/scopusLogo.webp";

export default function Hero() {

  const logos = [logo1, logo3, logo4, logo2];

  return (
    <section
      id="home"
      className=" hero-bg relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative text-center max-w-5xl px-6 py-10 mt-32">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Advanced and Global Engineering Challenges
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-yellow-400">
          (AGEC-2K26)
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">
          Sponsored by AICTE
        </h3>

        {/* Theme */}
        <p className="mt-4 text-yellow-300 font-semibold text-sm md:text-lg">
          THEME : ENERGY EFFICIENCY, RENEWABLE AND SUSTAINABLE ENERGY
        </p>

        {/* Logos */}
        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={logo}
                alt="sponsor logo"
                className="h-14 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Date */}
        <p className="mt-8 text-lg md:text-xl font-semibold">
          08th & 09th May, 2026
        </p>

        {/* Organizer */}
        <p className="mt-6 text-lg">Organized by</p>

        <p className="text-yellow-300 font-semibold text-xl">
          Department of Electrical & Electronics Engineering
        </p>

        <p className="text-lg">
          Aditya University
        </p>

        {/* Location */}
        <p className="font-semibold mt-4">
          Surampalem, Andhra Pradesh, India
        </p>

        <p className="mt-2 text-sm md:text-base">
          Venue : Aditya University, Surampalem, ADB Road, Kakinada District, A.P – 533437
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <a
            href="#registrationFee"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Register Now
          </a>

          <a
            href="#submission"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Submit Paper
          </a>

        </div>

      </div>
    </section>
  );
}