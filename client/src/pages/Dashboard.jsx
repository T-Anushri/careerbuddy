// src/pages/Dashboard.jsx
import React from 'react';

export default function Dashboard() {
  const goals = ['Learn Python', 'Build a portfolio', 'Apply to 5 internships'];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Dashboard</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium mb-2">Your Goals</h3>
          <ul className="list-disc list-inside">
            {goals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium mb-2">Career Insights</h3>
          <p>📊 Weekly Progress: You completed 3/5 goals this week.</p>
          <p>📌 Tip: Keep your resume tailored for each role.</p>
        </div>
      </div>
    </div>
  );
}
