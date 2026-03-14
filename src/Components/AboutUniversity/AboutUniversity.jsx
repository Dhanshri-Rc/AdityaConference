import universityImg from "../../assets/aboutaditya.png";

export default function AboutUniversity() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="text-justify">
          <h2 className="text-center md:text-left text-2xl md:text-3xl font-bold text-orange-500 mb-6">
            About The University
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            <span className="font-bold">Aditya University</span> is a State
            Private University formed under the Andhra Pradesh Private
            Universities Act, 2016. It has evolved from the well-established
            <span className="font-bold"> Aditya Engineering College in Surampalem</span>,
            Kakinada District, Andhra Pradesh. Aditya University is committed
            to provide quality higher education with global standards.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Experienced teachers encourage intellectual curiosity, critical
            thinking, and cooperation among the diverse student community to
            realise their full potential and contribute to society.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:pl-10 hover:scale-105 transition duration-300">
          <img
            src={universityImg}
            alt="Aditya University"
            className="rounded-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}