import React, { useState } from 'react';
import openai from 'openai';
import Navbar from './Navbar'
 // Import the CSS file

// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const api_key = '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';

const TextSummarizer = () => {
  const [textToSummarize, setTextToSummarize] = useState('');
  const [summary, setSummary] = useState('');

  const summarizeText = async () => {
    console.log('Summarize button clicked');
    try {
      const response = await openai.Completion.create({
        engine: 'davinci',
        prompt: `Summarize the following text:\n${textToSummarize}`,
        max_tokens: 200, // Adjust the max_tokens parameter for desired length
        api_key: api_key,
      });

      setSummary(response.choices[0].text.strip());
    } catch (error) {
      console.error('Error summarizing text:', error);
    }
  };

  return (
    <>
     <Navbar/>
    <div className="text-summarizer-container"> 
      <h2>Text Summarization</h2>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter text to summarize"
        className="text-input" 
        value={textToSummarize}
        onChange={(e) => setTextToSummarize(e.target.value)}
      ></textarea>
      <button onClick={summarizeText} className="summarize-button">
        Summarize
      </button>
      {summary && (
        <div className="summary-container"> {/* Apply the summary container class */}
          <h3 className="summary-heading">Summary:</h3> {/* Apply the heading class */}
          <p className="summary-text">{summary}</p> {/* Apply the text class */}
        </div>
      )}
    </div>
    
    </>
    
  );
};

export default TextSummarizer;
