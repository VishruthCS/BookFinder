// src/components/SearchBar.jsx

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

// SearchBar component allows users to type a search term and submit it
function SearchBar({ onSearch }) {
  // Local state to hold the search input value
  const [searchTerm, setSearchTerm] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload when form is submitted
    if (searchTerm.trim()) {
      // Pass the trimmed search term to the parent component
      onSearch(searchTerm.trim());
    }
  };

  return (
    // Form container for search input and button
    <Form onSubmit={handleSubmit} className="mb-4">
      {/* Input group for aligning search box and button */}
      <InputGroup className="mx-auto" style={{ maxWidth: '600px' }}>
        {/* Search input field */}
        <Form.Control
          type="text"
          placeholder="Search by title, author, or genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update state on user input
        />
        {/* Submit button to trigger search */}
        <Button variant="primary" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
