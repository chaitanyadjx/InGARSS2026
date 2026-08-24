'use client';

import PageHeader from "@/components/PageHeader";

export default function VisaPage() {
  const requiredInfoList = [
    "Name as per passport",
    "Nationality",
    "Place of Birth",
    "Passport Number",
    "Current Affiliation and Designation",
    "Scanned copy of the Passport",
    "Short CV"
  ];

  const requiredDocuments = [
    "Letter of Invitation",
    "Ministry of Home Affairs Permission",
    "Ministry of External Affairs Permission"
  ];

  const contactReference = [
    { label: "Name of the Event", value: "InGARSS 2026 (IEEE India Geoscience and Remote Sensing Symposium)" },
    { label: "Organizer's Address", value: "IEEE GRSS, IEEE Hyderabad section, Room No. 644-645, 6th Floor, Al-Karim Trade Center, Ranigunj, Secunderabad, Telangana, 500003, India" },
    { label: "Dates", value: "01st – 04th December 2026" },
    { label: "Venue", value: "The Park Hyderabad, Raj Bhavan Road, Somajiguda, Hyderabad, Telangana 500082" },
    { label: "Email ID", value: "ingarss2026@gmail.com" },
    { label: "Website", value: "https://www.ingarss2026.co.in" }
  ];

  return (
    <main className="min-h-screen bg-[var(--bone)] pb-16 md:pb-24">
      <PageHeader
        title="Visa Information"
        subtitle="VISA is requested to all participants coming from Overseas for InGARSS 2026"
      />

      <section className="px-5 md:px-[8%] py-10 md:py-16">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Procedure Box */}
          <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black]">
            <div className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-xs px-3 py-1 border border-black mb-3">
              IMPORTANT NOTICE FOR OVERSEAS DELEGATES
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)] mb-3">
              Updated Procedure for e-Business Visa (e-B5V)
            </h3>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
              Please find the updated procedure for obtaining the e-Business Visa (e-B5V) for attending InGARSS 2026 in India. Kindly note that the earlier e-Conference Visa has now been revised to the e-Business Visa category. All international attendees are requested to carefully follow the updated guidelines and apply under the new visa category.
            </p>
          </div>

          {/* Screenshot Section */}
          <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black]">
            <h3 className="text-xl font-extrabold text-black mb-2">
              Important Information
            </h3>
            <p className="text-sm text-gray-700 font-medium mb-4">
              Applicants are advised to apply under the <strong className="font-bold text-black">e-Business Visa (e-B5V)</strong> category, as shown in the screenshot below for your kind reference:
            </p>
            <div className="border-[2px] border-black bg-gray-100 p-2 overflow-hidden shadow-[4px_4px_0_black]">
              <img
                src="/assets/visa-screenshot.jpg"
                alt="e-Business Visa (e-B5V) Selection Screenshot"
                className="w-full h-auto object-contain max-h-[450px] mx-auto border border-gray-300"
              />
            </div>
          </div>

          {/* Two Columns: Required Info & Documents */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Required Information */}
            <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-[var(--indigo)] mb-3">
                  Required Information
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium mb-4">
                  The following information is required from all international delegates:
                </p>

                <ul className="space-y-2.5 mb-6">
                  {requiredInfoList.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-[var(--gold)] border border-black flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--bone)] p-4 border border-black text-xs text-gray-800 space-y-2">
                <p className="font-medium">
                  The conference organizer will apply for ministry approvals after collecting the above information provided in the acceptance mail through Google form.
                </p>
                <p className="font-bold text-[var(--terracotta)]">
                  We will apply for ministry approvals after collecting the above information from you.
                </p>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-[var(--indigo)] mb-3">
                  Documents Required for e-Business Visa (e-B5V)
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium mb-4">
                  Kindly apply for the e-Business Visa only once you have all these three documents. The documents will be available prior to the conference dates.
                </p>

                <ul className="space-y-3 mb-6">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="bg-[var(--bone)] p-3.5 border border-black shadow-[3px_3px_0_black] flex items-center gap-3 text-xs sm:text-sm font-bold text-black">
                      <span className="w-6 h-6 bg-[var(--terracotta)] text-white border border-black rounded-full flex items-center justify-center font-mono text-xs shrink-0">
                        {idx + 1}
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--bone)] p-4 border border-black text-xs text-gray-800 space-y-2">
                <p className="font-medium">
                  To get the above documents, please fill the Google form provided in the acceptance mail.
                </p>
                <p className="font-medium">
                  For any other queries, please send e-mail to{" "}
                  <a href="mailto:ingarss2026@gmail.com" className="font-bold text-[var(--terracotta)] underline">
                    ingarss2026@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black]">
            <h3 className="text-xl font-extrabold text-black mb-4 uppercase tracking-tight">
              Note
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-800 font-medium">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[var(--terracotta)] shrink-0" />
                <span>The Ministry of External Affairs approval letter will be shared with registered attendees on their registered email IDs, and MEA will forward these to the Indian Embassy / Missions at each location.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[var(--indigo)] shrink-0" />
                <span>Kindly apply for the e-Business Visa (e-B5V) only when all the above documents are available with you. Ministry permissions are ideally received 2 months prior to the conference dates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[var(--gold)] shrink-0" />
                <span>Please make sure there are enough blank pages available in passports for immigration stamping.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-black shrink-0" />
                <span>The passport should have a minimum validity of six (06) months from the date of travel/application, which is mandatory for visa processing and international travel.</span>
              </li>
            </ul>
          </div>

          {/* Essential Contact Details Reference */}
          <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black]">
            <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-2">
              Essential Contact Details Reference for the VISA Application
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 font-medium">
              Please use the following official details while filling your Indian Visa application:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactReference.map((item, idx) => (
                <div key={idx} className="bg-[var(--bone)]/60 p-4 border border-black">
                  <span className="block font-mono text-xs font-bold text-[var(--terracotta)] uppercase tracking-wider mb-1">
                    {item.label}:
                  </span>
                  <span className="text-sm font-extrabold text-black break-words">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://indianvisaonline.gov.in/visa/tvoa.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--terracotta)] text-white font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_black] transition-all"
              >
                APPLY VIA OFFICIAL VISA PORTAL (indianvisaonline.gov.in) →
              </a>
            </div>
          </div>

          {/* Arrival Requirements */}
          <div className="bg-[var(--indigo)] text-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black] space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Arrival Requirements for International Passengers
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-black">
              {/* India e-Arrival Card */}
              <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0_black]">
                <h4 className="font-extrabold text-lg text-[var(--indigo)] mb-2">
                  India e-Arrival Card
                </h4>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium mb-4">
                  Please be advised that all foreign passengers, including OCI cardholders, are required to register for the India e-Arrival Card. Registration can be completed up to 72 hours prior to arrival.
                </p>
                <a
                  href="https://indianvisaonline.gov.in/earrival/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono font-bold text-xs bg-[var(--gold)] text-black px-4 py-2.5 border border-black hover:bg-black hover:text-white transition-colors"
                >
                  VISIT e-ARRIVAL PORTAL →
                </a>
              </div>

              {/* Air Suvidha Portal */}
              <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0_black]">
                <h4 className="font-extrabold text-lg text-[var(--indigo)] mb-2">
                  Air Suvidha Portal
                </h4>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium mb-4">
                  Passengers must complete the self-declaration form on the Air Suvidha portal at least 24 hours before arriving in India and carry the completed form for presentation at immigration.
                </p>
                <a
                  href="https://airsuvidha.civilaviation.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono font-bold text-xs bg-[var(--terracotta)] text-white px-4 py-2.5 border border-black hover:bg-black transition-colors"
                >
                  VISIT AIR SUVIDHA PORTAL →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
