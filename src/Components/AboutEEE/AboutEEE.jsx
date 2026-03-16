import eeeImg from "../../assets/department.png";

export default function AboutEEE() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center hover:scale-105 transition duration-300">
          <img
            src={eeeImg}
            alt="Electrical and Electronics Engineering"
            className="w-full max-w-md rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="text-justify md:pr-10">
          <h2 className="text-center md:text-justify text-2xl md:text-4xl font-semibold text-orange-500 mb-5 md:mb-6">
            About EEE Department
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            The Department of Electrical and Electronics Engineering at Aditya
            University is committed to developing highly competent engineers
            equipped for the modern world. By integrating
            <span className="font-bold">
              {" "}
              advanced professional knowledge with entrepreneurial thinking and
              critical problem-solving
            </span>
            , we provide a rigorous education grounded in research and strong
            industrial partnerships. Our distinguished faculty bring a wealth of
            academic and industry experience, contributing to global innovation
            through frequent publications in prestigious international journals.
          </p>
        </div>
      </div>
    </section>
  );
}
