import qrCode from "../../assets/qr.png";

export default function Submission() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* QR Code */}
        <div className="flex justify-center">
          <div className="bg-white border-2 border-orange-500 p-6 md:p-8 rounded-xl text-center hover:scale-105 transition duration-300">
            <img
              src={qrCode}
              alt="Paper Submission QR Code"
              className="w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-justify md:pr-10">
          <h2 className="text-center md:text-justify text-2xl md:text-3xl font-bold text-orange-500 mb-5 md:mb-6">
            Submission & Publication of Paper
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            <span className="font-semibold">AGEC-2026</span> is soliciting the
            submission of original research papers with significant
            contributions in the relevant fields. Submitted papers should not
            have been previously published or currently under review for
            publication elsewhere.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            The <span className="font-semibold">Microsoft CMT service</span> is
            used for managing the peer-reviewing process for this conference.
            This service is provided by Microsoft and includes support for Azure
            cloud services, software development, and technical support.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            <span className="font-semibold">Author Guidelines:</span> Authors
            are requested to follow the conference paper format while preparing
            their manuscripts.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Submission Template:{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Download Template
            </span>
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Note:</span> To submit papers,
              authors must have an account in{" "}
              <span className="font-semibold">
                Microsoft CMT (Conference Management Toolkit)
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
