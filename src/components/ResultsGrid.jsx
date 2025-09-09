// src/components/ResultsGrid.jsx

import React from 'react';
import BookCard from './BookCard';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

// Receive the new hasSearched prop
function ResultsGrid({ books, isLoading, error, hasSearched }) {
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }
  
  // <-- This is the updated logic
  if (hasSearched && books.length === 0) {
    return <div className="feedback-message">No books found. Try a different search!</div>;
  }

  return (
    <div className="results-grid">
      {books.map((book) => (
        <BookCard key={book.key || book.cover_i} book={book} />
      ))}
    </div>
  );
}

export default ResultsGrid;