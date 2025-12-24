import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  /* ---------------- SEARCH LOGIC ---------------- */
  const handleSearch = () => {
    if (!isValidInput(value)) {
      setError("Enter a valid Vehicle Number or VIN");
      return;
    }
    setError("");
    navigate("/result", { state: { query: value } });
  };

  /* ---------------- REVIEWS SLIDER ---------------- */
  const reviews = [
    { name: "Ahmed R.", text: "Very detailed inspection. Helped me avoid a damaged car." },
    { name: "Priya S.", text: "Doorstep inspection was smooth and professional." },
    { name: "Mohammed K.", text: "AI-powered report explanation was impressive." },
    { name: "Sara M.", text: "Dedicated manager explained everything clearly." },
    { name: "Daniel P.", text: "Saved me from buying a faulty car." },
    { name: "Ayesha N.", text: "Worth every dirham. Highly recommended." },
    { name: "Shiva M.", text: "Dedicated manager explained everything clearly." },
    { name: "Anusha P.", text: "Saved me from buying a faulty car." },
    { name: "Aradhya N.", text: "Worth every dirham. Highly recommended." },
  ];

  const visibleCount = 3;
  const totalPages = Math.ceil(reviews.length / visibleCount);
  const [page, setPage] = useState(0);

  const startIndex = page * visibleCount;
  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="min-h-screen flex flex-col justify-center text-center px-6"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(2,6,23,0.7),
              rgba(2,6,23,0.9)
            ),
            url('/hero-bg-blue.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Auto Vera
          </span>
          <br />
          Smart Vehicle Intelligence
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
          Verify any vehicle instantly using number or VIN.
        </p>

        {/* SEARCH */}
        <div className="mt-10 max-w-xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value.toUpperCase())}
            placeholder="Enter Vehicle Number or VIN"
            className="w-full bg-transparent outline-none text-lg text-white placeholder-gray-400"
          />

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

          <button
            onClick={handleSearch}
            className="mt-4 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-lg text-white font-semibold"
          >
            Search
          </button>
        </div>
      </section>

      {/* ================= PURPOSE SECTION ================= */}
      <section className="py-20 px-6 bg-slate-950 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Buying a Used/New Car in the UAE?
        </h2>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
          Buy it risk-free with our expert{" "}
          <span className="text-blue-400 font-semibold">
            Pre-Purchase Inspection (PPI)
          </span>{" "}
          service at your Doorstep.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {[
            "200-Point Pre-Purchase Inspection",
            "Doorstep Inspection at Seller's Location",
            "Dedicated Manager for Every Inspection",
            "AI-powered report conversation feature",
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <span className="text-blue-400 text-xl">✔</span>
              <span className="text-gray-200">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold">
            Book Inspection Now
          </button>

          <button className="px-8 py-3 rounded-xl border border-blue-400 text-blue-400">
            Check Our Inspection Plans
          </button>
        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section id="reviews" className="py-24 bg-slate-900 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What our Customers say about Our
          <span className="text-blue-400"> Comprehensive Car Inspection</span>
        </h2>

        <p className="mt-3 text-gray-400">
          Trusted by car buyers across the UAE.
        </p>

        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Arrows */}
          <button onClick={prev} className="absolute -left-6 top-1/2 -translate-y-1/2 bg-slate-800 w-10 h-10 rounded-full text-white">
            ‹
          </button>
          <button onClick={next} className="absolute -right-6 top-1/2 -translate-y-1/2 bg-slate-800 w-10 h-10 rounded-full text-white">
            ›
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((r, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                <div className="text-yellow-400 mb-3">★★★★★</div>

                <p className="text-gray-200 text-sm">“{r.text}”</p>

                {/* Google logo */}
                <img src="/google-logo.png" className="absolute bottom-4 right-4 h-6" />

                {/* Bubble tail */}
                <div className="absolute -bottom-3 left-8 w-5 h-5 bg-white/5 rotate-45 border-l border-b border-white/10" />

                {/* User */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-9 w-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {r.name[0]}
                  </div>
                  <span className="text-gray-300 text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 w-2 rounded-full ${
                  page === i ? "bg-blue-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- VALIDATION ---------------- */
function isValidInput(value) {
  const vehicleRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
  return vehicleRegex.test(value) || vinRegex.test(value);
}
