import React from 'react';
import { Send } from 'lucide-react';

interface ChatInterfaceProps {
  userResponse: string;
  setUserResponse: (response: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled: boolean;
}

export function ChatInterface({ userResponse, setUserResponse, onSubmit, disabled }: ChatInterfaceProps) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-xl p-4 mb-8">
      <div className="flex gap-4">
        <textarea
          value={userResponse}
          onChange={(e) => setUserResponse(e.target.value)}
          placeholder="How would you respond in this situation?"
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none h-24"
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={disabled || !userResponse.trim()}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </form>
  );
}