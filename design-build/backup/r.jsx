'use client';

import { useState, useMemo } from 'react';

export default function RegistrationPage() {
  const [activeTab, setActiveTab] = useState('india');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTickets, setSelectedTickets] = useState([]);

  // All ticket categories for selection
  const allTickets = [
    // India Students
    { id: 'india-student-grss-late', category: "GRSS Student Member", type: "Student", region: "india", price: "₹2,500", period: "Late Registration" },
    { id: 'india-student-ieee-late', category: "IEEE Student Member", type: "Student", region: "india", price: "₹4,000", period: "Late Registration" },
    { id: 'india-student-other-late', category: "Non-Member Student", type: "Student", region: "india", price: "₹5,000", period: "Late Registration" },
    // India Professionals
    { id: 'india-prof-grss-late', category: "GRSS Professional Member", type: "Professional", region: "india", price: "₹8,000", period: "Late Registration" },
    { id: 'india-prof-ieee-late', category: "IEEE Professional Member", type: "Professional", region: "india", price: "₹9,000", period: "Late Registration" },
    { id: 'india-prof-other-late', category: "Non-Member Professional", type: "Professional", region: "india", price: "₹10,000", period: "Late Registration" },
    // India General
    { id: 'india-tutorial', category: "Tutorials & Workshop (Dec 10)", type: "General", region: "india", price: "₹1,500", period: "Before Nov 30" },
    { id: 'india-symposium', category: "Symposium Attendee (Dec 11-13)", type: "General", region: "india", price: "₹2,500", period: "Before Nov 30" },
    // International
    { id: 'intl-grss-late', category: "GRSS Member", type: "Author", region: "international", price: "USD 275", period: "Late Registration" },
    { id: 'intl-ieee-late', category: "IEEE Member", type: "Author", region: "international", price: "USD 300", period: "Late Registration" },
    { id: 'intl-other-late', category: "Non-Member", type: "Author", region: "international", price: "USD 350", period: "Late Registration" },
    { id: 'intl-tutorial', category: "Tutorials & Workshop (Dec 10)", type: "General", region: "international", price: "USD 100", period: "Before Nov 30" },
    { id: 'intl-symposium', category: "Symposium Attendee (Dec 11-13)", type: "General", region: "international", price: "USD 200", period: "Before Nov 30" },
    // Overlength
    { id: 'overlength-5-india', category: "Overlength (5 pages)", type: "Add-on", region: "india", price: "₹1,000", period: "Per paper" },
    { id: 'overlength-6-india', category: "Overlength (6 pages)", type: "Add-on", region: "india", price: "₹2,000", period: "Per paper" },
    { id: 'overlength-5-intl', category: "Overlength (5 pages)", type: "Add-on", region: "international", price: "USD 15", period: "Per paper" },
    { id: 'overlength-6-intl', category: "Overlength (6 pages)", type: "Add-on", region: "international", price: "USD 30", period: "Per paper" },
  ];

  const filteredTickets = useMemo(() => {
    return allTickets.filter(ticket => {
      const matchesRegion = activeTab === 'india' ? ticket.region === 'india' : ticket.region === 'international';
      const matchesSearch = searchQuery === '' || 
        ticket.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const toggleTicket = (ticket) => {
    setSelectedTickets(prev => {
      const exists = prev.find(t => t.id === ticket.id);
      if (exists) {
        return prev.filter(t => t.id !== ticket.id);
      }
      return [...prev, ticket];
    });
  };

  const removeTicket = (ticketId) => {
    setSelectedTickets(prev => prev.filter(t => t.id !== ticketId));
  };

  const indiaStudentFees = [
    { category: "GRSS Student Members", earlyBird: "₹2,000", late: "₹2,500" },
    { category: "IEEE Student Members", earlyBird: "₹3,000", late: "₹4,000" },
    { category: "Others", earlyBird: "₹4,000", late: "₹5,000" }
  ];

  const indiaProfessionalFees = [
    { category: "GRSS Members", earlyBird: "₹6,000", late: "₹8,000" },
    { category: "IEEE Members", earlyBird: "₹7,000", late: "₹9,000" },
    { category: "Others", earlyBird: "₹8,000", late: "₹10,000" }
  ];

  const internationalFees = [
    { category: "GRSS Members", earlyBird: "USD 225", late: "USD 275" },
    { category: "IEEE Members", earlyBird: "USD 250", late: "USD 300" },
    { category: "Others", earlyBird: "USD 300", late: "USD 350" }
  ];

  const indiaGeneralFees = [
    { category: "Tutorials & Workshop (Dec 10)", before31Oct: "₹1,000", before30Nov: "₹1,500" },
    { category: "Symposium (Dec 11-13, Non-registered Author)", before31Oct: "₹2,000", before30Nov: "₹2,500" }
  ];

  const internationalGeneralFees = [
    { category: "Tutorials & Workshop (Dec 10)", before31Oct: "USD 70", before30Nov: "USD 100" },
    { category: "Symposium (Dec 11-13, Non-registered Author)", before31Oct: "USD 150", before30Nov: "USD 200" }
  ];

  const overlengthFees = [
    { pages: "5 pages", india: "₹1,000", international: "USD 15" },
    { pages: "6 pages (max)", india: "₹2,000", international: "USD 30" }
  ];

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      {/* Page Header */}
            <header className="bg-[var(--indigo)] text-white px-4 sm:px-6 md:px-[8%] pt-28 pb-16 sm:pt-24 sm:pb-20md:py-20 lg:py-28 border-b-[3px] border-black">
                <span className="font-mono text-[var(--gold)] font-bold text-xs sm:text-sm tracking-[0.2em]  "> <br></br></span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold   leading-[0.85] tracking-tight mt-4 sm:mt-6">
                    Registration
                </h1>
            </header>

      {/* Content Container */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] max-w-[1400px] mx-auto">
        
        {/* Important Notice */}
        <div className="bg-[var(--terracotta)] text-white border-[3px] border-black p-5 sm:p-6 shadow-[8px_8px_0_black] mb-10 sm:mb-12">
          <div className="flex items-start gap-3">
            <span className="font-mono font-bold text-lg">⚠</span>
            <div>
              <h3 className="font-mono font-bold text-sm sm:text-base mb-2">Important Notice</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                All registration fees are <strong>non-refundable and non-transferable</strong>. Symposium registration excludes Tutorials/Workshops; attendees must purchase separate tickets by adding them to the cart before payment. All fees exclude GST and platform charges.
              </p>
            </div>
          </div>
        </div>

        {/* Registration Portal */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[10px_10px_0_var(--terracotta)] mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h2 className="font-mono text-[var(--indigo)] text-xl sm:text-2xl font-extrabold">
              Registration Portal
            </h2>
          </div>

          {/* Region Toggle & Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('india')}
                className={`font-mono font-bold text-xs sm:text-sm px-4 py-2 border-[2px] border-black transition-all
                  ${activeTab === 'india' 
                    ? 'bg-[var(--indigo)] text-white shadow-[3px_3px_0_black]' 
                    : 'bg-white hover:bg-gray-100'
                  }`}
              >
                🇮🇳 INDIA
              </button>
              <button 
                onClick={() => setActiveTab('international')}
                className={`font-mono font-bold text-xs sm:text-sm px-4 py-2 border-[2px] border-black transition-all
                  ${activeTab === 'international' 
                    ? 'bg-[var(--indigo)] text-white shadow-[3px_3px_0_black]' 
                    : 'bg-white hover:bg-gray-100'
                  }`}
              >
                🌍 INTERNATIONAL
              </button>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border-[2px] border-black font-mono text-sm focus:outline-none focus:shadow-[3px_3px_0_var(--gold)]"
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Ticket Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {filteredTickets.map((ticket) => {
              const isSelected = selectedTickets.some(t => t.id === ticket.id);
              return (
                <div
                  key={ticket.id}
                  onClick={() => toggleTicket(ticket)}
                  className={`p-4 border-[2px] border-black cursor-pointer transition-all duration-150
                    ${isSelected 
                      ? 'bg-[var(--indigo)] text-white shadow-[5px_5px_0_var(--gold)]' 
                      : 'bg-white hover:shadow-[5px_5px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px]'
                    }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-mono text-[10px] px-2 py-0.5 ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}>
                      {ticket.type}
                    </span>
                    <span className={`font-mono font-bold text-sm ${isSelected ? 'text-[var(--gold)]' : 'text-[var(--terracotta)]'}`}>
                      {ticket.price}
                    </span>
                  </div>
                  <h4 className={`font-bold text-sm mb-1 ${isSelected ? 'text-white' : 'text-[var(--indigo)]'}`}>
                    {ticket.category}
                  </h4>
                  <p className={`text-xs ${isSelected ? 'text-white/70' : 'text-gray-500'}`}>
                    {ticket.period}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Selected Tickets Cart */}
          <div className="border-t-[2px] border-black pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono font-bold text-sm text-[var(--indigo)]">
                🎫 SELECTED TICKETS ({selectedTickets.length})
              </h3>
            </div>
            
            {selectedTickets.length === 0 ? (
              <p className="text-sm text-gray-500 italic mb-4">No tickets selected. Click on a category above to add it to your cart.</p>
            ) : (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedTickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center gap-2 bg-[var(--gold)] px-3 py-1.5 border-[2px] border-black">
                    <span className="text-xs font-bold">{ticket.category}</span>
                    <span className="text-xs font-mono">{ticket.price}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); removeTicket(ticket.id); }}
                      className="ml-1 text-black hover:text-[var(--terracotta)] font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button 
              disabled={selectedTickets.length === 0}
              className={`font-mono font-bold text-sm px-6 py-3 border-[3px] border-black transition-all
                ${selectedTickets.length > 0 
                  ? 'bg-[var(--terracotta)] text-white shadow-[4px_4px_0_black] hover:shadow-[2px_2px_0_black] hover:translate-x-[2px] hover:translate-y-[2px]' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              PROCEED TO PAYMENT →
            </button>
          </div>
        </div>

        {/* Fee Structure Section Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[3px] flex-1 bg-black"></div>
          <h2 className="font-mono text-[var(--indigo)] font-bold text-sm">FEE STRUCTURE REFERENCE</h2>
          <div className="h-[3px] flex-1 bg-black"></div>
        </div>

        {activeTab === 'india' ? (
          <>
            {/* India Students */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[var(--terracotta)] font-bold text-sm">01</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)]">
                  Author: Students (India)
                </h2>
              </div>
              <div className="bg-white border-[3px] border-black overflow-hidden shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--indigo)] text-white">
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Category</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Early Bird</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Late Registration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {indiaStudentFees.map((item, index) => (
                      <tr key={index} className="border-t-2 border-black">
                        <td className="p-3 sm:p-4 text-sm font-medium">{item.category}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm text-[var(--terracotta)]">{item.earlyBird}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm">{item.late}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* India Professionals */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[var(--terracotta)] font-bold text-sm">02</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)]">
                  Author: Professionals (India)
                </h2>
              </div>
              <div className="bg-white border-[3px] border-black overflow-hidden shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--indigo)] text-white">
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Category</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Early Bird</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Late Registration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {indiaProfessionalFees.map((item, index) => (
                      <tr key={index} className="border-t-2 border-black">
                        <td className="p-3 sm:p-4 text-sm font-medium">{item.category}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm text-[var(--terracotta)]">{item.earlyBird}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm">{item.late}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* India General Participants */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[var(--terracotta)] font-bold text-sm">03</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)]">
                  General Participants (India)
                </h2>
              </div>
              <div className="bg-white border-[3px] border-black overflow-hidden shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--indigo)] text-white">
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Category</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Before Oct 31</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Before Nov 30</th>
                    </tr>
                  </thead>
                  <tbody>
                    {indiaGeneralFees.map((item, index) => (
                      <tr key={index} className="border-t-2 border-black">
                        <td className="p-3 sm:p-4 text-sm font-medium">{item.category}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm text-[var(--terracotta)]">{item.before31Oct}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm">{item.before30Nov}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* International Authors */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[var(--terracotta)] font-bold text-sm">01</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)]">
                  Author: Students & Professionals (International)
                </h2>
              </div>
              <div className="bg-white border-[3px] border-black overflow-hidden shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--indigo)] text-white">
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Category</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Early Bird</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Late Registration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internationalFees.map((item, index) => (
                      <tr key={index} className="border-t-2 border-black">
                        <td className="p-3 sm:p-4 text-sm font-medium">{item.category}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm text-[var(--terracotta)]">{item.earlyBird}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm">{item.late}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* International General Participants */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[var(--terracotta)] font-bold text-sm">02</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)]">
                  General Participants (International)
                </h2>
              </div>
              <div className="bg-white border-[3px] border-black overflow-hidden shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--indigo)] text-white">
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Category</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Before Oct 31</th>
                      <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold">Before Nov 30</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internationalGeneralFees.map((item, index) => (
                      <tr key={index} className="border-t-2 border-black">
                        <td className="p-3 sm:p-4 text-sm font-medium">{item.category}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm text-[var(--terracotta)]">{item.before31Oct}</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-sm">{item.before30Nov}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Overlength Page Charges */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[var(--terracotta)] font-bold text-sm">04</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)]">
              Overlength Page Charges
            </h2>
          </div>
          <div className="bg-white border-[3px] border-black overflow-hidden shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150 mb-4">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--gold)]">
                  <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold text-black">Page Count</th>
                  <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold text-black">India</th>
                  <th className="text-left p-3 sm:p-4 font-mono text-xs sm:text-sm font-bold text-black">International</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-2 border-black">
                  <td className="p-3 sm:p-4 text-sm font-medium">Up to 4 pages</td>
                  <td className="p-3 sm:p-4 font-mono font-bold text-sm text-green-600">No Extra Charge</td>
                  <td className="p-3 sm:p-4 font-mono font-bold text-sm text-green-600">No Extra Charge</td>
                </tr>
                {overlengthFees.map((item, index) => (
                  <tr key={index} className="border-t-2 border-black">
                    <td className="p-3 sm:p-4 text-sm font-medium">{item.pages}</td>
                    <td className="p-3 sm:p-4 font-mono font-bold text-sm">{item.india}</td>
                    <td className="p-3 sm:p-4 font-mono font-bold text-sm">{item.international}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Papers with up to 4 pages of main content (excluding references) have no extra charge. Total paper length must not exceed 6 pages (including everything). Overlength fees must be added to the cart along with author registration fees before making final payment.
          </p>
        </div>

        {/* Registration Inclusions */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[10px_10px_0_var(--terracotta)] mb-10 sm:mb-12">
          <h3 className="font-mono text-[var(--indigo)] text-xl sm:text-2xl font-extrabold mb-6 border-b-[3px] border-[var(--gold)] w-fit pb-2">
            What's Included
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-[var(--gold)] font-mono font-bold">//</span>
              <span className="text-sm sm:text-base">Admission to all Technical Sessions</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--gold)] font-mono font-bold">//</span>
              <span className="text-sm sm:text-base">Digital Proceedings via IEEE Xplore</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--gold)] font-mono font-bold">//</span>
              <span className="text-sm sm:text-base">Symposium Kit & Materials</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--gold)] font-mono font-bold">//</span>
              <span className="text-sm sm:text-base">Banquet & Networking Events</span>
            </div>
          </div>
        </div>

        {/* Register CTA */}
        <div className="bg-[var(--indigo)] border-[3px] border-black p-6 sm:p-8 shadow-[10px_10px_0_black]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="font-mono text-white text-xl sm:text-2xl font-extrabold mb-2">
                Ready to Submit Your Paper?
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Complete the checklist and submit via CMT Portal
              </p>
            </div>
            <a 
              href="/submit"
              className="inline-flex items-center justify-center gap-3 font-mono font-bold text-sm sm:text-base bg-[var(--gold)] text-black px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-[3px_3px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              SUBMIT PAPER
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
