export default function RegistrationFee() {
  const fees = [
    {
      id: 1,
      category: "Indian Authors - Upto 6 pages",
      regular: "₹10,000/-",
      late: "₹12,000/-",
    },
    {
      id: 2,
      category: "Foreign Authors - Upto 6 pages",
      regular: "$350",
      late: "$400",
    },
    {
      id: 3,
      category: "Participants",
      regular: "₹2000/-",
      late: "₹2500/-",
    },
    {
      id: 4,
      category: "Extra Page (Indian Author)",
      regular: "₹1500/-",
      late: "₹2000/-",
    },
    {
      id: 5,
      category: "Extra Page (Foreign Author)",
      regular: "$20",
      late: "$25",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-semibold text-orange-500 mb-10">
          Registration FEE
        </h2>

        {/* Table Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <table className="w-full text-left">
            
            {/* Table Header */}
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-8 py-4 font-semibold">S.No</th>
                <th className="px-8 py-4 font-semibold">Category</th>
                <th className="px-8 py-4 font-semibold">Regular</th>
                <th className="px-8 py-4 font-semibold">Late</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-700">
              {fees.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-8 py-5">{item.id}</td>
                  <td className="px-8 py-5">{item.category}</td>
                  <td className="px-8 py-5">{item.regular}</td>
                  <td className="px-8 py-5">{item.late}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}