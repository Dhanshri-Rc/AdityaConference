import sesha from "../../assets/committe.png";

export default function Committee() {
  return (
    <section id="committee" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Chief Patrons */}
        <h2 className="text-3xl font-semibold text-orange-500 mb-10">
          Chief Patron(s)
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. N. Sesha Reddy"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Dr. N. Sesha Reddy
              </h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Chancellor</p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. N Satish Reddy"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Dr. N Satish Reddy
              </h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Pro-Chancellor</p>
            </div>
          </div>
        </div>

        {/* Patrons */}
        <h2 className="text-3xl font-semibold text-orange-500 mb-10">
          Patron(s)
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. M. Sreenivasa Reddy"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Dr. M. Sreenivasa Reddy
              </h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Deputy Pro-Chancellor</p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. M. B. Srinivas"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Dr. M. B. Srinivas
              </h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Vice Chancellor</p>
            </div>
          </div>
        </div>

        {/* Co-Patron(s) */}

        <h2 className="text-3xl font-semibold text-orange-500 mt-10 mb-10">
          Co-Patron(s)
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. S. Rama Sree"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. S. Rama Sree</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">
                Pro-Vice Chancellor (Academics)
              </p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. A. Ramesh"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. A. Ramesh</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">
                Pro-Vice Chancellor (Engg & Sciences)
              </p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. T. Ravi"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. T. Ravi</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Pro-Vice Chancellor (S&P)</p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. G. Suresh"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. G. Suresh</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Registras</p>
            </div>
          </div>
        </div>

        {/*  Conference Chair (s) */}
        <h2 className="text-3xl font-semibold text-orange-500 mt-10 mb-10">
          Conference Chair (s)
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. V. Srinivasa Rao"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Dr. V. Srinivasa Rao
              </h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">HOD-EEE</p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. K.V.S.R. Murthy"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Dr. K.V.S.R. Murthy
              </h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Professor, EEE</p>
            </div>
          </div>
        </div>

        {/*  Publication Chair(s)*/}
        <h2 className="text-3xl font-semibold text-orange-500 mt-10 mb-10">
          Publication Chair(s)
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. P. Subba Rao"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. P. Subba Rao</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Assoc. Professor, CSE</p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. K K Pavan Kumar"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Dr. K K Pavan Kumar
              </h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Dy. HOD-EEE</p>
            </div>
          </div>
        </div>

        {/* Finance Chair*/}
        <h2 className="text-3xl font-semibold text-orange-500 mt-10 mb-10">
          Finance Chair
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. B.S.S.G. Pardhu"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                Dr. B.S.S.G. Pardhu
              </h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Assoc. Professor, EEE</p>
            </div>
          </div>
        </div>
         
        {/*  Registration Chair*/}
        <h2 className="text-3xl font-semibold text-orange-500 mt-10 mb-10">
         Registration Chair
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. B. Rajani"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. B. Rajani</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Professor, EEEE</p>
            </div>
          </div>
        </div>

        {/* Technical Program Committee*/}

        <h2 className="text-3xl font-semibold text-orange-500 mt-10 mb-10">
          Technical Program Comittee
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. J. Pavan"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. J. Pavan</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">
                Controller of Examinations
              </p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. K. Bapayya Naidu"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. K. Bapayya Naidu</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">
                Asst. Professor, EEE
              </p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. T. Ravi"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. T. Ravi</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Pro-Vice Chancellor (S&P)</p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. G. Suresh"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. G. Suresh</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Registras</p>
            </div>
          </div>
        </div>

         
        {/* Coordinator(s)*/}

        <h2 className="text-3xl font-semibold text-orange-500 mt-10 mb-10">
          Coordinator(s)
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. J. Pavan"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. J. Pavan</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">
                Controller of Examinations
              </p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. K. Bapayya Naidu"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. K. Bapayya Naidu</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">
                Asst. Professor, EEE
              </p>
            </div>
          </div>

          {/* Person */}
          <div className="flex items-center gap-6">
            <img
              src={sesha}
              alt="Dr. T. Ravi"
              className="w-16 h-16 rounded-full object-cover shadow"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dr. T. Ravi</h3>

              <div className="h-[1px] bg-gray-200 my-2"></div>

              <p className="text-gray-500 text-sm">Pro-Vice Chancellor (S&P)</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
