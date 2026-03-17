import { useParams } from "react-router-dom";
import { conferences } from "../data/Conferences";
import { Monitor } from "lucide-react";
import bg from "../assets/bg.jpg";
import conferenceImg from "../assets/confe.jpg";
import siare from "../assets/saireSociety.jpg";

export default function ConferencePage() {
  const { slug } = useParams();

  const conference = conferences.find((c) => c.slug === slug);

  if (!conference) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Conference not found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <section
        className="relative py-32 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-yellow-400 font-bold mb-6 text-3xl md:text-4xl mt-8">
            SIARE Conference Series(June-March)
          </p>

          <h1 className="text-2xl md:text-[29px] font-bold leading-snug mb-8">
            {conference.title}
          </h1>

          <p className="text-yellow-400 font-bold text-[20px]">
            {conference.month}
          </p>
        </div>
      </section>

      {/* ABOUT SIARE */}
      {conference.aboutSiare && (
        <section className="bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2  items-center gap-10">
            <div className="flex justify-center hover:scale-105 transition duration-300">
              <img
                src={siare}
                alt="SIARE Conference"
                className="w-full max-w-md rounded-lg object-cover"
              />
            </div>

            <div className="text-justify md:pr-10">
              <h2 className="text-center md:text-left text-3xl md:text-4xl font-semibold text-orange-500 mb-6">
                About SIARE
              </h2>

              <p className="text-gray-700 text-sm  leading-relaxed whitespace-pre-line">
                {conference.aboutSiare}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ABOUT CONFERENCE */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-2">
          <div className="flex justify-center hover:scale-105 transition duration-300 md:order-2">
            <img
              src={conferenceImg}
              alt="Conference"
              className="w-full max-w-[430px] rounded-lg object-cover"
            />
          </div>

          <div className="text-justify px-4 sm:px-6 md:px-8 lg:px-12 md:order-1 mt-6 md:mt-0 ">
            <h2 className="text-center md:text-left text-3xl sm:text-4xl font-semibold text-orange-500 mb-4 md:mb-6">
              About the Conference
            </h2>

            <p className="text-gray-700 text-sm  leading-relaxed whitespace-pre-line max-w-3xl mx-auto md:mx-0">
              {conference.aboutConference}
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      {conference.objectives && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-10 text-center">
              Conference Objectives
            </h2>

            <div className="bg-white rounded-lg shadow-sm border border-orange-200 p-8">
              <ul className="space-y-5">
                {conference.objectives.map((obj, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-orange-500 mr-3 text-lg">→</span>
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* TRACKS */}
      {conference.tracks && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 text-center mb-14">
              Conference Tracks
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {conference.tracks.map((track, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Monitor className="text-orange-500" size={20} />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800">
                      {track.title}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {track.topics.map((topic, i) => (
                      <li key={i} className="flex text-gray-600">
                        <span className="text-orange-500 mr-2">→</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUBMISSION GUIDELINES */}

      {conference.submissionGuidelines && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-12 text-center">
              Paper Submission Guidelines
            </h2>

            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Manuscript Requirements */}
              <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
                  Manuscript Requirements
                </h3>

                <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                  {conference.submissionGuidelines.description?.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* Formatting Requirements */}
              <div className="bg-white rounded-xl border border-orange-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
                  Formatting Requirements
                </h3>

                <ul className="space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold">Pages:</span>{" "}
                    {conference.submissionGuidelines.pages}
                  </li>

                  <li>
                    <span className="font-semibold">Format:</span>{" "}
                    {conference.submissionGuidelines.format}
                  </li>

                  <li>
                    <span className="font-semibold">Font:</span>{" "}
                    {conference.submissionGuidelines.font}
                  </li>

                  <li>
                    <span className="font-semibold">Font Size:</span>{" "}
                    {conference.submissionGuidelines.fontSize}
                  </li>

                  <li>
                    <span className="font-semibold">Line Spacing:</span>{" "}
                    {conference.submissionGuidelines.spacing}
                  </li>

                  <li>
                    <span className="font-semibold">Citation Style:</span>{" "}
                    {conference.submissionGuidelines.citation}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PLAGIARISM POLICY */}
      {conference.plagiarismPolicy && (
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-10 text-center">
              Plagiarism Policy
            </h2>

            <div className="bg-white rounded-lg shadow-sm max-w-3xl mx-auto border border-orange-200 p-8 text-gray-700 leading-relaxed">
              {conference.plagiarismPolicy}
            </div>
          </div>
        </section>
      )}

      {/* REGISTRATION FEES */}
      {conference.registration && (
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-10 text-center">
              Registration Information
            </h2>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead className="bg-orange-50 text-gray-800">
                  <tr>
                    <th className="px-8 py-4 font-semibold">Category</th>
                    <th className="px-8 py-4 font-semibold">Fee</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  {conference.registration.map((reg, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-orange-50 transition"
                    >
                      <td className="px-8 py-5">{reg.category}</td>
                      <td className="px-8 py-5">{reg.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* REGISTRATION BENEFITS */}
      {conference.registrationBenefits && (
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-10 text-center">
              Registration Benefits
            </h2>

            <div className="bg-white rounded-lg shadow-sm  border border-orange-200 p-8">
              <ul className="space-y-5">
                {conference.registrationBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-orange-500 mr-3 text-lg">→</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* PUBLICATION OPPORTUNITIES */}
      {conference.publication && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-10 text-center">
              Publication Opportunities
            </h2>

            <div className="bg-white rounded-lg shadow-sm max-w-3xl mx-auto border border-orange-200 p-8">
              <p className="text-gray-700 mb-6">
                All accepted and presented papers will be published in:
              </p>

              <p className="font-semibold text-gray-800 mb-6">
                {conference.publication.name}
              </p>

              <ul className="space-y-4 mb-6">
                {conference.publication.features.map((feature, index) => (
                  <li key={index} className="flex text-gray-700">
                    <span className="text-orange-500 mr-2">→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-gray-700">{conference.publication.note}</p>
            </div>
          </div>
        </section>
      )}

      {/* IMPORTANT DATES */}
      {conference.importantDates && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-10 text-center">
              Important Dates
            </h2>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead className="bg-orange-50 text-gray-800">
                  <tr>
                    <th className="px-8 py-4 font-semibold">Activity</th>
                    <th className="px-8 py-4 font-semibold">Date</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  {conference.importantDates.map((date, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-orange-50 transition"
                    >
                      <td className="px-8 py-5">{date.activity}</td>
                      <td className="px-8 py-5">{date.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
