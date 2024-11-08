import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Scenario } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onNewScenario: () => void;
}

export function ScenarioCard({ scenario, onNewScenario }: ScenarioCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transform hover:scale-[1.02] transition-transform">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{scenario.title}</h2>
          <p className="text-gray-600">{scenario.description}</p>
        </div>
        <button
          onClick={onNewScenario}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Get new scenario"
        >
          <RefreshCw className="w-5 h-5 text-indigo-600" />
        </button>
      </div>
      <div className="bg-indigo-50 rounded-lg p-4 mt-4">
        <p className="text-gray-700 italic">"{scenario.context}"</p>
      </div>
    </div>
  );
}