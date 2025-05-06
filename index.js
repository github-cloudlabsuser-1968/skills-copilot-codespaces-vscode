import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  // State for markdown text
  const [markdown, setMarkdown] = useState("type markdown here");

  // Handler for text area changes
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <h1>Markdown Editor</h1>
      {/* Textarea for markdown input */}
      <textarea
        style={{ width: '100%', height: '200px', marginBottom: '20px', fontSize: '16px' }}
        value={markdown}
        onChange={handleChange}
      />
      <h2>Preview</h2>
      {/* Live preview of markdown */}
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
function reverseAndCapitalize(sentence) {
  // Reverse the sentence
  const reversed = sentence.split('').reverse().join('');
  
  // Capitalize the first letter and make the rest lowercase
  const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
  
  return capitalized;
}

// Example usage
const input = "Hello world!";
const result = reverseAndCapitalize(input);
console.log(result); // Output: "!dlrow olleH"

const data = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ],
  [
    { name: 'Bob', age: 40 }
  ]
];

// Extract names
const names = data.flat().map(person => person.name);

console.log(names);
// Output: ['John', 'Jane', 'Bob']

