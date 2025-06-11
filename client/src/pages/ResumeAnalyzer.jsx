import React from 'react';

const ResumeAnalyzer = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Resume Analyzer
      </h1>

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        <p className="text-gray-700 mb-4">
          Upload your resume and get insights on how to improve it for your desired role.
        </p>

        <div className="flex flex-col space-y-4">
          <input
            type="file"
            accept=".pdf"
            className="p-2 border rounded-lg"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
            Analyze Resume
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Insights:</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Highlight leadership roles more clearly.</li>
            <li>Tailor skills to your target job description.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
