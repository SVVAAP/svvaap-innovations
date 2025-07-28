import React from 'react';
import Navbar from '../components/NavBar';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 mb-4">
                At Svvaap Innovations, we are committed to delivering high-quality services and ensuring 
                client satisfaction. This refund policy outlines the circumstances under which refunds 
                may be provided and the process for requesting them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. General Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                Our refund policy is designed to be fair and transparent. We understand that circumstances 
                may arise where a refund is necessary, and we will evaluate each request on a case-by-case basis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligible for Refund</h2>
              <p className="text-gray-700 mb-4">
                Refunds may be considered in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Service Cancellation:</strong> If you cancel a service before work begins</li>
                <li><strong>Quality Issues:</strong> If the delivered work does not meet agreed specifications</li>
                <li><strong>Technical Problems:</strong> If we are unable to complete the project due to technical limitations</li>
                <li><strong>Communication Failure:</strong> If we fail to respond to your inquiries for an extended period</li>
                <li><strong>Project Abandonment:</strong> If we are unable to continue the project due to our own limitations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Not Eligible for Refund</h2>
              <p className="text-gray-700 mb-4">
                Refunds will not be provided in the following cases:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Work has been completed and delivered as per agreement</li>
                <li>Client changes requirements after project completion</li>
                <li>Client fails to provide necessary information or feedback within agreed timelines</li>
                <li>Client cancels the project after significant work has been completed</li>
                <li>Client violates the terms of service or agreement</li>
                <li>Third-party service costs (hosting, domain, etc.) that have been paid</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Process</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Request Submission</h3>
                  <p className="text-gray-700">
                    Submit a refund request via email to workwithsvvaap@gmail.com with the following information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mt-2">
                    <li>Project name and reference number</li>
                    <li>Reason for refund request</li>
                    <li>Supporting documentation or evidence</li>
                    <li>Preferred refund method</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Review Process</h3>
                  <p className="text-gray-700">
                    We will review your request within 5-7 business days and may request additional information 
                    if needed. We will evaluate the request based on our refund policy and project circumstances.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Refund Decision</h3>
                  <p className="text-gray-700">
                    You will receive a written response regarding the refund decision. If approved, we will 
                    process the refund within 10-15 business days.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Refund Amount</h2>
              <p className="text-gray-700 mb-4">
                The refund amount will be determined based on:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Amount of work completed</li>
                <li>Time and resources invested</li>
                <li>Reason for refund</li>
                <li>Terms outlined in the original agreement</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Note:</strong> Processing fees and third-party costs may be deducted from the refund amount.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Refund Methods</h2>
              <p className="text-gray-700 mb-4">
                Refunds will be processed using the original payment method whenever possible:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Bank transfer (for Indian clients)</li>
                <li>Online payment gateways (PayPal, Stripe, etc.)</li>
                <li>Cheque (for specific cases)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Timeline</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Request Review:</strong> 5-7 business days</li>
                  <li><strong>Refund Processing:</strong> 10-15 business days after approval</li>
                  <li><strong>Bank Processing:</strong> 3-5 business days (may vary by bank)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                If you disagree with our refund decision, you may:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Request a review with additional documentation</li>
                <li>Escalate the matter to our management team</li>
                <li>Seek mediation or arbitration as outlined in our terms of service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For refund requests or questions about this policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Svvaap Innovations</strong></p>
                <p className="text-gray-700">Udupi, Karnataka - 576101</p>
                <p className="text-gray-700">Email: workwithsvvaap@gmail.com</p>
                <p className="text-gray-700">Phone: +91-7899535703</p>
                <p className="text-gray-700 mt-2">
                  <strong>Subject Line:</strong> Refund Request - [Project Name]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Policy Updates</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to update this refund policy at any time. Changes will be effective 
                immediately upon posting on our website. Continued use of our services after changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 