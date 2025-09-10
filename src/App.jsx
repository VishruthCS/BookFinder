import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ResultsGrid from './components/ResultsGrid';
import CategoryFilter from './components/CategoryFilter'; // Import the category filter component
import Container from 'react-bootstrap/Container';
import './App.css';

// Define the list of categories that will appear as filter buttons
const categories = ['Classic Literature', 'Science Fiction', 'Fantasy', 'Mystery', 'History', 'Romance'];

function App() {
  // State to hold fetched books
  const [books, setBooks] = useState([]);
  // State to show loading spinner while fetching data
  const [isLoading, setIsLoading] = useState(false);
  // State to store any error messages
  const [error, setError] = useState(null);
  // Track whether a search or fetch has been performed
  const [hasSearched, setHasSearched] = useState(true);
  // Track the currently active category (default = first category)
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // useEffect runs once when the app first loads
  // It fetches books for the default active category
  useEffect(() => {
    fetchBooks(activeCategory, 'subject');
  }, []); // Empty dependency array = run only once on mount

  // Generic function to fetch books from Open Library API
  // type can be "q" (text search) or "subject" (category search)
  const fetchBooks = async (query, type) => {
    setHasSearched(true);
    setIsLoading(true);   // Show loading state
    setError(null);       // Reset any previous errors
    setBooks([]);         // Clear old results

    // Choose the correct API parameter based on type
    const searchParam = type === 'subject' ? `subject=${query}` : `q=${query}`;
    const apiUrl = `https://openlibrary.org/search.json?${searchParam}&limit=20`;

    try {
      // Fetch data from Open Library API
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }
      // Parse the JSON response
      const data = await response.json();
      setBooks(data.docs); // Update state with book results
    } catch (err) {
      setError(err.message); // Store error message if fetch fails
    } finally {
      setIsLoading(false);   // Stop loading spinner
    }
  };

  // Handler for text search (from SearchBar component)
  const handleSearch = (searchTerm) => {
    setActiveCategory(''); // Clear the active category when doing a manual search
    fetchBooks(searchTerm, 'q'); // Fetch books by query
  };

  // Handler for selecting a category (from CategoryFilter component)
  const handleCategorySelect = (category) => {
    setActiveCategory(category);     // Update the active category
    fetchBooks(category, 'subject'); // Fetch books from that category
  };

  // JSX structure of the app
  return (
    <Container className="my-4 text-center">
      <header>
        <h1>📚 Book Finder</h1>
        <p className="lead"></p>
      </header>
      <main>
        {/* Search input box */}
        <SearchBar onSearch={handleSearch} />
        
        {/* Show category filter buttons only if a category is active */}
        {activeCategory && (
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />
        )}

        {/* Display results grid with loading, error, and no-results handling */}
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
