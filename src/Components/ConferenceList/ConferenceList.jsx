import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

const conferences = [
{
slug: "icirsies-2026",
month: "June 2026",
title:
"International Conference on Interdisciplinary Research and Sustainable Innovation in Science, Engineering, and Society"
},

{
slug: "biotech-2026",
month: "July 2026",
title:
"Global Conference on Advances in Biotechnology, Pharmacology, and Translational Health Sciences"
},

{
slug: "ai-smart-engineering-2026",
month: "August 2026",
title:
"International Conference on Emerging Technologies, Artificial Intelligence, and Smart Engineering Systems"
},

{
slug: "social-policy-2026",
month: "September 2026",
title:
"World Conference on Social Transformation, Public Policy, and Global Development Studies"
},

{
slug: "agriculture-2026",
month: "October 2026",
title:
"International Conference on Agriculture, Food Security, and Sustainable Environmental Systems"
},

{
slug: "digital-humanities-2026",
month: "November 2026",
title:
"International Conference on Digital Humanities, Media Culture, and Creative Arts Research"
},

{
slug: "data-science-2026",
month: "December 2026",
title:
"Global Conference on Data Science, Computational Intelligence, and Applied Informatics"
},

{
slug: "education-2027",
month: "January 2027",
title:
"International Conference on Education Innovation, Learning Technologies, and Academic Transformation"
},

{
slug: "business-2027",
month: "February 2027",
title:
"World Conference on Business, Entrepreneurship, and Sustainable Economic Development"
},

{
slug: "climate-2027",
month: "March 2027",
title:
"International Conference on Climate Change, Biodiversity, and Global Sustainability Research"
}
];

export default function ConferenceList() {

return (

<section className="py-20 bg-white">

<div className="max-w-5xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-14">

<h2 className="text-3xl sm:text-4xl font-semibold text-orange-500">
SIARE Conference Series
</h2>

<p className="mt-4 text-gray-600 max-w-3xl mx-auto">
Explore upcoming international conferences organized under the
SIARE Conference Series. Researchers, academicians, and industry
experts are invited to participate and present their work.
</p>

</div>

{/* Grid */}

<div className="grid md:grid-cols-2 gap-10">

{conferences.map((conf) => (

<div
key={conf.slug}
className="border border-orange-200 rounded-xl p-8 bg-white hover:shadow-lg transition flex flex-col justify-between"
>

{/* Icon + Month */}

<div className="flex items-center gap-4 mb-5">

<div className="bg-orange-100 p-3 rounded-full">
<CalendarDays className="text-orange-500" size={20} />
</div>

<p className="text-gray-500 font-medium">
{conf.month}
</p>

</div>

{/* Title */}

<h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
{conf.title}
</h3>

{/* Button */}

<Link
  to={`/conference/${conf.slug}`}
  className="mt-6 inline-block text-orange-500 font-medium hover:underline"
  onClick={() => window.scrollTo(0, 0)}
>
  View Details →
</Link>

</div>

))}

</div>

</div>

</section>

);
}