// src/components/BookCard.jsx

import React from 'react';
import Card from 'react-bootstrap/Card';

// BookCard component displays a single book's details
function BookCard({ book }) {
  // If the book has a cover ID, generate the cover image URL; otherwise set null
  const coverImageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  // Join author names into a string, or show "Unknown Author" if not available
  const authors = book.author_name ? book.author_name.join(', ') : 'Unknown Author';

  return (
    // Main card container
    <Card className="h-100 text-start">
      {/* Display book cover if available, else show a placeholder box */}
      {coverImageUrl ? (
        <Card.Img 
          variant="top" 
          src={coverImageUrl} 
          alt={`Cover of ${book.title}`} 
          style={{ height: '300px', objectFit: 'cover' }}
        />
      ) : (
        <div 
          className="d-flex align-items-center justify-content-center"
          style={{ height: '300px', backgroundColor: '#f8f9fa', color: '#6c757d' }}
        >
          No Cover
        </div>
      )}
      {/* Book title and author section */}
      <Card.Body>
        {/* Book title */}
        <Card.Title>{book.title}</Card.Title>
        {/* Book authors */}
        <Card.Text>
          <small className="text-muted">{authors}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
