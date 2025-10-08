import React from "react";

const TermsContent = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-5 gap-20">
        <aside className="md:col-span-2 bg-white border border-[#E5E7EB] rounded-lg p-6 h-fit sticky top-4">
          <h3 className="font-semibold text-gray-900 mb-4">Table of Content</h3>
          <ul className="space-y-2 text-blue-400 text-sm">
            <li><a href="#preface" className="hover:underline">Introduction</a></li>
            <li><a href="#bookings" className="hover:underline">Bookings</a></li>
            <li><a href="#payment" className="hover:underline">Payment</a></li>
            <li><a href="#cancellation" className="hover:underline">Cancellations & Refunds</a></li>
            <li><a href="#thirdparty" className="hover:underline">Third-Party Services</a></li>
            <li><a href="#refusal" className="hover:underline">Right to Refuse Service</a></li>
            <li><a href="#force" className="hover:underline">Force Majeure</a></li>
            <li><a href="#belongings" className="hover:underline">Guest Belongings</a></li>
            <li><a href="#liability" className="hover:underline">Guest Liability</a></li>
            <li><a href="#indemnity" className="hover:underline">Indemnity</a></li>
            <li><a href="#privacy" className="hover:underline">Data Privacy</a></li>
            <li><a href="#dispute" className="hover:underline">Dispute Resolution</a></li>
            <li><a href="#consumer" className="hover:underline">Consumer Protection Act Waiver</a></li>
            <li><a href="#rights" className="hover:underline">Company Rights</a></li>
            <li><a href="#website" className="hover:underline">Website & Operational Notes</a></li>
            <li><a href="#tieup" className="hover:underline">Third-Party Tie-Ups</a></li>
            <li><a href="#restrictions" className="hover:underline">Usage Restrictions</a></li>
          </ul>
        </aside>

        <article className="md:col-span-3 space-y-10 text-gray-700 leading-relaxed">
          <section id="preface">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Preface</h2>
            <p className="mb-3 text-justify">
              Simply Andaman aims to deliver safe, organized, and memorable travel experiences in the Andaman Islands. This Guest Policy outlines the booking process, guest responsibilities, and terms of service to ensure smooth operations and enjoyable trips for all.
            </p>
            <p>
              By completing a booking with us, guests agree to these terms and conditions.
            </p>
          </section>

          <section id="bookings">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Bookings</h2>
            <h3 className="font-bold text-[#374151] mb-2">Tourist Taxis</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Discuss your itinerary and receive a package quotation.</li>
              <li>
                Confirm booking by:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Paying 50–70% of the package cost.</li>
                  <li>Sharing government-issued photo ID for all travelers (Aadhar, Passport, etc.).</li>
                  <li>Providing flight details (arrival & departure).</li>
                  <li>Sharing the names, ages, and gender of all travelers.</li>
                </ul>
              </li>
              <li>The remaining balance must be paid <span className="font-bold">at least 2 days before arrival</span> or in cash on arrival before services begin.</li>
              <li>All booking-related communication should be through the provided official contact details.</li>
            </ol>
          </section>

          <section id="payment">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bookings are confirmed only upon full payment.</li>
              <li>
                Accepted payment modes:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Electronic transfers.</li>
                  <li>Cash (up to ₹2,00,000) with PAN card.</li>
                  <li>Cheques are not accepted.</li>
                </ul>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-4 mb-2">Bank Details</h3>
            <ul className="list-disc pl-5">
              <li>Details of our future bank accounts</li>
            </ul>
          </section>

          <section id="cancellation">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellations & Refunds</h2>
            <h3 className="font-semibold text-gray-900 mb-2">Cancellation Charges:</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Days Before Arrival</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>10 days or less</li>
                    <li>11–20 days</li>
                    <li>21–30 days</li>
                    <li>Above 30 days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Deduction</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>100% (No refund)</li>
                    <li>50% of the total cost</li>
                    <li>25% of the total cost</li>
                    <li>Full refund after a ₹2,500 per person cancellation charge</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 mt-6 mb-2">Additional Notes:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>No rescheduling after payment</li>
              <li>Specific hotels (SeaShell, Coral Cove, Taj, etc.) have separate, stricter cancellation terms.</li>
              <li>100% cancellation for travel dates <span className="font-bold">15 Dec – 15 Jan.</span></li>
            </ol>

            <h3 className="font-semibold text-gray-900 mt-6 mb-2">Flight-inclusive Package</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>No refunds for flight delays/cancellations.</li>
              <li>If guests arrive independently, services continue as per plan; no refund for missed days.</li>
            </ul>

            <p className="mt-4">
              See full policy <br />
              <a
                href="https://simplyandaman.in/refund-and-cancellations-policy"
                className="text-blue-600 hover:underline"
              >
                simplyandaman.in/refund-and-cancellations-policy
              </a>
            </p>
          </section>

          <section id="thirdparty">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p>
              Guests must follow the rules set by hotels, cruises, transport providers, and activity operators. Original ID proof is mandatory at check-ins and boarding points.
            </p>
          </section>

          <section id="refusal">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Right to Refuse Service</h2>
            <p className="mb-2">The company may refuse service to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Misbehaving, disruptive, or abusive guests.</li>
              <li>Those suspected of contagious illness (without medical clearance).</li>
              <li>Individuals with criminal backgrounds.</li>
              <li>Guests breaking company policies.</li>
            </ul>
            <p className="font-semibold mt-2">No refunds apply in such cases.</p>
          </section>

          <section id="force">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Force Majeure</h2>
            <p>In unforeseen events (natural disasters, pandemics, etc.):</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The company may cancel bookings.</li>
              <li>Refunds processed per Clause 3.</li>
              <li>Guests unable to travel must inform promptly; cancellations apply as per policy.</li>
              <li>Ongoing trips during such events may incur extra charges.</li>
            </ul>
          </section>

          <section id="belongings">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Guest Belongings</h2>
            <p>The company is not liable for any lost, stolen, or misplaced personal items.</p>
          </section>

          <section id="liability">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Guest Liability</h2>
            <p>Guests are responsible for any loss or damage they cause. The company may seek compensation for any harm caused.</p>
          </section>

          <section id="indemnity">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Indemnity</h2>
            <p>The company is not liable for injuries or losses from third-party services (e.g. scuba diving, excursions) — even if recommended by us.</p>
          </section>

          <section id="privacy">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Privacy</h2>
            <p>We collect and securely manage guest data for service delivery. While efforts are made to protect it, the company isn’t liable for breaches despite precautions.</p>
          </section>

          <section id="dispute">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Dispute Resolution</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Disputes are first handled amicably within 7 days.</li>
              <li>Failing that, resolved via arbitration in Port Blair under ICC rules, or by jurisdictional courts in the Andaman & Nicobar Islands.</li>
            </ul>
          </section>

          <section id="consumer">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Consumer Protection Act Waiver</h2>
            <p>By booking, guests waive the right to file consumer complaints outside the Andaman & Nicobar Islands. Violations may incur ₹2,00,000 exemplary damages.</p>
          </section>

          <section id="rights">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Company Rights</h2>
            <p className="mb-2">We reserve the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Amend these terms at any time.</li>
              <li>Pursue legal action for defamatory content posted online.</li>
              <li>Withhold refunds in such cases.</li>
            </ul>
          </section>

          <section id="website">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Website & Operational Notes</h2>
            <p className="mb-2">We reserve the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Information may change without notice.</li>
              <li>Ferry schedules and activities are subject to weather.</li>
              <li>Itinerary adjustments were made in the guests’ interest.</li>
              <li>Guests are responsible for cross-border transaction fees from their bank.</li>
            </ul>
          </section>

          <section id="tieup">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Tie-Ups</h2>
            <p>Personal data may be shared with partnered services. The company isn’t liable for how third parties use this data.</p>
          </section>

          <section id="restrictions">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Usage Restrictions</h2>
            <p>Guests agree not to use the website for unlawful activities. Content is applicable only within the Andaman Islands.</p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default TermsContent;
