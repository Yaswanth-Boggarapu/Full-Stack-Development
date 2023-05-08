import React, { useState } from 'react';

function App() {
  const [marks, setMarks] = useState([]);
  const [newMark, setNewMark] = useState({ subject: '', score: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMark((prevMark) => ({ ...prevMark, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMarks([...marks, newMark]);
    setNewMark({ subject: '', score: '' });
  };

  return (
    <div>
      <h2>Enter Mark Details:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={newMark.subject}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Score:
          <input
            type="text"
            name="score"
            value={newMark.score}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Mark</button>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark, index) => (
            <tr key={index}>
              <td>{mark.subject}</td>
              <td>{mark.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
