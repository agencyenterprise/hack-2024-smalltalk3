import React, { useState } from 'react';
import { MessageSquare, Send, RefreshCw, Award, ThumbsUp, ThumbsDown } from 'lucide-react';
import { scenarios } from './data/scenarios';
import { ScenarioCard } from './components/ScenarioCard';
import { ChatInterface } from './components/ChatInterface';
import { FeedbackModal } from './components/FeedbackModal';

function App() {
  const [currentScenario, setCurrentScenario] = useState(scenarios[0]);
  const [userResponse, setUserResponse] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({ cringeScore: 0, finesse: 0, tips: [] });

  const generateFeedback = (response: string) => {
    // Simplified feedback logic - in a real app, this would use AI
    const cringeScore = Math.floor(Math.random() * 10) + 1;
    const finesse = Math.floor(Math.random() * 10) + 1;
    const tips = [
      "Try asking open-ended questions",
      "Remember to maintain appropriate eye contact",
      "Keep your tone light and casual"
    ];
    
    setFeedback({ cringeScore, finesse, tips });
    setShowFeedback(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userResponse.trim()) {
      generateFeedback(userResponse);
    }
  };

  const getNewScenario = () => {
    const newIndex = Math.floor(Math.random() * scenarios.length);
    setCurrentScenario(scenarios[newIndex]);
    setUserResponse('');
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">Awkward AI Coach</h1>
          </div>
          <p className="text-gray-600 text-lg">Master the art of uncomfortable conversations</p>
        </header>

        <ScenarioCard
          scenario={currentScenario}
          onNewScenario={getNewScenario}
        />

        <ChatInterface
          userResponse={userResponse}
          setUserResponse={setUserResponse}
          onSubmit={handleSubmit}
          disabled={showFeedback}
        />

        {showFeedback && (
          <FeedbackModal
            feedback={feedback}
            onClose={() => {
              setShowFeedback(false);
              getNewScenario();
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;