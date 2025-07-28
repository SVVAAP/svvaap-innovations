import React from 'react';
import Navbar from '../components/NavBar';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the services provided by Svvaap Innovations ("we," "our," or "us"), 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                Svvaap Innovations provides web development, mobile app development, digital marketing, 
                and other technology services. We reserve the right to modify, suspend, or discontinue 
                any part of our services at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information for project requirements</li>
                <li>Review and provide feedback on deliverables within agreed timelines</li>
                <li>Make timely payments as per the agreed payment schedule</li>
                <li>Provide necessary access to systems, APIs, or resources required for project completion</li>
                <li>Maintain confidentiality of proprietary information shared during the project</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual project agreements. Late payments may result 
                in project delays or suspension of services. All fees are non-refundable unless otherwise 
                specified in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, clients will own the final deliverables. However, we retain the right 
                to use the work in our portfolio and for marketing purposes. Third-party components and 
                libraries remain under their respective licenses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality of client information and project details. We will not 
                disclose any confidential information to third parties without written consent, except as 
                required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Our liability is limited to the amount paid for the specific service. We are not liable 
                for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate the agreement with written notice. Upon termination, clients 
                will be responsible for payment of work completed up to the termination date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms are governed by the laws of India. Any disputes will be resolved in the 
                courts of Udupi, Karnataka.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Svvaap Innovations</strong></p>
                <p className="text-gray-700">Udupi, Karnataka - 576101</p>
                <p className="text-gray-700">Email: workwithsvvaap@gmail.com</p>
                <p className="text-gray-700">Phone: +91-7899535703</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 