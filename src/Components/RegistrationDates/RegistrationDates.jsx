export default function RegistrationDates() {
  const fees = [
    {
      id: 1,
      category: "Last Date for Submission of Manuscripts",
      ImportantDates: "28th February 2026",
    },
    {
      id: 2,
      category: "Acceptance Notification",
      ImportantDates: "15th March 2026",
    },
    {
      id: 3,
      category: "Registration",
      ImportantDates: "16th to 30th March 2026",
    },
    {
      id: 4,
      category: "Camera Ready Paper Submission",
      ImportantDates: "30th March 2026",
    },
    {
      id: 5,
      category: "Conference Dates",
      ImportantDates: "08th & 09th May 2026",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-10 text-center">
          Registration Dates
        </h2>

        {/* Table Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <table className="w-full text-left border-collapse">
            {/* Table Header */}
            <thead className="bg-orange-50 text-gray-800">
              <tr>
                <th className="px-8 py-4 font-semibold">S.No</th>
                <th className="px-8 py-4 font-semibold">Category</th>
                <th className="px-8 py-4 font-semibold">Important Dates</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-700">
              {fees.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-orange-50 transition"
                >
                  <td className="px-8 py-5">{item.id}</td>
                  <td className="px-8 py-5">{item.category}</td>
                  <td className="px-8 py-5">{item.ImportantDates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
