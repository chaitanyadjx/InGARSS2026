import PageHeader from '@/components/PageHeader';

const attendeeRules = [
  'Every participant, including authors, co-authors, speakers, students, delegates and accompanying persons, must complete the applicable registration before entering any session.',
  'You may be asked to show valid student or IEEE membership proof. The documents required for each category are listed in the registration category table below.',
  'Collect your badge and conference kit at the registration desk. Please arrive early to avoid queues. Registration timings are 8:30 AM to 9:30 AM and 2:30 PM to 4:30 PM each day; any change will be announced on the conference website and by email.',
  'Bring your registration confirmation email and a valid government-issued or institutional photo ID for verification.',
  'Wear your official badge visibly at all times at the venue. Badges are non-transferable and may be checked by volunteers or security staff.',
  'Entry to technical sessions, workshops, tutorials, lunches and special events depends on your registration category and the permissions for each event.',
  'Arrive at least 10 minutes before each session begins, and stay until it ends. Avoid late entry, especially during technical presentations and keynote addresses.',
  'Treat speakers, session chairs, volunteers and fellow participants with respect. Harassment, discrimination, abusive behaviour and deliberate disruption will not be tolerated.',
  'Keep mobile phones on silent mode inside session halls.',
  'Photography, audio or video recording and live streaming of presentations need the presenter’s permission and the organisers’ approval. Respect unpublished research and intellectual property.',
  'Eat and drink only in the designated areas, and follow the venue’s safety and housekeeping rules. Please keep the venue clean.',
  'Follow the official conference programme. The organising committee may change session timings, room allocations or arrangements when necessary.',
  'Participation and presentation certificates are issued according to eligibility.',
  'Follow the IEEE Code of Ethics and IEEE conference conduct policies.',
  'Comply with the venue’s security requirements and with instructions from security staff, volunteers and the organising committee.',
  'You are responsible for the safety of your belongings. The conference is not responsible for any loss.',
];

const oralGuidelines = [
  'Check the final technical programme for your presentation date, time and session room.',
  'An author must present the paper in person at the venue. Virtual or pre-recorded presentations are allowed only with specific authorisation from the organising committee.',
  'Report to your session hall at least 15 minutes before the session starts and introduce yourself to the session chair.',
  'Each paper has 10 minutes for the presentation and 3 minutes for questions and answers, 13 minutes in total. Keep strictly to this time. The session chair may stop a presentation that overruns.',
  'Prepare your slides using the conference template. Please follow the template strictly.',
  'Submit or upload your presentation file by the deadline announced by the technical programme committee, following the organisers’ instructions.',
  'Carry a backup of your presentation on a USB drive. A PDF backup is also recommended.',
  'Use the conference-provided presentation system or laptop.',
  'The presentation must match the accepted paper. Any substantial change to the title, authorship or technical content needs approval from the technical programme committee.',
  'Stay available for the question-and-answer period and answer technical questions professionally. You are also encouraged to attend the whole session and take part in the discussions.',
  'If the designated presenter cannot attend, another co-author may present with prior notice to, and approval from, the organising committee, subject to the registration requirements. Any change of presenter or presentation mode must be approved in advance.',
  'If you do not present an accepted paper without prior authorisation, the paper may be marked as a no-show and may be excluded from IEEE Xplore. Please be at the session room well in advance of your slot.',
];

const posterGuidelines = [
  'Design the poster using the template on the conference website. Display your poster ID or paper number prominently so that visitors and evaluators can find it.',
  'You are responsible for printing your poster and bringing it to the venue. Vendor details are provided on the conference website.',
  'Put up your poster in the designated area before the session begins, following the poster coordinators’ instructions. Use only the mounting materials the organisers permit, and avoid damaging boards or venue property.',
  'Be ready to explain your work in about 3–5 minutes, followed by technical discussion and questions. At least one author must stay near the poster throughout the assigned period.',
  'A poster displayed without an author present during the assigned session may be treated as not presented, subject to verification by the session chair or poster coordinator.',
  'Poster papers are subject to the same registration, presentation, quality and publication requirements as other accepted papers.',
];

const categoryDocuments = [
  ['Student GRSS member', 'Original full-time student ID card, valid up to at least 2026; IEEE GRSS student membership proof, valid up to at least 31 December 2026'],
  ['Student IEEE member', 'Original full-time student ID card, valid up to at least 2026; IEEE student membership proof, valid up to at least 31 December 2026'],
  ['Non-IEEE student', 'Original full-time student ID card, valid up to at least 2026'],
  ['Professional GRSS member', 'IEEE GRSS membership proof, valid up to at least 31 December 2026'],
  ['Professional IEEE member', 'IEEE membership proof, valid up to at least 31 December 2026'],
];

function GuidelinesSection({ number, title, children }) {
  return (
    <section className="border-[3px] border-black bg-white p-5 sm:p-8 shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black]">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-mono font-bold text-sm sm:text-base text-[var(--terracotta)]">{number}</span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function NumberedList({ items }) {
  return (
    <ol className="list-decimal pl-5 space-y-3 text-sm sm:text-base leading-relaxed text-gray-800">
      {items.map((item, index) => <li key={index} className="pl-1">{item}</li>)}
    </ol>
  );
}

export default function PresentationGuidelinesPage() {
  return (
    <main className="min-h-screen bg-[var(--bone)] pb-16">
      <PageHeader title="Presentation Guidelines" />
      <section className="px-4 sm:px-6 md:px-[8%] py-10 sm:py-14">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <div className="border-[3px] border-black bg-[var(--gold)] p-5 sm:p-7 shadow-[6px_6px_0_var(--terracotta)] sm:shadow-[8px_8px_0_var(--terracotta)]">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wide">IEEE India Geoscience and Remote Sensing Symposium (InGARSS 2026)</p>
            <p className="mt-2 text-sm sm:text-base font-semibold">01–04 December 2026 · The Park, Hyderabad, Telangana, India</p>
          </div>

          <GuidelinesSection number="01" title="Important Notices">
            <h3 className="font-bold text-lg text-[var(--indigo)] mb-3">Presentation</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-gray-800">
              <li>Each oral presentation is scheduled for 10 minutes, followed by a 3-minute Q&amp;A discussion.</li>
              <li>Follow the conference templates strictly when preparing your presentation or poster.</li>
              <li>Authors must be in the session room well in advance of their slot. If an author cannot present the paper or poster in the given slot, the paper may be marked as a no-show.</li>
            </ul>
            <h3 className="font-bold text-lg text-[var(--indigo)] mt-7 mb-3">Registration Desk Timings</h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-800">The registration desk is open each day of the conference from 8:30 AM to 9:30 AM and from 2:30 PM to 4:30 PM.</p>
            <h3 className="font-bold text-lg text-[var(--indigo)] mt-7 mb-3">Registration Category Verification</h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-800 mb-4">Some registrations have been flagged for category issues. Flagged registrations must pay the remaining amount; failed registrations will be invalid. Please bring the documents listed for your registration category.</p>
            <div className="overflow-x-auto border-2 border-black">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-[var(--indigo)] text-white">
                  <tr><th className="p-3 border-b-2 border-black">Category</th><th className="p-3 border-b-2 border-black">Documents required</th></tr>
                </thead>
                <tbody>
                  {categoryDocuments.map(([category, documents]) => (
                    <tr key={category} className="odd:bg-white even:bg-[var(--bone)] align-top">
                      <td className="p-3 border-b border-black/20 font-bold whitespace-nowrap">{category}</td>
                      <td className="p-3 border-b border-black/20 leading-relaxed">{documents}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-800">We are taking all care so that everyone is engaged, can network and has fun at the conference. Securing your belongings is your own responsibility; the conference is not responsible for any loss.</p>
          </GuidelinesSection>

          <GuidelinesSection number="02" title="General Rules for All Attendees">
            <NumberedList items={attendeeRules} />
          </GuidelinesSection>

          <GuidelinesSection number="03" title="Oral Paper Presentations">
            <NumberedList items={oralGuidelines} />
          </GuidelinesSection>

          <GuidelinesSection number="04" title="Poster Presentations">
            <NumberedList items={posterGuidelines} />
          </GuidelinesSection>

          <div className="border-[3px] border-black bg-[var(--indigo)] text-white p-5 sm:p-7 shadow-[6px_6px_0_var(--gold)] sm:shadow-[8px_8px_0_var(--gold)]">
            <p className="text-sm sm:text-base leading-relaxed">For queries about registration, paper presentation, visas or anything else, contact <a className="font-bold underline underline-offset-2" href="mailto:ingarss2026@gmail.com">ingarss2026@gmail.com</a>.</p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed">We look forward to welcoming you to InGARSS 2026 in Hyderabad and wish you a productive and enjoyable conference.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
