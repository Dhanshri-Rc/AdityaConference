import { Monitor } from "lucide-react";

const tracks = [
  {
    title: "Track 1",
    subtitle: "Intelligent Computing, AI and Contemporary Computer Science",
    topics: [
      "Computing Technologies & Data Science",
      "Advanced materials",
      "Computing Algorithms and its Application",
      "Parallel and Distributed Computing",
      "Neural Networks and Deep Learning",
      "Meta-heuristic Algorithms",
      "Computing Architectures and Systems",
      "AI & ML",
      "Networks, IoT and Cyber Security",
      "Cluster, Cloud, & Grid Computing",
      "Big Data Analytics",
    ],
  },
  {
    title: "Track 2",
    subtitle:
      "Cutting-edge Electronics and Next-Gen Communication Technologies",
    topics: [
      "Electronics & Communication Technology",
      "Electronic devices, materials and fabrication process",
      "Device modelling & characterization",
      "Wired & wireless communications and Networks",
      "Antennas, Propagation and Computational EM",
      "Image / Video / Multimedia Signal Processing",
      "Signal Processing Algorithms and Architectures",
      "Remote Sensing & Satellite Communications",
    ],
  },
  {
    title: "Track 3",
    subtitle:
      "Power Electronics, Smart Grids and Electric Vehicle Technologies",
    topics: [
      "Electrical Power, Energy and Power Electronics",
      "Power Generation, Transmission and Distribution",
      "Renewable Energy Sources and Technology",
      "High Voltage Engineering, HVDC-FACTS",
      "Switching Circuits & Power Converters",
      "Power System Monitoring, Control and Protection",
      "Smart Grid, Micro Grids & Distributed Generation",
      "Energy Storage System",
      "Electric Vehicles (EVs)",
      "Vehicle to Grid (V2G)",
    ],
  },
  {
    title: "Track 4",
    subtitle:
      "Robotics, Automation, Renewable Energy and Sustainability Technologies",
    topics: [
      "Robotics, Control, Instrumentation and Automation",
      "Application of IoT technologies in robotics & automation",
      "Humanoid robots",
      "Mobile robotics",
      "Control system modelling",
      "Intelligent control, Neuro-control, Fuzzy control and their applications",
      "Networked control systems",
      "Instrumentation systems",
      "Industrial automation",
    ],
  },
];

export default function CallForPapers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-orange-500">
            Call For Papers
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            High-quality original research and review papers are invited from
            academicians, industry professionals, and R&D organizations in the
            following (but not limited to) areas:
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="border border-orange-200 rounded-xl p-8 bg-white hover:shadow-lg transition"
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Monitor className="text-orange-500" size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {track.title}
                  </h3>
                  <p className="text-gray-500 text-[16px] mt-1">
                    {track.subtitle}
                  </p>
                </div>
              </div>

              {/* Topics */}
              <ul className="space-y-2">
                {track.topics.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-600 text-[16px]"
                  >
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
  );
}
