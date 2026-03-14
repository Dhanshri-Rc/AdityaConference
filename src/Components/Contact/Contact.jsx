import campusImg from "../../assets/bg.jpg";

export default function Contact() {
  return (
    <section
      className="relative bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `url(${campusImg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-center lg:justify-end">

        {/* Contact Card */}
        <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl shadow-lg max-w-md w-full">

          <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-5 sm:mb-6">
            Aditya University
          </h2>

          <div className="space-y-3 sm:space-y-4 text-black text-sm sm:text-base">

            <p>
              Email:{" "}
              <a
                href="mailto:ic@adityauniversity.in"
                className="text-blue-600 hover:underline break-words"
              >
                ic@adityauniversity.in
              </a>
            </p>

            <p>
              Dr. V. Srinivasa Rao,{" "}
              <a
                href="mailto:hod_eee@adityauniversity.in"
                className="break-words"
              >
                hod_eee@adityauniversity.in
              </a>
            </p>

            <p>
              Dr. KVSR Murthy,{" "}
              <a
                href="mailto:murthy.kvs@adityauniversity.in"
                className="break-words"
              >
                murthy.kvs@adityauniversity.in
              </a>
            </p>

            <p>
              Dr. KK Pavan Kumar,{" "}
              <a
                href="mailto:kpavankumark@adityauniversity.in"
                className="break-words"
              >
                kpavankumark@adityauniversity.in
              </a>
            </p>

            <p>
              Dr. Vijay Muniyandi,{" "}
              <a
                href="mailto:vijaym@adityauniversity.in"
                className="break-words"
              >
                vijaym@adityauniversity.in
              </a>
            </p>

            <p>
              Website:{" "}
              <a
                href="https://adityauniversity.in/"
                target="_blank"
                className="text-orange-500 hover:underline break-words"
              >
                adityauniversity.in
              </a>
            </p>

            <div>
              <p className="font-semibold mt-5 mb-2">Address:</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Aditya Nagar, ADB Road, Surampalem,
                <br />
                Pin: 533437 Kakinada District,
                <br />
                Andhra Pradesh, India
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}