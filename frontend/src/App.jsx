import { useState } from 'react';
import Navbar from './Navbar';  // Import the Navbar component

function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Loading state

  const handleSummarize = async () => {
    setIsLoading(true);  // Set loading to true
    try {
      const response = await fetch('http://localhost:5000/summarise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setSummary('An error occurred while summarizing the text.');
    } finally {
      setIsLoading(false);  // Set loading to false
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Add the Navbar component */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 border border-gray-300">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Text Summarizer</h1>
          <p className="text-lg text-center mb-6 text-gray-600">
            Unleash the power of brevity with our Text Summarizer. 
            Input your text and get a concise summary that captures the essence of your content.
          </p>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out resize-none"
            rows="8"
            placeholder="Enter text here..."
          />
          <button
            onClick={handleSummarize}
            className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
            disabled={isLoading}  // Disable button when loading
          >
            {isLoading ? 'Summarizing...' : 'Summarize'}
          </button>
          {isLoading && (
            <div className="mt-6 flex justify-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            </div>
          )}
          {summary && (
            <div className="mt-6 p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Summary:</h2>
              <p className="text-gray-600 text-center">{summary}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
