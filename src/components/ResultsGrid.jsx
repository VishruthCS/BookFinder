// src/components/ResultsGrid.jsx

import React from 'react';
import BookCard from './BookCard';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

// ResultsGrid component handles displaying search results
// Props:
// - books: Array of book objects
// - isLoading: Boolean to show loading spinner
// - error: Error message (if any)
// - hasSearched: Boolean to check if user has already searched
function ResultsGrid({ books, isLoading, error, hasSearched }) {
  // Show loading spinner while fetching data
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  // Show error alert if something went wrong
  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }
  
  // If user searched but no books were found, show feedback message
  if (hasSearched && books.length === 0) {
    return <div className="feedback-message">No books found. Try a different search!</div>;
  }

  // Render the list of books in a grid layout
  return (
    <div className="results-grid">
      {books.map((book) => (
        // Each book is displayed using BookCard
        <BookCard key={book.key || book.cover_i} book={book} />
      ))}
    </div>
  );
}

export default ResultsGrid;
