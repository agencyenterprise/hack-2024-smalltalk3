import React from 'react';
import { ThumbsUp, ThumbsDown, Award } from 'lucide-react';

interface FeedbackModalProps {
  feedback: {
    cringeScore: number;
    finesse: number;
    tips: string[];
  };
  onClose: () => void;
}

export function FeedbackModal({ feedback, onClose }: FeedbackModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 transform animate-slideIn">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-indigo-600" />
          Feedback
        </h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ThumbsDown className="w-5 h-5 text-red-500" />
              <span className="text-gray-700">Cringe Score:</span>
            </div>
            <div className="text-lg font-semibold">
              {feedback.cringeScore}/10
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Social Finesse:</span>
            </div>
            <div className="text-lg font-semibold">
              {feedback.finesse}/10
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Tips for Improvement:</h4>
            <ul className="list-disc list-inside space-y-2">
              {feedback.tips.map((tip, index) => (
                <li key={index} className="text-gray-600">{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Try Another Scenario
        </button>
      </div>
    </div>
  );
}