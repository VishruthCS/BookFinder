import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ResultsGrid from './components/ResultsGrid';
import CategoryFilter from './components/CategoryFilter'; // Import the new component
import Container from 'react-bootstrap/Container';
import './App.css';

// Define the categories we want to show
const categories = ['Classic Literature', 'Science Fiction', 'Fantasy', 'Mystery', 'History', 'Romance'];

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(true);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Keep track of the active category

  // Fetch books based on the active category when the app loads
  useEffect(() => {
    fetchBooks(activeCategory, 'subject');
  }, []); // Runs only once on mount

  // Generic function to fetch books by text query or subject
  const fetchBooks = async (query, type) => {
    setHasSearched(true);
    setIsLoading(true);
    setError(null);
    setBooks([]);

    // The API parameter changes based on the type of search
    const searchParam = type === 'subject' ? `subject=${query}` : `q=${query}`;
    const apiUrl = `https://openlibrary.org/search.json?${searchParam}&limit=20`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }
      const data = await response.json();
      setBooks(data.docs);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handler for the text-based search bar
  const handleSearch = (searchTerm) => {
    setActiveCategory(''); // De-select any active category
    fetchBooks(searchTerm, 'q');
  };

  // Handler for category button clicks
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    fetchBooks(category, 'subject');
  };

  return (
    <Container className="my-4 text-center">
      <header>
        <h1></h1>
        <p className="lead">📚 Book Finder for Alex</p>
      </header>
      <main>
        
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
        />
        <p>Most Famous Book in the {activeCategory} Category</p>
        <ResultsGrid 
            books={books} 
            isLoading={isLoading} 
            error={error} 
            hasSearched={hasSearched}
        />
      </main>
    </Container>
  );
}

export default App;