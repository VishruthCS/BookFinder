// src/components/BookCard.jsx

import React from 'react';
import Card from 'react-bootstrap/Card';

function BookCard({ book }) {
  const coverImageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  const authors = book.author_name ? book.author_name.join(', ') : 'Unknown Author';

  return (
    <Card className="h-100 text-start">
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
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <small className="text-muted">{authors}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;