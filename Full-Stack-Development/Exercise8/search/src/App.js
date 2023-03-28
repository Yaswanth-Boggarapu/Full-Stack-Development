import React, { useState } from "react";
//import './App.css'
const data = [
  { id: 1, name: "Your Lie in April" },
  { id: 2, name: "One Punch Man" },
  { id: 3, name: "One Piece" },
  { id: 4, name: "My Hero Academia" },
  { id: 5, name: "Parasyte" },
  { id: 6, name: "Overflow" },
  { id: 7, name: "Dragon Ball"},
  { id: 8, name: "That time I Got Reincarnated as Slime" },
  { id: 9, name: "Hunter X Hunter" },
  { id: 10, name: "Fairy Tail" }
];

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div class="input">
      <input
        type="text"
        placeholder="Enter the intput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default SearchFilter;
